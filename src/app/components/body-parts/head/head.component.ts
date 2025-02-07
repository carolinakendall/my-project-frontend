import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { DiseaseService } from 'src/app/service/disease.service'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

private apiUrl = 'http://localhost:8080/api/recipes'; 

epidemicData: any = null;
error: string | null = null;
myApiData: any = null;
recipeForm: FormGroup;
successMessage: string = ''; 
errorMessage: string = ''; 
  


  constructor(private diseaseService: DiseaseService, private httpClient: HttpClient, private fb: FormBuilder) {
    this.recipeForm = this.fb.group({
      name: [''], 
      ingredients: this.fb.array([])  
    });
  }

  ngOnInit(): void {
    this.diseaseService.getEpidemicData().subscribe(
      (response) => {
        this.epidemicData = response; 
      },
      (error) => { 
        this.error = 'Error fetching data. Please try again later.'; 
      }
    );
  }

 getAllRecipes(): void {
  this.httpClient.get(this.apiUrl).subscribe(
    (response) => {
      this.myApiData = response; 
    },
    (error) => {
      this.error = 'Error fetching recipes.';
    }
  );
}



get ingredients() {
  return this.recipeForm.get('ingredients') as FormArray;
}

addIngredient() {
  const ingredientForm = this.fb.group({
    name: [''], 
    quantity: [0]  
  });
  this.ingredients.push(ingredientForm);
}

removeIngredient(index: number) {
  this.ingredients.removeAt(index);
}

createRecipe() {
  const newRecipe = this.recipeForm.value;

  this.httpClient.post(this.apiUrl, newRecipe).subscribe({
    next: (response) => {
      this.successMessage = 'Recipe successfully created!';
          setTimeout(() => {
            this.successMessage = '';
          }, 3000);
    },
    error: (error) => {
      this.errorMessage = 'Failed to create recipe. Please try again.';
      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
    }
  });

}
}
