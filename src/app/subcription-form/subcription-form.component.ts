import { Component, OnInit } from '@angular/core';
import { Sub } from '../models/sub';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subcription-form',
  templateUrl: './subcription-form.component.html',
  styleUrls: ['./subcription-form.component.css']
})
export class SubcriptionFormComponent implements OnInit {


  isEmailError:boolean = false;
  isSubscribed:boolean = false;
  

  constructor(private subService: SubscribersService){}
  ngOnInit(): void {

  }


  onSbmit(formValue:any){

    // console.log(formValue);

    const subData: Sub = {
      name: formValue.name,
      email: formValue.email
    }

    this.subService.checkSubs(subData.email).subscribe(val=>{
      // console.log(val)
      if(val.empty){
          this.subService.addSubs(subData);
          this.isSubscribed = true;
      }else{
        // console.log('Email already exists..');
        this.isEmailError = true;
      }
    })

  }
}
