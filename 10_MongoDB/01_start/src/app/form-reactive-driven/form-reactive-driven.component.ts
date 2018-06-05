import {ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import 'rxjs/Rx';

@Component({
  selector: 'app-form-reactive-driven',
  templateUrl: './form-reactive-driven.component.html',
  styleUrls: ['./form-reactive-driven.component.css']
})
export class FormReactiveDrivenComponent implements OnInit{

  searchField: FormControl;
  searches: string[] = [];

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(term => {
        this.searches.push(term);
      });
  }
}

