import { Component, OnInit } from '@angular/core';

import { loadCldr, L10n, setCulture } from '@syncfusion/ej2-base';
import * as numberingSystems from 'cldr-data/supplemental/numberingSystems.json';
import * as gregorian from 'cldr-data/main/fr-CH/ca-gregorian.json';
import * as numbers from 'cldr-data/main/fr-CH/numbers.json';
import * as timeZoneNames from 'cldr-data/main/fr-CH/timeZoneNames.json';
import * as weekData from 'cldr-data/supplemental/weekData.json'


loadCldr(numberingSystems['default'], gregorian['default'], numbers['default'], timeZoneNames['default'], weekData['default']);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'syncfusion-angular-datetimepicker';

  ngOnInit() {
    L10n.load({
      'fr-CH': {
        datetimepicker: {
          placeholder: "Sélectionnez la date et l'heure",
          today:"Aujourd'hui"
        }
      }
    });
  }
}
