import React from "react";

import {
  Edit,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";
import { Grid } from "@mui/material/";

const GroupEdit = (props) => {
  return (
    <Edit title="Edit Group" {...props}>
      <SimpleForm>
        <Grid container spacing={5} px={2}>
          <Grid item xs={12} md={5} lg={5}>
            <TextInput
              source="id"
              resettable
              fullWidth
              disabled
            />
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            <TextInput
              source="name"
              resettable
              fullWidth
              validate={required()}
            />
          </Grid>
        </Grid>
      </SimpleForm>
    </Edit>
  );
};

export default GroupEdit;