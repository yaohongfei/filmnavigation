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
    public areaList : any[];
    public typeList : any[];

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

        this.serivce.getRequest('film/attr').then(result => {
            if (result) {
                if ( result.area && result.area.length > 0 ) {
                    this.areaList = result.area;
                }
                if( result.type && result.type.length > 0 ) {
                    this.typeList = result.type;
                }
            } else {
                console.log(result);
            }
        })

    }


    public mouseover(combineFilm : CombineFilm) {
        this.imgPath = combineFilm.homeFilm.img;
        this.currentId = combineFilm.homeFilm.id;
        
    }


}