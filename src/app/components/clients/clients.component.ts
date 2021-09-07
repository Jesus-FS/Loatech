import { Component } from '@angular/core';
import { CarouselPath, CUSTOMERLOGO } from '../../models';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent {
  customerLogo: CarouselPath[];
  showArrows: boolean;
  imgSize: number;
  cellsNumber: number;

  constructor(public breakpointObserver: BreakpointObserver) {
    this.customerLogo = CUSTOMERLOGO;
    this.showArrows = true;
    this.imgSize = 200;
    this.cellsNumber = 0;

    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .subscribe((state: BreakpointState) => {
        if (state.breakpoints[Breakpoints.XSmall]) {
          // handle X Small breakpoint
          this.showArrows = false;
          this.imgSize = 75;
          this.cellsNumber = 3;
        }
        if (state.breakpoints[Breakpoints.Small]) {
          // handle Small breakpoint
          this.showArrows = false;
          this.imgSize = 75;
          this.cellsNumber = 3;
        }
        if (state.breakpoints[Breakpoints.Medium]) {
          // handle Medium breakpoint
          this.showArrows = true;
          this.imgSize = 200;
          this.cellsNumber = 4;
        }
        if (state.breakpoints[Breakpoints.Large]) {
          // handle Large breakpoint
          this.showArrows = true;
          this.imgSize = 200;
          this.cellsNumber = 5;
        }
        if (state.breakpoints[Breakpoints.XLarge]) {
          // handle XLarge breakpoint
        }
      });
  }
}
