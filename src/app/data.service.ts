import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';

const api="http://localhost:5555/project/"


@Injectable({
  providedIn: 'root'
})

export class DataService {
  
  constructor( private httpClient:HttpClient) { }

  getDataById(id)
  {
    return this.httpClient.get(api+id)
  }

saveData(data)
{
  return this.httpClient.post(api,data)
}

getData()
{
  return this.httpClient.get(api)
}

updateData(id,data)
{
  return this.httpClient.put(api+id,data)
}

deleteData(id)
{
  return this.httpClient.delete(api+id)
}

  
}
