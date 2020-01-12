import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse
} from "shards-react";
import FA from "react-fontawesome";

class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      title: "CXC Spanish Online",
      dropdownOpen: false,
      collapseOpen: false
    };
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen
      }
    });
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }
  render() {
    return (
      <Navbar type="dark" theme="primary" expand="md">
        <NavbarBrand href="/">{this.state.title}</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse open={this.state.collapseOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="text-white" href="/guide">
                Guides
              </NavLink>
            </NavItem>

            {/* Exam Topics */}
            <Dropdown
              open={this.state.dropdownOpen}
              toggle={this.toggleDropdown}
            >
              <DropdownToggle className="text-white" nav caret>
                Exam Topics
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="/topics/directed-situations">
                  Directed Situations
                </DropdownItem>
                <DropdownItem href="/topics/letter-writing">
                  Letter Writing
                </DropdownItem>
                <DropdownItem href="/topics/">Composition</DropdownItem>
                <DropdownItem href="/topics/">
                  Contextual Announcements
                </DropdownItem>
                <DropdownItem href="/topics/">Contextual Dialogue</DropdownItem>
                <DropdownItem href="/topics/">
                  Reading Comprehension
                </DropdownItem>
                <DropdownItem href="/topics/">Directed Situations</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavItem>
              <NavLink className="text-white" href="/verb-tenses">
                Verb Tenses
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="text-white" href="/resources">
                Resources
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/quiz">
                Quiz
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/forum">
                Forum
              </NavLink>
            </NavItem>
          </Nav>

          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink className="text-white" href="/about-us">
                <FA style={{ padding: "7px" }} name="users" />
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/tutoring">
                <FA style={{ padding: "7px" }} name="chalkboard-teacher" />
                Tutoring
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/FAQ">
                <FA style={{ padding: "7px" }} name="comment" />
                FAQ
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/contact">
                <FA style={{ padding: "7px" }} name="id-badge" />
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavbarComponent;
