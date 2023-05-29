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
    // connService.getBaseDataWithObservable().subscribe({
    //   next: baseData => console.log('BaseData with http client in component', baseData),
    //   error: err => console.log(err)
    // })
    // connService.getCharacterWithObservable().subscribe({
    //   next: character => console.log('character with http client in component', character),
    //   error: err => console.log(err)
    // })
    // connService.getLocationWithObservable().subscribe({
    //   next: location => console.log('location with http client in component', location),
    //   error: err => console.log(err)
    // })
    // connService.getEpisodeWithObservable().subscribe({
    //   next: episode => console.log('episode with http client in component', episode),
    //   error: err => console.log(err)
    // })
    connService.getAllCharacterWithObservable()
      .subscribe({
      next: characters => console.log('all characters with http get', characters),
      error: err => console.log(err)
      })
    connService.getAllEpisodeWithObservable()
      .subscribe({
      next: episodes => console.log('all episodes with http get', episodes),
      error: err => console.log(err)
      })
    connService.getAllLocationWithObservable()
      .subscribe({
      next: locations => console.log('all locations with http get', locations),
      error: err => console.log(err)
      })
  }
}
