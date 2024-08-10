import React from "react";
import {
  Box,
  CssBaseline,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Paper,
  Grid,
} from "@mui/material";
import useStore from "./store";

function BiodataForm() {
  const { formData, setFormData, resetFormData } = useStore();

  const handleChange = (e) => {
    setFormData({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert form data to JSON
    const jsonData = JSON.stringify(formData);

    // Log the JSON data (for testing purposes)
    console.log("JSON Data:", jsonData);

    // Optional: You can clear the form or give feedback to the user here
    alert("Data saved successfully!");
  };

  const handleCancel = () => {
    resetFormData();
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <CssBaseline />

      <Paper>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: "60px 300px",
          }}
        >
          <Typography
            variant="h5"
            fontWeight={300}
            textAlign="center"
            gutterBottom
          >
            Input Biodata
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid item md={6} lg={6}>
                <Typography variant="h6" fontWeight={300} gutterBottom>
                  NIK
                </Typography>
              </Grid>
              <Grid item md={6} lg={6}>
                <TextField
                  fullWidth
                  name="nik"
                  variant="outlined"
                  margin="normal"
                  value={formData.nik}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={6} lg={6}>
                <Typography variant="h6" fontWeight={300} gutterBottom>
                  Nama
                </Typography>
              </Grid>
              <Grid item md={6} lg={6}>
                <TextField
                  fullWidth
                  name="nama"
                  variant="outlined"
                  margin="normal"
                  value={formData.nama}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={6} lg={6}>
                <Typography variant="h6" fontWeight={300} gutterBottom>
                  Tempat Lahir
                </Typography>
              </Grid>
              <Grid item md={6} lg={6}>
                <TextField
                  fullWidth
                  name="tempatLahir"
                  variant="outlined"
                  margin="normal"
                  value={formData.tempatLahir}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={6} lg={6}>
                <Typography variant="h6" fontWeight={300} gutterBottom>
                  Tanggal Lahir
                </Typography>
              </Grid>
              <Grid item md={6} lg={6}>
                <TextField
                  fullWidth
                  type="date"
                  name="tanggalLahir"
                  variant="outlined"
                  margin="normal"
                  value={formData.tanggalLahir}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={6} lg={6}>
                <Typography variant="h6" fontWeight={300} gutterBottom>
                  Jenis Kelamin
                </Typography>
              </Grid>
              <Grid item md={6} lg={6}>
                <TextField
                  fullWidth
                  name="jenisKelamin"
                  variant="outlined"
                  margin="normal"
                  value={formData.jenisKelamin}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={6} lg={6}>
                <Typography variant="h6" fontWeight={300} gutterBottom>
                  Alamat
                </Typography>
              </Grid>
              <Grid item md={6} lg={6}>
                <TextField
                  fullWidth
                  name="alamat"
                  variant="outlined"
                  margin="normal"
                  value={formData.alamat}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={6} lg={6}>
                <Typography variant="h6" fontWeight={300} gutterBottom>
                  Agama
                </Typography>
              </Grid>
              <Grid item md={6} lg={6}>
                <FormControl fullWidth margin="normal" variant="outlined">
                  <InputLabel sx={{ color: "white" }}>Agama</InputLabel>
                  <Select
                    name="agama"
                    value={formData.agama}
                    onChange={handleChange}
                    label="Agama"
                  >
                    <MenuItem value="">
                      <em>Pilih</em>
                    </MenuItem>
                    <MenuItem value="Islam">Islam</MenuItem>
                    <MenuItem value="Kristen">Kristen</MenuItem>
                    <MenuItem value="Katolik">Katolik</MenuItem>
                    <MenuItem value="Hindu">Hindu</MenuItem>
                    <MenuItem value="Budha">Budha</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mr: 1 }}
              >
                Submit
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </Box>
          </form>
        </Box>
      </Paper>
    </Box>
  );
}

export default BiodataForm;
