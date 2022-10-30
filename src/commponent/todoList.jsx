import React from "react";
import { useState } from "react";
import { Box,Text,Table,Thead,Tbody,Tr,TableContainer,Td, Button } from "@chakra-ui/react"


const TodoList =() => {

	const [ todoText,setTodoText] = useState("");
	const [ todoList, setNewTodoList ] = React.useState([]);

	//inputフォームの状態を管理
	const onChangeTodoText = (e) => {
		setTodoText(e.target.value);
	}

	//追加ボタンを押すとタスク追加
	const onClickAdd = () => {
		if (todoText === "") return;
		const newTodo = {
			comment: todoText,
			status: "作業中"
		}
		//DOMが更新
		todoList.push(newTodo)
		//入力フォーム内を空に
		setTodoText("");
	}

	//削除機能
	const onClickDelete = (index) => {
		const deletedTodoList = [...todoList];
		deletedTodoList.splice(index,1);
		setNewTodoList(deletedTodoList);
	};

	//statusの切り替え
	const onClickSwitch = (index) => {
		const switchTodoList = [...todoList];
		if (switchTodoList[index].status === "作業中") {
			switchTodoList[index].status = "完了";
		} else if (switchTodoList[index].status === "完了") {
			switchTodoList[index].status = "作業中";
		}
		setNewTodoList(switchTodoList);
		};
	
			

	return(
		<>
		<TableContainer>
			<Table variant='simple' textAlign="center" margin="0px auto">
				<Thead fontSize='1.5em'>
					<Tr>
						<Td paddingRight="30">ID</Td>
						<Td paddingRight="30">タスク</Td>
						<Td paddingRight="30">状態</Td>
					</Tr>
				</Thead>
				<Tbody id="todo-body">
					{todoList.map((todo, index) => (
						<Tr>
							<Td paddingRight="30">{index}</Td>
							<Td paddingRight="30">{todo.comment}</Td>
							<Td paddingRight="30"><Button colorScheme='blue' onClick={() => onClickSwitch(index)}>{todo.status}</Button></Td>
							<Td paddingRight="30"><Button colorScheme='blue' onClick={() => onClickDelete(index)}>削除</Button></Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
			<h2>新規タスクの追加</h2>
			<div>
				<input value={todoText} onChange={onChangeTodoText} />
				<Button colorScheme='blue' onClick={onClickAdd}>追加</Button>
			</div>
		</>
	);
};

export default TodoList;