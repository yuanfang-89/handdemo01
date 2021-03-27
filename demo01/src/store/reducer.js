import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST, UPDATE_LIST, SAVE_LIST, 
    CHANGE_NAME, CHANGE_ID, CHANGE_DEP, CANCEL, SEARCH } from './actionTypes'
const defaultState = {
    inputValue: '',
    name: '',
    id: '',
    dep: '',
    list: [

    ],
    searchList:[

    ],
    flag:0
}

const states = (state = defaultState, action) => {

    console.log(state, action)

    //Reducer里只能接收state，不能改变state
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }else if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))

        newState.flag = 1

        let key = newState.list.length+1
        newState.searchList.push({key:key,name:'',id:'',department:'',isSaved:false})
        newState.list.push({key:key,name:'',id:'',department:'',isSaved:false})
        
        return newState
    }else if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))

        let key = newState.searchList[action.index].key
        newState.searchList.splice(action.index, 1)
        for(let i=0;i<newState.list.length;i++){
            if(newState.list[i].key === key){
                newState.list.splice(i,1)
                break;
            }
        }
        
        
        return newState
    }else if (action.type === GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data.data.list
        newState.searchList = action.data.data.list
        return newState
    }else if (action.type === UPDATE_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.searchList[action.index].isSaved = false

        newState.name = newState.searchList[action.index].name
        newState.id = newState.searchList[action.index].id
        newState.dep = newState.searchList[action.index].department

        return newState
    }else if(action.type === CHANGE_NAME){
        let newState = JSON.parse(JSON.stringify(state))
        newState.name = action.value
        return newState
    }else if(action.type === CHANGE_ID){
        let newState = JSON.parse(JSON.stringify(state))
        newState.id = action.value
        return newState
    }else if(action.type === CHANGE_DEP){
        let newState = JSON.parse(JSON.stringify(state))
        newState.dep = action.value
        return newState
    }else if(action.type === SAVE_LIST){
        // 保存
        let newState = JSON.parse(JSON.stringify(state))

        // 如果name，id，dep都为空，则删除这一行
        if(newState.name===''&&newState.id===''&&newState.dep===''){
            let i = newState.list.length-1
            newState.searchList.splice(i, 1)
            newState.list.splice(i,1)
            return newState
        }

        let key = newState.searchList[action.index].key
        newState.searchList[action.index].name = newState.name
        newState.searchList[action.index].id = newState.id
        newState.searchList[action.index].department = newState.dep
        newState.searchList[action.index].isSaved = true

        for(let i=0;i<newState.list.length;i++){
            if(newState.list[i].key === key){
                newState.list[i] = newState.searchList[action.index]
                break;
            }
        }

        newState.name = ''
        newState.id = ''
        newState.dep = ''

        newState.flag = 0

        return newState
    }else if(action.type === CANCEL){
        let newState = JSON.parse(JSON.stringify(state))

        // 如果name，id，dep都为空，则删除这一行
        if(newState.flag === 1){
            let i = newState.list.length-1
            newState.searchList.splice(i, 1)
            newState.list.splice(i,1)

            newState.name = ''
            newState.id = ''
            newState.dep = ''
            return newState
        }

        newState.searchList[action.index].isSaved = true
        newState.list[action.index].isSaved = true
        return newState
    }else if(action.type === SEARCH){
        let newState = JSON.parse(JSON.stringify(state))
        let search = newState.inputValue
        let reg = new RegExp(search)
        newState.searchList = newState.list.filter((item)=>{ return reg.test(item.name)})
        return newState
    }

    return state
}
export default states