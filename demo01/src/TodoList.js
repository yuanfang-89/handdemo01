import React, { Component } from 'react';
import store from './store'
import { addItemAction, changeInputAction, deleteItemAction, getTodoList, updateItemAction,
     saveItemAction, changeNameInputAction, changeIdInputAction, changeDepInputAction,
    cancelItemAction, searchItemAction } from './store/acionCreators'
import TodoListUI from './TodoListUI'



class TodoList extends Component {

    constructor(props) {
        super(props)
        // console.log(store.getState())
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.updateItem = this.updateItem.bind(this)
        this.changeNameInputValue = this.changeNameInputValue.bind(this)
        this.changeIdInputValue = this.changeIdInputValue.bind(this)
        this.changeDepInputValue = this.changeDepInputValue.bind(this)
        this.saveItem = this.saveItem.bind(this)
        this.cancelItem = this.cancelItem.bind(this)
        this.searchItem = this.searchItem.bind(this)
        store.subscribe(this.storeChange)

    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                name={this.state.name}
                id={this.state.id}
                dep={this.state.dep}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                searchList={this.state.searchList}
                deleteItem={this.deleteItem}
                updateItem={this.updateItem}
                changeNameInputValue={this.changeNameInputValue}
                changeIdInputValue={this.changeIdInputValue}
                changeDepInputValue={this.changeDepInputValue}
                saveItem={this.saveItem}
                cancelItem={this.cancelItem}
                searchItem={this.searchItem}
            />
        );
    }

    // 挂载完成渲染数据到界面
    componentDidMount() {
        const action = getTodoList()
        store.dispatch(action)
    }

    // 输入框改变
    changeInputValue(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    // state改变
    storeChange() {
        this.setState(store.getState())
    }

    // 添加
    clickBtn() {
        const action = addItemAction()
        store.dispatch(action)
    }

    // 删除
    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }

    // 编辑
    updateItem(index) {
        const action = updateItemAction(index)
        store.dispatch(action)
    }

    // 取消
    cancelItem(index){
        const action  = cancelItemAction(index)
        store.dispatch(action)
    }
    // 保存
    saveItem(index){
        const action  = saveItemAction(index)
        store.dispatch(action)
    }
    // 姓名输入框改变
    changeNameInputValue(e) {
        const action = changeNameInputAction(e.target.value)
        store.dispatch(action)
    }
    // 工号输入框改变
    changeIdInputValue(e) {
        const action = changeIdInputAction(e.target.value)
        store.dispatch(action)
    }
    // 部门输入框改变
    changeDepInputValue(e) {
        const action = changeDepInputAction(e.target.value)
        store.dispatch(action)
    }

    // 查询
    searchItem(){
        const action = searchItemAction()
        store.dispatch(action)
    }

}

export default TodoList;