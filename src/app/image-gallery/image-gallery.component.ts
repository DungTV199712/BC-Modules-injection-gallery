import { Component, OnInit, Inject, Optional } from '@angular/core';
import { GalleryConfig } from './token';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  listImage = [
    'https://consequenceofsound.files.wordpress.com/2017/08/joker-and-harley-quinn.png?w=807',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIO6MyTnpX03liKV7croDVWoimttgoHirLZYuIs1-k6YFclmm62g',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzxVJCd9RQGyGmwOLvWprAIPFy0OKvxxOtIatF5Hy-9WAeIfiR',
    'https://boygeniusreport.files.wordpress.com/2015/05/suicide-squad-task-force-x-team-picture.jpg?quality=98&strip=all&w=599'
  ];
  itemWidth: number;
  config = 4;
  constructor(
      @Inject(GalleryConfig)
      @Optional()
          config: number
  ) {
    if (config) {
      this.config = config;
    }
  }

  ngOnInit() {
    this.itemWidth = 100 / this.config;
  }
}
