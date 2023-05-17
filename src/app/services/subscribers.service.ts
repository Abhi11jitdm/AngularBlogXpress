import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private afs: AngularFirestore) { }

  addSubs(subsData:any){
    this.afs.collection('abhisSubscribers').add(subsData).then(()=>{
      console.log('Subscriber added Successfully');
    })
  }

  checkSubs(subEmail:any){
    return this.afs.collection('abhisSubscribers', ref => ref.where('email', '==', subEmail)).get()

  }
}
