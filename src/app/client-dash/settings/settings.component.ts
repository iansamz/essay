import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
   user = firebase.auth().currentUser;
   displayName : string;
   email : string;
   photoURL : string
  constructor(public af: AngularFireAuth,public dialog :MdDialog) { }

  ngOnInit() {
    this.af.authState.subscribe(auth => { 
      if(auth) {
        this.displayName = auth.displayName
        this.email = auth.email
        this.photoURL = auth.photoURL
      }
    });
  }

  // updateEmail(value){
  //   let email = value.email
  //   this.user.updateEmail(email).then(function() {
  //     // Update successful.
  //   }, function(error) {
  //     // An error happened.
  //   });
  // }
  // updateName(value){
  //   let name = value.displayName;
  //   console.log(name)
  //   this.user.updateProfile({
  //     displayName: name,
  //     photoURL : this.photoURL
  //   }).then(function() {
  //     this.openDialog("Failed")
  //   }, function(error) {
  //     // An error happened.
  //   });
  // }

  // openDialog(){
  //   let dialogRef = this.dialog.open(DialogResultExampleDialog);
  //   dialogRef.afterClosed().subscribe(result => {
  //     this.selectedOption = result;
  //   });
  // }
}
