import React from 'react'
import { useForm } from 'react-hook-form'
import {Button, FormGroup, Form, StyleInput, StyleArea, Alert} from './style.js';

const EditUserForm= (props) =>{

    // console.log(props.currentUser);

    const {register, errors, handleSubmit, setValue} = useForm({
      defaultValues: props.currentUser
    });

    setValue('nombre', props.currentUser.nombre);
    setValue('apellido', props.currentUser.apellido);
    setValue('direccion', props.currentUser.direccion);
    setValue('fecha', props.currentUser.fecha);
    setValue('hora', props.currentUser.hora);
    setValue('sintomas', props.currentUser.sintomas);

    const onSubmit = (data,e) =>{
        console.log(data)
        data.id = props.currentUser.id;
        props.updateUser(props.currentUser.id, data)
  
        e.target.reset();
    }

    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup col="2">
            <label htmlFor="nombre">Nombre</label>
            <StyleInput
              type="text"
              placeholder="Ingresar Nombre"
              name="nombre" ref={
                  register({
                    required: {value: true, message: 'Ingresar el Nombre'}
                   })
              }
            />
            <div>{errors?.nombre?.message}</div>
            
          </FormGroup>
          <FormGroup col="2">
            <label htmlFor="apellido">Apellido</label>
            <StyleInput
              type="text"
              placeholder="Ingresar Apellido"
              name="apellido" ref={
                register({
                  required: {value: true, message: 'Ingresar el Apellido'}
                 })
            }
            />
            <div>{errors?.apellido?.message}</div>
          </FormGroup>
          <FormGroup col="1">
            <label htmlFor="direccion">Dirección</label>
            <StyleInput
              type="text"
              placeholder="Ingresar Dirección"
              name="direccion" ref={
                register({
                  required: {value: true, message: 'Ingresar el Dirección'}
                 })
            }
            />
          </FormGroup>
          <FormGroup col="3">
            <label htmlFor="fecha">Fecha cita</label>
            <StyleInput type="date" name="fecha" 
            ref={
                register({
                  required: {value: true, message: 'Ingresar la Fecha'}
                 })
            }
            />
          </FormGroup>
          <FormGroup col="3">
            <label htmlFor="hora">Hora cita</label>
            <StyleInput type="time" name="hora" 
            ref={
                register({
                  required: {value: true, message: 'Ingresar la Hora'}
                 })
            }
            />
          </FormGroup>
          <FormGroup col="1">
            <label htmlFor="sintomas">Sintomas</label>
            <StyleArea
              placeholder="Ingresar sintomas"
              name="sintomas" ref={
                register({
                  required: {value: true, message: 'Ingresar los Sintomas'}
                 })
            }
            ></StyleArea>
          </FormGroup>         
          <FormGroup col="1">
            <Button>Actualizar Cita</Button>
          </FormGroup>
        </Form>
    )
}


export default EditUserForm;