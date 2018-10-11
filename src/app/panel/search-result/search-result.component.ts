import { Component,OnInit} from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { Service } from '../../service/service';
import { Film } from '../../model/film.model';

@Component({
    selector : 'fn-search-result',
    templateUrl : './search-result.component.html',
    styleUrls : ['search-result.component.scss']
})

export class SearchResultComponent implements OnInit {

    public params : any;
    public filmList : Film[];

    public pagination : {
        pageIndex : 10,
        pageSize : 1
    }
    
    constructor(private router: Router,
        private route: ActivatedRoute,
        private service : Service) {

    }

    //pagination
    ngOnInit() {
        this.route.params.subscribe( (param) => {
            this.params = param;
            let pagination : any = null;
            if (this.params.pagination) {
                pagination = this.params.pagination;
            }
            else 
            {
                pagination = this.pagination;
            }

            if ( this.params.operate && this.params.condition ) {
                let url = `film/search/${this.params.operate}/${this.params.condition}`;
                this.service.getRequest(`film/search/${this.params.operate}/${this.params.condition}`).then((result : any) => {
                    if (result && result.length > 0) {
                        this.filmList = result;
                    }   
                })
            }
        } )
    }

}