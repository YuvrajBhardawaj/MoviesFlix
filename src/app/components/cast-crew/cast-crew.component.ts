import { Component, Input } from '@angular/core';
import { CreditsResponse } from '../../models/details';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-cast-crew',
  imports: [MaterialModule],
  templateUrl: './cast-crew.component.html',
  styleUrl: './cast-crew.component.css'
})
export class CastCrewComponent {
  @Input() credits! : CreditsResponse;
}
