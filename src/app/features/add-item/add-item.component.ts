import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { DatatableComponent } from '../datatable/datatable.component';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [
    FooterComponent,
    DatatableComponent
  ],
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
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
      label: "foundDate",
      name: "foundDate",
      type: "text",
      isSortable: true,
      position: "left",
      isChecked: true,
      index: 1,
    }
  ]
  displayedColumns: string[] = ['index', 'image', 'foundDate', 'status'];
  searchResults: any= [];

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected file:', file.name);
      // Add your upload logic here
    }
  }
}
