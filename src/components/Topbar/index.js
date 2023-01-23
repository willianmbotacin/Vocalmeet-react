import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';

import {
  Menu as MenuIcon,
} from '@mui/icons-material';

const Topbar = ({ sidebarRef, drawerWidth, pageName }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar variant="dense">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => sidebarRef.current.handleDrawerToggle()}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          {pageName}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Topbar;