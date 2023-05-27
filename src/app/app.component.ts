import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ConnectionService } from './services/connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ram-web';

  constructor(private connService: ConnectionService){
    // Chiamate alle funzioni con subscribe vanno qui
  }
}
