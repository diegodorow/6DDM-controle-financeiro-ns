import { Component } from '@angular/core'
import { ContaService } from '~/app/core/services/conta.service'
import { ItemEventData } from '@nativescript/core'
import { RouterExtensions } from '@nativescript/angular'

@Component({
  moduleId: module.id,
  selector: 'ns-home',
  templateUrl: 'home.component.html',
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {

  // flicks = this.flickService.getFlicks()
  contas = this.contaService.getContas()
  constructor(
    // private flickService: FlickService,
    private contaService: ContaService,
    private routerExtensions: RouterExtensions
  ) { }
  // onFlickTap(args: ItemEventData): void {
  //   this.routerExtensions.navigate(['details', this.flicks[args.index].id])
  // }
  onContaTap(args: ItemEventData): void {
    this.routerExtensions.navigate(['contadetalhe', this.contas[args.index].id])
  }

  onClick() {
    this.routerExtensions.navigate(['cadastroconta', this.contas])
  }
}