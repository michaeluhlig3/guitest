"use strict";
/// <reference path="source/typescript/smart.elements.d.ts" />
window.Smart('#grid', class {
    get properties() {
        return {
			appearance: {
				alternationStart: 0,
				alternationCount: 2
			},
            selection: {
                enabled: true,
                checkBoxes: {
                    enabled: true
                }
            },
			filtering: {
				enabled: false
			},
            sorting: {
                enabled: true
            },
            dataSource: new window.Smart.DataAdapter({
                dataSource: 'test.data.php',
				autobind:true,
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
            }),
            columns: 
			[
				{label :'tierart', dataField: 'tierart' },
				{label :'verhalten', dataField: 'verhalten' },
				{label :'kurz', dataField: 'kurz' },
				{label :'anzahl', dataField: 'anzahl' }
            ]
        };
    }
});