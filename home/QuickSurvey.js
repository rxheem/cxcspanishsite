import {
	Container,
	Row,
	Col,
	Alert,
	Breadcrumb,
	BreadcrumbItem,
	Card,
	CardHeader,
	CardTitle,
	CardImg,
	CardBody,
	CardFooter,
	Button
} from 'shards-react';
import { Modal, ModalBody, ModalHeader } from 'shards-react';
import Collapsible from 'react-collapsible';

class QuickSurvey extends React.Component {
	constructor(props) {
		super(props);
		this.state = { open: false };
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			open: !this.state.open
		});
	}

	render() {
		const { open } = this.state;

		return (
			<div className="bg-light" style={{ height: 'auto', padding: '10px 0px' }}>
				<Container>
					Have something in Spanish you want us to clarify?
					<Collapsible
						trigger={
							<a href="">
								Let us know here <small style={{ color: 'red' }}>(works best on a laptop)</small>{' '}
							</a>
						}
					>
						<br />

						<iframe
							src="https://docs.google.com/forms/d/e/1FAIpQLSc0SyNaXGAYnToalhKErIwH4b9deZQw-mA1zYJ491UU-robIQ/viewform?embedded=true"
							width="700"
							height="1028"
							frameborder="0"
							marginheight="0"
							marginwidth="0"
						>
							Loading…
						</iframe>
					</Collapsible>
				</Container>
			</div>
		);
	}
}

export default QuickSurvey;
