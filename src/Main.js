import { useRef } from 'react';
import {
  Box,
  Toolbar,
} from '@mui/material';

// Components
import Sidebar from './components/Sidebar';
import menuList from './components/Sidebar/menuList';
import Topbar from './components/Topbar';

// Pages
import Home from './pages/Home';
import ThingsToDo from './pages/ThingsToDo';
import CodeValidator from './pages/CodeValidator';
import Cryptocurrency from './pages/Cryptocurrency';
import FormValidation from './pages/FormValidation';

const Main = (props) => {
  const sidebarRef = useRef();
  const drawerWidth = 220;

  // Get current route properties
  const route = window.location.pathname;
  const sidebarData = menuList.filter((value) => value.route === route)[0];

  return (
    <Box sx={{ display: 'flex' }}>
      <Topbar
        pageName={sidebarData.name || ''}
        sidebarRef={sidebarRef}
        drawerWidth={drawerWidth}
      />
      <Sidebar
        ref={sidebarRef}
        drawerWidth={drawerWidth}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Toolbar />
        {route === '/' && <Home />}
        {route === '/things-to-do' && <ThingsToDo />}
        {route === '/code-validator' && <CodeValidator />}
        {route === '/data-table' && <Cryptocurrency />}
        {route === '/form-validation' && <FormValidation />}
      </Box>
    </Box>
  );
}

export default Main;