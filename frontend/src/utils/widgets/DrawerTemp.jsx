/* eslint-disable react/prop-types */
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md';

export default function DrawerTemp({ items, secondaryItems, drawerWidth = 250 }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const DrawerList = (
    <Box sx={{ width: drawerWidth }} role="presentation">
      <Button onClick={toggleDrawer} sx={{ margin: '10px' }}>Close drawer</Button>
      <Divider />
      <List>
        {items.map(({ text, url }, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component="a" href={url} target="_blank" rel="noopener noreferrer">
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {secondaryItems.map(({ text, url }, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component="a" href={url} target="_blank" rel="noopener noreferrer">
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button
        onClick={toggleDrawer}
        sx={{
          position : 'fixed',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          zIndex: 11,
          
        }}
      >
        {open ? <MdOutlineKeyboardArrowLeft size={24}  /> : <MdOutlineKeyboardArrowRight size={24} />}
      </Button>
      <Drawer
        variant="persistent"
        open={open}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}