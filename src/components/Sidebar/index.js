import { useState, useImperativeHandle, forwardRef } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Link,
} from '@mui/material';

import menuList from './menuList';

const Sidebar = forwardRef((props, ref) => {
  // Destructured props
  const { window, drawerWidth } = props;

  // States
  const [mobileOpen, setMobileOpen] = useState(false);

  // Toggle sidebar on mobile
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  useImperativeHandle(ref, () => ({ handleDrawerToggle }));

  // Container
  const container = window !== undefined ? () => window().document.body : undefined;

  const DrawerContent = (
    <>
      <Toolbar />
      <List>
        {menuList.map((menu, index) => (
          <Link
            key={index}
            href={menu.route}
            underline="none"
            color="inherit"
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {menu.icon}
                </ListItemIcon>
                <ListItemText primary={menu.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 }
      }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Improve performance on mobile devices
        }}
        sx={{
          display: {
            xs: 'block',
            sm: 'none'
          },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth
          },
        }}
      >
        {DrawerContent}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: {
            xs: 'none',
            sm: 'block'
          },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth
          },
        }}
        open
      >
        {DrawerContent}
      </Drawer>
    </Box>
  );
})

export default Sidebar;