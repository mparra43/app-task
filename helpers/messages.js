require('colors')
const showMenu =()=>{
    console.clear();
    console.log('hola lore'.green);
    console.log('Selecciona una opción'.green);

    console.log(`1. crear una tarea`)
    console.log(`2. listar tarea`)
    console.log(`3. tareas completadas `)
    console.log(`4. tareas pendientes`)
    console.log(`5. completar tareas`)
    console.log(`6. borrar tarea`)
    console.log(`0. salir \n `)

  // recibir informacion del usuario
}

module.exports = {
    showMenu,
}