import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from 'src/Models/add-category-request.model';
import { CategoryService } from '../../Services/category.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy{
  model:AddCategoryRequest;
  private addCategorySubscription:Subscription | undefined;

constructor(private categoryservice:CategoryService,private router:Router){
  this.model={
    name:'',
    urlHandle:''
  }
}
  ngOnDestroy(): void {
   this.addCategorySubscription ?.unsubscribe();
  }

  AddCategory(){
    this.addCategorySubscription= this.categoryservice.addCategory(this.model).subscribe({
      next:(Response)=>{
      this.router.navigateByUrl('/admin/categories');
      },
      error:(error)=>{
        console.log("error");
      }
    });
  }
}
