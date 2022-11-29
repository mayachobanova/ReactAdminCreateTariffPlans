import React from "react";

import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  required,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  AutocompleteArrayInput,
  minValue,
} from "react-admin";
import { Grid } from "@mui/material/";

const CreatePlan = () => {
  const planTypes = [
    { id: "tv", name: "TV" },
    { id: "voice", name: "Voice" },
    { id: "net", name: "Internet" },
  ];

  const discountLessThanPriceValidation = (value, allValues) => {
    if (value && allValues.price) {
      if (value >= allValues.price) {
        return "Discount must be less than price";
      }
    }
    return undefined;
  };

  const priceValidation = [minValue(0), required()];
  const discountPerMonthValidation = [
    minValue(0),
    discountLessThanPriceValidation,
  ];

  return (
    <Create title="Create a Plan">
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
              source="internalName"
              resettable
              fullWidth
              validate={required()}
            />
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            <ReferenceInput
              source="channelsGroupId"
              reference="chanelsGroups"
              resettable
              validate={required()}
            >
              <SelectInput label="Channel Group" optionText="name" />
            </ReferenceInput>
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            <ReferenceInput
              label="Group ID"
              source="groupId"
              reference="groups"
              resettable
              validate={required()}
            >
              <SelectInput optionText="name" />
            </ReferenceInput>
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            <NumberInput
              source="price"
              resettable
              fullWidth
              options={{ maximumFractionDigits: 2 }}
              validate={priceValidation}
            />
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            <NumberInput
              options={{ maximumFractionDigits: 2 }}
              source="discountPerMonth"
              resettable
              fullWidth
              validate={discountPerMonthValidation}
            />
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            <ReferenceInput
              label="Type"
              source="type"
              reference="plans"
              resettable
              validate={required()}
            >
              <SelectInput label="Type" choices={planTypes} source="type" />
            </ReferenceInput>
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            <BooleanInput source="isActive" validate={required()} />
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            <ReferenceArrayInput
              source="components"
              reference="components"
              resettable
              validate={required()}
            >
              <AutocompleteArrayInput label="Components" optionText="name" />
            </ReferenceArrayInput>
          </Grid>
        </Grid>
      </SimpleForm>
    </Create>
  );
};

export default CreatePlan;
