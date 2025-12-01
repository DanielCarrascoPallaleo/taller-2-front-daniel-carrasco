import { Menubar } from 'primereact/menubar';
import { Outlet, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const items = [
    { 
        label: 'Home', 
        icon: 'pi pi-home', 
        command: () => navigate('/')
    },
    { 
        label: 'Implementación', 
        icon: 'pi pi-list', 
        command: () => navigate('/implementacion') 
    }
  ];

  const start = <img alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pokémon_logo.svg" height="40" className="mr-2"></img>;

  return (
    <div>
      <Menubar model={items} start={start} />
      <div style={{ padding: '20px' }}>
          <Outlet /> 
      </div>
    </div>
  );
}

export default App;