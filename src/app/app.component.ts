import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { ClubComponent } from './components/club/club.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
})
export class AppComponent {
  display: boolean = false;

    showDialog() {
        this.display = true;
    }
    showProfile(){
      console.log('Test');
    }
}
