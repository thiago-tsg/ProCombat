import React from 'react';
import whatsappIcon from '../assets/icon/whatsapp.svg';

import { CONTACTS } from './config/whats';

// style
import '../styles/ButtonWhats.scss';

const FloatingWhatsAppButton = () => {
  return (
    <a
      href={`https://wa.me/${CONTACTS.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <img src={whatsappIcon} alt="WhatsApp" />
    </a>
  );
};

export default FloatingWhatsAppButton;