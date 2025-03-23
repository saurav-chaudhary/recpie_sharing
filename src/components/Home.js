import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';
import Typography from '@mui/material/Typography'; 
import { Container, Grid } from '@mui/material';
import { getRecpie } from './fetch'; 

function Home() {
  const [recipes, setRecipes] = useState([]); 

  useEffect(() => {
    async function fetchData() {
      const data = await getRecpie();
      
      if (Array.isArray(data)) { 
        setRecipes(data);
      } else {
        console.error('Data fetched is not an array:', data);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      {recipes.length > 0 ? (  
        <Grid container spacing={2}>
          {recipes.map((item, index) => (
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
