# bookr-backend

# endpoints
get method `https://bookr-app-backend.herokuapp.com/api/book-collection`
  - retrive list of books from database

get method `https://bookr-app-backend.herokuapp.com/api/book-collection/book_review/:book_id`
  - retrive reviews for selected book id, and book details

get method `https://bookr-app-backend.herokuapp.com/api/book-collection/all-reviews`
  - retrive list of all reviews
  - for testing purposes

get method `https://bookr-app-backend.herokuapp.com/api/user-access/users`
  - retive list of users from database
  - for testing purposes


#user endpoints for login and registration
post method `https://bookr-app-backend.herokuapp.com/api/user-access/login`
  - login through this endpoint

post method `https://bookr-app-backend.herokuapp.com/api/user-access/register`
  - create a new user through this endpoint


# review endpoints
post method `https://bookr-app-backend.herokuapp.com/api/book-collection/add_review/:book_id`
  - add a new review for a book from logged in user
  - protected endpoint

delete method `https://bookr-app-backend.herokuapp.com/api/book-collection/delete_review/:book_id`
  - delete a review for a book from logged in user
  - protected endpoint

put method `https://bookr-app-backend.herokuapp.com/api/book-collection/edit_review/:book_id`
  - edit a review for a book from looged in user
  - protected endpoint


# review endpoints unprotected for testing
post method `https://bookr-app-backend.herokuapp.com/api/book-collection/add_review/:book_id/:user_id`
  - add a new review for a book from logged in user
  - unprotected endpoint

delete method `https://bookr-app-backend.herokuapp.com/api/book-collection/delete_review/:book_id/:user_id`
  - delete a review for a book from logged in user
  - unprotected endpoint

put method `https://bookr-app-backend.herokuapp.com/api/book-collection/edit_review/:book_id/:user_id`
  - edit a review for a book from looged in user
  - unprotected endpoint


# book endpoints for testing atm
post method `https://bookr-app-backend.herokuapp.com/api/book-collection/add_book/`
  - add a new book
  - unprotected endpoint for now

delete method `https://bookr-app-backend.herokuapp.com/api/book-collection/delete_book/:book_id`
  - delete a book
  - unprotected endpoint for now

put method `https://bookr-app-backend.herokuapp.com/api/book-collection/edit_book/:book_id`
  - edit a book
  - unprotected endpoint for now
