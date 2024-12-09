import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre Nosotros</h3>
            <p className="text-sm text-gray-600">
              Tu Empresa es líder en la industria de comida rápida, ofreciendo productos de alta calidad y un servicio excepcional desde 2010.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="text-sm text-gray-600">
              Dirección: Calle Principal 123, Ciudad<br />
              Teléfono: (123) 456-7890<br />
              Email: info@tuempresa.com
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Horario</h3>
            <p className="text-sm text-gray-600">
              Lunes a Viernes: 11:00 AM - 10:00 PM<br />
              Sábados y Domingos: 12:00 PM - 11:00 PM
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Desarrollado por @leotechcoder
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

