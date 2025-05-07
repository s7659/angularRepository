import { Component } from "@angular/core";
 


@Component({
    selector:'app-root',
    templateUrl:'app.Component.html',
    standalone:false,
})
export class AppComponent{
    x:number=5;
    
     time() {
        const thedate= new Date() ;
        const hour= thedate.getHours();
        let ichool='';
        console.log(hour);
        
        if (hour>=5 && hour<=12){
            ichool="בוקר טוב";

        }
        else if (hour>=12&&hour<=19){
            ichool="צהריים טובים ושמחים";
        }
        else{
            ichool="לילה טוב";
        }
        return ichool;
        
    }
    constructor(){

    }

}