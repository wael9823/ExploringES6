let myObj = {
    data: 'Awesome',
    displayIt: () => {this.data},
    surprise(){  
        let displayItAgain = () => this.data;
        return displayItAgain();
    }
}

module.exports = myObj;