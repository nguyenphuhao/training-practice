import React from 'react';
import logo from '../logo.svg';
import '../css/App.css';

import AddAppointments from "./AddAppointments";
import ListAppointments from "./ListAppointments";
import SearchAppointments from "./SearchAppointments";
import {without} from 'lodash';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			myName: "Hao",
			myAppointments: [],
			isFormDisplayed: true
		}
	}

	componentDidMount() {
		fetch('https://raw.githubusercontent.com/planetoftheweb/reactinterface2/master/public/data.json')
			.then(res => res.json())
			.then(result => {
				let lastIndex = 0;
				const data = result.map(item => {
					item.aptId = lastIndex++;
					return item;
				});
				this.setState({
					myAppointments: data
				});
			});
	}

	deleteAppointment = (apt) => {
		let list = this.state.myAppointments;
		list = without(list, apt);
		this.setState({
			myAppointments: list
		})
	}

	toggleForm = () => {
		this.setState({
			isFormDisplayed: !this.state.isFormDisplayed
		});
	}

	addAppointment = (apt) => {
		let newApt = {...apt};
		let appointments = this.state.myAppointments;
		newApt.aptId = this.state.myAppointments.length;
		appointments.unshift(newApt);
		this.setState({myAppointments: appointments});
	}

	render() {
		return (
			<main className="page bg-white" id="petratings">
				<div className="container">
					<div className="row">
						<div className="col-md-12 bg-white">
							<div className="container">
								<AddAppointments
									isFormDisplayed={this.state.isFormDisplayed} 
									toggleForm={this.toggleForm}
									addAppointment={this.addAppointment}
								/>
								<ListAppointments 
									appointments={this.state.myAppointments} 
									deleteAppointment={this.deleteAppointment}
								/>
								<SearchAppointments />
							</div>
						</div>
					</div>
				</div>
			</main>
		)
	}
}

export default App;
