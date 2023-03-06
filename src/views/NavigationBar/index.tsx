import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavigationBar() {
  const navigator = useNavigate();

  // 임시변수(auth, user)
  const auth = false;
  const user = true;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        variant="outlined"
        position="static"
        sx={{ p: '0px 30px', backgroundColor: '#ffffff' }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block', color: '#000000' },
              cursor: 'pointer',
            }}
            onClick={() => navigator('/')}
          >
            <img src="theonething_logo.png" width="150px" height="50px" />
          </Typography>
          <Box sx={{ display: 'flex' }}>
            {
              // path.pathname !== '/auth' &&
              !auth &&
                (!user ? (
                  <Button
                    variant="contained"
                    sx={{
                      border: 0,
                      color: '#000000',
                      backgroundColor: 'transparent',
                    }}
                    onClick={() => navigator('/myPage')}
                  >
                    마이페이지
                  </Button>
                ) : (
                  <Button
                    variant="text"
                    sx={{
                      color: '#969696',
                      fontWeight: 'bold',
                      ':hover': { color: '#000000', bgcolor: '#ffffff' },
                    }}
                    onClick={() => navigator('/auth')}
                  >
                    로그인
                  </Button>
                ))
            }
            <Button
              variant="outlined"
              sx={{
                ml: '10px',
                borderRadius: 1.5,
                backgroundColor: '#000000',
                color: '#ffffff',
                ':hover': {
                  bgcolor: '#ffffff',
                  color: '#000000',
                  borderColor: '#000000',
                },
                p: '0 25px',
              }}
              onClick={() => navigator('/myPage')}
            >
              시작하기
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavigationBar;
