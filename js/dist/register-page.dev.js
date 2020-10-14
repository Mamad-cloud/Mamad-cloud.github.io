"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Address = function Address(city, state, zip) {
  _classCallCheck(this, Address);

  this.city = city;
  this.state = state;
  this.zip = zip;
};

var RadioBloger = function RadioBloger(fname, lname, username, address) {
  _classCallCheck(this, RadioBloger);

  this.fname = fname;
  this.lname = lname;
  this.username = username;
  this.address = new Address(address.city, address.state, address.zip);
};

var radioblogers = new Array();

function registerRadioBloger(radiobloger) {
  radioblogers.push(radiobloger);
  console.log(radioblogers);
}