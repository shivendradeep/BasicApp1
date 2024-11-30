import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements:[{ type: string; name: string; content: string }] = [{ type: 'blueprint', name: 'Tomcat', content: 'Test Server', }]

  onAddServer(eventData: { addedServer: string; addedContent: string }) {
    alert('triggered')
    this.serverElements.push({
      type: 'server',
      name: eventData.addedServer,
      content: eventData.addedContent,
    });
  }

  onAddBlueprint(eventData: { addedServer: string; addedContent: string }) {
    alert('triggered2')
    this.serverElements.push({
      type: 'blueprint',
      name: eventData.addedServer,
      content: eventData.addedContent,
    });
  }
}
