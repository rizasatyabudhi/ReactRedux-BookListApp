// selectBook is an action creator , it returns an Action

export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  };
}
