import {Component} from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

  localArray: any = localStorage.getItem('posts')

  posts: any = JSON.parse(this.localArray) ?? [];

  selectedEditItem: any = null;
  index: any = null;
  searchValue:any = '';
  postsSearch:any = [];

  handleUserData(data: any) {
    this.posts.push(data)
    this.saveData(this.posts);
  }

  saveData(arr: []) {
    let newArr: any = JSON.stringify(arr);
    localStorage.setItem('posts', newArr)
  }

  removeItem(index: number) {
    this.posts.splice(index, 1);
    this.saveData(this.posts);
  }

  editItem(index: number) {
    let item = this.posts[index];
    this.index = index;
    this.selectedEditItem = {
      'title': item.title,
      'description': item.description,
    }
  }

  handleUserDataUpdate(data: any) {
    this.posts[this.index] = data;
    this.index = null;
    this.selectedEditItem = null
  }

  handlesearch(){
    this.postsSearch = [];
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].title.includes(this.searchValue)){
        this.postsSearch.push(this.posts[i]);
      }
    }
  }



}
