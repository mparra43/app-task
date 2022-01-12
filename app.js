require('colors')
const { inquirerMenu,
    pause,
    readInput,
    listOfTasksToDelete,
    confirm,
    showChecklist,
} = require('./helpers/inquirer');
const { saveDB, readDB } = require('./helpers/saveFile');
const Tasks = require('./models/tasks');
console.clear();


const main = async () => {

    let opt = '';
    const tasks = new Tasks();

    const tasksDB = readDB()

    if (tasksDB) {
        tasks.loadTasksFromArray(tasksDB);
    }
    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const description = await readInput();
                tasks.createTask(description);
                break;
            case '2':
                tasks.showList();
                break;
            case '3':
                tasks.showCompletedTasks();
                break;
            case '4':
                tasks.showPendingTasks();
                break;
            case '5': // completado | pendiente
                const ids = await showChecklist(tasks.listArray);
                tasks.toggle(ids);
                break;

            case '6': // Borrar
                const id = await listOfTasksToDelete(tasks.listArray);
                if (id !== 0) {
                    const confirmation = await confirm('Are you sure to delete the task ?');
                    if (confirmation) {
                        tasks.deleteTask(id);
                        console.log('¡the task was eliminated!');
                    }
                }
                break;

            default:
                break;
        }

        saveDB(tasks.listArray);
        await pause();
    } while (opt !== '0');

}

main();