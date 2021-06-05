import { Component, OnInit } from '@angular/core';
import { DestaquesService } from './destaques.service';

@Component({
  selector: 'app-destaques',
  templateUrl: './destaques.component.html',
  styleUrls: ['./destaques.component.scss']
})
export class DestaquesComponent implements OnInit {
  
  destaques: any;
  
  constructor(private destaquesService: DestaquesService) { }
  
  ngOnInit(): void {
    this.destaquesService.getDestaques().subscribe(response => this.destaques = response)
  }
}
