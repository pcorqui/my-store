import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

 @Input() imgInput: string= '';
 @Output() loaded = new EventEmitter();

  imgDefault = "https://www.m2crowd.com/core/i/placeholder.png";
  constructor() { }

  ngOnInit(): void {
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
