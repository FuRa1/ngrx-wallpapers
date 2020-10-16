import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IWallpaper } from '../../models/wallpaper.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

export class GridComponent implements OnInit {

  public papers: Observable<IWallpaper[]>;

  @Input() wallpapers: IWallpaper[];
  @Input() action: (paper: IWallpaper) => void;
  @Input() actionName: string;

  constructor(
  ) {

  }

  ngOnInit(): void {
  }

  public dispatchAction(paper: IWallpaper): void {
    this.action(paper);
  }
}


// TODO NGRX STORE MIGRATION // Minimize response calls + WebSocket + angular-library ?

// TODO Architecture
// NG RX STORE => OnPush strategy => Performance;
// WebSocket For Actual values;
// library for reusable components;
