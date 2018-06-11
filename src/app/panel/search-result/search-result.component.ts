import { Component,OnInit} from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { Service } from '../../service/service';

@Component({
    selector : 'fn-search-result',
    templateUrl : './search-result.html',
    styleUrls : ['search-result.scss']
})

export class SearchResultComponent implements OnInit {

    public params : any;
    
    constructor(private router: Router,
        private route: ActivatedRoute,
        private service : Service) {

    }

    ngOnInit() {
        this.route.params.subscribe( (param) => {
            this.params = param;
            if ( this.params.operate ) {
                if ( 'byArea'  === this.params.operate) {

                }
                if ( 'byType'  === this.params.operate) {

                }
            }
        } )
    }

}