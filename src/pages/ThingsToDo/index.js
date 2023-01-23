import {
  Box,
} from '@mui/material';

import ToDoList from '../../components/ToDoList';

const ThingsToDo = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
    >
      <ToDoList title='Things to do:' />
    </Box>
  )
}

export default ThingsToDo;