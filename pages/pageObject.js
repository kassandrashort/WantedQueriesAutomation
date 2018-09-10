module.exports={
    url: 'localhost:3000/#/enter',
    elements: {
        title: 'h1[class="titleBar"]',
        
        menu: 'div[class="bm-burger-button"]',
        home: 'p[name="homeOption"]',
        enterWanted: 'p[name="enterOption"]',
        modifyWanted: 'p[name="modifyOption"]',
        cancelWanted: 'p[name="cancelOption"]',
        exitMenu: 'div[class="bm-cross-button"]',
        errorList: 'ul[id="errorList"]',

        save: 'button[id="saveBtn"]',
        clear: 'button[id="clearBtn"]',

        warrantId: 'input[name="widInput"]',
        header: 'input[name="hdrInput"]',
        mke: 'input[name="mkeInput"]',
        oai: 'input[name="oriInput"]',
        name: 'input[name="namInput"]',

            sexNone: 'select[name="sexInput"] option[value=""]',
            sexF: 'select[name="sexInput"] option[value="F"]',
            sexM: 'select[name="sexInput"] option[value="M"]',
            sexO: 'select[name="sexInput"] option[value="O"]',
            sexU: 'select[name="sexInput"] option[value="U"]',

            raceNone: 'select[name="racInput"] option[value=""]',
            raceA: 'select[name="racInput"] option[value="A"]',
            raceB: 'select[name="racInput"] option[value="B"]',
            raceH: 'select[name="racInput"] option[value="H"]',
            raceI: 'select[name="racInput"] option[value="I"]',
            raceW: 'select[name="racInput"] option[value="W"]',
            raceU: 'select[name="racInput"] option[value="U"]',


        height: 'input[name="hgtInput"]',
        weight: 'input[name="wgtInput"]',
        hair: 'input[name="haiInput"]',
        offense: 'input[name="offInput"]',
        warrantDate: 'input[name="dowInput"]',
        dl: 'input[name="olnInput"]',
        dlState: 'input[name="olsInput"]',
        dlDate: 'input[name="oldInput"]',
        lp: 'input[name="licInput"]',
        lpState: 'input[name="lisInput"]',
        lpDate: 'input[name="lidInput"]',

        cancelReason: 'input[name="resInput"]',
        cancelDate: 'input[name="datInput"]',
    
    }
}