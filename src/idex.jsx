import React from 'react';
import './App.css'; // Archivo de estilos para la imagen de fondo

function App() {
  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        {/* Logo */}
        <img src="/logo.png" alt="Logo del sitio" className="logo" />
      </div>

      {/* Body */}
      <div className="body">
        {/* Video */}
        <iframe
          title="Video de un servicio de streaming"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VIDEO_ID"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>Nombre del curso: Curso de React</p>
        <p>Nombre completo: Tu Nombre Completo</p>
        <p>Código: TU_CÓDIGO</p>
        <p>Correo de contacto: correo@example.com</p>
      </div>
    </div>
  );
}

export default App;
