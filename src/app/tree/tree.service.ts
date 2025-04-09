import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { treeNodes } from '../mockData';
import { TreeNode } from './interfaces';

@Injectable({ providedIn: 'root' })
export class TreeService {
  getData(): Observable<TreeNode[]> {
    return of(treeNodes);
  }
}
