describe('about component', function () {
	it('should be visible', function () {
		browser.get('/about');
		expect(element(by.css('h1')).getText()).toEqual("About");
	});
});