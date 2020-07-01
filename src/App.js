import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListaCitas from "./components/ListaCitas";

class App extends Component {
  state = {
    citas: []
  };

  //Se ejecuta con el componente
  componentDidMount() {
    //Mostrar los datos de local storage
    const citasLS = localStorage.getItem("citas");
    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      });
    }
  }

  //Se ejecuta cuando hay algun cambio en el componente
  componentDidUpdate() {
    //Agregar datos al storage
    localStorage.setItem("citas", JSON.stringify(this.state.citas));
  }

  //FUNCIONES
  crearCita = nuevaCita => {
    const citas = [...this.state.citas, nuevaCita];
    this.setState({
      citas
    });
  };

  borrarCita = id => {
    //Obtener copia del state
    const citasActuales = [...this.state.citas];

    //Borrar el elemento del state
    //Con filter traemos todos los datos del array menos el id que le pasemos
    const citas = citasActuales.filter(cita => cita.id !== id);

    //Actualizar el state
    this.setState({
      citas
    });
  };

  render() {
    return (
      <Fragment>
        <div className="container">
          <Header titulo="Administrador de Pacientes de Veterinaria" />
          <div className="row">
            <div className="col-md-6">
              <Formulario crearCita={this.crearCita} />
            </div>
            <div className="col-md-6">
              <ListaCitas
                citas={this.state.citas}
                borrarCita={this.borrarCita}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
