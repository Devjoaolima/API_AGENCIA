import React from 'react';

const ClientList2 = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img
        src="https://images.pexels.com/photos/3408745/pexels-photo-3408745.jpeg"
        alt="Imagem de Viagem"
        style={{ display: 'block', margin: 'auto', maxWidth: '100%', height: 'auto' }}
      />
      <p style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
      }}>Bem-vindo à Agência de Viagens</p>
    </div>
  );
};

export default ClientList2;
