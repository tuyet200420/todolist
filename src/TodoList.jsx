import { useState } from 'react';
import { Form, Input, Button, Card, Space } from 'antd';
import history from './history';
import 'antd/dist/antd.css';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { addToCartAction } from './redux/actions'

function TodoList() {
  const [listItem, setListItem] = useState([]);
  const { taskList } = useSelector((state) => state.todoListReducer);
  console.log("🚀 ~ file: App.jsx ~ line 8 ~ App ~ listItem", listItem)
  const dispatch = useDispatch();
  const createTask = (values) => {
    console.log("🚀 ~ file: App.jsx ~ line 15 ~ createTask ~ values", values)
    dispatch(addToCartAction({
      data: {
        id: uuidv4(),
        ...values,
      }
    }))
  };

  const [seachKey, setSeachKey] = useState("");
  const itemFilter = listItem.filter((item) => {
    return item.title.toUpperCase().indexOf(seachKey.toUpperCase()) !== -1;
  })

  const { Search } = Input;
  const onSearch = (value) => {
    setSeachKey(
      value
    )
  };
  const componentItem = () => {
    return taskList.map((item, index) => {
      return (
        <Card title="Default size card" extra={<Button onClick={() => history.push(`/detail/${item.id}`)} >More</Button>} style={{ width: 300 }}>
          <p>{item.title}</p>
          <p>{item.description}</p>

        </Card>)

    })
  }

  return (
    <>
      <h1
        style={{ textAlign: "center" }}
      >To Do List</h1>

      <Form


        initialValues={{ title: '', description: '' }}
        style={{
          margin: " 0 auto",
          width: "600px"
        }}

        onFinish={createTask}

      >
        <Form.Item

          label="Title:"
          name="title"
          rules={[
            {
              required: true,
              message: 'Please input',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description:"
          name="description"
          rules={[
            {
              required: true,
              message: 'Please input',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          style={{ textAlign: "center" }}
        >
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
      <div style={{ textAlign: "center" }}>
        <Search placeholder="input search text"
          onSearch={onSearch} style={{ width: 600 }}

        />
      </div>
      <Space>
        {componentItem()}
      </Space>

    </>
  );
}

export default TodoList;
