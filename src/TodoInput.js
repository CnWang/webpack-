import React, { Component } from 'react';

export default class TodoInput extends Component {
    render() {
        return <input type="text"
            className="new-todo"
            placeholder="What needs to be done?" 
            autoFocus
            value={this.props.content}
            onKeyPress={this.submit.bind(this)}
            onChange={this.changeTitle.bind(this)} />
    }
    submit(e) {
        if (e.key === 'Enter') {
            this.props.onSubmit(e)
        }
    }

    changeTitle(e) {
        this.props.onchange(e)
    }
}
