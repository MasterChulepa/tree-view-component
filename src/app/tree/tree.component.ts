import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeNode } from './interfaces';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('expandCollapse', [
      transition(':enter', [
        style({ height: '0', overflow: 'hidden' }),
        animate('300ms ease-out', style({ height: '*' })),
      ]),
      transition(':leave', [
        style({ overflow: 'hidden' }),
        animate('300ms ease-in', style({ height: '0' })),
      ]),
    ]),
  ],
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent {
  @Input() treeData: TreeNode[] | undefined;
}
