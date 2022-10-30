import React from "react";
import { useState } from "react";


export const Test = () => {
	const [num,setNum ] = useState(0);
	const onClickButton = () => {
		setNum(num + 1);
	};
	return (
		<>
      <h1>Hello</h1>
			<button onClick={onClickButton}>ボタン</button>
			<p> {num} </p>
    </>
	)};