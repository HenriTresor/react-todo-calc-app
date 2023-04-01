  import React, { useRef, useState, useEffect } from "react";
import { Card, Button, TextField, Box, Alert, Typography } from "@mui/material";
import { Delete, Edit, Add,Done, CheckBox } from "@mui/icons-material";

const Header = () => {
  let [taskList, setTaskList] = useState([]);
  let [isError, setIsError] = useState(false);
  let [isTaskDone, setIsTaskDone] = useState(false)
  let inputRef = useRef(null);

  useEffect(() => {
    setTaskList(taskList);
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }, [taskList]);

  
  const addTask = () => {

    if (inputRef.current.value != "") {
      setTaskList([
        ...taskList,
        {
          id: taskList.length + 1,
          task: inputRef.current.value,
        },
      ]);
      setIsError(false);
    } else {
      setIsError(true);
    }

      inputRef.current.value = null;
      inputRef.current.focus()
  };

  const delTask = (id) => {
    let newTasks = taskList.filter((task) => task.id !== id);
    setTaskList(newTasks);
  };

  const checkDone = (id) => {
    setIsTaskDone(!isTaskDone)
  }
  return (
      <>
      <Card elevation={6} sx={{ padding: 3 }}>
        <Typography
          variant="h4"
          sx={{
            marginBottom: 3,
          }}
        >
          Simple ToDo Application
        </Typography>
        <TextField
          fullWidth
          sx={{ marginBottom: 2 }}
          label="Enter The Task"
          variant="outlined"
          type="text"
          inputRef={inputRef}
        />
        {isError ? <Alert severity="error">Please Enter a Value</Alert> : null}
        <Button variant="contained" onClick={addTask} startIcon={<Add />}>
          Add
        </Button>
      </Card>

      <Box>
        <Card elevation={2}>
          {taskList != "" ? (
            taskList.map((task) => {
              return (
                <Box
                  key={task.id}
                  sx={{
                    padding: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: isTaskDone ? "green" : "white",
                    color: !isTaskDone ? "black" : "white"
                  }}  

                >
                  <Typography component="p" variant="h4">
                    {task.task}
                  </Typography>
                  <Box>
                    <Button
                      onClick={(id) => delTask(task.id)}
                      variant="outlined"
                      color="warning"
                    >
                      <Delete>Delete</Delete>
                    </Button>
                    <Button>
                      <Edit>Edit</Edit>
                    </Button>
                    <Button onClick={(id)=>checkDone(task.id)}>
                      <Done>Done</Done>
                    </Button>
                      </Box>
                </Box>
              );
            })) : (

              <Box sx={{textAlign:'center', padding:3}}>
                <Typography component="h4" variant="h4">
                  No Tasks Found
                </Typography>
             </Box>
            )}
        </Card>
      </Box>
    </>
  );
};

export default Header;
