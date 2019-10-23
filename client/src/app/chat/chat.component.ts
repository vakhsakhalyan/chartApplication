import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatList, MatListItem } from '@angular/material';
import {UserDialogComponent} from "./user-dialog/user-dialog.component";
import {User} from "../model/user";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  user: User;

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
    dialogRef.afterClosed().subscribe(result => {
      this.user.username = result.username;
    });
  }
}
