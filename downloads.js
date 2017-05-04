// (╯°□°）╯ Get urls for donwload
var casper = require('casper').create();
var downloads;
var text;

function getDownloads() {
  downloads = document.querySelectorAll('.tabs__select option');
  return Array.prototype.map.call(downloads, function (e) {
      return e.getAttribute('value');
  });
}

function getText() {
    var txt = document.querySelectorAll('.tabs__select option');
    return Array.prototype.map.call(txt, function(t) { return t.textContent; });
}

casper.start('https://endlessos.com/pt-br/download/');

casper.then(function () {
  downloads = this.evaluate(getDownloads);
  text 			= this.evaluate(getText);
});

casper.run(function () {
  for(var i in downloads) {
  	if( i > 0) {
  		console.log( text[i] + "   ==>  " + downloads[i] );
  	}
  }
  casper.done();
});


