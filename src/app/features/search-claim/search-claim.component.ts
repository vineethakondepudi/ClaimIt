import { Component, Input } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedService } from '../../../shared.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DatatableComponent } from '../datatable/datatable.component';
interface Food {
  value: string;
  viewValue: string;
}
interface Item {
  itemId: number;
  itemName: string;
  status: string;
  foundDate: string;
  subcatgeoryId: number;
  categoryId: number;
  expirationDate: string | null;
  receivedDate: string;
  image: string;
  dominantColor: string;
  detectedText: string;
  orgId: string;
}
@Component({
  selector: 'app-search-claim',
  standalone: true,
  imports: [MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,     
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
    DatatableComponent,
    MatProgressSpinnerModule,
    MatExpansionModule,
    NgxDropzoneModule, MatSelectModule,  FormsModule,HttpClientModule
  ],
  templateUrl: './search-claim.component.html',
  styleUrl: './search-claim.component.scss',
  providers: [SharedService]
})
export class SearchClaimComponent {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}
  @Input() containerPanelOpened: boolean = false;
  displaycoloums: any[] = [
    {
      label: "Image Data",
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
      label: "FoundDate",
      name: "foundDate",
      type: "date",
      isSortable: true,
      position: "left",
      isChecked: true,
      index: 1,
    },
    {
      label: "ReceivedDate",
      name: "receivedDate",
      type: "date",
      isSortable: true,
      position: "left",
      isChecked: true,
      index: 1,
    },
  ]
  files: File[] = [];
  uplodedfilesdata: any[] = []
  matchedItems: any = [];
  items: any[] = [];
  searchResults: any= [];
  searchQuery: string = '';
  foods = [
    { value: 'Apparel', viewValue: 'Apparel' },
    { value: 'Footwear', viewValue: 'Footwear' },
    { value: 'Miscellaneous ', viewValue: 'Miscellaneous' },
    { value: 'Others', viewValue: 'Others' }
  ];
  displayedColumns: string[] = ['itemId', 'itemName', 'status', 'foundDate', 'categoryId', 'actions'];
  dataSource: any = [];
  categerorydata: any = [];

  selectedCategory: string = '';
  
  public onRemove(event: any) {
    this.uplodedfilesdata.splice(this.uplodedfilesdata.indexOf(event), 1)
    if (this.files.length > 0) {
      this.files.splice(this.files.indexOf(event), 1)
    }
  }
//itemsearch integration code 
searchItems() {
  if (this.searchQuery.trim()) {
    const apiUrl = `http://172.17.12.38:8081/api/users/search?query=${encodeURIComponent(this.searchQuery)}`;
    
    this.http.get<Item[]>(apiUrl).subscribe(
      (response: Item[]) => {
        this.searchResults = response;
        console.log('Search results:', response);
        
        // Handle the response here
      },
      (error) => {
        console.error('Search error:', error);
        this.snackBar.open('An error occurred while searching. Please try again.', 'Close', {
          duration: 3000,
        });
      }
    );
  } else {
    this.snackBar.open('Please enter a search query.', 'Close', {
      duration: 3000,
    });
  }
}

  //categeory integration
  search(): void {
    const apiUrl = `http://172.17.12.38:8081/api/users/search?query=${this.selectedCategory}`;
    this.http.get<any[]>(apiUrl).subscribe(
      data => {
        this.categerorydata = data; // Directly set if it's an array
      },
      error => {
        console.error('API Error:', error);
      }
    );
  }
  selectCategory(category: string) {
    this.selectedCategory = category;
    this.search();
  }
  //picture upload integration 
  public   onSelect(event: any): void {
    const files = event.addedFiles;
    if (files && files.length > 0) {
      const file = files[0]; // Assuming one file is selected

      this.uploadImage(file).subscribe(
        (response) => {
          console.log('Image uploaded successfully:', response);
          this.matchedItems = response.matchedItems; // Store the matched items
        },
        (error) => {
          console.error('Error uploading image:', error);
        }
      );
    }
  }
  getCategoryIcon(value: string): string {
    switch (value) {
      case 'Apparel':
        return 'checkroom'; // Icon for Apparel
      case 'Footwear':
        return 'sports_handball'; // Icon for Footwear
      case 'Miscellaneous':
        return 'category'; // Icon for Miscellaneous
      case 'Others':
        return 'more_horiz'; // Icon for Others
      default:
        return 'help';
    }
  }
  uploadImage(file: File): Observable<any> {
    // Create FormData to send the file in the body of the POST request
    const formData: FormData = new FormData();
    formData.append('image', file, file.name);
  
    const picUrl = 'http://172.17.12.38:8081/api/users/uploadImageForSearch';
  
    // Sending POST request with FormData containing the image
    return this.http.post(picUrl, formData, {
      headers: new HttpHeaders(),
    });
  }
  

  public onImportToExcel() {
    this.files = []
  }
}