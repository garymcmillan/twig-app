import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  array = [1,2,3,4,5,6,7,8,9];
  formGroup = new FormGroup({
    numberOfChunks: new FormControl(1)
  });
  arrayChunks: Array<number>;

  chunkify() {
    console.log('chunkify');
    const a = this.array;
    let n = this.formGroup.value.numberOfChunks;

    if (n < 2)
      this.arrayChunks = this.array

    var len = a.length,
            out = [],
            i = 0,
            size;

    if (len % n === 0) {
        size = Math.floor(len / n);
        while (i < len) {
            out.push(a.slice(i, i += size));
        }
    }

    else {

        n--;
        size = Math.floor(len / n);
        if (len % size === 0)
            size--;
        while (i < size * n) {
            out.push(a.slice(i, i += size));
        }
        out.push(a.slice(size * n));

    }

    this.arrayChunks = out;
  }
}
