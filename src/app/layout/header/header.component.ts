import  { Component } from '@angular/core';
import { Service } from '../../service/service';
import { Router } from '@angular/router'

@Component({
    selector : 'fn-header',
    templateUrl : './header.component.html',
    styleUrls : ['./header.component.scss']
})

export class HeaderComponent {
    
    
    public searchCondition : string;

    constructor(private service : Service,
    private router : Router) {

    }

    public searchFilms() {
        this.service.getRequest('film/search/byText/' + this.searchCondition)
        .then((result : any) => {
            if (result && result.length > 0) {
                
            }
    })

} 

}
