import React from 'react';
import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Paper,
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

interface Props {
  setIsOpen: (isOpen: boolean) => void;
}

const SupportChat: React.FC<Props> = ({ setIsOpen }) => {
  let messages: Message[];

  messages = [
    {
      text: 'Hello lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      sender: 'user',
    },
    {
      text: 'Hello lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
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
    <Box
      display="flex"
      flexDirection="column"
      height="80vh"
      sx={{
        position: 'relative',
        height: '100%',
        backgroundColor: 'bg_color.main',
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,.1)',
        borderRadius: '10px',
        p: 2,
      }}
    >
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
        <Stack
          direction="row"
          spacing={2}
          onClick={() => setIsOpen(true)}
          sx={{ cursor: 'pointer' }}
        >
          <Image src="/assets/user.png" height={50} width={50} alt="" />
          <Stack spacing={0}>
            <Typography variant="subtitle2" sx={{ color: 'primary.main' }}>
              Darlene Robertson
            </Typography>
            <Typography variant="subtitle2" sx={{ color: 'text_color.main' }}>
              ID: TicketID0
            </Typography>
          </Stack>
        </Stack>
      </Box>

      {/* end of top user info section */}
      <Box flexGrow={1} overflow="auto" px={4}>
        {messages.map((message, index) => (
          <Box
            key={index}
            display="flex"
            mt={2}
            justifyContent={
              message.sender === 'user' ? 'flex-end' : 'flex-start'
            }
          >
            <Paper
              sx={{
                backgroundColor: `${
                  message.sender === 'user' ? 'primary.main' : 'grey.600'
                }`,
                color: 'white',
                borderRadius: 2,
                p: 2,
              }}
            >
              {/*  bgcolor={
                    message.sender === 'user'
                      ? 'primary.main'
                      : 'text_color'
                  } */}
              <p>{message.text}</p>
            </Paper>
          </Box>
        ))}
      </Box>
      <Box
        display="flex"
        sx={{ position: 'absolute', bottom: 0, width: '100%' }}
      >
        <Box flexGrow={1}>
          <TextField
            fullWidth
            label="Message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </Box>
        <Box>
          {/* <button
            onClick={handleMessageSend}
            className="bg-secondary text-white px-10 h-14 border-2 transition-all duration-300 border-secondary rounded-lg hover:bg-white hover:text-secondary"
          >
            Send
          </button> */}
        </Box>
      </Box>
    </Box>
  );
};

export default SupportChat;
