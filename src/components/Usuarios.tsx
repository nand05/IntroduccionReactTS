import { Usuario } from '../interfaces/reqRes';
import { useUsuarios } from '../hooks/useUsuarios';


export const Usuarios = () => {

    const {usuarios,paginaSiguiente,paginaAnterior} = useUsuarios(); //Esto esta desestructurado

    //const renderItem = (usuario: Usuario)=>{//Esto se puede desestructurar para sacar los valores que se necesiten de usuario
    const renderItem = ({id,first_name,last_name,email,avatar}: Usuario)=>{//Esto se puede desestructurar para sacar los valores que se necesiten de usuario
      return(
        <tr key={id.toString()}>
          <td>
            <img 
              src={avatar} 
              alt={first_name} 
              style={{
                width:35,
                borderRadius:100
              }}
            />
          </td>
          <td>{first_name} {last_name}</td>
          <td>{email}</td>
        </tr>
      );
    }

  return (
    <>
        <h3>Usuarios</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>nombre</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                {
                  usuarios.map(usuario => renderItem(usuario)) //Igual se puede dejar solamente usuario.map(renderItem) ya que el usuario es el mismo que se le pasa a la funcion
                }
            </tbody>
        </table>
        <button 
          className="btn btn-primary"
          onClick={paginaAnterior}
        > Anteriores
        </button>
        &nbsp;
        <button 
          className="btn btn-primary"
          onClick={paginaSiguiente}
        > Siguientes
        </button>
    </>
  )
}
