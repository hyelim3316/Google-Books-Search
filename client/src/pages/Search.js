import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API"
import SearchForm from "../components/SearchForm";
import Card from "../components/Card"
import BooksInfo from "../components/BooksInfo"

class Search extends Component {
  state = {
    books: [],
    title: ""
  };

  handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    API.searchBooks(this.state.title)
      .then(res => {
        this.setState({
          books: res.data.items,
          title: ""
        });
        console.log(this.state.books);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
      </>
    );
  }
}
export default Search;