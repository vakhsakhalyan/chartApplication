import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef} from "@angular/material";
@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {
  usernameRequireControl = new FormControl('', [Validators.required]);

  constructor(public dialogRef: MatDialogRef<UserDialogComponent>) { }

  ngOnInit() {
  }

  joinChat(value) {
    if (value.trim().length) {
      this.dialogRef.close({
        username: value
      });
    }


  }

}
