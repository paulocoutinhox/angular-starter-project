describe('about component', function () {
	it('should be visible', function () {
		browser.get('http://localhost:9000/about');		
		expect(element(by.css('h1')).getText()).toEqual("About");
	});
});