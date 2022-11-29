import React from "react";
import { List, Datagrid, TextField, EditButton } from "react-admin";

const GroupList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default GroupList;
