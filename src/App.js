import './App.css';
import axios from 'axios';
import { Component } from 'react';
import logo from './logo.png';

let counter = 1;

const api = axios.create({
	baseURL: 'https://stormy-journey-82781.herokuapp.com/https://superheroapi.com/api/1525724057763659/70'
})

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			heroes: []
			}
		}	

		componentDidMount() {
			api.get('/').then(res => {
				let heroes = [res.data];
				this.setState({ heroes: heroes })
			})
	}
		render() {
			return (
				<div className="App">
					<header>

					<img id="leftImg" width = "5%" height = "5%" src={logo} alt="Logo"/>
					<img id="rightImg" width = "5%" height = "5%" src={logo} alt="Logo"/>

					<center>

					<h1>Welcome to the site!</h1>
					<h2>Here is a list of super heroes from DC Comics!</h2>

					<hr />
					</center>
					</header>
			<body>

			<div><center>

			{this.state.heroes.map(hero => <div key={hero.id}>
				<h2>{hero.name}</h2> 
				<img src={hero.image.url}></img>
			<p>Real Name: {hero.biography.["full-name"]}</p>
			<h2>Stats: </h2>
			<p>
				Combat: {hero.powerstats.combat} <br />
				Durability: {hero.powerstats.durability} <br />
				Intelligence: {hero.powerstats.intelligence} <br />
				Power: {hero.powerstats.power} <br />
				Speed: {hero.powerstats.speed} <br />
				Strength: {hero.powerstats.strength}
			</p>
			</div>
			)}
			
						
			<hr />

			</center>
			</div>	
			</body>
			<hr />

				<footer>
				<center>

					Designed by TechnoM4ncer in 2021

				<hr />

				</center>
			</footer>
		</div>
	)}
}

export default App;