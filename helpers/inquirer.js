const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'option',
        message: '¿what do you want to do today?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Create task`
            },
            {
                value: '2',
                name: `${'2.'.green} List task`
            },
            {
                value: '3',
                name: `${'3.'.green} List completed task`
            },
            {
                value: '4',
                name: `${'4.'.green} List pending task`
            },
            {
                value: '5',
                name: `${'5.'.green} Complete task`
            },
            {
                value: '6',
                name: `${'6.'.green} Delete task`
            },
            {
                value: '0',
                name: `${'0.'.green} Exit`
            },

        ]
    }
];



const inquirerMenu = async () => {
    console.clear();
    console.log('=========================='.green);
    console.log('  Seleccione una opción'.green);
    console.log('==========================\n'.green);

    const { option } = await inquirer.prompt(questions);

   
    return option;
}

const pause = async () => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.green} para continuar`
        }
    ];

    console.log('\n');
    await inquirer.prompt(question);
};

module.exports = {
    inquirerMenu, 
    pause ,
}