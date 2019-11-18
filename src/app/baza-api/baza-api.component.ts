import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-baza-api',
  templateUrl: './baza-api.component.html',
  styleUrls: ['./baza-api.component.scss']
})
export class BazaAPIComponent implements OnInit {
  rekordy: Rekord[];
  rekord: Rekord;
  constructor(private testService: TestService) {

  }

  showRekordy() {
    this.testService.getRekordy()
      .subscribe((data: Rekord[]) => {
        this.rekordy = data;
        console.log(this.rekordy);
      });
  }

  insertRekord() {
    this.testService.insert()
      .subscribe((data: Rekord) => {
        this.rekord = data;
        console.log(this.rekord);
      });
  }




  ngOnInit() {
  }

}
