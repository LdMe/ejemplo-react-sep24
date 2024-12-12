// routes/Root.jsx
import { Outlet, Link } from 'react-router-dom';

function Root() {
  return (
    <div>
      {/* Header que aparecerá en todas las páginas */}
      <header>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/eventos/1">Eventos</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* 
          Outlet es un espacio reservado donde se renderizarán
          los componentes de las rutas hijas
        */}
        
        <Outlet />
      </main>

      {/* Footer que aparecerá en todas las páginas */}
      <footer>© Proyecto blog-eventos 2024</footer>
    </div>
  );
}

export default Root;