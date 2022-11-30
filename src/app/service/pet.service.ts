import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Pet} from "../model/Pet";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private backendUrl: string;

  constructor(private http: HttpClient) {
    this.backendUrl = `${environment.backendUrl}/pets`;
  }

  getPets(): Observable<any> {
    return this.http.get<Pet[]>(this.backendUrl).pipe(map(pets => pets.sort((a: Pet, b: Pet): number => a.name.localeCompare(b.name))));
  }

  addPet(pet: Pet) {
    return this.http.post(this.backendUrl, pet);
  }

  getPetByName(petName: string): Observable<Pet> {
    return this.http.get<Pet>(`${this.backendUrl}/${petName}`)
  }
}
