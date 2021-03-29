/// <reference path="source/typescript/smart.elements.d.ts" />


window.Smart( '#grid', class {
    get properties() {
        return {
			appearance: {
				alternationStart:0,
				alternationCount: 2
			},
            sorting: {
                enabled: true
            },
			selection: {
				enabled: true,
				checkBoxes: {
					enabled: true
				}
			},
            filtering: {
                enabled: true
            },
            grouping: {
                enabled: true,
                renderMode: 'basic'
            },
            dataSource: new window.Smart.DataAdapter( {
				dataSource: 'test.data.php',
				dataSourceType: 'json',
                dataFields: [
					'zid: number',
					'taid: number',
					'kid: number',
					'tierart: string',
					'verhalten: string',
					'variante: string',
					'kurz: string',
					'version: string',
					'sigak: string',
					'sigak_kom: string',
					'sigopt: string',
					'sigopt_kom: string',
					'sigtak: string',
					'sigtak_kom: string',
					'sigolf: string',
					'sigolf_kom: string',
					'siggust: string',
					'siggust_kom: string',
					'promptheit: string',
					'geschwindigkeit: string',
					'dauer: string',
					'ort: string',
					'ablenkung: string',
					'entfernung: string',
					'beschreibung: string',
					'cre_dat: string',
					'cre_juid: number',
					'chg_dat: string',
					'chg_juid: number',
					'anzahl: number'
                ]
            } ),
            columns: [
				{label :'zid', dataField: 'zid' },
				{label :'taid', dataField: 'taid' },
				{label :'kid', dataField: 'kid' },
				{label :'tierart', dataField: 'tierart' },
				{label :'verhalten', dataField: 'verhalten' },
				{label :'variante', dataField: 'variante' },
				{label :'kurz', dataField: 'kurz' },
				{label :'version', dataField: 'version' },
				{label :'sigak', dataField: 'sigak' },
				{label :'sigak_kom', dataField: 'sigak_kom' },
				{label :'sigopt', dataField: 'sigopt' },
				{label :'sigopt_kom', dataField: 'sigopt_kom' },
				{label :'sigtak', dataField: 'sigtak' },
				{label :'sigtak_kom', dataField: 'sigtak_kom' },
				{label :'sigolf', dataField: 'sigolf' },
				{label :'sigolf_kom', dataField: 'sigolf_kom' },
				{label :'siggust', dataField: 'siggust' },
				{label :'siggust_kom', dataField: 'siggust_kom' },
				{label :'promptheit', dataField: 'promptheit' },
				{label :'geschwindigkeit', dataField: 'geschwindigkeit' },
				{label :'dauer', dataField: 'dauer' },
				{label :'ort', dataField: 'ort' },
				{label :'ablenkung', dataField: 'ablenkung' },
				{label :'entfernung', dataField: 'entfernung' },
				{label :'beschreibung', dataField: 'beschreibung' },
				{label :'cre_dat', dataField: 'cre_dat' },
				{label :'cre_juid', dataField: 'cre_juid' },
				{label :'chg_dat', dataField: 'chg_dat' },
				{label :'chg_juid', dataField: 'chg_juid' },
				{label :'anzahl', dataField: 'anzahl' }
            ]
        };
    }
} );