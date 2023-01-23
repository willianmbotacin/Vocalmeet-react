import { useState } from 'react';

import {
  Button,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Box,
  Divider,
  TextField,
} from '@mui/material';

import {
  Close as CloseIcon,
} from '@mui/icons-material'

const ToDoList = ({ title }) => {
  const [tasks, setTasks] = useState([]);

  // Add a new task to the list
  const addTask = (e) => {
    // Execute the function only if press Enter key or press the Add Task button
    if (e.key !== undefined && e.key !== 'Enter') return;

    // Get the input field and validate it
    const field = document.getElementById('new-task-field');
    if (field.value.trim().length <= 0) return;

    // Update tasks list
    setTasks([
      ...tasks, {
        description: field.value,
        isDone: false,
      }
    ])
    field.value = '';
  }

  // Mark and unmark task in the tasks list
  const toggleTask = (e, taskIndex) => {
    const updatedTask = {
      ...tasks[taskIndex],
      isDone: e.target.checked
    }

    let updatedTaskList = tasks;
    updatedTaskList[taskIndex] = updatedTask;

    setTasks([...updatedTaskList]);
  }

  // Delete task by index
  const deleteTask = (taskIndex) => {
    const newTasksList = tasks.filter((value, index) => index !== taskIndex);
    setTasks(newTasksList);
  }

  // Filter all done tasks
  const doneTasks = tasks.filter((value, index, array) => value.isDone === true);

  return (
    <Box
      sx={{
        flex: 1,
        maxWidth: 400,
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        fontWeight={500}
        textTransform='uppercase'
      >
        {title || 'To-do list'}
      </Box>
      <Divider sx={{ mb: 1 }} />
      <List>
        {tasks.length === 0 ?
          <Box
            display="flex"
            justifyContent="center"
            color='#949494'
            sx={{
              my: 1,
            }}
          >
            Nothing to do
          </Box> :
          tasks.map((task, index) => (
            <Box
              key={index}
              display='flex'
              justifyContent="center"
              alignItems="center"
            >
              <Checkbox
                onChange={e => toggleTask(e, index)}
              />
              <ListItem>
                <ListItemText
                  primary={task.description}
                  underline="always"
                  sx={{
                    textDecoration: task.isDone ? 'line-through' : 'none',
                  }}
                />
              </ListItem>
              <Button
                sx={{
                  color: 'black',
                  minWidth: 30,
                  width: 30,
                  height: 30,
                  backgroundColor: '#C8C8C8',
                  borderRadius: 0,
                }}
                onClick={e => deleteTask(index)}
              >
                <CloseIcon sx={{ fontSize: "15px" }} />
              </Button>
            </Box>
          ))}
      </List>
      <Divider sx={{ mb: 1 }} />
      <Box
        display="flex"
        justifyContent="center"
        fontWeight={500}
        textTransform='uppercase'
        sx={{
          mb: 2,
        }}
      >
        DONE: {doneTasks.length}
      </Box>
      <Box
        display='flex'
        justifyContent='space-between'
      >
        <TextField
          id="new-task-field"
          label="Enter new task"
          variant="outlined"
          size="small"
          sx={{
            flex: 1,
            mr: 1,
          }}
          onKeyDown={addTask}
        />
        <Button
          variant="contained"
          onClick={addTask}
        >Add Task</Button>
      </Box>
    </Box>
  )
}

export default ToDoList;