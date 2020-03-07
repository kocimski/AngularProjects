import { Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit, 
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy{
@Input('srvelement') element: {type: string, name: string, content: string}
@Input() name: string;
@ViewChild('header',{static: true}) header: ElementRef;
@ContentChild('contentParagraph',{static: true}) paragraph: ElementRef;
  constructor() { 
    console.log('constractor called!');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("ngonChange called!");
    console.log(changes);

  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text content: ' + this.header.nativeElement.textContent);
    console.log('Text content of Paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log('ngDoCheck Called');
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit called");
    console.log('Text content of Paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit called");
    console.log('Text content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }

}
