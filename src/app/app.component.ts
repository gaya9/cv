import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getData()
      .subscribe((data: any) => {
        this.data = data;
      }, error => {
        this.dataService.getDefaultData()
          .subscribe((data: any) => {
            this.data = data;
          });
      });
  }
}
