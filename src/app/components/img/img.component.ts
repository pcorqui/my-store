import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit, OnDestroy} from '@angular/core';


@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{

 @Input() imgInput: string= '';
 @Output() loaded = new EventEmitter();
 counter = 0;

  imgDefault = "https://www.m2crowd.com/core/i/placeholder.png";


  constructor() { 
    console.log('constructor','imgValue =>', this.imgInput);
  }
  
  ngOnChanges(): void {
      //before render
      //changes inputs -- times
  }

  ngOnInit(): void {

    //before render
    //async - fetch -- once time
    console.log('ngOnInit','imgValue =>', this.imgInput);
  }

  ngAfterViewInit(): void {
      //after render
      //hadler childred, cuando se hayan cardado en el dom
  }

  ngOnDestroy(): void {
      //delete
      console.log('ngOnDestroy');
  }

  //este es mandado a llamar por el html cuando hay un error
  //(error) para indicar que algo fallo
  imgError(){
    console.log("cargada imagen vacia")
    this.imgInput = this.imgDefault;
  }

  //(load) para indicar que todo cargo bien
  imgLoaded(){
    console.log('loaded hijo');
    this.loaded.emit(this.imgInput);
  }
}
