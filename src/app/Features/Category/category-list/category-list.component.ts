import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../Services/category.service';
import { Category } from 'src/Models/category.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
 // categories:Category[] | undefined;
 categories$:Observable<Category[]> | undefined;
constructor(private categoryService:CategoryService){

}
  ngOnInit(): void {
   this.categories$= this.categoryService.GetAllCategory();
    
  }

}
