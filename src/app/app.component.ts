import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio-project';
  ngOnInit() {
    if (environment.production) {
      console.log('We are running in production mode');
      console.log(`API Key: ${environment.apiKey}`);
    } else {
      console.log('We are running in development mode');
      console.log(`API Key: ${environment.apiKey}`);
    }
  }
}
