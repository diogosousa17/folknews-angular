import { NoticiaService } from './noticia.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent implements OnInit {

  id: any;
  noticia: any;
  like = 0;
  dislike = 0;

  constructor(private noticiaService: NoticiaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const par = this.route.snapshot.paramMap.get('id');
    this.id=par;

    this.getNoticia();
  }

    getNoticia(){
      this.noticiaService.getNoticia(this.id).subscribe((response: any) => (this.noticia = response))
    }

    likeUp() {
      if(this.like < 1 && this.dislike === 0) {
        this.like++
      }
      else if(this.like=1) {
        this.like--
      }
    }
    
    dislikeUp() {
      if(this.dislike < 1 && this.like === 0) {
        this.dislike++
      }
      else if(this.dislike = 1) {
        this.dislike--
      }
    }
}