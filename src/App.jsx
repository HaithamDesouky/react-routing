import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import HomeView from './views/HomeView';
import BookListView from './views/BookListView';
import SingleBookView from './views/SingleBookView';
import MissingPageView from './views/MissingPageView';
import './App.css';
//EXACT TAG IS IMPORTANT BUT ONLY ADD WHEN NECESSARY
//ALL ROUTES NEED TO BE IN BROWSER ROUTER
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
          <Link to="/books/ABC">Single Book</Link>
        </nav>
        <Switch>
          <Route path="/" component={HomeView} exact />
          <Route path="/books" component={BookListView} exact />
          <Route path="/books/:id" component={SingleBookView} exact />
          <Route path="/" component={MissingPageView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
