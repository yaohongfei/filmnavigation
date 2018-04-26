import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { rootReducer } from './reducer/root.reducer';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
 
@NgModule({
    declarations : [],
    imports : [NgReduxModule],
    providers : [],
    exports : []
})

export class ReduxModule {
    constructor(ngRedux: NgRedux<{}>){
        ngRedux.configureStore(rootReducer,{},[createLogger(),createSagaMiddleware()]);
    }
}