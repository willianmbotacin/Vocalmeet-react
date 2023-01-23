import { useState } from "react";
import {
  TextareaAutosize,
  Container,
  Button,
  Divider,
} from "@mui/material";
import { Box } from "@mui/system";

import codeValidator from "./validators/codeValidator";

const CodeValidator = () => {
  // States
  const [color, setColor] = useState('black');
  const [message, setMessage] = useState('');
  const [charCount, setCharCount] = useState([]);

  const handleKeyDown = () => {
    const codeField = document.getElementById('codeField');
    const validationResult = codeValidator(codeField.value);

    setMessage(validationResult.message);
    if (validationResult.valid) {
      setColor('#17B118');
      setCharCount(validationResult.charsCount)
    } else {
      setColor('red');
      setCharCount([])
    }
  }

  return (
    <Container>
      <TextareaAutosize
        id='codeField'
        minRows={3}
        placeholder="Type in the code to validate"
        style={{ width: '100%' }}
      />
      <Box my={2}>
        <Button
          variant="contained"
          onClick={handleKeyDown}
        >
          Validate
        </Button>
      </Box>

      <Box
        p={2}
        borderRadius={2}
        backgroundColor='#E5E5E5'
      >
        <Box
          display='flex'
          mb={2}
        >
          <Box
            fontWeight={600}
          >
            Output:
          </Box>
          <Box
            fontWeight={600}
            ml={1}
            color={color}
          >
            {message}
          </Box>
        </Box>
        {
          Object.entries(charCount).map((value, index, array) => (
            <Box key={index}>
              <Box>
                Character: {value[0]}
              </Box>

              <Box>
                Occurrences: {value[1]}
              </Box>
              {
                index + 1 !== array.length &&
                <Divider sx={{ my: 2 }} />
              }
            </Box>
          ))
        }
      </Box>
    </Container >
  )
}

export default CodeValidator;