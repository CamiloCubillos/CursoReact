import React, { useState } from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";
import { Button } from "reactstrap";

function ContactComponent({ contact }) {
  const [contactOnlineStatus, setContactOnlineStatus] = useState(
    contact.conectado
  );

  const toggleOnlineStatus = () => {
    contact.conectado = !contact.conectado;
    setContactOnlineStatus(!contact.conectado);
  };

  return (
    <div className="bg-dark text-light py-5 d-flex flex-column align-items-center vh-100">
      <h1>Nombre: {`${contact.nombre} ${contact.apellido}`}</h1>
      <h2>Apellido: {contact.email}</h2>
      <h3 className={contactOnlineStatus ? "text-success" : "text-danger"}>
        Status:{" "}
        {contactOnlineStatus ? "Contacto en linea" : "Contacto no disponible"}
      </h3>
      <Button color="primary" className="mt-5" onClick={toggleOnlineStatus}>
        Alternar estado online
      </Button>
    </div>
  );
}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ContactComponent;
