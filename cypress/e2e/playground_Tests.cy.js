/// <reference types="cypress" /> 

describe('Cypress Playground.', () => 
{
	context("First Lessson.", () =>
	{
		beforeEach(() =>
		{
			cy.visit("https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html");
		});

		//.check() and .uncheck()

			cy.get('input[type="checkbox"]')
				.check().
			cy.get('input[type="checkbox"]')
				.uncheck()

			cy.get('input[type="radio"]')
				.check()
			cy.get(input[type="radio"])
				.check()

		//.select()
		
			cy.get('select')
				.select('Basic').
			cy.get('select')
				.select('standard').
			cy.get('select')
				.select(3)
			cy.get('select[multiple]')
				.select(['apple', 'cherry'])

		//.selectFile()
		
			cy.get('input[type="file"]')
				.selectFile('cypress/fixtures/example.json')

		//cy.intercept(...).as('alias') and cy.wait('@alias')

			cy.intercept('GET', 'https://api.example.com/todos/1').as('getTodo')
			cy.contains('button', 'Get TODO')
				.click()
			cy.wait('@getTodo')

			cy.intercept('GET', 'https://api.example.com/todos/1', { fixture: 'todo' }).as('getTodo')
			cy.contains('button', 'Get TODO')
				.click()
			cy.wait('@getTodo')

		//cy.intercept()

			cy.intercept('GET', 'https://api.example.com/todos/1', { statusCode: 500 }).as('serverFailure').

			cy.wait('@serverFailure')
				.its('response.statusCode')
				.should('be.equal', 500)
			cy.contains('.error', 'Oops, something went wrong.').should('be.visible').

			cy.intercept('GET', 'https://api.example.com/todos/1', { forceNetworkError: true }).as('networkError').
			cy.wait('@networkError').
			cy.contains('.error', "Oops, it seems you don't have internet connection.")
				.should('be.visible').

		//cy.request

			cy.request('GET', 'https://api.example.com/todos/1')
				.its('status')
				.should('be.equal', 200)

		//.invoke().trigger()
		
			cy.get('input[type="range"]')
				.invoke('val', 5)
				.trigger('change')

			Cypress._.times(10, index =>{
				it(`Select ${index} out of 10`, () =>{
					cy.get("#level")
						.invoke("val", index + 1)
						.trigger("change");

					cy.contains("p", `You´re on level: ${index + 1}`)
						.should("be.visible");
				})
			})

		//.type('yyyy-mm-dd').blur()

			cy.get('input[type="date"]')
				.type('2024-01-16')
				.blur()

		//Cypress.env('secret')
		
			cy.get('input[type="password"]')
				.type(Cypress.env('password'))

			cy.get('input[type="password"]')
			.type(Cypress.env('password'), { log: false })
			.should('have.length', n)

		//cy.clock()

			beforeEach(() => 
			{
				const now = new Date(2024, 3, 15) // month is 0-indexed
				cy.clock(now)
				cy.visit('https://example.com')
			})

			cy.contains('p', '2024-04-15').should('be.visible').

			cy.get('#some-element')
			.then(element => {
				const value = element[0].innerText
				cy.get('input[type="text"]').type(value)
			})

		//cy.readFile()
			cy.contains('a', 'Download a text file').click()
			cy.readFile('cypress/downloads/example.txt')
				.should('be.equal', 'This is an example text file.')
	});
});