module.exports = (pageObject, warrantInfo) => {
    pageObject.api.refresh()
    pageObject    
        .setValue('@header', warrantInfo.fields.header)
        .setValue('@mke', warrantInfo.fields.mke)
        .setValue('@oai', warrantInfo.fields.oai)
        .setValue('@name', warrantInfo.fields.name)
        .click(warrantInfo.fields.sex)
        .click(warrantInfo.fields.race)
        .setValue('@height', warrantInfo.fields.height)
        .setValue('@weight', warrantInfo.fields.weight)
        .setValue('@hair', warrantInfo.fields.hair)
        .setValue('@offense', warrantInfo.fields.offense)
        .setValue('@warrantDate', warrantInfo.fields.warrantDate)
        .setValue('@dl', warrantInfo.fields.dl)
        .setValue('@dlState', warrantInfo.fields.dlState)
        .setValue('@dlDate', warrantInfo.fields.dlDate)
        .setValue('@lp', warrantInfo.fields.lp)
        .setValue('@lpState', warrantInfo.fields.lpState)
        .setValue('@lpDate', warrantInfo.fields.lpDate)
        .click('@save')

        x = 1

        pageObject.getText('@queryTitle', function(result) 
        {
            if (result.value.includes('Assembled Query:')) {
                console.log("Success")
            }
            else {
                Object.entries(warrantInfo.results).forEach(([key, value]) => {
                    pageObject.api.useXpath()
                    pageObject
                    .expect.element('(//li)['+ x + ']').text.to.contain(value)
                    pageObject.api.useCss()
                    x = x + 1
                })
                x = 1
                console.log('There were Errors.')
            }
        }) 
        

}