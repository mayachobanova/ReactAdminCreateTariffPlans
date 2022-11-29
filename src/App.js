import jsonServerProvider from "ra-data-json-server";
import PlanList from "./components/plans/PlanList";
import { Admin, Resource } from "react-admin";
import ComponentList from "./components/items/ComponentList";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ExtensionIcon from "@mui/icons-material/Extension";
import GroupList from "./components/groups/GroupList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ChanelList from "./components/channels/ChanelList";
import ChanelGroupList from "./components/channelGroups/ChanelGroupList";
import TabIcon from "@mui/icons-material/Tab";
import WindowIcon from "@mui/icons-material/Window";
import CreatePlan from "./components/plans/CreatePlan";
import CreateChanel from "./components/channels/CreateChanel";
import EditPlan from "./components/plans/EditPlan";
import EditChannel from "./components/channels/EditChanel";
import CreateItem from "./components/items/CreateItem";
import EditItem from "./components/items/EditItem";
import CreateChannelGroup from "./components/channelGroups/CreateChannelGroup";
import EditChannelGroup from "./components/channelGroups/EditChannelGroup";
import GroupEdit from "./components/groups/GroupEdit";
import CreateGroup from "./components/groups/GroupCreate";

const dataProvider = jsonServerProvider("http://localhost:5000");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="plans"
      list={PlanList}
      icon={ListAltIcon}
      create={CreatePlan}
      edit={EditPlan}
    />
    <Resource
      name="components"
      list={ComponentList}
      icon={ExtensionIcon}
      create={CreateItem}
      edit={EditItem}
    />
    <Resource
      name="groups"
      list={GroupList}
      icon={MiscellaneousServicesIcon}
      edit={GroupEdit}
      create={CreateGroup}
    />
    <Resource
      options={{ label: "Channels" }}
      name="chanels"
      list={ChanelList}
      icon={TabIcon}
      create={CreateChanel}
      edit={EditChannel}
    />
    <Resource
      options={{ label: "Channel Groups" }}
      name="chanelsGroups"
      list={ChanelGroupList}
      icon={WindowIcon}
      create={CreateChannelGroup}
      edit={EditChannelGroup}
    />
  </Admin>
);

export default App;
