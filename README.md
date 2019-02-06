# bookr-backend

# get method endpoints
get method `https://bookr-app-backend.herokuapp.com/api/book-collection`
  - retrive list of books from database

get method `https://bookr-app-backend.herokuapp.com/api/book-review/book_review/:book_id`
  - retrive reviews for selected book id, and book details

get method `https://bookr-app-backend.herokuapp.com/api/book-review/all_reviews`
  - retrive list of all reviews
  - for testing purposes

get method `https://bookr-app-backend.herokuapp.com/api/user-access/users`
  - retive list of users from database
  - for testing purposes


# user endpoints for login and registration

post method `https://bookr-app-backend.herokuapp.com/api/user-access/login`
  - login through this endpoint
  - schema {`username`, `password`}

post method `https://bookr-app-backend.herokuapp.com/api/user-access/register`
  - create a new user through this endpoint
  - schema {`username`, `password`}


# Book review endpoints, protected, use for production
post method `https://bookr-app-backend.herokuapp.com/api/book-review/add_review/:book_id`
  - add a new review for a book from logged in user
  - protected endpoint
  - schema { `review`, `rating` }
  - rating interger from 0 to 5
  - review is a string

delete method `https://bookr-app-backend.herokuapp.com/api/book-review/delete_review/:book_id`
  - delete a review for a book from logged in user
  - protected endpoint

put method `https://bookr-app-backend.herokuapp.com/api/book-review/edit_review/:book_id`
  - edit a review for a book from looged in user
  - protected endpoint
  - schema { `review`, `rating` }
  - rating interger from 0 to 5
  - review is a string


# Book review endpoints, unprotected, use for testing
post method `https://bookr-app-backend.herokuapp.com/api/book-review/add_review/:book_id/:user_id`
  - add a new review for a book from logged in user
  - unprotected endpoint
  - schema { `review`, `rating` }
  - rating interger from 0 to 5
  - review is a string

delete method `https://bookr-app-backend.herokuapp.com/api/book-review/delete_review/:book_id/:user_id`
  - delete a review for a book from logged in user
  - unprotected endpoint

put method `https://bookr-app-backend.herokuapp.com/api/book-review/edit_review/:book_id/:user_id`
  - edit a review for a book from looged in user
  - unprotected endpoint
  - schema { `review`, `rating` }
  - rating interger from 0 to 5
  - review is a string

# Book endpoints, currently unprotected, will be protected in final
post method `https://bookr-app-backend.herokuapp.com/api/book-collection/add_book/`
  - add a new book
  - unprotected endpoint for now
  - schema required { `title`, `author`, `publisher` }
  - schema optional { `year`, `cover_url`, `short_description`, `full_description` }

delete method `https://bookr-app-backend.herokuapp.com/api/book-collection/delete_book/:book_id`
  - delete a book
  - unprotected endpoint for now

put method `https://bookr-app-backend.herokuapp.com/api/book-collection/edit_book/:book_id`
  - edit a book
  - unprotected endpoint for now
  - schema required { `title`, `author`, `publisher` }
  - schema optional { `year`, `cover_url`, `short_description`, `full_description` }


# routes
  - `/api/user-access/`
  - `/api/book-collection/`
  - `/api/book-review/`
