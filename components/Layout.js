import NavbarComponent from './NavbarComponent';
import Footer from './Footer';
import { Container } from 'shards-react';
// Javascript
import '../assets/js/fontawesome.js';
const Fragment = React.Fragment;

const Layout = props => (
	<div>
		<NavbarComponent />
		<br />
		<Fragment>{props.children}</Fragment>
		<br />
		<Footer />
	</div>
);

export default Layout;
