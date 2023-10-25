import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddCategoryRequest } from 'src/Models/add-category-request.model';
import { Category } from 'src/Models/category.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) 
  { 

  }

  addCategory(model:AddCategoryRequest):Observable<void>{
    return this.http.post<void>(environment.ApiBaseUrl+'/api/category',model)
  }

  GetAllCategory():Observable<Category[]>{
    return this.http.get<Category[]>(environment.ApiBaseUrl+'/api/Category/GetAllCategory');
  }

}
