import React , { Fragment } from 'react'
import Cita from './Cita';
import PropTypes from "prop-types";

const ListaCitas = (props) => {
    const citas = props.citas;
    const mensaje = (citas.length > 0 ? "Administra tus citas aquí" : "No hay citas")
    return (
      <Fragment>
        <div className="card mt-5">
          <div className="card-body">
            <h2 className="card-title text-center">{mensaje}</h2>
            <div className="lista-citas">
              {Object.keys(props.citas).map( cita => (
                  <Cita
                        key={cita}
                        info={props.citas[cita]}
                        borrarCita={props.borrarCita}
                   />
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    );
}

ListaCitas.propTypes = {
    citas: PropTypes.array.isRequired
}
 
export default ListaCitas;