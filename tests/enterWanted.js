//PAGES
var pageObject

//FUNCTIONS
const testData = require("./testData")

let invalidWarrant = (page, warrantInfo) => {
    page
        .setValue('@header', warrantInfo.header)
        .setValue('@mke', warrantInfo.mke)
        .setValue('@oai', warrantInfo.oai)
        .setValue('@name', warrantInfo.name)
        .click(warrantInfo.sex)
        .click(warrantInfo.race)
        .setValue('@height', warrantInfo.height)
        .setValue('@weight', warrantInfo.weight)
        .setValue('@hair', warrantInfo.hair)
        .setValue('@offense', warrantInfo.offense)
        .setValue('@warrantDate', warrantInfo.warrantDate)
        .setValue('@dl', warrantInfo.dl)
        .setValue('@dlState', warrantInfo.dlState)
        .setValue('@dlDate', warrantInfo.dlDate)
        .setValue('@lp', warrantInfo.lp)
        .setValue('@lpState', warrantInfo.lpState)
        .setValue('@lpDate', warrantInfo.lpDate)
        .click('@save')
}
let validWarrant = (page, warrantInfo) => {
    page
        .setValue('@header', warrantInfo.header)
        .setValue('@mke', warrantInfo.mke)
        .setValue('@oai', warrantInfo.oai)
        .setValue('@name', warrantInfo.name)
        .click(warrantInfo.sex)
        .click(warrantInfo.race)
        .setValue('@height', warrantInfo.height)
        .setValue('@weight', warrantInfo.weight)
        .setValue('@hair', warrantInfo.hair)
        .setValue('@offense', warrantInfo.offense)
        .setValue('@warrantDate', warrantInfo.warrantDate)
        .setValue('@dl', warrantInfo.dl)
        .setValue('@dlState', warrantInfo.dlState)
        .setValue('@dlDate', warrantInfo.dlDate)
        .setValue('@lp', warrantInfo.lp)
        .setValue('@lpState', warrantInfo.lpState)
        .setValue('@lpDate', warrantInfo.lpDate)
        .click('@save')
}


//MODULE
module.exports = {
    beforeEach: browser => {
        pageObject = browser.page.pageObject()
        pageObject.navigate()
        // .api.pause()
    },
    after: browser => {
            browser.end()
    },
    //https://dmutah.atlassian.net/browse/Q7K-76
    //https://docs.google.com/spreadsheets/d/1Mj81eKHPpMCF_aOQvyoTIWyU1aXqaRhVC1Y-D2CKsFg/edit#gid=0
    'Min Boundary 1': browser => {
        invalidWarrant(pageObject,testData.transactions.minBoundary1.fields)
        pageObject.expect.element("@errorList").text.to.contain('The "Header" field should be between 9 and 19 characters long.')
        pageObject.expect.element("@errorList").text.to.contain('The "MKE" field should be between 2 and 4 characters long.')
        pageObject.expect.element("@errorList").text.to.contain('The "Originating Agency Identifier" field should be 9 characters long.')
        pageObject.expect.element("@errorList").text.to.contain('The "Name" field should be between 3 and 30 characters long.')
        pageObject.expect.element("@errorList").text.to.contain('The field named "Sex" must be included.')
        pageObject.expect.element("@errorList").text.to.contain('The field named "Race / Ethnicity" must be included.')
        pageObject.expect.element("@errorList").text.to.contain('The "Height" field should be 3 characters long.')
        pageObject.expect.element("@errorList").text.to.contain('The field named "Weight" must be included.')
        pageObject.expect.element("@errorList").text.to.contain('The "Hair" field should be between 3 and 10 characters long.')
        pageObject.expect.element("@errorList").text.to.contain('The "Offense" field should be between 5 and 15 characters long.')
        pageObject.expect.element("@errorList").text.to.contain('The "Date of Warrant/Violation" field must be entered as a date, MM/DD/YYYY, no earlier than 01/01/1900 and no later than today\'s date.')
        pageObject.expect.element("@errorList").text.to.contain('The "DL Expiration Date" field must be entered as a date, MM/DD/YYYY, no earlier than 01/01/1900 and no later than today\'s date.')
        pageObject.expect.element("@errorList").text.to.contain('The "License Plate" field should be between 5 and 8 characters long.')
        pageObject.expect.element("@errorList").text.to.contain('The "License State" field should be 2 characters long.')
        pageObject.expect.element("@errorList").text.to.contain('The "License Expiration Date" field must be entered as a date, MM/DD/YYYY, no earlier than 01/01/1900 and no later than today\'s date.')
        pageObject.expect.element("@errorList").text.to.contain('If one of the following are present, all must be present: Drivers License, DL State, DL Expiration Date.')
    }

}
