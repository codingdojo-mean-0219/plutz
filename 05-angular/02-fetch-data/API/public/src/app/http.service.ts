import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http:HttpClient) {
    this.getPokemon();
   }

  getPokemon(){
    let charmander = this._http.get('https://pokeapi.co/api/v2/pokemon/4/');
    charmander.subscribe(data=>{
      for(var i of data["abilities"]){
        console.log(i.ability.name);
        if (i.ability.name === "solar-power"){
          var url = i.ability.url;
        }
      }
    

    let ability = this._http.get(url);
    
    ability.subscribe(data=>{
      console.log("There are "+ data['pokemon'].length+" pokemon with the " data['name']+" ability");
      for(var i of data["pokemon"]){
        console.log(i.pokemon.name + " has the ability " + data.name);
      }
    });
    });
   }

}
