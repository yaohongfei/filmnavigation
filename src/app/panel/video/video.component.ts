import { Component,OnInit} from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { Service } from '../../service/service';
import {  Film ,HomeFilm ,CombineFilm  } from '../../model/film.model';
import {DomSanitizer} from '@angular/platform-browser';  

@Component({
    selector : 'fn-video',
    templateUrl : './video.component.html',
    styleUrls : ['video.component.scss']
})

export class VideoComponent implements OnInit {

    constructor(private router: Router,
        private route: ActivatedRoute,
        private service : Service,
        private sanitizer: DomSanitizer) {

    }

    public filmId : number;
    public filmInfo : Film;
    public filmUrl : any;
    public filmUrlMp4 : any;
    public filmUrlOgg : any;
    public filmUrlWebm : any;
    public filmUrlSwf : any;

    ngOnInit () {
        this.route.params.subscribe(params => {
            this.filmId = params['id'];
            if (this.filmId) {
                this.service.getRequest("film/"+this.filmId).then( (film : Film) => {
                    this.filmUrl = this.sanitizer.bypassSecurityTrustResourceUrl(film.path);
                    this.filmUrlMp4 = this.sanitizer.bypassSecurityTrustResourceUrl(this.buildFilmPath(film.path) + '.mp4');
                    this.filmUrlOgg = this.sanitizer.bypassSecurityTrustResourceUrl(this.buildFilmPath(film.path) + '.ogg');
                    this.filmUrlSwf = this.sanitizer.bypassSecurityTrustResourceUrl(this.buildFilmPath(film.path) + '.swf');
                    this.filmUrlWebm = this.sanitizer.bypassSecurityTrustResourceUrl(this.buildFilmPath(film.path) + '.webm');
                    (document.getElementById('film_play') as HTMLVideoElement).load();
                } ).catch(error => {

                })
            }
          
        })

    }

    buildFilmPath (path : string) : string {
        let index = path.lastIndexOf('.');
        return path.substring(0,index);

    }

}