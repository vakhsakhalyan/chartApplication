import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatList, MatListItem } from '@angular/material';
import {UserDialogComponent} from "./user-dialog/user-dialog.component";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  defaultDialogUserParams: any = {
    disableClose: true,
    data: {
      title: 'Welcome'
    }
  };

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.openUserPopup(this.defaultDialogUserParams);
  }

  openUserPopup(param) {
    let dialogRef = this.dialog.open(UserDialogComponent, param);

  }

}
