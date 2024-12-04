import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgImageSliderModule } from 'ng-image-slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    NgImageSliderModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  @ViewChild('nav', { static: false }) imageSlider: any;
  disableSelect = new FormControl(false);
  imageObject = [
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6zpf-5rWpaW4d75M_qmeOefShX3YtF8Qq3A&s',
      thumbImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6zpf-5rWpaW4d75M_qmeOefShX3YtF8Qq3A&s',
    },
    {
      image:
        'https://www.rebag.com/thevault/wp-content/uploads/2021/10/5-Entry-Level-Luxury-Accessories-Hero.jpg',
      thumbImage:
        'https://www.rebag.com/thevault/wp-content/uploads/2021/10/5-Entry-Level-Luxury-Accessories-Hero.jpg',
    },

    {
      image:
        'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
      thumbImage:
        'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
    },

    {
      image:
        'https://uncommongifts.in/cdn/shop/files/TribefacePrintedWomen_sOfficeBag_8d951812-bc08-4e82-8e0a-310bf5e9bbff_510x@2x.jpg?v=1702898334',
      thumbImage:
        'https://uncommongifts.in/cdn/shop/files/TribefacePrintedWomen_sOfficeBag_8d951812-bc08-4e82-8e0a-310bf5e9bbff_510x@2x.jpg?v=1702898334',
    },
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.imageSlider.initialize();
    });
  }

  
}
