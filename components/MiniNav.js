import { Nav, NavItem, NavLink } from "shards-react";

function MiniNav() {
  return (
    <Nav fill className="bg-white d-md-none">
      <NavItem>
        <NavLink
          className="animated pulse"
          style={{
            animationIterationCount: "infinite"
          }}
          active
          href="/listening"
        >
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
  );
}

export default MiniNav;
