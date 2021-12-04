import {
  CustomHeader,
  CustomLayout,
  Logo,
  SideMenu,
  Sider,
  UserHeader,
} from "components";
import { Colors } from "enums/colors";
import "./App.css";
import { Home, Work, Personel, Other } from "Pages";
import { Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <CustomLayout background="red">
      <CustomHeader
        color={Colors.white}
        background={Colors.dodgerBlue}
        display="flex"
        justifyContent="space-between"
      >
        <Logo fontWeight={900} fontSize="1.3rem">
          <Link to="/">Notify</Link>
        </Logo>
        <UserHeader />
      </CustomHeader>
      <CustomLayout>
        <Sider background={Colors.dodgerBlue} height={`calc(100vh - 64px)`}>
          <SideMenu />
        </Sider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/work/:cardId" component={Work} />
          <Route exact path="/personal" component={Personel} />
          <Route exact path="/personal/:cardId" component={Personel} />
          <Route exact path="/other" component={Other} />
          <Route exact path="/other/:cardId" component={Other} />
        </Switch>
      </CustomLayout>
    </CustomLayout>
  );
}

export default App;
