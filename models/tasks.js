const Task = require("./task");
require('colors');


class Tasks {

    _list = {
        'abc': 123
    };

    get listArray() {
        const list = [];
        Object.keys(this._list).forEach(key => {
            const task = this._list[key];
            list.push(task);
        });

        return list;
    }

    constructor() {
        this._list = {}
    }

    // metodos 

    deleteTask( id = '' ) {

        if ( this._list[id] ) {
            delete this._list[id];
        }

    }



    loadTasksFromArray(tasks = []) {

        tasks.forEach(task => {
            this._list[task.id] = task;
        });
    }

    createTask(description = '') {
        const task = new Task(description);
        this._list[task.id] = task;
    }



    showList() {

        this.listArray.forEach((task, index) =>

            task.state === 'Pending' ?

                console.log(`${index + 1}.`.green + `${task.description} :` + ` ${task.state}`.red) :
                console.log(`${index + 1}.`.green + `${task.description} :` + ` ${task.state}`.green)
        );

    }

    showCompletedTasks() {
        this.listArray.filter((task) => task.state === 'Completed').forEach((task, index) =>
            console.log(`${index + 1}.`.green + `${task.description} :` + ` ${task.state}`.green)
        );
    }

    showPendingTasks() {
        this.listArray.filter((task) => task.state === 'Pending').forEach((task, index) =>
            console.log(`${index + 1}.`.green + `${task.description} :` + ` ${task.state}`.red)
        );
    }


    toggle( ids = [] ) {

       
        ids.forEach( id => {

            const task = this._list[id];

            console.log(task);
            if ( task.state === 'Pending') {
                task.state = 'Completed';
            }

        });

        this.listArray.forEach( task => {

            if ( !ids.includes(task.id) ) {
                this._list[task.id].state = 'Pending';
            }

        });


    }


}

module.exports = Tasks;