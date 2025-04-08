import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeNode } from './interfaces';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent {
  @Input() treeData: TreeNode[] | undefined;
}
