import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  readData:any;
  successmsg:any;

  ngOnInit(): void {
    this.getAllData();

  }

  // supprimer données
  deleteID(id:any)
  {
    console.log(id, 'deleteid==>');
    this.service.deleteData(id).subscribe((res)=>{
      console.log(res, 'deleteres==>');
      this.successmsg = res.message;
      this.getAllData();

    });
  }

  // get Data
getAllData(){
  this.service.getAllArticle().subscribe((res)=>{
    console.log(res, "res==>");
    this.readData = res.data;
  });
}



}


