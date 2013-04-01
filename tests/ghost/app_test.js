casper
.start(casper.cli.get('baseUrl'))
.then(function () {
	this.test.assertTitle('Gougel', 'Make sure the title is set');
	this.test.assertExists('.balance', 'Check if the balance is set');
	this.fill('form', {
		q: 'foo'
	}, true);
})
.then(function () {
	this.test.assertUrlMatch(/www.google.com/, 'Forward the query to Google');
})
.run(function () {
	this.test.done();
});
