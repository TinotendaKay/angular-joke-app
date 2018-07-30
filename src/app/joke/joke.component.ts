import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from './model/joke.model';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  @Input() joke: Joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();
  constructor() { }

  ngOnInit() {
  }

  deleteJoke(joke: Joke) {
    this.jokeDeleted.emit(joke);
  }

}
