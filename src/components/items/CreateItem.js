import React from "react";

import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  required,
} from "react-admin";
import { Grid } from "@mui/material/";

const CreateItem = (props) => {
  return (
    <Create title="Create a Component" {...props}>
      <SimpleForm>
        <Grid container spacing={5} px={2}>
          <Grid item xs={12} md={5} lg={5}>
            <TextInput
              source="name"
              resettable
              fullWidth
              validate={required()}
            />
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            <TextInput
              source="internalDescription"
              multiline
              resettable
              fullWidth
              validate={required()}
            />
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            <NumberInput
              source="adx-code"
              resettable
              fullWidth
              validate={required()}
            />
          </Grid>
        </Grid>
      </SimpleForm>
    </Create>
  );
};

export default CreateItem;
