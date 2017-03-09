describe('home component', function () {
	it('should be visible', function () {
		browser.get('/home');
		expect(element(by.css('h1')).getText()).toEqual("Hello World!");
	});
});