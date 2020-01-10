import React from 'react';
import './App.css';
import NewsList from "./components/NewsList";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newsList: [],
			isLoading: true
		}
	}

	componentDidMount() {
        fetch('http://localhost:4000/articles?url=https://vnexpress.net')
            .then(res => res.json())
            .then(result => {
                console.log(result);
                this.setState({
					newsList: result,
					isLoading: false
                });
            });
	}
	
	render(){
		return (
			this.state.isLoading ? <div>Loading...</div> : <NewsList data={this.state.newsList} />
		)
	}
}

export default App;
