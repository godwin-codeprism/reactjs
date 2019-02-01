import React, {Component} from 'react';
import './library.css';
class Library extends Component {
    state = {
      books: [],
      currentAuthor: '',
      currentTitle: '',
      currentItem: { key: '', currentAuthor: '', currentTitle: '' }
    }
    onAdd = (event) => {
      const result = event.target.value;
      this.setState({ books: result });
    }
    onDelete = (key) => {
      const filteredItems = this.state.books.filter(item => {
        return item.key !== key
      })
      this.setState({ books: filteredItems });
    }
    handleTitleInput = e => {
      const itemText = e.target.value
      console.log('handleTitleInput', itemText);
      this.setState({
        currentTitle: itemText,
      })
    }
    handleAuthorInput = e => {
      const itemText = e.target.value
      console.log('handleAuthorInput', itemText);
      this.setState({
        currentAuthor: itemText,
      })
    }
    addItem = () => {
      const currentItem = { currentAuthor: this.state.currentAuthor, currentTitle: this.state.currentTitle, key: Date.now() };
      this.setState({ books: [...this.state.books, currentItem] });
    }
    render() {
      console.log('this.state.books:: ', this.state.books);
      return (
        <div className="Library">
        <div className="dynamicForm">
            <div className="dynamicForm__buttonWrapper">
                <input
                placeholder="Title"
                ref={this.inputTitle}
                value={this.state.currentTitle}
                onChange={this.handleTitleInput}
                className="dynamicForm__itemInput"
                />
                <input
                placeholder="Author"
                ref={this.inputAuthor}
                value={this.state.currentAuthor}
                onChange={this.handleAuthorInput}
                className="dynamicForm__itemInput"
                />
                <button type="submit" onClick={this.addItem} className="dynamicForm__button">Add Book</button>
            </div>
            <div >
                <table rules="all" className="gtable">
                <tbody>
                    <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Delete</th>
                    </tr>
                    {this.state.books && this.state.books.map((item, i) => {
                    return (<tr key={i} className="dynamicForm__itemInput">
                        <td><div>
                        {item.currentTitle}</div></td>
                        <td>
                            <div>{item.currentAuthor}</div>
                        </td>
                        <td>
                        <div className="dynamicForm__itemButton" onClick={() => { this.onDelete(item.key) }}></div>
                        </td>
                    </tr>)
                    })}
                </tbody>
                </table>
            </div>
          </div>
        </div>
      );
    }
  }

  export default Library;