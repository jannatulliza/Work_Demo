/// <reference types="cypress" />

const faker = require("faker");
const promisify = require("cypress-promise");

const {
  randomEmail,
  city,
  address,
  lastName,
  phNumberUS,
} = require("../helpers/data.js");

describe("sign up", function () {
  beforeEach(function () {
    cy.fixture("auth.json").then(function (auth) {
      this.auth = auth;
    });

    cy.fixture("url.json").then(function (url) {
      this.url = url;
    });
    cy.fixture("data.json").then(function (data) {
      this.data = data;
    });
  });

  it("visit URL", function () {
    cy.visit(this.url.DEV.urltwo, {
      auth: {
        username: this.auth.dev.username,
        password: this.auth.dev.password,
      },
    });
  });

  it("Sign UP", async function () {
    cy.get("#email").clear().type(randomEmail);

    cy.get("[type=submit]").click();

    cy.get("#mui-component-select-country").click();
    cy.get(this.data.Country).click();

    const Country = await promisify(
      cy.get("#mui-component-select-country").then((el) => el.text())
    );
    cy.log(Country);

    cy.get('input[name="firstName"]').type("Liza");

    cy.get('input[name="lastName"]').type(lastName);

    cy.get("button[class='MuiButtonBase-root MuiIconButton-root']").dblclick();

    cy.get(this.data.dobselectyear).click();

    cy.get(this.data.dobyear).click();
    cy.contains("OK").click();

    cy.get('input[name="address1"]').type(address);

    cy.get('input[name="city"]').type(city);

    cy.get('input[name="postCode"]').type(this.data.postcode);
    cy.get(".selected-flag").click();

    cy.get('input[type="tel"]').type(phNumberUS);

    cy.get('input[name="password"]').type("Tt123#123#").dblclick();
    cy.get('input[name="confirmPassword"]').type("Tt123#123#").dblclick();

    cy.get('[type="checkbox"]').check();

    if (Country == "United States of America") {
      cy.get('input[name="ssn"]').type("405-95-0000");

      cy.contains("Select").click();
      cy.get("[data-value='Alaska']").click();
    }

    cy.contains("Continue").click();
  });
});
