 const {v4 : uudiv4} =  require('uuid')

class Task {
    id = '';
    description = '';
    state = '';

    constructor(description) {
        this.id= uudiv4();
        this.description = description;
        this.state = 'Pending';
    }
}

module.exports = Task;