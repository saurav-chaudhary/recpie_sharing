import React from 'react';
import FoodCard from './FoodCard';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography'; 
import { Container, Grid } from '@mui/material';

function Home() {
  
  const addRecordData = useSelector((state) => state.form.addRecordData || []);
  
  

  return (
    <Container>
      {addRecordData.length > 0 ? (
        <Grid container spacing={2}>
          {addRecordData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <FoodCard item={item} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" color="text.secondary" align="center">
          No records available.
        </Typography>
      )}
    </Container>
  );
}

export default Home;
