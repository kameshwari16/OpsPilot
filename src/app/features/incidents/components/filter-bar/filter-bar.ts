import { Component,model } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-filter-bar',
  styleUrl: './filter-bar.css',
  templateUrl: './filter-bar.html',
})
export class FilterBar {
  search=model('');
  severity=model('All');
  status=model('All');
}
