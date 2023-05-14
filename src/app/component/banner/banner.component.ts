import { Component, OnInit } from '@angular/core';
import { Banner } from '../../models/banner.model';
import { BannerService } from '../../service/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  
  banners: Banner[] = [];

  constructor(private bannerService: BannerService) { }

  ngOnInit(): void {
    this.bannerService.getBanners().subscribe((banners) => {
      this.banners = banners;
    });
  }

}
