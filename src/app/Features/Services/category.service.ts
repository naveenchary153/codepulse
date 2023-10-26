import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddCategoryRequest } from 'src/Models/add-category-request.model';
import { Category } from 'src/Models/category.model';
import { UpdateCategoryRequest } from 'src/Models/update-categry-requestmodel';
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

  GetCategoryById(id:string):Observable<Category>{
    return this.http.get<Category>(`${environment.ApiBaseUrl}/api/Category/${id}`);
  }

  UpdateCategorybyd(id:string,UpdateCategoryRequest:UpdateCategoryRequest):Observable<Category>{
    return this.http.put<Category>(`${environment.ApiBaseUrl}/api/Category/${id}`,UpdateCategoryRequest);
  }

  DeleteCategoryById(id:string):Observable<Category>{
    return this.http.delete<Category>(`${environment.ApiBaseUrl}/api/Category/${id}`);
  }

}
