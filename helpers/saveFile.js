const fs = require('fs');

const file = './db/data.json';

const saveDB = ( data ) => {
    fs.writeFileSync( file, JSON.stringify(data) );
}

const readDB = () => {
    
    if( !fs.existsSync(file) ){
        return null;
    }
    
    const registry = fs.readFileSync(file, { encoding: 'utf-8' });
    const data = JSON.parse( registry );

    // console.log(data);

    return data;
}



module.exports = {
    saveDB,
    readDB
}