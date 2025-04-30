import { useState } from 'react';
import phrases from './data/phrases.json';
import { getItemRandom } from './lib/utils';
import {
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img7,
	img8,
	img9,
	img10,
	img11,
	img12,
	img13,
} from './assets/images';
import './App.css';

const colors = ['#F9A825', '#FF5722', '#4CAF50', '#2196F3', '#673AB7'];
const images = [
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img7,
	img8,
	img9,
	img10,
	img11,
	img12,
	img13,
];

function App() {
	const [phrase, setPhrase] = useState(getItemRandom(phrases));
	const [color, setColor] = useState(getItemRandom(colors));
	const [img, setImg] = useState(getItemRandom(images));

	const handleClick = () => {
		setPhrase(getItemRandom(phrases));
		setColor(getItemRandom(colors));
		setImg(getItemRandom(images));
	};

	const imgUrl = `url('${img}')`;

	return (
		<div className="container" style={{ backgroundImage: imgUrl }}>
			<div>
				<h1 className="title">Galletas de la Fortuna</h1>
			</div>
			<div className="card">
				<h2>{phrase.phrase}</h2>
				<p>- {phrase.author}</p>
			</div>
			<div>
				<br />
				<button className="btn" onClick={handleClick}>
					Abre Otra Galleta
				</button>
			</div>
		</div>
	);
}

export default App;
