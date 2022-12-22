import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if(this.getparamid)
    {
      this.service.getSingleData(this.getparamid).subscribe((res)=>{
        console.log(res, 'res==>');
        this.userForm.patchValue({
          titre:res.data[0].titre,
          thematique:res.data[0].thematique,
          type:res.data[0].type,
          section:res.data[0].section,
          soussection:res.data[0].soussection,
          chapitre:res.data[0].chapitre,
          intitule:res.data[0].intitule,
          fr:res.data[0].fr,
          mg:res.data[0].mg,
          specifique:res.data[0].specifique,
          signature:res.data[0].signature
        });
      });

    }
  }
  userForm = new FormGroup({

       'titre': new FormControl('',Validators.required),
       'intitule': new FormControl(''),
       'chapitre': new FormControl(''),
       'section': new FormControl(''),
       'soussection': new FormControl(''),
       'type': new FormControl('',Validators.required),
       'thematique': new FormControl('',Validators.required),
       'fr': new FormControl('',Validators.required),
       'mg': new FormControl('',Validators.required),
       'specifique': new FormControl(''),
       'signature': new FormControl('')
  });
  // créer des données
  userSubmit(){
    if(this.userForm.valid)
    {
      console.log(this.userForm.value)
      this.service.createData(this.userForm.value).subscribe((res)=>{
        console.log(res, '==>res');
        this.userForm.reset();
        this.successmsg = res.message;
      });
    }
    else {
      this.errormsg = 'Certains champs sont requis';
    }
  }
  //Mise à jour des données
  userUpdate(){
    console.log(this.userForm.value, 'updatedform');
    if (this.userForm.valid)
    {
      this.service.updateData(this.userForm.value, this.getparamid).subscribe((res)=>{
        console.log(res, 'resupdated');
        this.successmsg=res.message;
      })
    }
    else{
      this.errormsg = 'Certains champs sont requis.';
    }
  }
}
