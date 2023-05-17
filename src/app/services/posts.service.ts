import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import * as firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private afs:AngularFirestore) { }
  loadFeatured(){
    return this.afs.collection('abhisposts',ref=> ref.where('isFeatured','==',true).limit(4)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(
          a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, data };
          }
        );
      })
    )
  }
  loadLatest(){
    return this.afs.collection('abhisposts',ref=> ref.orderBy('createdAt')).snapshotChanges().pipe(
      map(actions => {
        return actions.map(
          a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, data };
          }
        );
      })
    )
  }
  loadCategoryPosts( categoryId:string ){
    return this.afs.collection('abhisposts',ref=> ref.where('category.categoryId','==',categoryId).limit(4)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(
          a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, data };
          }
        );
      })
    )
  }

  loadOnePost(postId: any){

   return this.afs.doc(`abhisposts/${postId}`).valueChanges();

  }

  loadSimilar(catId:any){

    return this.afs.collection('abhisposts',ref=> ref.where('category.categoryId','==',catId).limit(4)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(
          a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, data };
          }
        );
      })
    )

  }

  countViews(postId:any){

    const viewsCount = {
      veiws: firebase.default.firestore.FieldValue.increment(939)
    }

    this.afs.doc(`abhisposts/${postId}`).update(viewsCount).then(()=>{
      console.log('Views Count Updated...!');
    })

  }
}
