import React from 'react'
import { useHistory } from 'react-router-dom';
import { AtomAvatar } from '../../common/components';
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import Header from '../../common/components/header/Header';
import { useStyles } from './user.style';
import { AppBar, Box, Button,} from '@material-ui/core';
import { Link } from 'react-router-dom';

function User() {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div>
        <Header />
        <Box className={classes.background}>
            <Box display="flex" alignItems='center' justifyContent='center' marginTop='2rem'>
        <AtomAvatar  className={classes.margin_right}
         avatarLabel={
     <PersonOutlineIcon className={classes.avatar} />
        }
         />
         <span className={classes.margin_right}>NoNamesLeftToUse</span>
         <span  className={classes.margin_right}>(76)</span>
         <span className={classes.margin_right}>icon</span>
         </Box>
         <Box display='flex' justifyContent='center' color='white'  marginTop='1rem'>The Writer/Artist Himself</Box>
         <Box display='flex' justifyContent='center' color='white'  marginTop='1rem'>
             <Link className={classes.link}>5021 followers</Link>
             <span className={classes.vertical}></span>
             <Link className={classes.link}>27405 posts</Link>
             <span className={classes.vertical}></span>
             <Link className={classes.link}>27405 following</Link>
             <span className={classes.vertical}></span>
             <Link className={classes.link}>27405 HP</Link>

         </Box>
         <Box display='flex' justifyContent='center' color='white'>
             <Link className={classes.link}>Blacklisted Users</Link>
             <span className={classes.vertical}></span>
             <Link className={classes.link}>Muted Users</Link>
             <span className={classes.vertical}></span>
             <Link className={classes.link}>Followed Blacklists</Link>
             <span className={classes.vertical}></span>
             <Link className={classes.link}>Followed Muted Lists</Link>

         </Box>
         <Box display='flex' justifyContent='center' color='white'  marginTop='1rem' marginBottom='2rem'>
             <Box className={classes.right_margin}>
                 <span className={classes.span_margin}>icon</span>
                 <span>Canada</span>
             </Box>
             <Box className={classes.right_margin}>
                 <span className={classes.span_margin}>icon</span>
                 <span>Joined September 2016</span>
             </Box>
             <Box>
                 <span className={classes.span_margin}>icon</span>
                 <span>Active1 hour ago</span>
             </Box>
         </Box>
         
        </Box>
        <AppBar position="static" marginTop='0'>
  {/* <Tabs  aria-label="simple tabs example"> */}
      <Box className={classes.tabs}>
          <Box className={classes.hover}>
    <Button>Blog</Button>
    <Button>Posts</Button>
    <Button>Replies</Button>
    <Button>Social</Button>
    <Button>Notifications</Button>
    </Box>
    <Box>
    <Button>Wallet</Button>
    </Box>
    </Box>
  {/* </Tabs> */}
</AppBar>
{/* <TabPanel>
  Item One
</TabPanel>
<TabPanel>
  Item Two
</TabPanel>
<TabPanel >
  Item Three
</TabPanel> */}
            
        </div>
    )
}

export default User
