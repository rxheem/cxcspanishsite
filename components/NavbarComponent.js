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
              <NavLink href="/guide">Guides</NavLink>
            </NavItem>

            {/* Exam Topics */}
            <Dropdown
              open={this.state.dropdownOpen}
              toggle={this.toggleDropdown}
            >
              <DropdownToggle nav caret>
                Exam Topics
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="/topics/directed-situations">
                  Directed Situations
                </DropdownItem>
                <DropdownItem href="">Letter Writing</DropdownItem>
                <DropdownItem href="">Composition</DropdownItem>
                <DropdownItem href="">Contextual Announcements</DropdownItem>
                <DropdownItem href="">Contextual Dialogue</DropdownItem>
                <DropdownItem href="">Reading Comprehension</DropdownItem>
                <DropdownItem href="">Directed Situations</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavItem>
              <NavLink href="/verb-tenses">Verb Tenses</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/resources">Resources</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/quiz">Quiz</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/forum">Forum</NavLink>
            </NavItem>
          </Nav>

          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink href="/about-us">
                <FA style={{ padding: "7px" }} name="users" />
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/tutoring">
                <FA style={{ padding: "7px" }} name="chalkboard-teacher" />
                Tutoring
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/faq">
                <FA style={{ padding: "7px" }} name="comment" />
                FAQ
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">
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
