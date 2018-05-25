import { Injectable } from '@angular/core';
import { UserAction } from '../actions/user.actions';
import { apply, put, take, takeEvery, call, actionChannel, takeLatest } from 'redux-saga/effects';

@Injectable()
export class UserSaga {

    sagas : any;
    constructor(private userAction : UserAction){
        this.sagas = [apply(this, this.loadUserSaga)];
    }


    * loadUserSaga() {
        const channel = yield actionChannel(this.userAction.loadUser);
        yield takeLatest(channel,this.loadUser);
    }   

    * loadUser() {
        yield put(this.userAction.loadUserSuccess());
    }
} 