import {AppBar, Toolbar ,styled,Box ,Typography, Drawer,List, IconButton} from '@mui/material'
import { Link } from 'react-router-dom'
import { Menu } from '@mui/icons-material'
import { useState } from 'react'

//components
import Search from './Search'
import CustomButtons from './CustomButtons'

const Stylebar =styled(AppBar)`
    background: #2874f0;
    height: 55px;
`
const Component =styled(Link)`
    margin-left:12%;
    line-height:0;
    text-decoration: none;
    color: inherit;
`
const SubHeading =styled(Typography)`
    font-size:10px ;
    font-style:italic;
    
`
const MenuButton =styled(IconButton)(({ theme }) => ({
     display: 'none',
     [theme.breakpoints.down('md')]: {
         display: 'block'
     }
}))

const Image =styled('img')({
     width: 10,
     height: 10,
     marginLeft: 4
})

const ButtonWrapper = styled(Box)(({ theme }) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    }
}))

    
const Header = ()=> {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false);

    const handleOpen = ()=> {
        setOpen(true);
    }
    const handleClose = ()=> {
        setOpen(false);
    }
    
    const list = ()=> {
        <Box style={{ width: 250}} onClick={handleClose}>
            <List>
                <listItem  button>
                      <CustomButtons/>
                </listItem>
            </List>
        </Box>
    }
    
    return(
      <Stylebar>
          <Toolbar style={{minHeight:55}}>
            <MenuButton color="inherit" onClick={handleOpen}>
               <Menu/>
            </MenuButton>
             
             <Drawer open={open} onClose={handleClose}>
                {
                    list()
                }
             </Drawer>

               <Component to='/'>
                  <img src={logoURL} alt="logo" style={{width: 75}}/>
                  <Box style={{display: 'flex'}}>
                       <SubHeading>Explore&nbsp;
                        <Box component="span" style={{color: '#FFE500'}}>Plus</Box>
                        </SubHeading>
                        <Image src={subURL} alt="logo"/>
                  </Box>
               </Component>
               <Search/>
               <ButtonWrapper>
                     <CustomButtons/>
               </ButtonWrapper>
          </Toolbar>
      </Stylebar>
    )
}

export default Header;