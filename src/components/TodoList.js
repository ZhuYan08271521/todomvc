import React, { Component } from 'react'

class TodoList extends Component {
    render() {
        var datas = this.props.items;
        var show = this.props.show;
        var shownDatas = datas.filter(function (data) {
            switch (show) {
                case 1:
                    return data.flag;
                case 2:
                    return !data.flag;
                default:
                    return true;
            }
          }, this);

      return (
          <ul>
            {shownDatas.map((value,index) => (
              <li key = {value.id} className = {value.flag ? 'compeleted' : ''}>
                <input type = 'checkBox'
                    checked = {value.flag}
                    onChange = {this.props.changeFlag.bind(this,index)}
                />{value.text}
                
                <button onClick = {this.props.deleteDate.bind(this,index)}>
                    删除
                </button>
                <button onClick = {this.props.openUpdate.bind(this,index)}>
                    编辑
                </button>
              </li>
            ))}
          </ul>
        );
      }
  }

  export default TodoList
