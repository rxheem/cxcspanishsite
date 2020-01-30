import { Nav, NavItem, NavLink } from "shards-react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

function MiniNav() {
  return (
    <MobileView>
      <Nav fill className="bg-white">
        <NavItem>
          <NavLink active href="/listening">
            Listening
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/whatsapp-groups">Study Groups</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/past-papers">Past Papers</NavLink>
        </NavItem>
      </Nav>
    </MobileView>
  );
}

export default MiniNav;
