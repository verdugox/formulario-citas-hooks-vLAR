import React from 'react'

const UserTable = (props) => {
    console.log(props.users)
    return (  
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Dirección</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Síntomas</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.length > 0 ?
                    props.users.map(user => (
                        <tr key={user.id}>
                        <td>{user.nombre}</td>
                        <td>{user.apellido}</td>
                        <td>{user.direccion}</td>
                        <td>{user.fecha}</td>
                        <td>{user.hora}</td>
                        <td>{user.sintomas}</td>
                        <td>
                            <button className="button muted-button"
                            onClick={() => {props.editRow(user)}}
                            >Actualizar</button>
                            <button className="button muted-button" 
                            onClick={() => {props.deleteUser(user.id)}}
                            >Eliminar</button>
                            
                        </td>
                        </tr>
                    )): (
                        <tr>
                            <td colSpan={3}>No existen citas</td>
                        </tr>
                        
                    )
                }
            </tbody>
        </table>
    );
}
 
export default UserTable;