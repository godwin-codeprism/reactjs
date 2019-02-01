import React, {Component} from 'react';
import './MovieSearch.css';
class MoviesSearch extends Component {
    originalMovies = [];
    state = {
      movies: [],
      searchQuery: '',
    }
    componentDidMount() {
      fetch('https://gist.githubusercontent.com/yannski/3019778/raw/dfb34d018165f47b61b3bf089358a3d5ca199d96/movies.json')
        .then(movies => movies.json())
        .then((movies) => {
          this.originalMovies = movies;
          this.setState({ movies: movies })
        }).catch((e) => {
          
        });;
    }
    onSearch = (event) => {
      let title = event.target.value;
      this.doSearch(title);
    }
    doSearch(title) {
      if (!title || title == '') {
        this.setState({ searchQuery: '', movies: this.originalMovies });
        return;
      }
      
      const filteredItems = this.originalMovies.filter(item => {
        let smalltitle = title.toLowerCase();
        return item.title.toLowerCase().includes(smalltitle) || item.title.toLowerCase() == smalltitle;
      });
      this.setState({ searchQuery: title, movies: filteredItems });
    }
    handleTitleInput = e => {
      const itemText = e.target.value
      this.doSearch(itemText);
    }
    render() {
      
      return (
        <div className="quiz-window" style={{minHeight:'500px'}}>
        <div className="quiz-window-header">
            <div className="quiz-window-title">Movies List</div>
        </div>
        <div className="quiz-window-body">
            <div className="gui-window-awards">
            <ul className="guiz-awards-row guiz-awards-header">
                <li className="guiz-awards-header-star">&nbsp;</li>
                <li className="guiz-awards-header-title">Title</li>
                <li className="guiz-awards-header-track">Rating</li>
            </ul>
            <div className="tbody-contaianer">
            {this.state.movies && this.state.movies.map((item, i) => {
                return (<ul className={`guiz-awards-row ${ i % 2 === 0 ? 'guiz-awards-row-even' : 'guiz-awards-row-odd' }`}>
                <li className="guiz-awards-star"><img alt='' src={item.cover_url} className="Movie-Image" /></li>
                <li className="guiz-awards-title">{item.title}
                    <div className="guiz-awards-subtitle">{item.description}</div>
                </li>
                <li className="guiz-awards-track">{item.rating}</li>
                </ul>)
            })}
            </div>
            </div>
        </div>
        <div className={`search-box ${this.state.searchQuery ? 'activeSearch': ''}`}>
                <input type="text" placeholder="Type to search" className="search-txt" placeholder="Search Movie"
              value={this.state.searchQuery}
              onChange={this.handleTitleInput}/>
                <a href="" className="search-btn" onClick={this.onSearch}>
                        <i className="fa fa-search"></i>
                </a>
            </div>
        </div>
      );
    }
  }

  export default MoviesSearch;