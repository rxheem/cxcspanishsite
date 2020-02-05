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

import LazyLoad from 'react-lazyload';
import Collapsible from 'react-collapsible';

class MeetAna extends React.Component {
	componentDidMount() {}

	render() {
		return (
			<React.Fragment>
				<div className="text-black" style={{ backgroundColor: '#e6ccff', padding: '40px' }}>
					<Row>
						<Col sm={12} md={6} lg={6} xl={6}>
							<Container>
								<br />
								<br />
								<h1 className="headline text-black">Meet Ana</h1>
								<br />
								<br />
								<p>
									Meet Ana, a young and charismatic woman living in Spain. Let's listen as she
									introduces herself, talks about what it's like living in there, her experiences and
									family life.
								</p>

								<div className="anna-audio">
									<audio controls>
										<source src="https://dl.dropbox.com/s/7ofviet2398fz0b/Example%201%20-%20Ana.mp3?dl=0" />
									</audio>
								</div>

								<br />
								<Collapsible
									trigger={
										<a className="text-black" href="">
											Click here to read transcript
										</a>
									}
								>
									<br />
									<Card>
										<CardBody>
											<p className="text-dark">
												¡Buenos días! Soy Ana. Tengo 27 años. Soy de Chicago pero ahora vivo en
												una ciudad de España que se llama Zamora. Soy profesora de inglés en un
												instituto. Al volver a los Estados Unidos voy a seguir con mi estudios.
												Me gustaría hacer un doctorado en la literatura española, pero ahora
												etoy contenta con vivir en España y mejorando mi español, y aprendiendo
												más de este país tan hermoso. En mi tiempo libre me gusta leer, ver la
												tele y pasar tiempo con mis amigos, mi marido y mi perro. Estudio
												español porque la hístoria del país ma facina. No es solo eso, sino
												también la cultura me encanta y la gente es muy amable.
											</p>
										</CardBody>
										<CardFooter>
											<h4>Lean more</h4>

											<Row>
												<Col sm={4} md={4} lg={4} xl={4}>
													<Alert className="rounded" theme="success">
														<a className="alert-link" href="/listening-exercises/meet-nick">
															Meet Nick
														</a>
													</Alert>
												</Col>
												<Col sm={4} md={4} lg={4} xl={4}>
													<Alert className="rounded" theme="danger">
														<a className="alert-link" href="/listening-exercises/ayer">
															Ayer
														</a>
													</Alert>
												</Col>
												<Col sm={4} md={4} lg={4} xl={4}>
													<Alert className="rounded" theme="primary">
														<a
															className="alert-link"
															href="/listening-exercises/la-casa-ideal"
														>
															La casa ideal
														</a>
													</Alert>
												</Col>
											</Row>
										</CardFooter>
									</Card>
								</Collapsible>
							</Container>
						</Col>
						<Col sm={12} md={6} lg={6} xl={6}>
							<br className="d-sm-none" />
							<a className="anna-image" href="/listening-exercises/meet-ana">
								<img
									style={{ width: '100%' }}
									src="https://i.imgur.com/ociFUp7.png"
									title="source: imgur.com"
								/>
							</a>
						</Col>
					</Row>
				</div>
			</React.Fragment>
		);
	}
}

export default MeetAna;
