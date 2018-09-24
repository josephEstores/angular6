import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new-app';
  
  constructor() {
    /**this.title = 'Test' papalitan ung title na new-app to Test
     * ng serve -o --port=3333 mag open ng browser with the port 3333
     * ng serve -o --aot ahead of time binubuild na nya agad, dinedetect kung may problema ba
     * ng g c component/component_name mag generate ng component with the paths
     * g => generate ; c=> component
     * 
     */
  }
}
