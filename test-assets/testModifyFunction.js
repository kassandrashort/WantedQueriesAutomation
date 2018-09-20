//http://localhost:3001/#/modify

module.exports = (pageObject, warrantInfo) => {
    pageObject
        .setValue('@warrantId', warrantInfo.warrantId)
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
        warrantInfo.boundaryAnalysis.forEach(result => {
            
        })
        .expect.element('@errorMessage').text.to.equal('There was a problem fetching the weather!').before(5000)
}