import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  newServerName = '';//you also don't need to use these variable when u r using localref
  newServerContent = '';//you also don't need to use these variable when u r using localref
  @ViewChild('servernameinput' ,{static: true}) servernameinput?:ElementRef;
  /**using viewchild */
  @Output() addServer = new EventEmitter<{addedServer:string,addedContent:string}>();
  @Output() addBlueprint = new EventEmitter<{addedServer:string,addedContent:string}>();
  constructor() {}

  ngOnInit(): void {}
  onAddServer(servernameinput:HTMLInputElement) {
    //console.log(servernameinput.value)
    this.addServer.emit({
      /* addedServer:servernameinput.value    only when u r using local ref*/
      /* below syntax is used only when u r using local ref in combination with @ViewChild()*/
      addedServer:this.servernameinput?.nativeElement.value,
      addedContent:this.newServerContent
     });
  }
  onAddBlueprint(servernameinput:HTMLInputElement){
    //console.log('clicked2')
    this.addBlueprint.emit({
      addedServer:this.servernameinput?.nativeElement.value,//this syntax in order to get input values from localref instead of ngmodel  
      addedContent:this.newServerContent
    });
  }
}
