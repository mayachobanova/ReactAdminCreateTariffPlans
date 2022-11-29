import React from "react";
import { List, Datagrid, NumberField, TextField, EditButton } from "react-admin";

const ComponentList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="internalDescription" />
        <NumberField source="adx-code" /> 
        <EditButton basePath="/components" />
      </Datagrid> 
    </List>
  );
};

export default ComponentList;
