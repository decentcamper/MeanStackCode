import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-recipe-form-component',
  templateUrl: './recipe-form-component.component.html',
  styleUrls: ['./recipe-form-component.component.css']
})
export class RecipeFormComponentComponent implements OnInit {

  fileToUpload: File = null;
  fileName: string ="";

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }


  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.fileName = this.fileToUpload.name;
    console.log(this.fileToUpload);
   // this.uploadFileToActivity();
  }



  uploadFileToActivity() {
    this.postFile(this.fileToUpload).subscribe(data => {
      // do something, if upload success
    }, error => {
      console.log(error);
    });
  }

  postFile(fileToUpload: File): Observable<Object> {
    const endpoint = 'your-destination-url';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name) ;
    //return this.httpClient.post(endpoint, formData, { headers: yourHeadersConfig })
    return this.httpClient.post(endpoint, formData)

  }
}
