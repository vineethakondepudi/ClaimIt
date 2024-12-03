import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-back-drop',
  imports: [MatCardModule, MatExpansionModule],
  templateUrl: './back-drop.component.html',
  styleUrl: './back-drop.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackDropComponent {
  @Input() isCard: boolean = false;
  @Input() isExpansionPanel: boolean = false;
  readonly panelOpenState = signal(true);

  
}
