import React from 'react';
import { Stack, Button, Typography, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function IngredientsList({ ing }) {
  return (
    <Paper elevation={2} sx={{ padding: 2, borderRadius: 2 }}>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
        
        <Stack direction="row" spacing={1}>
          <IconButton color="primary" aria-label="edit">
            <EditIcon />
          </IconButton>
        </Stack>
        <Typography variant="body1" sx={{ flexGrow: 1 }}>
          {ing}
        </Typography>
        <Stack direction="row" spacing={1}>
          <IconButton color="error" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default IngredientsList;
