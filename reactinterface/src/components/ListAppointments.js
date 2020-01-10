import React, { Component } from "react";
import { FaTimes } from 'react-icons/fa';
import Moment from "react-moment";


class ListAppointments extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <div>
                <div className="appointment-list item-list mb-3">
                    {this.props.appointments.map(item => {
                        return (
                            <div key={item.aptId} className="pet-item col media py-3">
                                <div className="mr-3">
                                    <button onClick={() => {
                                        this.props.deleteAppointment(item);
                                    }} className="pet-delete btn btn-sm btn-danger">
                                        <FaTimes/>
                                    </button>
                                </div>

                                <div className="pet-info media-body">
                                    <div className="pet-head d-flex">
                                        <span className="pet-name">{item.petName}</span>
                                        <span className="apt-date ml-auto">
                                            <Moment
                                                date={item.aptDate}
                                                parse="YYYY-MM-dd hh:mm"
                                                format="MMM-D h:mma"
                                             />
                                        </span>
                                    </div>

                                    <div className="owner-name">
                                        <span className="label-item">Owner: </span>
                                        <span>{item.ownerName}</span>
                                    </div>
                                    <div className="apt-notes">{item.aptNotes}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default ListAppointments;