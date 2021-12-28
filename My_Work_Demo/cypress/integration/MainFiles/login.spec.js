/// <reference types="cypress" />

const { generateOtp } = require("../helpers/otp.js")
const username = 'liza@grr.la'
const password = 'sample password'


describe('Testing sample site login page', function () {
       
    it('visit URL', function () {
        cy.visit("https://urlone/", {

            auth: {
                username: 'devs',
                password: 'super!power'
            }



        })


    })

    it('verify title', function () {

        cy.title().should('eq', 'sample site')
    })

    it('login field clear', function () {


        cy.contains('type')

        cy.get('#email').clear()

    })

    it('login verify', function () {

        cy.get('#email').type(username)
            .should('have.value', username)

        cy.get('[type=submit]').click()
        expect(username, 'username was set').to.be.a('string').and.not.be.empty
        expect(username).to.equal('liza@grr.la')

    })

    it('URL verify', function () {

        cy.url().should('include', '/login')
    })


    it('Password field clear', function () {


        cy.get('#password').clear()

    })

    it('Enter Password', function () {

        cy.get('#password').type(password)

        expect(password, 'password was set').to.be.a('string').and.not.be.empty
        expect(password).to.be.a('string')
        expect(password).to.not.be.empty

    })

    it('click continue button', function () {

        cy.get('[type=submit]').click()
    })


    it('2FA enter', function () {

        cy.get('#code').type(generateOtp('sample site', username, "NTGVZMA3JTRYUEZZTMCZL2GZ7I"))
        cy.contains('Continue').click()

    })


});



