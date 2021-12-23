import { Component ,OnInit} from '@angular/core';

import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  form!: FormGroup;


 
  tasks :any;
  title = 'frontend';
  data: any;
  todoclear :any='';
  task: any;
  constructor( private formBuilder : FormBuilder, private router:Router, private toastr: ToastrService,
    private route: ActivatedRoute) { }




  ngOnInit(): void {

  }


  
}
