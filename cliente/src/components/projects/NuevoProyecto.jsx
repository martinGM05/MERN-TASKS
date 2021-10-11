import React, {Fragment, useState, useContext} from 'react';
import proyectoContext from '../../context/projects/proyectoContext';

const NuevoProyecto = () => {

    // Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario, errorFormulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;


    // State para el proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: '',
    });

    // Extraer nombre del proyecto
    const {nombre} = proyecto;

    // Lee los contenidos del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        });
    }

    // Cuando el usuario envia un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();

        // Validar que el nombre del proyecto no esté vacío
        if(nombre === '') {
            mostrarError();
            return;
        }

        // Agregar state
        agregarProyecto(proyecto);

        // Reiniciar el form
        guardarProyecto({
            nombre: ''
        });
    }


    // Mostrar el formulario
    const onClickFormulario = () => {
        mostrarFormulario();
    }


    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick= {onClickFormulario}
            >Nuevo Proyecto   
            </button>

            {formulario ? 
                (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >
                        <input
                            type="text"
                            className="input-text"
                            placeholder="Nombre Proyecto"
                            name="nombre"
                            value={nombre}
                            onChange={onChangeProyecto}
                        />

                        <input 
                            type="submit"
                            className="btn btn-block btn-primario"
                            value="Agregar Proyecto"
                        />
                        
                    </form>
                ) : null }
                {errorFormulario ? <p className="mensaje error">El nombre del Proyecto es obligatorio</p> : null}
        </Fragment>
    );
}
 
export default NuevoProyecto;