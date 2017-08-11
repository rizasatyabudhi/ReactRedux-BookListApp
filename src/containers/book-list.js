// Renders List of Books
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';


class BookList extends Component {
  renderList() {
    return this.props.books.map(book => (
      <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
        className="list-group-item"
      >
        {book.title}
      </li>
        ));
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// THE GLUE BETWEEN REACT and REDUX
function mapStateToProps(state) {
  // Whatever is returned will show up as props on (this.props)
  // inside of BookList
  return {
    books: state.books,
  };
}

// Anything returned from this function will end up as PROPS
// on the BookList container
// for Action
function mapDispatchToProps(dispatch) {
  // Whenever selectedBooks is called , the result should be passed
  // to all reducers

 // selectBook : selectBook
 // Will be available as props for bookList (this.props.selectBook)
  return bindActionCreators({ selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
