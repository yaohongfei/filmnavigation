import { Component,OnInit} from '@angular/core';
import {  Film ,HomeFilm ,CombineFilm  } from '../../model/film.model';
import { Service } from '../../service/service';
import { Router } from '@angular/router';

@Component({
    selector : 'fn-hot',
    templateUrl : './hot-film.component.html',
    styleUrls : ['hot-film.component.scss']
})

export class HotFilmComponent implements OnInit {
    
    public combineFilmList : CombineFilm[] = [];
    public imgPath : string;
    public currentId : number;
    public videoUrl : string ; 

    constructor(private serivce : Service,
        private router: Router) {

    }

    ngOnInit() {
        this.videoUrl = '../video';
        this.serivce.getRequest('film/home').then((result : CombineFilm[] | null) => {
            if ( result && result.length > 0 ) {
                this.combineFilmList = [...result,...result];
                this.imgPath = this.combineFilmList[0].homeFilm.img;
                this.currentId = this.combineFilmList[0].homeFilm.id;
            }
        })
    }


    public mouseover(combineFilm : CombineFilm) {
        this.imgPath = combineFilm.homeFilm.img;
        this.currentId = combineFilm.homeFilm.id;
        
    }


}