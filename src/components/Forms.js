import React, { Component } from 'react'

class Forms extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return(
            <form onSubmit = {this.props.handleSubmit}>
                  <label htmlFor = "todo">
                    What needs to be done?
                  </label>
                  <input
                    id = "todo"
                    onChange = {this.props.handleChange}
                    value = {this.props.text}
                  />
                  <button>
                    添加
                  </button>
              </form>
        )
    }
}
export default Forms
