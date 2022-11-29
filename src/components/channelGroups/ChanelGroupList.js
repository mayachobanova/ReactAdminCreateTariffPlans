import React from "react";
import {
  List,
  Datagrid,
  TextField,
  SingleFieldList,
  EditButton,
  ChipField,
  ReferenceArrayField
} from "react-admin";

const ChanelGroupList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <ReferenceArrayField label="Channels" source="chanels" reference="chanels">
          <SingleFieldList>
            <ChipField source="name" />
          </SingleFieldList>
        </ReferenceArrayField>
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default ChanelGroupList;
