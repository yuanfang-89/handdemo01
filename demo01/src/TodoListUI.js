import React from 'react';
import 'antd/dist/antd.css'
import { Input, Button, Divider,Popconfirm } from 'antd'
import { PlusOutlined } from '@ant-design/icons';


const TodoListUI = (props) => {
    return (
        <div style={{ margin: '20px' }}>
            <span style={{ fontWeight: 'bold' }}>成员管理</span>
            <Divider />
            <div>
                <Input.Search
                    onSearch={props.searchItem}
                    placeholder='搜索成员姓名'
                    style={{ width: '250px', marginRight: '20px' }}
                    onChange={props.changeInputValue}
                    value={props.inputValue}
                />
                <Button
                    type="primary"
                    onClick={props.clickBtn}
                    icon={<PlusOutlined />}
                >增加</Button>
            </div>
            <table border="1" cellSpacing='0' width='70%' style={{ marginTop: '30px' }}>
                <thead>
                    <tr>
                        <th width='20%'>成员姓名</th>
                        <th width='15%'>工号</th>
                        <th width='20%'>所属部门</th>
                        <th width='15%'>操作</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        props.searchList.map((item, index) => {
                            if (item.isSaved) {
                                return (
                                    <tr key={index} style={{ height: '30px' }}>
                                        <td>{item.name}</td>
                                        <td>{item.id}</td>
                                        <td>{item.department}</td>
                                        <td>
                                            <span onClick={() => { props.updateItem(index) }} style={{ color: '#1890FF' }}>编辑 | </span>
                                            <span style={{ color: '#1890FF' }}>
                                                <Popconfirm
                                                    title="是否要删除此行?"
                                                    onConfirm={() => { props.deleteItem(index) }}
                                                    onCancel={function(){}}
                                                    okText="确定"
                                                    cancelText="取消"
                                                >
                                                    <a href="#"> 删除</a>
                                                </Popconfirm>
                                               
                                                </span>
                                        </td>
                                        
                                    </tr>
                                )
                            } else {
                                return (
                                    <tr key={index} style={{ height: '30px' }}>
                                        <td>
                                            <Input value={props.name}
                                                size="small"
                                                onChange={props.changeNameInputValue}
                                            >
                                            </Input>
                                        </td>
                                        <td>
                                            <Input value={props.id}
                                                size="small"
                                                onChange={props.changeIdInputValue}
                                            >
                                            </Input>
                                        </td>
                                        <td>
                                            <Input value={props.dep}
                                                size="small"
                                                onChange={props.changeDepInputValue}
                                            >
                                            </Input>
                                        </td>
                                        <td>
                                            <span style={{ color: '#1890FF' }} onClick={() => { props.saveItem(index) }}>保存 | </span>
                                            <span onClick={() => { props.cancelItem(index) }} style={{ color: '#1890FF' }}>取消</span>
                                        </td>
                                    </tr>
                                )
                            }

                        })
                    }
                </tbody>
            </table>
            {/* <div style={{ margin: '10px', width: '300px' }}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(Item, index) => (<List.Item onClick={() => { props.deleteItem(index) }}>{Item}</List.Item>)}
                />
            </div> */}
        </div>
    );
}

export default TodoListUI;