import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {HttpClient, HttpClientModule, HttpHeaders, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  form;             // The variable whihc encapsulates the form.
  //fileToUpload: any; // File which would be submitted to the server side.
  fileName : string; //File Name which is dsiplayed in the span below the image upload icon.
  imgNotLoaded: boolean = true; // to toggle the file upload icon and the image.
  imgPath:string; // To show the image in the UI. it serves as the value src attribute in the image.
  loading:boolean;
  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef, private httpClient: HttpClient) {}

  ngOnInit() {
    this.form= this.fb.group({
      //label : new FormControl("My Recipe", Validators.pattern('[\\w\\-\\s\\/]+')),
      label : new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      ingredientLines : new FormControl("",Validators.required ),
      directions : new FormControl("", Validators.required ),
      dietLabels: new FormControl("",Validators.required ),
      cautions: new FormControl("", Validators.required ),
      healthLabels: new FormControl("",Validators.required ),
      calories: new FormControl("",Validators.required ),
      totalWeight: new FormControl("",Validators.required ),
      totalTime: new FormControl("" ),
      servings: new FormControl("", this.numberOfServings),
      yield: new FormControl(""),
      /*fileName: new FormControl(null, Validators.required),*/ // Validators do not work on span elements since they cannot tell angular when the value changes....
      imgFile: new FormControl(null, Validators.required )

    });
  }


  get label() { return this.form.get('label'); }

  get servings() { return this.form.get('servings'); }

//Regular Expression: [\\w\\-s\\/]+

  onSubmit(mediaItem){
    const formModel = this.form.value;
    this.loading = true;
    // In a real-world app you'd have a http request / service call here like
    //this.http.post('apiUrl', formModel)
    console.log(formModel);
   this.httpClient.post('/api/post/recipe', formModel).subscribe(res => console.log(res));
    /*setTimeout(() => {
      console.log(formModel);
      alert('done!');
      this.loading = false;
    }, 1000);*/
  }

  /**
   * Validator for the servings...
   * @param control
   * @returns {any}
   */
  numberOfServings(control){
    if(control.value.trim().length ===0){
      return null;
    }
    let servings = parseInt(control.value);
    let minServing  = 0;
    let maxServing = 1000;

    if(servings>=minServing && servings<=maxServing){
      return null;
    }else{
      return {'numberOfServings': {
          minServing : 0,
          maxServing: 2100

        }};

    }
  }

  handleFileInput(event) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;

      this.fileName = file.name;
      reader.readAsDataURL(file);
      this.cd.markForCheck();
      reader.onload = (e:any) => {
        this.imgPath = e.target.result;
        this.imgNotLoaded = false;
        this.form.get("imgFile").setValue({
          fileName: file.name,
          fileType: file.type,
          value: reader.result.split(',')[1]
        });

        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }


}
