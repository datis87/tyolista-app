import { Component, OnInit } from '@angular/core';
import { Job } from './job.interface';
import { RouterLink, Router } from '@angular/router';

const JOB_DATA: Job[] = [
  {Tyono: 1, Tekija: 'Tekija 1', Tyo: 'Työ 1' },
  {Tyono: 2, Tekija: 'Tekija 2', Tyo: 'Työ 2' },
  {Tyono: 3, Tekija: 'Tekija 1', Tyo: 'Työ 3' },
  {Tyono: 1, Tekija: 'Tekija 1', Tyo: 'Työ 1' },
  {Tyono: 1, Tekija: 'Tekija 1', Tyo: 'Työ 1' },
  {Tyono: 1, Tekija: 'Tekija 1', Tyo: 'Työ 1' },
  {Tyono: 1, Tekija: 'Tekija 1', Tyo: 'Työ 1' },
  {Tyono: 1, Tekija: 'Tekija 1', Tyo: 'Työ 1' },
  {Tyono: 1, Tekija: 'Tekija 1', Tyo: 'Työ 1' },
  {Tyono: 1, Tekija: 'Tekija 1', Tyo: 'Työ 1' },
  {Tyono: 1, Tekija: 'Tekija 1', Tyo: 'Työ 1' },
  {Tyono: 1, Tekija: 'Tekija 1', Tyo: 'Työ 1' },
  {Tyono: 1, Tekija: 'Tekija 1', Tyo: 'Työ 1' },
  {Tyono: 1, Tekija: 'Tekija 1', Tyo: 'Työ 1' },
  {Tyono: 1, Tekija: 'Tekija 1', Tyo: 'Työ 1' },
  {Tyono: 1, Tekija: 'Tekija 1', Tyo: 'Työ 1' },
  {Tyono: 1, Tekija: 'Tekija 1', Tyo: 'Työ 1' },
  {Tyono: 1, Tekija: 'Tekija 1', Tyo: 'Työ 1' },
  {Tyono: 1, Tekija: 'Tekija 1', Tyo: 'Työ 1' },
  {Tyono: 1, Tekija: 'Tekija 1', Tyo: 'Työ 1' },
  {Tyono: 1, Tekija: 'Tekija 1', Tyo: 'Työ 1' },
  {Tyono: 1, Tekija: 'Tekija 1', Tyo: 'Työ 1' },
  {Tyono: 1, Tekija: 'Tekija 1', Tyo: 'Työ 1' },
  {Tyono: 1, Tekija: 'Tekija 1', Tyo: 'Työ 1' },
  {Tyono: 1, Tekija: 'Tekija 1', Tyo: 'Työ 1' },
  {Tyono: 1, Tekija: 'Tekija 1', Tyo: 'Työ 1' }

];

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  displayedColumns: string[] = [
    'Työno',
    'Pvm',
    'Toimituspaivä',
    'Tekijä',
    'Työ',
    'Asiakas',
    'Yritys',
    'Laskutusosoite',
    'Viite',
    'Tarjottu',
    'Kustannusarvio',
    'Koko',
    'Sivumäärä',
    'Painosmäärä',
    'Värit',
    'Paperi',
    'Jälkikäsittely',
    'Toimituskulut',
    'Tunnit',
    'Laskutusnumero'
  ];
  dataSource = JOB_DATA;

  constructor() { }

  ngOnInit() {

  }

}
