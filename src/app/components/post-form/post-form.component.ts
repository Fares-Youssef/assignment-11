import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
  @Output() userData = new EventEmitter<any>();

  model ={
    title : '',
    description:''
  }

  handleSubmit(){
    // console.log(this.model)

    let modelData ={
      title : this.model.title,
      description : this.model.description
    }
    this.model.title =''
    this.model.description =''

    this.userData.emit(modelData)
  }


}
