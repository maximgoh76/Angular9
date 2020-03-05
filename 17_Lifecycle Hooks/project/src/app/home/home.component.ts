import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    parentMsg = "test0";
    counter = 1;
    showChild = true;
    changeMsg() {
        this.parentMsg = `test${this.counter++}`;
    }

    toggleChild() {
        this.showChild = !this.showChild;
    }
}