import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/Models/category.model';
import { CategoryService } from '../../Services/category.service';
import { UpdateCategoryRequest } from 'src/Models/update-categry-requestmodel';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit,OnDestroy {
 paramSubscription:Subscription | undefined
 editcategorySubscription:Subscription | undefined
 deletecategorySubscription:Subscription | undefined
 categories:Category | undefined
  id:string | null=null;
    constructor(private route:ActivatedRoute, private categoryservice:CategoryService,private router:Router){

    }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(parms)=>{
       this.id= parms.get('id');
       if(this.id){
        this.categoryservice.GetCategoryById(this.id).subscribe({
          next:(responce)=>{
           console.log(responce);
            this.categories=responce;
          }
        })
       }
      }
    })
  }

  ngOnDestroy(): void {
   this.paramSubscription?.unsubscribe();
   this.editcategorySubscription?.unsubscribe();
   this.deletecategorySubscription?.unsubscribe();
  }

  
  UpdateCategory():void{
    const UpdateCategoryRequest:UpdateCategoryRequest={
      name:this.categories?.name??'',
      urlHandle:this.categories?.urlHandle??''
    };
    if(this.id)
    this.editcategorySubscription=this.categoryservice.UpdateCategorybyd(this.id,UpdateCategoryRequest).subscribe({
      next:(responce)=>{
      this.router.navigateByUrl('/admin/categories');
      }
    })
  }


  Delete():void{
    if(this.id){
     this.deletecategorySubscription= this.categoryservice.DeleteCategoryById(this.id).subscribe({
        next:(responce)=>{
          this.router.navigateByUrl('/admin/categories');
          }
      })
    }
    
  }

}
