import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';

const api="http://localhost:5555/project/"


@Injectable({
  providedIn: 'root'
})
export class DataService {

saveData(data)
{
  return this.httpClient.post(api,data)
}

getData()
{
  return this.httpClient.get(api)
}


  constructor(
    private httpClient:HttpClient) { }
}
