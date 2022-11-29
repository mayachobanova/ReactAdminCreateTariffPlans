import React from "react";

import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  regex,
  required,
} from "react-admin";
import { Grid } from "@mui/material/";

const httpValidation = regex(/^(http(s)?:\/\/).+$/, "Please enter a valid URL. Protocol is required http:// or https://");
const imageUrlValidation = [httpValidation, required()];

const EditChannel = () => {
  return (
    <Edit title="Edit Channel">
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" validate={required("Please enter a Channel Name.")} />
        <TextInput
          label="Image URL"
          source="imageUrl"
          accept="url"
          validate={imageUrlValidation}
        />
        <Grid item xs={12} md={5} lg={5}>
          <BooleanInput
            label="Has Time Shifting"
            source="options.hasTimeShifting"
          />
          <BooleanInput label="Has Recording" source="options.hasRecording" />
          <BooleanInput label="Has replay" source="options.hasReplay" />
        </Grid>
      </SimpleForm>
    </Edit>
  );
};

export default EditChannel;
