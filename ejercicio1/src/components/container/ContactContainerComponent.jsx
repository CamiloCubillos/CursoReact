import React from "react";
import PropTypes from "prop-types";
import ContactComponent from "../pure/ContactComponent";
import { Contact } from "../../models/contact.class";

function ContactContainerComponent(props) {
  const contact = new Contact(
    "Michael",
    "Gutierrez",
    "migutierr@mail.com",
    false
  );
  return <ContactComponent contact={contact} />;
}

ContactContainerComponent.propTypes = {};

export default ContactContainerComponent;
