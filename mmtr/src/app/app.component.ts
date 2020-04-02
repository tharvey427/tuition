import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mmtr';
  private cookieValue: string;

  constructor(private cookieService: CookieService) {}

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    // this.cookieService.set('cookieName', 'cookieValue');
    // this.cookieValue = this.cookieService.get('cookieName');
    // console.log(this.cookieValue);
  }
}
