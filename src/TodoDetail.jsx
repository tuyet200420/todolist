import history from "./history";
import { useState } from 'react';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { deleteToCartAction } from './redux/actions'
function Tododetail(props) {

    const { match } = props;
    const TaskId = match.params.id
    const { taskList } = useSelector((state) => state.todoListReducer);
    const dispatch = useDispatch();

    
    const TaskDetail = taskList.find((Task) => Task.id == TaskId);

    console.log("🚀 ~ file: todoDetail.jsx ~ line 13 ~ Tododetail ~ TaskDetail", TaskDetail)
    const handleDeleteTask = (id) => {
        dispatch(deleteToCartAction({
            id,
        }))
        history.push("/")
    }
    return (
        <>

            <Button onClick={() => history.goBack()}>
                Quay lại
            </Button>
            <div>{TaskDetail.title}</div>
            <div>{TaskDetail.description}</div>
            <Button onClick={() => handleDeleteTask(TaskDetail.id)}>
                xóa
            </Button>
        </>
    );
}
export default Tododetail