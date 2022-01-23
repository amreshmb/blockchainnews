import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 14,
  },
  postCard: {
    marginBottom: "12px",
  },
  navLink: {
    textDecoration: "none",
    "&:hover": {
      color: "red",
    },
  },
  title: {
    flexGrow: 1,
  },
  plr5: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  pr5: {
    paddingRight: 5,
  },
  postImage: {
    maxHeight: "100px",
    maxWidth: "100px",
    width: "100px",
    objectFit: "cover",
  },
  cardContent: {
    lineHeight: "1.5em",
    height: "3em",
    overflow: "hidden",
  },
  cardDescription: {
    cursor: "pointer",
  },
 upArrowIcon:{
   "& .MuiSvgIcon-root" :{
     fill: 'red',
     border: '1px solid red',
     width: '1.12rem',
     height:' 1.12rem',
     borderRadius:' 50%',
     "&:hover":{
       fill: "#fff",
       background: "red"
     }
   }
 },
 downArrowIcon:{
  padding: "0px 0.5rem",
   "& .MuiSvgIcon-root" :{
     fill: 'silver',
     border: '1px solid #222',
     width: '1.12rem',
     height:' 1.12rem',
     borderRadius:' 50%',
     "&:hover":{
       fill: "#fff",
       background: "#d3d3d3"
     }
   }
 },
 verticalMenu:{
  width: 'auto',
  minWidth: '260px',
  background: "#f4f4fd",
  position: "absolute"
 },
 menuVisible:{
  transform: "translate(5%, 25%)",
  "& .MuiCard-root" :{
    overflow:"visible"
  }
 },
 verticalMenuList:{
   listStyle:"none",
   padding: "0px",
   margin:"0px"
 },
 rightBorder:{
   paddingRight: "10px",
   borderRight: "1px solid #f6f6f6"
 },
 expandIcon:{
   width:"1.2rem",
   height: "1.12rem",
   fill: "gainsboro"
 },
 upVote:{
   alignItems: "center",
   padding:"0px 10px"
 }
}));
