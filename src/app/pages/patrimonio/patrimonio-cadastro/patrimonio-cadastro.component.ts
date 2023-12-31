import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Patrimonios } from 'src/app/core/models/patrimonios.model';
import { Regex } from 'src/app/core/validators/regex';


@Component({
  selector: 'app-patrimonio-cadastro',
  templateUrl: './patrimonio-cadastro.component.html',
  styleUrls: ['./patrimonio-cadastro.component.css']
})
export class PatrimonioCadastroComponent implements OnInit {

   regex = new Regex();
   salvando: boolean = false;
   patrimonio = new Patrimonios();
   nome: string;
   idPatrimonio: number;
   patrimonios: Patrimonios[] | undefined;

  constructor(){ }

  ngOnInit(){
      // this.patrimonios = [
      //   {empresa: "empresa 1"},
      //   {empresa: "empresa 2"},
      //   {empresa: "empresa 3"},
      //   {empresa: "empresa 4"}
      // ]
  }

  salvar(form: NgForm){
    console.log(this.patrimonio);
    this.salvando = true;
  }

}
