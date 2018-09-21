import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $:any;

@Component({
    selector: 'tienda',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit{
    public titulo;
    public nombreDelParque: string;
    public miParque;

    constructor(){
        this.titulo = 'Esta es la tienda';
    }

    ngOnInit(){
        $('#textojq').hide();
        $('#botonjq').click(function(){
            console.log('click desde jquery');
            $('#textojq').slideToggle();
        });

        $("#caja").dotdotdot({});
    }

    mostrarNombre(){
        console.log(this.nombreDelParque);
    }

    verDatosParque(event){
        console.log(event);
        this.miParque = event;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    }

}