import { Injectable } from '@angular/core';
import { Job } from '../job-list/job.interface';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private jobList: Job[];
  private jobListObservable: BehaviorSubject<Job[]>;

  constructor() {
    console.log('Constructed: ' + this);
    this.jobList = [];
    this.jobListObservable = new BehaviorSubject<Job[]>(this.jobList);
    console.log(this.jobListObservable);
  }

  public getJobList(): Observable<Job[]> {
    return this.jobListObservable;
  }

  public getJob(jobnNo: number): Job {
    return this.jobList.find(tyono => tyono.Tyono = jobnNo);
  }

  public addJob(job: Job): void {
    if (job.Tyono === null) {
      job.Tyono = this.jobList.length + 1;
    }
    this.jobList.push(job);
  }

}

