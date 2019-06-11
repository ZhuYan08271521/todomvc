//添加todo
import React, { Component } from 'react'
import '../style/todo.css'
import TodoList from './TodoList'
import Forms from './Forms'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: '',
            show: 0,
            index: 0,
            showEdit: false
        };
    }
    handleChange = (e) => {
        this.setState({ text: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now(),
            flag: false
        };
        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }));
    }

  deleteDate = (index) => {
      // console.log(this.state.items)
      // this.state.items.
      var templist = this.state.items;
      templist.splice(index,1);
      this.setState({
        items: templist
      });
  }

  changeFlag = (index) => {
      var templist = this.state.items;
      templist[index].flag = !templist[index].flag;
      this.setState({
          items: templist
      });
  }

  selectDate(flag) {
      this.setState({
          show: flag
      });
  }

  openUpdate = (index) => {
      this.setState({
          index: index,
          showEdit: true
      });
      this.input.value = this.state.items[index].text;

  }

  updateDate(flag) {
      if (flag) {
          const inpVal = this.input.value;
          if (inpVal.trim().length>0) {
              let templist = this.state.items;
              let index = this.state.index;
              templist[index].text = inpVal;
              this.setState ({
                  items: templist
              });
          }
      }
            this.setState({
                showEdit: false
            })
    }
    componentDidMount(){
        let data = [{
            text: 'abc',
            flag: true,
            id: 1
        },{
            text: 'def',
            flag: false,
            id: 2
        }]
        setTimeout(() => {
            this.setState({
                items: data
            });
        },3000)
    }
    render() {
        const { items, show, text, showEdit } = this.state
        return (
            <div>
                <h3>TODO</h3>
                <div className = {items.length!==0 ? 'closeLoading' : ''}>loading......</div>
                <TodoList items = { items }
                    show = { show }
                    deleteDate = { this.deleteDate }
                    selectDate = { this.selectDate }
                    changeFlag = { this.changeFlag }
                    openUpdate = { this.openUpdate }/>
                <button onClick = {this.selectDate.bind(this,0)}>全部</button>
                <button onClick = {this.selectDate.bind(this,1)}>已完成</button>
                <button onClick = {this.selectDate.bind(this,2)}>未完成</button>
                <Forms handleSubmit = {this.handleSubmit} text = {text} handleChange = {this.handleChange}/>
                <div className={showEdit ? 'showEdit' : 'closeEdit'}>
                    <input type='text' ref={input => this.input = input}/><br/>
                    <button onClick={this.updateDate.bind(this,true)}>确定</button>
                    <button onClick={this.updateDate.bind(this,false)}>取消</button>
                </div>
            </div>
            );
        }
    }


export default Todo
