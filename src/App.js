import React, {useState} from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import { v4 as uuidv4 } from 'uuid';

function App(){

  const usersData = [
    {id:uuidv4(), nombre: 'Luis Andres', apellido:'Acuña Ramos' , direccion:'Los Cedros' , fecha:'1990-04-09' , hora:'18:12' , sintomas:'Dolor Estomago'}
  ]
  //state
  const [users, setUsers] = useState(usersData);

  //Agregar Citas
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  //Editar Citas
  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id:null, nombre: '', apellido:'' , direccion:'' , fecha:'' , hora:'' , sintomas:''
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id:user.id, nombre: user.nombre, apellido: user.apellido , direccion: user.direccion , fecha: user.fecha , hora: user.hora  , sintomas: user.sintomas 
    })
  }

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }

  //Eliminar Usuarios
  const deleteUser = (id) =>{
    const arrayFiltrado = users.filter(user => user.id !== id);
    setUsers(arrayFiltrado);
  }

  return (
    <div className="container">
      <h1>Formulario de Citas</h1>
      <div className="flex-row">
        <div className="flex-large">
          
          {
            editing ? (
              <div>
                  <h2>Editar las Citas</h2>
                  <EditUserForm currentUser={currentUser} updateUser={updateUser}/>
              </div>
              
            ):(
              <div>
              <h2>Agregar Nuevas Citas</h2>
              <AddUserForm addUser={addUser}/>
              </div>
            )
            
          }

        </div>
        <div className="flex-large">
          <h2>Lista de Citas</h2>
          <UserTable users={users} deleteUser = {deleteUser} editRow= {editRow}/>
        </div>
      </div>
    </div>
  );
}

export default App;
