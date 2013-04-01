/*global $:false, Handlebars:false, currencyHelper:false */

Handlebars.registerHelper('$', currencyHelper);

var template = Handlebars.compile('{{{$ amount symbol="S$"}}}');

$('.balance').html(template({
	amount: Math.random() * 1000
}).string);