//PAGES
var pageObject

//FUNCTIONS
const testData = require("../test-assets/testData")
const testEnterFunction = require("../test-assets/testEnterFunction")

//MODULE
module.exports = {
    beforeEach: browser => {
        pageObject = browser.page.pageObject()
        pageObject.navigate()
        .waitForElementVisible('@title', 5000)
        // .api.pause()
    },
    after: browser => {
        browser.end()
    },
    //https://dmutah.atlassian.net/browse/Q7K-76
    //https://docs.google.com/spreadsheets/d/1Mj81eKHPpMCF_aOQvyoTIWyU1aXqaRhVC1Y-D2CKsFg/edit#gid=0
    'Boundary Value Testing': browser => {
        testData.boundaryAnalysis.forEach(boundary => {
            testEnterFunction(pageObject, boundary)
        })
        
    },

}
