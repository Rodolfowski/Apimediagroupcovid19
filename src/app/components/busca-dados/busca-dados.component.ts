import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from "@angular/forms";
import { CountryCheckService } from 'src/app/services/country-check.service';
import { RegistroModel } from 'src/app/models/RegistroModel';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-busca-dados',
  templateUrl: './busca-dados.component.html',
  styleUrls: ['./busca-dados.component.css']
})
export class BuscaDadosComponent implements OnInit {
  registroSection!: FormGroup;
  countries:any;
  todosOsPaises:any;
  tempCountry:any;
  currentCountry:String='';
  generalData:any
  confirmed:String ='';
  recovered:String ='';
  deaths:String ='';
  lastPositionRegister!: number;
  register:any;
  lastCountryViewed:String='';

  constructor(private corona:CountryCheckService,private formBuilder:FormBuilder,private apiService: ApiService){}
  ngOnInit(){
    this.readRegistrosSize();
    this.createForm(new RegistroModel());
    this.corona.getAllData().subscribe((data)=>{
    this.countries = data;
    this.todosOsPaises = Object.keys(this.countries);
    })
  }
  createForm(registro:RegistroModel){
    this.registroSection = this.formBuilder.group({
      country:[registro.country,[Validators.required]],
      date:Date()
    })
  }
  readRegistrosSize(){
    this.apiService.getRegistros().subscribe(
      data => {
        console.log(data);
        this.lastPositionRegister = Object.keys(data).length -1;
        this.register = Object.values(data)
        if (this.lastPositionRegister < 0){
          this.lastCountryViewed = "Nenhuma pesquisa foi realizada"
        } else {
        this.readRegistroLast();
        }
      },
      error => {
       console.log(error);
      }
      );
    }
    readRegistroLast(){
      this.lastCountryViewed = "Ultima consulta: "+this.register[this.lastPositionRegister].country+" em "+this.register[this.lastPositionRegister].date;
    }

  onSubmit(){
    this.tempCountry = Object.values(this.registroSection.value)
    this.corona.getCountryData(this.tempCountry[0]).subscribe((data)=>{
    this.generalData = Object.values(data.All);
      this.apiService.createRegistro(this.registroSection.value).subscribe(
        (res) => {
          this.currentCountry = this.generalData[3];
          this.confirmed = this.generalData[0];
          this.recovered = this.generalData[1];
          this.deaths = this.generalData[2];
          this.readRegistrosSize();
          alert('Pesquisa feita com sucesso!')
         }, (error) => {
          alert('Ocorreu um erro! \nOs dados não foram carregados e nenhum log foi salvo ')
          console.log(error);
        });
  })
    }

  }
