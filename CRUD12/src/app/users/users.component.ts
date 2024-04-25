import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  StudentArray: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  name: string = "";
  email: string = "";
  gender: string = "";


  currentStudentID = "";

  constructor(private http: HttpClient) {
    this.getAllStudent();
  }

  ngOnInit(): void {
  }

  getAllStudent() {
    this.http.get('https://localhost:7045/api/Brand')
      // https://localhost:7045//api/Brand
      // GetBrands
      .subscribe((resultData: any) => {
        this.isResultLoaded = true;
        console.log(resultData);
        this.StudentArray = resultData;
        console.log(this.StudentArray)
      });
  }

  register() {
    // this.isLogin = false; 
    alert("sucess");
    let bodyData = {
      "name": this.name,
      "email": this.email,
      "gender": this.gender,

    };

    this.http.post("https://localhost:7045/api/Brand", bodyData).subscribe((resultData: any) => {
      // https://localhost:7045//api/Brand
      console.log(resultData);
      alert("Student Registered Successfully")
      this.getAllStudent();
      //  this.name = '';
      //  this.address = '';
      //  this.mobile  = 0;
    });
  }

  setUpdate(data: any) {
    this.name = data.name;
    this.email = data.email;
    this.gender = data.gender;
    this.currentStudentID = data.id;

    

  }

  UpdateRecords() {
    let brand =
    {
      "id":this.currentStudentID,
      "name": this.name,
      "email": this.email,
      "gender": this.gender,
    };

    this.http.put("https://localhost:7045/api/Brand" + "/" + this.currentStudentID, brand).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Student Registered Updateddd")
      this.getAllStudent();

    });
  }

  save() {
    if (this.currentStudentID == '') {
      this.register();
      this.clearValues();
    }
    else {
      this.UpdateRecords();
      this.clearValues();
    }

  }
clearValues(){
  this.name= "";
  this.email= "";
  this.gender= "";


  this.currentStudentID = "";
}

  setDelete(data: any) {
    this.http.delete('https://localhost:7045/api/Brand/' + data.id).subscribe((resultData: any) => {
      https://localhost:7045//api/Brand
      console.log(resultData);
      alert("Student Deletedddd")
      this.getAllStudent();
    });
  }
}
