import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { IoMdAdd } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import IngredientsList from './IngredientsList';
import { addserving, addtime, addrecpieName, addingridentdata, addingridentname, addRecord,clearIngrediant } from '../Store';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom'

function RecpieForm() {
  const navigate  = useNavigate()
  const dispatch = useDispatch();
  const { recpiename, serving, time, ingridentname, ingredintdata } = useSelector((state) => {
    console.log(state.form.addRecordData);
    return {
      recpiename: state.form.recpieName,
      serving: state.form.serving,
      time: state.form.time,
      ingridentname: state.form.ingridentname,
      ingredintdata: state.form.ingrident
    };
  });

  const handleRecpieName = (event) => {
    dispatch(addrecpieName(event.target.value));
  };

  const handleServing = (event) => {
    dispatch(addserving(event.target.value));
  };

  const handleTime = (event) => {
    dispatch(addtime(event.target.value));
  };

  const handleIngredientsData = () => {
    if (ingridentname) {
      dispatch(addingridentdata(ingridentname));
      dispatch(addingridentname('')); 
    }
  };

  const handleIngredintsName = (event) => {
    dispatch(addingridentname(event.target.value));
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(addRecord({
      recpieName: recpiename,
      serving: serving,
      time: time,
      ingrident: ingredintdata
    }));
    dispatch(addrecpieName(""))
    dispatch(addtime(""))
    dispatch(addserving(""))
    dispatch(clearIngrediant())
    navigate('/')
    
  };

  const ingredientList = (
    <Stack spacing={2} padding={2}>
      {ingredintdata.map((ing, index) => (
        <IngredientsList key={index} ing={ing} />
      ))}
    </Stack>
  );

  return (
    <div>
      <form>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            width: '100%',
            padding: 3
          }}
        >
          <TextField
            fullWidth
            label="Recipe Name"
            value={recpiename}
            onChange={handleRecpieName}
            variant="outlined"
            sx={{ maxWidth: 500 }}
          />

          <Box
            sx={{
              width: '100%',
              maxWidth: 500,
            }}
          >
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Time"
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                  value={time || ''}
                  onChange={handleTime}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  label="Serving"
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                  value={serving || ''}
                  onChange={handleServing}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              width: '100%',
              maxWidth: 500,
              marginY: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}
          >
            <Typography variant="h6" align="center">Add Ingredients</Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={8}>
                <TextField
                  label="Ingredient Name"
                  variant="outlined"
                  value={ingridentname || ''}
                  onChange={handleIngredintsName}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={handleIngredientsData}
                  fullWidth
                >
                  <IoMdAdd /> Add
                </Button>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              width: '100%',
              maxWidth: 500,
              textAlign: 'center',
              marginY: 2
            }}
          >
            <Typography variant="h6">Ingredients List</Typography>
            <Box
              sx={{
                width: '100%',
                maxWidth: 500,
              }}
            >
              {ingredientList}
            </Box>
          </Box>

          <Button
            size="large"
            variant="contained"
            color="success"
            sx={{ marginY: 2, width: '100%', maxWidth: 500 }}
            onClick={handleSubmitForm}
          >
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default RecpieForm;
