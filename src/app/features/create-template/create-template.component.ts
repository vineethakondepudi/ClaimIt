import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BackDropComponent } from '../back-drop/back-drop.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-create-template',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, BackDropComponent],
  templateUrl: './create-template.component.html',
  styleUrl: './create-template.component.scss',
})
export class CreateTemplateComponent {


  
}
