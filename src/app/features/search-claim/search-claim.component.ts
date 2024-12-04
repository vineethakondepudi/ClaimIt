import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-search-claim',
  standalone: true,
  imports: [MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    NgxDropzoneModule, MatSelectModule, FormsModule, CommonModule, HttpClientModule, MatCardModule
  ],
  templateUrl: './search-claim.component.html',
  styleUrl: './search-claim.component.scss',
  providers: [SharedService]
})
export class SearchClaimComponent {
  searchQuery: string = '';
  searchResults: any = null;
  favoriteFood: string = '';
  show = false
  constructor(private service: SharedService) { }

  ngOnInit() {
    this.onSearch()
  }
  onSearch() {
    if (!this.searchQuery) {
      this.show = true
    } else {
      this.service.searchItems(this.searchQuery).subscribe({
        next: (response) => {
          console.log(response);
          this.searchResults = response;
          console.log('Search Results:', this.searchResults);
        },
        error: (error) => {
          console.error('Error fetching search results:', error);
        },
      });
    }
  }

}