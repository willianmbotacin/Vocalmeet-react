
import {
  Home as HomeIcon,
  PlaylistAddCheck as PlaylistAddCheckIcon,
  Done as DoneIcon,
  TableView as TableViewIcon,
  PostAdd as PostAddIcon,
} from '@mui/icons-material';

export default [
  {
    name: 'Home',
    route: '/',
    icon: <HomeIcon />,
  },
  {
    name: 'Things To Do',
    route: '/things-to-do',
    icon: <PlaylistAddCheckIcon />,
  },
  {
    name: 'Code Validator',
    route: '/code-validator',
    icon: <DoneIcon />,
  },
  {
    name: 'Data Table',
    route: '/data-table',
    icon: <TableViewIcon />,
  },
  {
    name: 'Form Validation',
    route: '/form-validation',
    icon: <PostAddIcon />,
  },
];