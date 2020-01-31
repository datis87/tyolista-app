import { Component, OnInit } from '@angular/core';
import { Job } from './job.interface';
import { JobService } from '../services/job.service';
import { Subscription } from 'rxjs';

const JOB_DATA: Job[] = [];

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  private dataSource: Job[];
  private displayedColumns: string[] = [
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

  private subscriptions = new Subscription();

  constructor(private jobService: JobService) {
    this.subscriptions.add(
       jobService.getJobList().subscribe(list => {
         this.dataSource = list;
       }));
  }

  ngOnInit() {
    console.log('component: ' + this + ' init');
    console.log(this.dataSource);

  }

  refresh() {
    console.log('component: ' + this + ' refresh');
  }

}
