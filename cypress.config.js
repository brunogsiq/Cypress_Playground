const { defineConfig } = require("cypress");

module.exports = defineConfig(
{
    viewportWidth: 1000,
    viewportHeight: 660,
    video: true,
    chromeWebSecurity: false,
    reporter: "mochawesome",
    reporterOptions: {
        reportDir: 'cypress/report',
        overwrite: true,
        html: true,
        json: false,
        timestamp: 'dd-mm-yyyy_HH-MM-ss'
    },
    e2e: {
        defaultCommandTimeout: 9000,
        experimentalRunAllSpecs: true,
        hideXHRInCommandLog: true,
        baseUrl: "https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html",
        fixturesFolder: "false",
        //Aqui ficarão todos os meus testes:
        setupNodeEvents(on, config) {
          // implement node event listeners here
        },
    },
});