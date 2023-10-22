import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent  {

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  img: string = '';

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;

    // code
  }
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = '../../../assets/image/default.png';
  //counter = 0;
  //counterFn: number | undefined;

  constructor() {
    // before render
    // NO async -- once time

  }

  // ngOnChanges(changes: SimpleChanges) {
  //   // before - during render
  //   // changes inputs -- multiples times

  //   // if (changes.){
  //   // // code
  //   // }
  // }

  // ngOnInit(): void {
  //   // before render
  //   //async - fetch -- once time

  //   // this.counterFn = window.setInterval(() => {
  //   //  this.counter += 1;
  //     // console.log('run counter');
  //   //}, 1000);
  // }

  // ngAfterViewInit() {
  //   // after render
  //   // handler childrend

  // }

  // ngOnDestroy() {
  //   // delete

  //   //window.clearInterval(this.counterFn);
  // }

  imgError() {
    this.img = this.imageDefault;
    this.img = 'asas';
  }

  imgLoad() {

    this.loaded.emit(this.img);
  }

}
