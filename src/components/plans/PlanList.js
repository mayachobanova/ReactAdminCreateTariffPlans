import React from "react";
import {
  List,
  Datagrid,
  TextField,
  BooleanField,
  NumberField,
  ReferenceField,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
  EditButton,
  WithRecord,
  useRecordContext,
} from "react-admin";
import WifiIcon from "@mui/icons-material/Wifi";
import TvIcon from "@mui/icons-material/Tv";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";

const PlanTypeIcon = ({ source, label }) => {
  const record = useRecordContext();
  if (!record) {
    return null;
  }

  switch (record[source]) {
    case "tv":
      return <TvIcon />;
    case "net":
      return <WifiIcon />;
    case "voice":
      return <KeyboardVoiceIcon />;
    default:
      return <DisabledByDefaultIcon />;
  }
};

const PlanList = () => {
  return (
    <List>
      <Datagrid>
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Internal Name" source="internalName" />
        <PlanTypeIcon source="type" label="Type"/>
        <ReferenceField
          label="Channel Group"
          source="channelsGroupId"
          reference="chanelsGroups"
        >
          <ChipField source="name" size="small" />
        </ReferenceField>
        <NumberField
          label="Price"
          source="price"
          options={{ minimumFractionDigits: 2, maximumFractionDigits: 2 }}
        />
        <NumberField
          label="Discount per month"
          source="discountPerMonth"
          options={{ minimumFractionDigits: 2, maximumFractionDigits: 2 }}
        />
        <WithRecord
          label="Final Price"
          render={(record) => (
            <span>{(record.price - record.discountPerMonth).toFixed(2)}</span>
          )}
        />
        <BooleanField label="Is active" source="isActive" />
        <ReferenceField label="Group ID" source="groupId" reference="groups">
          <ChipField source="name" size="small" />
        </ReferenceField>
        <ReferenceArrayField
          label="Components"
          reference="components"
          source="components"
        >
          <SingleFieldList>
            <ChipField source="name" size="small" />
          </SingleFieldList>
        </ReferenceArrayField>
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default PlanList;
