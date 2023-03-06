import { Box, Button, Typography } from '@mui/material';
import React from 'react';

function MainHead() {
  return (
    <Box
      sx={{
        width: '100%',
        pt: '9rem',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography sx={{ fontSize: '30px', pl: '15px' }}>
        당신의 인생을 바꿀
      </Typography>
      <Typography sx={{ fontSize: '30px', mt: '1rem' }}>단 한가지</Typography>
      <Typography sx={{ fontSize: '60px', fontWeight: 'bolder' }}>
        TheOneThing
      </Typography>
      <Button
        variant="contained"
        sx={{ borderRadius: 15, p: '20px 80px', mt: '5rem' }}
        size="large"
      >
        <Typography sx={{ fontSize: '20px' }}>시작하기</Typography>
        {/* TheOneThing 시작하기 */}
      </Button>
    </Box>
  );
}

export default MainHead;
