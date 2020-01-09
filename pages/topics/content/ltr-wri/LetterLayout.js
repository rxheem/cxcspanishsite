import { Container, Card, CardBody } from 'shards-react';
import { Document, Page } from 'react-pdf';

const LetterLayout = props => (
	<React.Fragment>
		<br />
		<Card>
			<CardBody>
				<div>
					<h6>Layout</h6>
					<p>
						The layout for your letter follows a standard layout for letters. Please see the the layour
						below
					</p>
					<div
						style={{
							border: '1px solid black',
							padding: '20px',
							fontFamily: 'rush Script MT, Brush Script Std, cursive'
						}}
					>
						<p style={{ float: 'right' }}>el 9 de junio</p>
						<p style={{ clear: 'both' }}>Queridoa Luisa,</p>

						<p style={{ paddingLeft: '20px' }}>
							¿Comó estas? Espero que estés bien mi amiga. Estoy escribiendo para ...
						</p>

						<p style={{ paddingLeft: '20px' }}>second paragraph</p>

						<p style={{ paddingLeft: '20px' }}>third paragraph</p>
						<p style={{ paddingLeft: '20px' }}>Escribeme pronto y dame las noticias</p>

						<span>Tu amigo,</span>
						<p>Raheem McDonald</p>
					</div>
				</div>
			</CardBody>
		</Card>
	</React.Fragment>
);

export default LetterLayout;
