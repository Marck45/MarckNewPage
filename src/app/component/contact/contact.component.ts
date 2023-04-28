import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Cliente } from 'src/app/clientes/shared/cliente';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent implements OnInit {
  
  [x: string]: any;

  formCliente!: FormGroup;

  constructor(){ }
  

  ngOnInit(): void {
    
    this.createForm(new Cliente());
    
  }

  createForm(cliente: Cliente) {

    this.formCliente = new FormGroup({

      nome: new FormControl(cliente.nome),
      email: new FormControl(cliente.email),
      titulo: new FormControl(cliente.titulo),
      mensagem: new FormControl(cliente.mensagem),

    })

  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formCliente.value);

    // Usar o método reset para limpar os controles na tela
    this.formCliente.reset(new  Cliente());
  }

}