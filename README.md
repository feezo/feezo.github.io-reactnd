# MyReads Project

The purpose of the application is to help us manage the state of a list of books. Given the choice between 3 shelves: "Currently Reading", "Want to read" and "read".

You can see the state of the books in the main page (path: "/").

You can search for new books in the "/search" page.

Use the buttons Reading, Want to, Read and None to move the books to another shelf.

None allows us remove the book from every shelves.


# Install
download and install node.js
cd into directory in your local terminal
Start the development server with `npm start`
You will need `react-router-dom`



The main state with the list of searched books (result of the search in the search page) and the list of the books (with shelves) displayed in the main page lives in App.js and has its own state for the query.
