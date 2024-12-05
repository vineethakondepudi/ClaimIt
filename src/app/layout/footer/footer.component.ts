import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { COPYRIGHT_YEAR, COPYRIGHT_OWNER, RIGHTS_RESERVED, ClAIMIT_VERSION } from '../constants/footer.constant';

@Component({
  selector: 'app-footer',
  imports: [CommonModule,MatCardModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public year = COPYRIGHT_YEAR
  public Owner = COPYRIGHT_OWNER
  public  reserved = RIGHTS_RESERVED
  public version = ClAIMIT_VERSION
  public claimitURl = ''
  public companyInfo = ``;
  @Input() copyright:boolean=true
}
