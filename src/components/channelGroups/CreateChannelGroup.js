import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  required,
  ReferenceArrayInput,
  AutocompleteArrayInput
} from "react-admin";
import { Grid } from "@mui/material/";

const CreateChannelGroup = () => {
  return (
    <Create title="Create a Channel Group">
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
            <ReferenceArrayInput
              source="chanelsId"
              reference="chanels"
              resettable
              validate={required()}
            >
              <AutocompleteArrayInput label="Channels" optionText="name" />
            </ReferenceArrayInput>
          </Grid>
        </Grid>
      </SimpleForm>
    </Create>
  );
};

export default CreateChannelGroup;
