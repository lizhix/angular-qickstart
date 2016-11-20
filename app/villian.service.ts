import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Villian } from './villian';


/**
 * A Serive will always import Injectable
 * Because it was meant to be reuseable
 */

// This thing (@Injectable) looks just like @Component, we can 
// Probably put {}'s inside the () and add settings

@Injectable()
export class VillianService {  // this = VillianService
  private villainsUrl = 'app/villains';  // URL to web api

  constructor(private http: Http) { }



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getvillains(): Promise<Villian[]> {
    return this.http.get(this.villainsUrl)
      .toPromise()
      .then(response => response.json().data as Villian[])
      .catch(this.handleError);
  }

  private headers = new Headers({ 'Content-Type': 'application/json' });

  update(Villian: Villian): Promise<Villian> {
    const url = `${this.villainsUrl}/${Villian.id}`;
    return this.http
      .put(url, JSON.stringify(Villian), { headers: this.headers })
      .toPromise()
      .then(() => Villian)
      .catch(this.handleError);
  }


  create(name: string): Promise<Villian> {
    return this.http
      .post(this.villainsUrl, JSON.stringify({ name: name }), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

delete(id: number): Promise<void> {
  const url = `${this.villainsUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}

  getvillainsSlowly(): Promise<Villian[]> {
    return new Promise<Villian[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getvillains());
  }

  getVillian(id: number): Promise<Villian> {
    return this.getvillains()
      .then(villains => villains.find(Villian => Villian.id === id));
  }
}

