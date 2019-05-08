import React, { Component } from 'react';
import ToDoItems from './ToDoItems';
import './ToDoList.css';

class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(elem) {
        if (this._inputElement.value !== '') {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }
        this._inputElement.value = '';
        console.log(this.state.items);
        elem.preventDefault();
    }

    deleteItem(key) {
        let filteredItems = this.state.items.filter((item) => 
        {
            return(item.key !== key)
        });

        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <div className='todolist-main'>
              <div className='add-elem'>
                <form onSubmit={this.addItem}>
                  <input ref={(a) => this._inputElement = a}
                        placeholder='Add Items...'></input>
                  <button type='submit'>+</button>
                </form>
              </div>
              <ToDoItems entries={this.state.items}
                delete={this.deleteItem}/>
            </div>
        );
    }
}

export default ToDoList;