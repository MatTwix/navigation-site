import React from 'react';
import {
    AppBar,
    Avatar,
    Box,
    Container,
    IconButton,
    Link as LinkUi,
    List,
    ListItem,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography
} from "@mui/material";
import {Link, Outlet} from "react-router-dom";
import NavigationTwoToneIcon from '@mui/icons-material/NavigationTwoTone';
import MenuIcon from "@mui/icons-material/Menu";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Layout = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Container>
            <header>
                <AppBar position="static">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Link to={'/'} className={'link'}>
                                <LinkUi
                                    sx={{
                                        display: {xs: 'none', md: 'flex'},
                                        alignItems: 'center',
                                        color: "white"
                                    }}
                                    underline="none"
                                >
                                    <NavigationTwoToneIcon sx={{mr: 1}}/>
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        sx={{
                                            mr: 2,
                                            fontFamily: 'monospace',
                                            fontWeight: 700,
                                            letterSpacing: '.3rem',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        FIND_CLASS
                                    </Typography>
                                </LinkUi>
                            </Link>

                            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon/>
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: {xs: 'block', md: 'none'},
                                    }}
                                >
                                    <List sx={{flexGrow: 1}}>
                                        <ListItem
                                            sx={{my: 2, color: 'white', display: 'block'}}
                                        >
                                            <Link to={'/classes'} className={'link'}><LinkUi sx={{color: 'black'}}
                                                                          underline='none'>Classes</LinkUi></Link>
                                        </ListItem>
                                        <hr/>
                                        <ListItem
                                            sx={{my: 2, color: 'white', display: 'block'}}
                                        >
                                            <Link to={'/teachers'} className={'link'}><LinkUi sx={{color: 'black'}}
                                                                           underline='none'>Teachers</LinkUi></Link>
                                        </ListItem>
                                    </List>
                                </Menu>
                                <Link to={'/'} className={'link'}><LinkUi sx={{color: 'white', display: 'flex', alignItems: 'center'}}
                                                       underline='none'>
                                    <NavigationTwoToneIcon sx={{mr: 1}}/>
                                    <Typography
                                        variant="h5"
                                        noWrap
                                        sx={{
                                            mr: 2,
                                            flexGrow: 1,
                                            fontFamily: 'monospace',
                                            fontWeight: 700,
                                            letterSpacing: '.3rem',
                                            color: 'inherit',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        FIND_CLASS
                                    </Typography>
                                </LinkUi></Link>
                            </Box>
                            <List sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                                <ListItem
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    <Link to={'/classes'} className={'link'}><LinkUi sx={{color: 'white'}}
                                                                  underline="none">Classes</LinkUi></Link>
                                </ListItem>
                                <ListItem
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    <Link to={'/teachers'} className={'link'}><LinkUi sx={{color: 'white'}}
                                                                   underline="none">Teachers</LinkUi></Link>
                                </ListItem>
                            </List>

                            <Box sx={{flexGrow: 0}}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{mt: '45px'}}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer className='footer'>
                <Box sx={{bgcolor: 'gray'}}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <NavigationTwoToneIcon sx={{display: 'flex', mr: 1, opacity: 0.75}}/>
                            <Typography
                                variant="h6"
                                noWrap
                                sx={{
                                    mr: 2,
                                    display: 'flex',
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    opacity: 0.75
                                }}
                            >
                                FIND_CLASS
                            </Typography>

                            <Typography>&copy; Матвей Федоров, 10б</Typography>
                        </Toolbar>
                    </Container>
                </Box>
            </footer>
        </Container>
    );
};

export default Layout;
