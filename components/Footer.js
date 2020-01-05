import { Navbar, Nav, NavItem, Container, NavLink, Row, Col } from 'shards-react';

const Footer = props => (
	<Navbar fill type="dark" theme="dark">
		<Row>
			<Col sm={12} md={6} lg={3} xl={3}>
				<Nav>
					<NavItem>
						<NavLink href="/">Pronunciation Tips</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/">Flirting in Spanish</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/">Genders in Spanish</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/">Numbers in Spanish</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/">'Ser' vs. 'Estar'</NavLink>
					</NavItem>
				</Nav>
			</Col>
			<Col sm={12} md={6} lg={3} xl={3}>
				<Nav>
					<NavItem>
						<NavLink href="/">SpanishDict</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/">CXC</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/">CXC Store</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/">Pass My CXC</NavLink>
					</NavItem>
				</Nav>
			</Col>
			<Col sm={12} md={6} lg={3} xl={3}>
				<Nav>
					<NavItem>
						<NavLink href="/">Directed Situation</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/">Reading Comprehension</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/">Letter Writing</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/">Contextual Dialogue</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/">Contextual Announcement</NavLink>
					</NavItem>
				</Nav>
			</Col>
			<Col sm={12} md={6} lg={3} xl={3}>
				<Nav>
					<NavItem>
						<NavLink href="/">About Us</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/">Terms of Use</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/">Privacy Policy</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/">Contact Us</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/">Sitemap</NavLink>
					</NavItem>
				</Nav>
			</Col>
		</Row>
	</Navbar>
);

export default Footer;
