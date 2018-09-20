module.exports = {
    // to call this in your test file, testData.boundaryAnalysis
    boundaryAnalysis: [
        //BOUNDARY ANALYSIS FOUND HERE
        //https://docs.google.com/spreadsheets/d/1Mj81eKHPpMCF_aOQvyoTIWyU1aXqaRhVC1Y-D2CKsFg/edit#gid=0
        { //minboundary1 INVALID
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
                lpState: 'a',
                lpDate: '12311899',
            },
            results: {
                header: 'The "Header" field should be between 9 and 19 characters long.',
                mke: 'The "MKE" field should be between 2 and 4 characters long.',
                oai: 'The "Originating Agency Identifier" field should be 9 characters long.',
                name: 'The "Name" field should be between 3 and 30 characters long.',
                sex: 'The "Sex" field must be included.',
                race: 'The "Race / Ethnicity" field must be included.',
                height: 'The "Height" field should be 3 characters long.',
                weight: 'The "Weight" field must be included.',
                hair: 'The "Hair" field should be between 3 and 10 characters long.',
                offense: 'The "Offense" field should be between 5 and 15 characters long.',
                warrantDate: 'The "Date of Warrant/Violation" field must be entered as a date, MM/DD/YYYY, no earlier than 01/01/1900 and no later than today\'s date.',
                dlDate: 'The "DL Expiration Date" field can only include numeric characters.',
                lp: 'The "License Plate" field should be between 5 and 8 characters long.',
                lpState: 'The "License State" field should be 2 characters long.',
                lpDate: 'The "License Expiration Date" field can only include numeric characters.',
                dlPresent: 'If one of the following are present, all must be present: Drivers License, DL State, DL Expiration Date.',
            }
        },

        { //minboundary2 VALID
            fields: {
                header: 'qwertyuio',
                mke: 'er',
                oai: 'qwertyuio',
                name: 'qwe',
                sex: '@sexF',
                race: '@raceA',
                height: '123',
                weight: '1',
                hair: 'qwe',
                offense: 'qwert',
                warrantDate: '01011900',
                dl: '12345678901234567890',
                dlState: 'CA',
                dlDate: '01011900',
                lp: 'werty',
                lpState: 'TX',
                lpDate: '01011900',
            },
            results: {
            }
        },
        //states have to be capital for it to work

        { //maxboundary1 INVALID
                fields: {
                    header: 'qazwsxedcrfvtgbyhnu',
                    mke: 'ABCD',
                    oai: 'qazwsxedcr',
                    name: 'qazwsxedcrfvtgbyhnuqazwsxedcrf',
                    height: '1277',
                    weight: '777',
                    sex: '@sexM',
                    race: '@raceH',
                    hair: 'qwertyuiop',
                    offense: 'qwertqwertqwert',
                    warrantDate: '09072018',
                    dl: 'qwertqwertqwertqwert',
                    dlState: 'THN',
                    dlDate: '09072018',
                    lp: 'wertyuio',
                    lpState: '123',
                    lpDate: '09072018',
            },
            
            results: {
                oai: 'The "Originating Agency Identifier" field should be 9 characters long.',
                height: 'The "Height" field should be 3 characters long.',
                dlState: 'The "DL State" field should be 2 characters long.',
                lpState: 'The "License State" field should be 2 characters long.',
                
            }
        },

        {
                fields: {
                    header: 'q',
                    mke: '',
                    oai: '',
                    name: '',
                    height: '',
                    weight: '',
                    sex: '@sexNone',
                    race: '@raceNone',
                    hair: '',
                    offense: '',
                    warrantDate: '',
                    dl: '',
                    dlState: '',
                    dlDate: '',
                    lp: '',
                    lpState: '',
                    lpDate: '',
                },
                results: {
                    header: 'The "Header" field should be between 9 and 19 characters long.',
                    mke: 'The "MKE" field must be included.',
                    oai: 'The "Originating Agency Identifier" field must be included.',
                    name: 'The "Name" field must be included.',
                    sex: 'The "Sex" field must be included.',
                    race: 'The "Race / Ethnicity" field must be included.',
                    height: 'The "Height" field must be included.',
                    weight: 'The "Weight" field must be included.',
                    hair: 'The "Hair" field must be included.',
                    offense: 'The "Offense" field must be included.',
                    dow: 'The "Date of Warrant/Violation" field must be included.',

                }
        }

    ],
}