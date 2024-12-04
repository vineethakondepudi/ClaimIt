import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { ConfirmationDialogComponentComponent } from '../confirmation-dialog-component/confirmation-dialog-component.component';

@Component({
  selector: 'app-view-unclaim',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    ConfirmationDialogComponentComponent,
    MatDialogModule,
    MatTableModule, // Add MatTableModule for table functionality
    CommonModule,
  ],
  templateUrl: './view-unclaim.component.html',
  styleUrls: ['./view-unclaim.component.scss'],
})
export class ViewUnclaimComponent {
  searchQuery: string = '';
  searchResults: any[] = [];

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
          image: 'https://uncommongifts.in/cdn/shop/files/TribefacePrintedWomen_sOfficeBag_8d951812-bc08-4e82-8e0a-310bf5e9bbff_510x@2x.jpg?v=1702898334',
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
    this.searchResults.sort((a, b) => {
      return b.claimDate.getTime() - a.claimDate.getTime();
    });
  }

  search() {
    const query = this.searchQuery.trim().toLowerCase();
    if (!query) {
      this.searchResults = [];
      return;
    }

    const result = this.data.find((entry) => entry.email.toLowerCase() === query);
    this.searchResults = result ? result.items : [];

    // Sort the results by claimDate in descending order after searching
    this.sortDataByClaimDate();
  }

  showConfirmation(result: any) {
    result.showConfirmation = true;
  }

  unclaimItem(result: any) {
    this.searchResults = this.searchResults.filter((item) => item !== result);
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
      data: {
        message: 'Are you sure you want to unclaim this item?',
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.unclaimItem(result); // Proceed with unclaim
      }
    });
  }
}
