import {Map, List, fromJS} from 'immutable';

// Normal Javascript
const book = {
  title: 'Pride and Prejudice',
  authors: ['Jane Austen']
};

// To create the equivalent in Immutable
const immutableBook = Map({
  title: 'Pride and Prejudice',
  authors: List(['Jane Austen'])
});

// Or...
const immutableBook = fromJS(book);