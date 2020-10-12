"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Subscriber = function Subscriber(name, email) {
  _classCallCheck(this, Subscriber);

  this.id = Math.floor(Math.random() * Math.pow(10, 8));
  this.name = name;
  this.email = email;
};

var subList = Array();

function subscribeUser(name, email) {
  var subscr = new Subscriber(name, email);
  subList.push(subscr);
  console.log(subList);
}