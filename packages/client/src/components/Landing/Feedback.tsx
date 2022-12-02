import React from 'react';
import { Box, Typography, Grid, Button, TextareaAutosize } from '@mui/material';

import SectionContainer from '../Section/SectionContainer';
import TextInput from '../Form/TextInput';

const Feedback = () => {
  return (
    <Box component={'section'} id="feedback">
      <SectionContainer backgroundColor="#FFFFFF">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ marginBottom: '20px' }}>
            <Typography sx={{ marginBottom: '10px' }} variant="h5">
              Bạn đang gặp vấn đề khi sử dụng hệ thống hoặc muốn yêu cầu thêm
              tính năng cho hệ thống?
            </Typography>
            <Typography sx={{ marginBottom: '20px' }} variant="body1">
              Hãy điền vào biểu mẫu này và người quản lý của chúng tôi sẽ liên
              hệ tới bạn trong 48 giờ tới.
            </Typography>
            <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
              <Grid item xs={12} md={6}>
                <TextInput placeholder="Họ tên..." />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextInput placeholder="Email..." />
              </Grid>
              <Grid item xs={12}>
                <TextInput
                  rows={5}
                  multiline={true}
                  placeholder="Lời nhắn của bạn..."
                />
              </Grid>
            </Grid>
            <Button variant="contained">Gửi yêu cầu</Button>
          </Box>
          <Box>
            <img src="/images/food-delivery.svg" alt="food_delivery" />
          </Box>
        </Box>
      </SectionContainer>
    </Box>
  );
};

export default Feedback;
