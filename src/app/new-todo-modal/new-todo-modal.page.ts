import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-new-todo-modal',
  templateUrl: './new-todo-modal.page.html',
  styleUrls: ['./new-todo-modal.page.scss'],
})
export class NewTodoModalPage implements OnInit {

  @Input() modalController: ModalController;
  public todo = {
    'title':'teste',
    'description': ''
  }

  constructor(private apiService: ApiService, public alertController: AlertController) { 
    this.todo.title = 'teste'
    this.todo.description = 'testd'
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss(null);
  }

  async submitForm(){   
    console.log(this.todo) 
    if(this.todo.title == ''){
      const alert = await this.alertController.create({
        header: 'Aviso',
        message: 'Preencha o campo Título!',
        buttons: ['OK']
      });
      await alert.present();
    }
    else{
      this.apiService.postToDo(this.todo).subscribe((result:any) => {
      this.modalController.dismiss(result);
      })
    }
  }

  bind_value_title($event) {
    this.todo.title = $event.target.value;
  }
  bind_value_description($event) {
    this.todo.description = $event.target.value;
  }


}
