import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class BookItem extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    editBook: PropTypes.func.isRequired,
    deleteBook: PropTypes.func.isRequired,
    completeBook: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
    this.statusChange = this.statusChange.bind(this);
    this.state = {
      completed: this.props.book.completed,
    }
  }

  statusChange() {
    const {book, updateBookStatus} = this.props;
    const status =  !book.status || book.status === 'unread' ? 'completed' : 'unread'
    this.setState({completed: status})
    updateBookStatus(book.id, status);
  }
  
  render() {
    const { book, updateBookStatus} = this.props
    const {volumeInfo} = book;
    const bookCompleted = book.status === 'completed';
    
     const element = (
        <div className="view">
          <input className="toggle"
                 type="checkbox"
                 checked={bookCompleted}
                 onChange={() => this.statusChange()} />
          <label>
            {volumeInfo.title}
          </label>
          <p style={{fontSize: '12px', textAlign: 'right', marginRight: '10px'}}>
            Author: {volumeInfo.authors[0]}
          </p>
        </div>
      )

    return (
      <li className={classnames({
        completed: bookCompleted,
      })}>
        {element}
      </li>
    )
  }
}
