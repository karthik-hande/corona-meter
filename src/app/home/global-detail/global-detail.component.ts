import { Component, OnInit, Input } from '@angular/core';
import { Global } from '@app/core';

@Component({
  selector: 'app-global-detail',
  templateUrl: './global-detail.component.html',
  styleUrls: ['./global-detail.component.scss']
})
export class GlobalDetailComponent implements OnInit {
  @Input() globalDetail: Global;
  constructor() { }

  ngOnInit(): void {
  }

}
