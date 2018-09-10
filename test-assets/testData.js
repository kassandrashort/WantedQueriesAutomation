module.exports = {
    // to call this in your test file, testData.transactions
    transactions: {
        // to call this in your test file, testData.transactions.minBoundary1
        //https://docs.google.com/spreadsheets/d/1Mj81eKHPpMCF_aOQvyoTIWyU1aXqaRhVC1Y-D2CKsFg/edit#gid=0
        minBoundary1: {
            fields: {
                header: 'qwertyui',
                mke: '1',
                oai: 'qwertyui',
                name: 'qw',
                height: '12',
                weight: '',
                sex: '@sexNone',
                race: '@raceNone',
                hair: 'qw',
                offense: 'qwer',
                warrantDate: '12311899',
                dl: '',
                dlState: '',
                dlDate: '12311899',
                lp: 'wert',
                lpState: '1',
                lpDate: '12311899',
            },
            results: {
                header: 'The "Header" field should be between 9 and 19 characters long.',
                mke: 'The "MKE" field should be between 2 and 4 characters long.',
                oai: 'The "Originating Agency Identifier" field should be 9 characters long.',
                name: 'The "Name" field should be between 3 and 30 characters long.',
                sex: 'The field named "Sex" must be included.',
                race: 'The field named "Race / Ethnicity" must be included.',
                height: 'The "Height" field should be 3 characters long.',
                weight: 'The field named "Weight" must be included.',
                hair: 'The "Hair" field should be between 3 and 10 characters long.',
                offense: 'The "Offense" field should be between 5 and 15 characters long.',
                warrantDate: 'The "Date of Warrant/Violation" field must be entered as a date, MM/DD/YYYY, no earlier than 01/01/1900 and no later than today\'s date.',
                dlDate: 'The "DL Expiration Date" field must be entered as a date, MM/DD/YYYY, no earlier than 01/01/1900 and no later than today\'s date.',
                lp: 'The "License Plate" field should be between 5 and 8 characters long.',
                lpState: 'The "License State" field should be 2 characters long.',
                lpDate: 'The "License Expiration Date" field must be entered as a date, MM/DD/YYYY, no earlier than 01/01/1900 and no later than today\'s date.',
                dlPresent: '',

                
            }
        }
    }
}