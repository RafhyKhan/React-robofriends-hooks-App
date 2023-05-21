import React, {useEffect, useState} from 'react';
//need useEffect and useState for (react hooks)
import CardList from '../components/CardList';
import SearchBox from '../components//SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';


function App() {
	//Dont need a constructor for (React Hooks)
	
	//create these lines of code, because in contructor you have robots[], and searchfield'' (React Hooks)
	const [robots, setRobots] = useState([]) 
	const [searchfield, setSearchfield] = useState('') 
	const [count, setCount] = useState(0)



	//everytimes app render, useEffect is used, useEffect replaces componentDidMount() and other , (reacts Hookes)
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response=> response.json())
			.then(users => (setRobots(users)));
		console.log(count)
	}, [count])
	//run useEfeccts if this array given changes
	//everytime count value changes, it updates this statement, used as refresh button ?
	

	const onSearchChange = (event) => {
		setSearchfield(event.target.value)
	}


	const  filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	})

	{/*creating a loading screen------since getting users from online----1sec in begining----*/}
	{/* 0 means false, so opposite for true*/}
	
	return !robots.length ?
	<h1>Loading</h1> :
		(
		<div className ='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<text className='f3'>Search among the Robots! (all email address are fake)</text>
			<SearchBox searchChange={onSearchChange}/>
			<Scroll>
			<ErrorBoundry>
				<CardList robots={filteredRobots}/>
			</ErrorBoundry>
			</Scroll>
		</div>
		);
}


export default App;