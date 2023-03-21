import React from 'react';
import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Image from 'next/image';
// import SendIcon from '@material-ui/icons/SendIcon';
// import { Message } from '../types/Message';

export interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const ChatPage = () => {
  let messages: Message[];

  messages = [
    {
      text: 'Hello',
      sender: 'user',
    },
    {
      text: 'Hello2',
      sender: 'bot',
    },
    {
      text: 'Hello',
      sender: 'user',
    },
    {
      text: 'Hello2',
      sender: 'bot',
    },
  ];

  const [message, setMessage] = useState('');
  // const [messages, setMessages] = useState<Message[]>([]);

  const handleMessageSend = () => {
    if (message.trim() !== '') {
      // setMessages([...messages, { text: message, sender: 'user' }]);
      setMessage('');
    }
  };
  return (
    <Box display="flex" flexDirection="column" height="80vh">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 1,
          mb: 2,
          borderBottom: '1px solid #E5E5E5',
        }}
      >
        <Stack direction="row" spacing={2}>
          <Image src="/assets/user.png" height={50} width={50} alt="" />
          <Stack spacing={0}>
            <Typography variant="subtitle2" sx={{ color: 'primary.main' }}>
              Darlene Robertson
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: 'secondary.contrastText' }}
            >
              Head of Development
            </Typography>
          </Stack>
        </Stack>
      </Box>

      {/* end of top user info section */}
      <Box flexGrow={1} overflow="auto">
        {messages.map((message, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent={
              message.sender === 'user' ? 'flex-end' : 'flex-start'
            }
          >
            <Box
              sx={{
                backgroundColor: `${
                  message.sender === 'user' ? 'primary.main' : 'grey.600'
                }`,
                color: 'white',
                borderRadius: 16,
                p: 2,
              }}
            >
              {/*  bgcolor={
                    message.sender === 'user'
                      ? 'primary.main'
                      : 'secondary.contrastText'
                  } */}
              <p>{message.text}</p>
            </Box>
          </Box>
        ))}
      </Box>
      <Box display="flex">
        <Box flexGrow={1}>
          <TextField
            fullWidth
            label="Message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </Box>
        <Box ml={1}>
          <button
            onClick={handleMessageSend}
            className="bg-secondary text-white px-10 h-14 border-2 transition-all duration-300 border-secondary rounded-lg hover:bg-white hover:text-secondary"
          >
            Send
          </button>
          {/* <Button
            variant="contained"
            color="primary"
            // endIcon={<SendIcon />}
            onClick={handleMessageSend}
          >
            Send
          </Button> */}
        </Box>
      </Box>
    </Box>
  );
};

export default ChatPage;

{
  /* <Box flexGrow={1} overflow="auto">
  {messages.map((message, index) => (
    <Box
      key={index}
      display="flex"
      justifyContent={message.sender === 'user' ? 'flex-end' : 'flex-start'}
    >
      <Box
        bgcolor={message.sender === 'user' ? 'primary.main' : 'grey.300'}
        color="white"
        p={2}
        borderRadius={16}
        mb={2}
      >
        <p>{message.text}</p>
      </Box>
    </Box>
  ))}
</Box>; */
}
