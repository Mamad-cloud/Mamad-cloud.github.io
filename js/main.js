class Subscriber{
    constructor(name, email){

        this.id = Math.floor(Math.random()*10**8);
        this.name = name;
        this.email = email;
    }
}

var subList = Array();

function subscribeUser(name, email) {
    var subscr = new Subscriber(name, email);
    subList.push(subscr);
    console.log(subList);
}