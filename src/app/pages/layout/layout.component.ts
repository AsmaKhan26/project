import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { UserModel } from '../../core/models/API.Model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  loggedData: UserModel = new UserModel();

  constructor(@Inject(PLATFORM_ID) private platformId: Object){
    if (isPlatformBrowser(this.platformId)) {
      const localData = localStorage.getItem('ticketData');
      if (localData != null){
        this.loggedData = JSON.parse(localData);
      }
    }
  }
}
