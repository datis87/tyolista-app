import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { Job } from '../job-list/job.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent implements OnInit {
private myJob: Job;

  constructor(private jobService: JobService) {

    this.myJob = {
      Tyono: null,
      Paivamaara: new Date(),
    };
  }

  ngOnInit() {
  }

public getNewJob() {
    console.log ('Hae uusi työ');
  }

  setJob() {
    console.log ('Vie työ listaan');
    this.jobService.addJob(this.myJob);
  }

}
