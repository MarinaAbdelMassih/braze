import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learnQuillLib';

  editorModules = {
    toolbar: [['bold', 'italic'],
      ['code-block'],
      ['image']
    ],
  };
}
