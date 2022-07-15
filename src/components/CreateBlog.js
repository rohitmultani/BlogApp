import { Fragment, useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { db } from "../firebase";
import { uid } from "uid";
import { useSelector, useDispatch } from "react-redux";
import { upDate } from "../Utils/Store";
import { set, ref, update } from "firebase/database";
const CreateBlog = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state);
  const [title, setTitle] = useState();
  const [detail, setDetails] = useState();
  // const [isEdit,setIsEdit]=useState(true);
  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const onChangeDetailHandler = (e) => {
    setDetails(e.target.value);
  };
  useEffect(() => {
    if (blogs[0]) {
      setTitle(blogs[0].title);
      setDetails(blogs[0].detail);
      // setIsEdit(true)
    }
  }, [blogs]);
  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      title,
      detail,
      uuid,
    });
    console.log(title);
    setTitle("");
    setDetails("");
  };
  const updateHandler = () => {
    // setTitle(notes.title);
    // setDetails(notes.detail);
    // console.log(notes.uuid)

    update(ref(db, `/${blogs[0].uuid}`), {
      title,
      detail,
      uuid: blogs[0].uuid,
    });
    dispatch(upDate([]));
    setTitle("");
    setDetails("");
    //   setIsEdit(false);
    console.log(blogs[1]);
  };
  const clearHandler = () => {
    setTitle("");
    setDetails("");
  };
  return (
    <Fragment>
      <div>
        <Box sx={{ m: 2, textAlign: "center", fontSize: 30 }}> Write Blog</Box>
        <Stack spacing={1}>
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            placeholder="Add Title"
            variant="filled"
            fullWidth
            size="small"
            value={title}
            onChange={onChangeTitleHandler}
            sx={{ m: "auto" }}
          />
          <TextField
            hiddenLabel
            fullWidth
            placeholder="Add Details"
            id="filled-hidden-label-normal"
            variant="filled"
            value={detail}
            onChange={onChangeDetailHandler}
            sx={{ m: "auto" }}
          />
          <Box sx={{ display: "flex" }}>
            <Button
              variant="contained"
              sx={{ width: { md: "30vw" }, m: { xs: 1, md: 2 } }}
              onClick={writeToDatabase}
            >
              Add
            </Button>
            <Button
              variant="contained"
              sx={{ width: { md: "30vw" }, m: { xs: 1, md: 2 } }}
              onClick={updateHandler}
            >
              update
            </Button>
            <Button
              variant="contained"
              sx={{ width: { md: "30vw" }, m: { xs: 1, md: 2 } }}
              onClick={clearHandler}
            >
              Clear
            </Button>
          </Box>
        </Stack>
      </div>
    </Fragment>
  );
};
export default CreateBlog;
