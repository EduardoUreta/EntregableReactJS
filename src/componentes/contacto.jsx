import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

export const Contacto = () => {
    const [messageSent, setMessageSent] = useState(false);
    const initialValues = {
        name: '',
        email: '',
        message: ''
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('El nombre es requerido'),
        email: Yup.string().email('Ingresa un correo electrónico válido').required('El correo electrónico es requerido'),
        message: Yup.string().required('El mensaje es requerido')
    });

    const handleSubmit = (values, { setSubmitting }) => {
        setSubmitting(false);
        setMessageSent(true);
    };

    return (
        <div className="container">
            <h2 className="text-center">Formulario de Contacto</h2>
            {messageSent ? (
                <div className="alert alert-success mt-3" role="alert">
                    ¡Tu mensaje ha sido enviado exitosamente!
                </div>
            ) : null}
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <Field type="text" name="name" className="form-control" placeholder="Ingresa tu nombre"/>
                            <ErrorMessage name="name" component="div" className="text-danger" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Apellido</label>
                            <Field type="text" name="surname" className="form-control" placeholder="Ingresa tu apellido"/>
                            <ErrorMessage name="surname" component="div" className="text-danger" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Correo Electrónico</label>
                            <Field type="email" name="email" className="form-control" placeholder="Ingresa tu correo"/>
                            <ErrorMessage name="email" component="div" className="text-danger" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensaje</label>
                            <Field as="textarea" name="message" className="form-control" rows="4" />
                            <ErrorMessage name="message" component="div" className="text-danger" />
                        </div>
                        <button type="submit" className="btn btn-success" disabled={isSubmitting}>
                            Enviar
                        </button>
                        <br></br>
                        <br></br>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

