import React from "react";
import {
  Edit,
  SimpleForm,
  required,
  TextInput,
  ReferenceArrayInput,
  AutocompleteArrayInput,
} from "react-admin";
import { Grid } from "@mui/material/";

const EditChannelGroup = () => {
  return (
    <Edit title="Edit Channel Group">
      <SimpleForm>
        <Grid container spacing={5} px={2}>
          <Grid item xs={12} md={5} lg={5}>
            <TextInput disabled source="id" resettable fullWidth />
          </Grid>
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
              label="Channels"
              source="chanels"
              reference="chanels"
              resettable
              validate={required()}
            >
              <AutocompleteArrayInput optionText="name" />
            </ReferenceArrayInput>
          </Grid>
        </Grid>
      </SimpleForm>
    </Edit>
  );
};

export default EditChannelGroup;
