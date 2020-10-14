class Address
{
    constructor(city, state, zip)
    {
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
}


class RadioBloger
{
    constructor(fname, lname, username, address)
    {
        this.fname = fname;
        this.lname = lname;
        this.username = username;
        this.address = new Address(address.city, address.state, address.zip);

    }
}

var radioblogers = new Array();

function registerRadioBloger(radiobloger)
{
    radioblogers.push(radiobloger);
    console.log(radioblogers);
}