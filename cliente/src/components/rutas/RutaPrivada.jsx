import React, {useContext, useEffect} from 'react';
import { Route, Redirect } from 'react-router';
import authContext from '../../context/autenticacion/authContext';

const RutaPrivada = ({component: Component, ...props}) => {
    
    const AuthContext = useContext(authContext);
    const { autenticado, cargando, usuarioAutenticado } = AuthContext;

    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, []);

    return (  
        <Route
            {...props}
            render={props => !autenticado  && !cargando ? (
                <Redirect to="/" />
            ) : (
                <Component {...props} />
            ) } />
    );
}
 
export default RutaPrivada;