import React from "react";

import {
  Create,
  SimpleForm,
  TextInput,
  required,
  BooleanInput,
  regex
} from "react-admin";
import { Grid } from "@mui/material/";

const httpValidation = regex(/^(http(s)?:\/\/).+$/, "Please enter a valid URL. Protocol is required http:// or https://");
const imageUrlValidation = [httpValidation, required()];

const CreateChanel = () => {
  return (
    <Create title="Create a Channel" >
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
              source="imageUrl"
              multiline
              resettable
              fullWidth
              validate={imageUrlValidation}
            />
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            <BooleanInput
              label="Has Time Shifting"
              source="options.hasTimeShifting"
            />
            <BooleanInput label="Has Recording" source="options.hasRecording" />
            <BooleanInput label="Has replay" source="options.hasReplay" />
          </Grid>

          
        </Grid>
      </SimpleForm>
    </Create>
  );
};

export default CreateChanel;
