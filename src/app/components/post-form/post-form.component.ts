import {Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
  @Input() editedData :any;
  @Output() userData = new EventEmitter<any>();
  @Output() userDataUpdate = new EventEmitter<any>();
  model ={
    title : '',
    description:''
  }
  handleSubmit(){
    let modelData ={
      title : this.model.title,
      description : this.model.description
    }
    this.model.title =''
    this.model.description =''
    this.userData.emit(modelData)
  }
  handleEdit(){
    this.userDataUpdate.emit(this.editedData)
  }


}
