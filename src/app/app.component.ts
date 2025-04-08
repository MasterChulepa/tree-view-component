import { Component } from '@angular/core';
import { TreeComponent } from './tree/tree.component';
import { treeNodes } from './mockData';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Tree View Component</h1>
    <app-tree [treeData]="treeNodes"></app-tree>
  `,
  imports: [TreeComponent],
  styleUrl: './app.component.scss',
})
export class AppComponent {
  treeNodes = treeNodes;
}
