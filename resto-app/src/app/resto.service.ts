import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestoService {
 url='http://localhost:3000/restraunt';
 userurl='http://localhost:3000/users';
  constructor(private http:HttpClient) { }

  getList()
{
  return this.http.get(this.url)
}
 postList(data){
  return this.http.post(this.url,data)
 }

 delData(id){
  return this.http.delete(`${this.url}/${id}`)
 }

 getCurrentData(id){
  return this.http.get(`${this.url}/${id}`)
 }

 updateCurData(id,data){
   return this.http.put(`${this.url}/${id}`,data)
 }

 postUser(data){
   return this.http.post(this.userurl,data)
 }

}
