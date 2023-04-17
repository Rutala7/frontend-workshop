import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

const fb = new FormBuilder().nonNullable;

@Component({
  selector: 'app-filter-posts',
  templateUrl: './filter-posts.component.html',
  styleUrls: ['./filter-posts.component.scss']
})
export class FilterPostsComponent {
@Output() filterChange = new EventEmitter<string>();   // this output parameter will be shown in parent's template.

  filterForm = fb.group(
    {'filter': [''],}
  );

  submit() {
    if(this.filterForm.valid) {
      this.filterChange.emit(this.filterForm.value.filter);  
    }
  }
}

// When we press Filter button, we then call submit() method, 
// which takes our inserted value (this.filterForm.value.filter) and emits it via @Output parameter to the parent.
// Then we need to filter that emitted value in the parent's component.