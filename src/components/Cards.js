import { Fragment } from "react";
import Display from "./Display";
import { memo } from "react";
import Stack from "@mui/material/Stack";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
const Cards = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setBlogs([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((x) => (
          setBlogs((oldArray) => [...oldArray,x])
        ));
      }
    });
  }, []);

  return (
    <Fragment>
      <Stack direction="row" spacing={1}  sx={{flexWrap:'wrap',m:'auto'}}  >
        {blogs.map((x) => (
          <Display blog={x} key={Math.random()}/>
        ))}
      </Stack>
    </Fragment>
  );
};
export default memo(Cards);
