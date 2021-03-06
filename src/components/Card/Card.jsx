import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
    const __MESSAGE = `Gerencie os ${(props.label).toLowerCase()} de uma forma fácil, cadastre, edite e pesquise com poucos cliques.`;

    return (
        <div className="col-sm-6">
            <div className="card card-width">
                <div className="card-body">
                    <h5 className="card-title">{props.label}</h5>

                    <p className="card-text">{__MESSAGE}</p>

                    <Link to={props.url} className="btn btn-primary">Gerenciar {props.label}</Link>
                </div>
            </div>
        </div>
    );
}

export default Card;