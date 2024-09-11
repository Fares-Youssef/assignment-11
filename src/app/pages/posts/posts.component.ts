import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

   localArray:any = localStorage.getItem('posts')

  posts: any = JSON.parse(this.localArray) ?? [];

  handleUserData(data : any){
    this.posts.push(data)
    this.saveData(this.posts);
  }

  saveData(arr:[]){
    let newArr:any = JSON.stringify(arr);
    localStorage.setItem('posts',newArr)
  }

  removeItem(index: number) {
    this.posts.splice(index, 1);
    this.saveData(this.posts);

  }

}
