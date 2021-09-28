import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <div className="">
                        <i className="fab fa-meetup fa-10x text-primary" />
                        <h1 className="display-4 font-weight-normal text-primary"><b>MeetApp</b></h1>
                    </div>
                    
                    <p className="lead font-weight-normal">MeetApp te permite reservar tu espacio en bares y restaurantes preferidos para compartir con las personas que prefieras </p>
                    <Link className="btn btn-outline-primary" to="/mis-reservas">Comenzar a usar MeetApp</Link>
                </div>
            </div>
        </div>

    )
}

export default Home;
