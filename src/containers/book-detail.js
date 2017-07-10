import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    // Initial check , if this.props.book doesn't defined yet, return this div
    if (!this.props.book) {
      return <div> Please select a book first </div>;
    }

    return (
      <div>
        <h3>Details for: </h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}


// Whatever returned here, will be props for bookDetail
function mapStateToProps(state) {
  return {
    book: state.activeBook,
  };
}

export default connect(mapStateToProps)(BookDetail);
