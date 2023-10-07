import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../pacientes.service';
import { Regex } from 'src/app/core/validators/regex';
import { NgForm } from '@angular/forms';
import { Pacientes } from 'src/app/core/models/pacientes.model';

@Component({
  selector: 'app-paciente-cadastro',
  templateUrl: './paciente-cadastro.component.html',
  styleUrls: ['./paciente-cadastro.component.css']
})
export class PacienteCadastroComponent implements OnInit{
   regex = new Regex();
   salvando: boolean = false;
   paciente = new Pacientes();
   nome: string;
   idPaciente: number;
   pacientes: Pacientes[] | undefined;

   constructor(
    private paciService: PacientesService
   ){}

   ngOnInit() {
     this.paciente.status = true;

    // this.pacientes = [
    //   {sexo:'Masculino'},
    //   {sexo:'Feminino'},
    //   {sexo:'Megazord'},

    // ] 
       
   }

  salvar(form: NgForm){
    console.log(this.paciente);
    this.salvando = true;
  }

}
