import { Component, OnInit } from '@angular/core';
import { DiseaseService } from 'src/app/service/disease.service'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
epidemicData: any = null;
error: string | null = null;
myApiData: any = null;

  constructor(private diseaseService: DiseaseService, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.diseaseService.getEpidemicData().subscribe(
      (response) => {
        this.epidemicData = response; 
      },
      (error) => { 
        this.error = 'Error fetching data. Please try again later.'; 
      }
    );
  }

  callMyApi(): void {
  //   const apiUrl = 'http://your-backend-url.com/api/other-endpoint'; 
  //   this.http.get(apiUrl).subscribe(
  //   (response) => {
  //     this.myApiData = response; // ✅ Store the response
  //   },
  //   (error) => {
  //     console.error('Error fetching other API:', error);
  //   }
  // );
}

}

