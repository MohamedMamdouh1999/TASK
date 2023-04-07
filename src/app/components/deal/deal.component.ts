import { Component, Input } from '@angular/core';
import { Deals } from 'src/app/interfaces/deals';
import { DealsService } from 'src/app/services/deals.service';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss']
})
export class DealComponent {
  constructor(private _DealsService:DealsService){}
  @Input() type:string = ""
  deals: Deals[] = []
  ngOnInit(): void {
    this._DealsService.getDeals().subscribe({
      next: deals => this.deals = deals.deals,
      error: error => console.log(error)
    })
  }
}
