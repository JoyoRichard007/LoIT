import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  // connection du dashboard(front) au backend

  apiUrl = 'http://localhost:4000/utilisateur';
  articleUrl = 'http://localhost:4000/article';


  // get all data
  getAllData():Observable<any>
  {
    return this._http.get(`${this.apiUrl}`);
  }
  getAllArticle():Observable<any>
  {
    return this._http.get(`${this.articleUrl}`);
  }

  // Insérer des données
  createData(data:any):Observable<any>{
    console.log(data,'createapi=>');
    return this._http.post(`${this.articleUrl}`,data);
  }
  // Supprimer des données
  deleteData(id:any):Observable<any>{
    let ids = id;
    return this._http.delete(`${this.articleUrl}/${ids}`);
  }
  // Maj Données
  updateData(data:any,id:any):Observable<any>
  {
    let ids = id;
    return this._http.put(`${this.articleUrl}/${ids}`,data);
  }
  //Obtenir une seule donnée
  getSingleData(id:any):Observable<any>
  {
     let ids = id;
     return this._http.get(`${this.articleUrl}/${ids}`);
  }
}
