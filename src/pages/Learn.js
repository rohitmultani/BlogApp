import { Fragment } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import Header from "../components/Header";
const Learn = () => {
  const blogs = useSelector((state) => state);
  return (
    <Fragment>
        <Header/>
      <Box sx={{ minWidth: 275, m:{xs:2,md:10}}}>
        <Card variant="outlined" sx={{borderColor:'black'}}>
          <CardContent>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              {blogs[0].title}
            </Typography>

            <Typography variant="body2" sx={{maxHeight:200}}>{blogs[0].detail}</Typography>
          </CardContent>
         <Link to="/">
        <Button variant="contained" sx={{m:2}}>Back</Button></Link>
        </Card>
      </Box>
    </Fragment>
  );
};
export default Learn;
