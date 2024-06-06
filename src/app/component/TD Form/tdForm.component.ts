import { Component, ElementRef, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { IGender, Iinfo } from "src/app/module/data.interface";


@Component({
    selector : 'app-tdform',
    templateUrl : './tdForm.component.html',
    styleUrls : ['./tdForm.component.scss']
})

export class TdFormComponent{

    info : Iinfo = {
            "username": "JhonDoe",
            "email": "jD@gmail.com",
            "contact": "145648621321",
            "secretquestion": "favouriteBook",
            "answer": "Thomus",
            "isAccept": true,
            "gender": "Male"
        }
    
    gender : Array<IGender> = [
        {
            gen : 'Male',
            id : 1
        },
        {
            gen : 'Female',
            id : 3
        }
    ]

    @ViewChild('signUp') signUpRef !: NgForm;
    
    onSignUp( ){
        console.log(this.signUpRef.value);
        this.signUpRef.reset()
        // if (signUp.valid) {
        //     console.log(signUp.value)
        //     signUp.reset()
        // }
    }

    onEdit(){
        this.signUpRef.form.patchValue(this.info)
    }
}