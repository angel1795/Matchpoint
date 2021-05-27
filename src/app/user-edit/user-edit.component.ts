import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  profileForm = new FormGroup({
  });

  value = 'Clear me';
  constructor() { }

  ngOnInit() {
  }

}
