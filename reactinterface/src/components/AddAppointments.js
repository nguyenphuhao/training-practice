import React, { Component } from "react";
import { FaPlus } from 'react-icons/fa';
class AddAppointments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            petName: "",
            ownerName: "",
            aptDate: "",
            aptTime: "",
            aptNotes: ""
        }
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        const apt = { ...this.state };
        apt.aptDate = apt.aptDate + " " + apt.aptTime;
        
        this.props.addAppointment(apt);
        setTimeout(() => {
            this.setState({
                petName: "",
                ownerName: "",
                aptDate: "",
                aptTime: "",
                aptNotes: ""
            });
        },100)
        
    }

    render() {
        return (
            <div className={
                "card textcenter mt-3" +
                (this.props.isFormDisplayed ? "" : " add-appointment")
            }>
                <div onClick={this.props.toggleForm} className="apt-addheading card-header bg-primary text-white">
                    <FaPlus /> Add Appointment
                </div>

                <div className="card-body">
                    <form id="aptForm" noValidate>
                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="petName"
                                readOnly
                            >
                                Pet Name
                  </label>
                            <div className="col-md-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="petName"
                                    placeholder="Pet's Name"
                                    onChange={this.handleChange}
                                    value={this.state.petName}
                                />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="ownerName"
                            >
                                Pet Owner
                  </label>
                            <div className="col-md-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="ownerName"
                                    placeholder="Owner's Name"
                                    onChange={this.handleChange}
                                    value={this.state.ownerName}
                                />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="aptDate"
                            >
                                Date
                  </label>
                            <div className="col-md-4">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="aptDate"
                                    id="aptDate"
                                    onChange={this.handleChange}
                                    value={this.state.aptDate}
                                />
                            </div>
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="aptTime"
                            >
                                Time
                  </label>
                            <div className="col-md-4">
                                <input
                                    type="time"
                                    className="form-control"
                                    name="aptTime"
                                    id="aptTime"
                                    onChange={this.handleChange}
                                    value={this.state.aptTime}
                                />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label className="col-md-2 text-md-right" htmlFor="aptNotes">
                                Apt. Notes
                  </label>
                            <div className="col-md-10">
                                <textarea
                                    className="form-control"
                                    rows="4"
                                    cols="50"
                                    name="aptNotes"
                                    id="aptNotes"
                                    placeholder="Appointment Notes"
                                    onChange={this.handleChange}
                                    value={this.state.aptNotes}
                                />
                            </div>
                        </div>

                        <div className="form-group form-row mb-0">
                            <div className="offset-md-2 col-md-10">
                                <button
                                    type="button"
                                    className="btn btn-primary d-block ml-auto"
                                    onClick={this.handleSubmit}
                                >
                                    Add Appointment
                    </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddAppointments;