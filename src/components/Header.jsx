import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
import { Drawer } from '@mui/material';

const HeaderContainer = styled.header`
  background: #0047ab;
  padding: 1rem 2rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  gap: 8px;
`;

const Nav = styled.nav`
  a {
    margin: 0 1rem;
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
`;

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpenDrawer(isOpen);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
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
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
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
    <HeaderContainer>
      <Logo>
        <img
          src="../../public/robosphere_icon.jpg"
          alt="icon"
          className="w-[10vw] scale-125 sm:w-[3.5vw] rounded-full border-2"
        />
        RoboSphere
      </Logo>
      <Nav className="hidden sm:block">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </Nav>
      <div className="scale-150 sm:hidden">
        <RxHamburgerMenu onClick={toggleDrawer(true)} />
        <Drawer
          anchor="right"
          open={openDrawer}
          onClose={toggleDrawer(false)}
        >
          {list('right')}
        </Drawer>
      </div>
    </HeaderContainer>
  );
};

export default Header;
