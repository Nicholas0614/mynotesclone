import { useState } from "react";
import {
  Box,
  Container,
  Paper,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Editor from "react-simple-wysiwyg";
import { Link as RouterLink, useNavigate } from "react-router";

function AddNewPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("my <b>HTML</b>");

  function onChange(e) {
    setContent(e.target.value);
  }
  return (
    <Container maxWidth="md">
      <Typography variant="h3" sx={{ py: "30px" }}>
        Add New Note
      </Typography>
      <Paper elevation={3} sx={{ p: "20px", mt: "20px" }}>
        <TextField
          fullWidth
          id="note_title"
          label="title"
          variant="outlined"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <FormControl fullWidth sx={{ mt: "20px" }}>
          <InputLabel id="note_category-label">Age</InputLabel>
          <Select
            labelId="note_category-label"
            id="note_category"
            label="Age"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <MenuItem value={"Personal"}>Personal</MenuItem>
            <MenuItem value={"Work"}>Work</MenuItem>
            <MenuItem value={"Idea"}>Idea</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ pt: "20px" }}>
          <Typography variant="body1" sx={{ mb: "10px" }}>
            Content
          </Typography>
          <Editor
            containerProps={{ style: { height: "400px" } }}
            value={content}
            onChange={onChange}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
            mt: "20px",
          }}
        >
          <Button color="primary" variant="contained">
            SAVE NOTE
          </Button>
          <Button component={RouterLink} to="/" variant="outlined">
            CANCEL
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default AddNewPage;
