import React, { Fragment } from 'react'
import PropTypes from "prop-types";

 const Cita = (props) => {
     const { fecha, hora, mascota, propietario, sintoma, id } = props.info;
    
     const eliminarCita =  () => {
        props.borrarCita(id)
     }

     return ( 
        <Fragment>
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0">{mascota}</h3>
                    <p className="card-text"><span>Nombre del Dueño: </span>{propietario}</p>
                    <p className="card-text"><span>Fecha: </span>{fecha}</p>
                    <p className="card-text"><span>Hora: </span>{hora}</p>
                    <p className="card-text"><span>Sintomas: </span></p>
                    <p className="card-text">{sintoma}</p>
                    <button className="btn btn-danger" onClick={eliminarCita}>Eliminar</button>
                </div>
            </div>
        </Fragment>
      );
 }
  
 Cita.propTypes = {
   info: PropTypes.shape({
     fecha: PropTypes.string.isRequired,
     hora: PropTypes.string.isRequired,
     mascota: PropTypes.string.isRequired,
     propietario: PropTypes.string.isRequired,
     sintoma: PropTypes.string.isRequired,
     id: PropTypes.string.isRequired
   }),
   borrarCita: PropTypes.func.isRequired
 };

 export default Cita;