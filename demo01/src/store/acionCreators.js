import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST, UPDATE_LIST, SAVE_LIST, CHANGE_NAME, 
    CHANGE_ID, CHANGE_DEP, CANCEL, SEARCH } from './actionTypes'
import axios from 'axios'

// input标签改变
export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

// 增加
export const addItemAction = () => ({
    type: ADD_ITEM
})

// 删除
export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})

// 得到数据列表
export const getListAction = (data) => ({
    type: GET_LIST,
    data
})

// 修改数据
export const updateItemAction = (index)=>({
    type: UPDATE_LIST,
    index
})

// 修改姓名
export const changeNameInputAction = (value)=>({
    type: CHANGE_NAME,
    value
})

// 修改工号
export const changeIdInputAction = (value)=>({
    type: CHANGE_ID,
    value
})

// 修改部门
export const changeDepInputAction = (value)=>({
    type: CHANGE_DEP,
    value
})

// 保存数据
export const saveItemAction = (index)=>({
    type: SAVE_LIST,
    index
})

// 取消
export const cancelItemAction = (index)=>({
    type: CANCEL,
    index
})

// 查询
export const searchItemAction = ()=>({
    type: SEARCH
})

// 得到数据
export const getTodoList = () => {
    return (dispatch) => {
        axios.post('https://mock.mengxuegu.com/mock/605c34250d58b864da03da62/ReduxDemo01/getListData')
            .then((res) => {
                const data = res.data
                const action = getListAction(data)
                dispatch(action)
            })
    }
}