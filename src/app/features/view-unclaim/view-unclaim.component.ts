import { Component, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { ConfirmationDialogComponentComponent } from '../confirmation-dialog-component/confirmation-dialog-component.component';
import { DatatableComponent } from '../datatable/datatable.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FooterComponent } from '../../layout/footer/footer.component';
@Component({
  selector: 'app-view-unclaim',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    FooterComponent,
    MatExpansionModule,
    MatDialogModule,
    MatTableModule,
    CommonModule,
    MatCardModule,
    DatatableComponent,
    MatProgressSpinnerModule,
    MatExpansionModule
],
  templateUrl: './view-unclaim.component.html',
  styleUrls: ['./view-unclaim.component.scss'],
})
export class ViewUnclaimComponent {
  searchQuery: string = '';
  @Input() containerPanelOpened: boolean = false;
  searchResults: any= [];
  showNoResults: boolean = false;
  loading:boolean=false
  displaycoloums: any[] = [
    {
      label: "Image",
      name: "image",
      type: "image",
      isSortable: true,
      position: "left",
      isChecked: true,
      index: 1,
    },
    {
      label: "Status",
      name: "status",
      type: "text",
      isSortable: true,
      position: "left",
      isChecked: true,
      index: 1,
    },
    {
      label: "claimDate",
      name: "claimDate",
      type: "text",
      isSortable: true,
      position: "left",
      isChecked: true,
      index: 1,
    },
    {
      label: "Action",
      name: "action",
      type: "action",
      isSortable: true,
      position: "left",
      isChecked: true,
      index: 1,
    },
  ]
  displayedColumns: string[] = ['index', 'image', 'claimDate', 'status', 'action'];

  constructor(public dialog: MatDialog) {}

  data = [
    {
      email: 'vkondepudi@miraclesoft.com',
      items: [
        {
          image: 'https://www.shutterstock.com/image-photo/sand-timerhour-glass-feather-quill-260nw-240558520.jpg',
          claimDate: new Date('11 /4/2024'),
          status: 'open',
          showConfirmation: false,
        },
        {
          image: 'https://www.rebag.com/thevault/wp-content/uploads/2021/10/5-Entry-Level-Luxury-Accessories-Hero.jpg',
          claimDate: new Date('11/27/2024'),
          status: 'claimed',
        },
        {
          image: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
          claimDate: new Date('12/3/2024'),
          status: 'pending pickup',
          showConfirmation: false,
        },
        {
          image: 'https://uncommongifts.in/cdn/shop/files/TribefacePrintedWomen_sOfficeBag_8d951812-bc08-4e82-8e0a-310bf5e9bbff_510x@2x.jpg?v=1702898334',
          claimDate: new Date('10/1/2024'),
          status: 'unclaim',
          showConfirmation: false,
        },
      ],
    },
    {
      email: 'pgupta@miraclesoft.com',
      items: [
        {
          image: 'https://www.hamburg-airport.de/resource/image/35168/landscape_ratio5x4_card/670/536/7a8548f5eebfc589a713116c0e10ada8/851A25FEEC37824CB8775EC0A150AD65/fundsachen-lost-and-found-baggage-gepaeck.jpg',
          claimDate: new Date('11/2/2024'),
          status: 'pending request',
          showConfirmation: false,
        },
        {
          image: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
          claimDate: new Date('12/1/2024'),
          status: 'unclaim',
          showConfirmation: false,
        },
        {
          image: 'https://www.rebag.com/thevault/wp-content/uploads/2021/10/5-Entry-Level-Luxury-Accessories-Hero.jpg',
          claimDate: new Date('11/30/2024'),
          status: 'open',
          showConfirmation: false,
        },
        {
          image: 'https://www.shutterstock.com/image-photo/sand-timerhour-glass-feather-quill-260nw-240558520.jpg',
          claimDate: new Date('12/4/2024'),
          status: 'claimed',
        },
      ],
    },
  ];

  sortDataByClaimDate() {
    this.searchResults.sort((a: { claimDate: { getTime: () => number; }; }, b: { claimDate: { getTime: () => number; }; }) => {
      return b.claimDate.getTime() - a.claimDate.getTime();
    });
  }

  search() {
    const query = this.searchQuery.trim().toLowerCase();
    if (!query) {
      this.searchResults = [];
      this.showNoResults = false;
      return;
    }

    this.loading = true; // Show spinner
    setTimeout(() => {
      const result = this.data.find((entry) => entry.email.toLowerCase() === query);
      if (result) {
        this.searchResults = result.items;
        this.showNoResults = this.searchResults.length === 0;
      } else {
        this.searchResults = [];
        this.showNoResults = true;
      }

      this.sortDataByClaimDate();
      this.loading = false; 
    }, 2000);
  }

  clearResultsIfEmpty() {
    if (!this.searchQuery.trim()) {
      this.searchResults = [];
      this.showNoResults = false;
    }else{
      this.search()
    }
  }
  

  

  showConfirmation(result: any) {
    result.showConfirmation = true;
  }

  unclaimItem(result: any) {
    this.searchResults = this.searchResults.filter((item: any) => item !== result);
  }

  cancelUnclaim(result: any) {
    result.showConfirmation = false;
  }

  getButtonColor(status: string): string {
    switch (status) {
      case 'open':
        return 'primary';
      case 'unclaim':
        return 'warn';
      case 'pending request':
      case 'pending pickup':
        return 'accent';
      case 'claimed':
        return 'primary';
      default:
        return '';
    }
  }

  confirmUnclaim(result: any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponentComponent, {
      width: "500px",
      data: {
        message: 'Are you sure you want to unclaim this item?',
        title:'UnClaim'
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.unclaimItem(result); 
      }
    });
  }
  SearchAndClear(type:any){
    if(type==='clear'){
      this.searchResults = [];
      this.showNoResults = false;
    }else{

    }
    
  }
  
}
