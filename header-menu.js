//Header menu redirect

var casper = require('casper').create();
var links;

function getLinks() {
  var links = document.querySelectorAll('ul.head-menu li a');
  return Array.prototype.map.call(links, function (e) {
      return e.getAttribute('href')
  });
}

casper.start('http://www.endlessos.com/pt-br');

casper.then(function () {
  links = this.evaluate(getLinks);
});

casper.run(function () {
    for(var i in links) {
        console.log([i] + "º link goes to ->  " + links[i] + " .");
    }
    casper.done();
});









































