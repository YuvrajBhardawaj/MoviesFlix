import { Component, Input } from '@angular/core';
import { CreditsResponse } from '../../models/details';

@Component({
  selector: 'app-cast-crew',
  imports: [],
  templateUrl: './cast-crew.component.html',
  styleUrl: './cast-crew.component.css'
})
export class CastCrewComponent {
  @Input() credits! : CreditsResponse;
}
