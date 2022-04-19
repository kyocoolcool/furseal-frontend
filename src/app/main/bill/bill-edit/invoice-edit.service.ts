import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';
import {Bill} from '../bill.model';

@Injectable()
export class BillEditService implements Resolve<any> {
  apiData: any;
  onBillEditChanged: BehaviorSubject<any>;
  id;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.onBillEditChanged = new BehaviorSubject({});
  }

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    let currentId = Number(route.paramMap.get('id'));
    return new Promise<void>((resolve, reject) => {
      Promise.all([this.getApiData(currentId)]).then(() => {
        resolve();
      }, reject);
    });
  }

  /**
   * Get API Data
   */
  getApiData(id: number): Promise<any[]> {
    const url = `http://localhost:9000/bills/${id}`;
    this.id = id;
    return new Promise((resolve, reject) => {
      this._httpClient.get(url).subscribe((response: any) => {
        this.apiData = response;
        this.onBillEditChanged.next(this.apiData);
        resolve(this.apiData);
      }, reject);
    });
  }

  updateBill(bill: Bill): Promise<any[]> {
    const url = `http://localhost:9000/bills/${bill.billId}`;
    return new Promise((resolve, reject) => {
      this._httpClient.put(url,bill).subscribe((response: any) => {
        this.apiData = response;
        this.onBillEditChanged.next(this.apiData);
        resolve(this.apiData);
      }, reject);
    });
  }
}
