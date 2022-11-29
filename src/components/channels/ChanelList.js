import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  EditButton,
  BooleanField,
  useRecordContext,
} from "react-admin";

const OptionsField = ({ label, source }) => {
  const record = useRecordContext();
  return (
    <table color="rgba(211, 211, 211)">
      <tr>
        <th>Time Shifting</th>
        <th>Recording</th>
        <th>Replay</th>
      </tr>
      <tr>
        <td>
          <BooleanField record={record[source]} source="hasTimeShifting" />
        </td>
        <td>
          <BooleanField record={record[source]} source="hasRecording" />
        </td>
        <td>
          <BooleanField record={record[source]} source="hasReplay" />
        </td>
      </tr>
    </table>
  );
};

const ChanelList = () => {
  return (
    <List>
      <Datagrid>
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ImageField label="Image" source="imageUrl" />
        <OptionsField source="options" />
        <BooleanField
          label="Has Time Shifting"
          source="options.hasTimeShifting"
        />
        <BooleanField label="Has Recording" source="options.hasRecording" />
        <BooleanField label="Has Replay" source="options.hasReplay" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default ChanelList;
