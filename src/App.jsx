import React from "react";
import { useState } from "react";
import { Box } from "@chakra-ui/react"
import Title from './commponent/title'
import TodoList from './commponent/todoList'



export const App =() => {

    return(
      <>
        <Box bg="gray" p={5} color="white" textAlign="center" margin= "0px auto"  maxWidth="80%" height="100%" paddingBottom="50px" marginTop="100px">
          <Title />
          <TodoList />
        </Box>
      </>
    );
  };
