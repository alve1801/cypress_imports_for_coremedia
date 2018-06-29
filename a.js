var test_module = require('./b.js');

function test(site){
	describe('xkcd', function(){it('', function(){
		cy.visit('https://xkcd.com')
		.get('#comic')
		.screenshot('the latest')

		test_module.greet();

		})
	})
}


test()
