import { Component,  } from '@angular/core';
import { trigger,animate,style,transition,keyframes,} from '@angular/animations';
import { reduce } from 'rxjs';

@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css'], 
  animations:[   trigger("moveInLeft",[      transition("void=> *",[style({transform:"translateX(300px)"}),        animate(200,keyframes([         style({transform:"translateX(300px)"}),         style({transform:"translateX(0)"})           ]))]),
transition("*=>void",[style({transform:"translateX(0px)"}),        animate(100,keyframes([         style({transform:"translateX(0px)"}),         style({transform:"translateX(300px)"})           ]))])             ])
]
  

})

export class AppComponent {
  
  title = 'todo-app';
  todoArray:string[]=[];
  
  

  addTodo(value:string){   
    if(value!==""){ 
    this.todoArray.push(value)
    // console.log(this.todoArray)
    }else{
      alert('Field required **')
    }
    }

deleteItem(todo:string){   
  for(let i=0 ;i<= this.todoArray.length ;i++){    
    if(todo== this.todoArray[i]){     
      this.todoArray.splice(i,1)   
    }
  }  
}
// submit Form

todoSubmit(value:any){
  let toda:String=value.todo;


    if(toda!==""&& toda!==null&& toda!==undefined){    
    this.todoArray.push(value.todo)
      
  // this.todoForm.reset()
      } else{      
    alert('Field required **')    
  }      
} 
}




