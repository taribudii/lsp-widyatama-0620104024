import React, { useState } from "react";
import {
  Box,
  CssBaseline,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
} from "@mui/material";
import useStore from "./store";

function KalkulatorJs() {
  const { formData, setFormData } = useStore();
  const [hasil, setHasil] = useState(0);

  const handleChange = (e) => {
    setFormData({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let alas = parseInt(formData.alas);
    let tinggi = parseInt(formData.tinggi);
    let hasil = (alas * tinggi) / 2;
    setHasil(hasil);

    // Convert form data to JSON
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
            Selamat Mengikuti Uji Kompetensi pada Skema Junior Web Programmer
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid item md={6} lg={6}>
                <Typography variant="h6" fontWeight={300} gutterBottom>
                  Alas
                </Typography>
              </Grid>
              <Grid item md={6} lg={6}>
                <TextField
                  fullWidth
                  name="alas"
                  variant="outlined"
                  margin="normal"
                  value={formData.alas}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={6} lg={6}>
                <Typography variant="h6" fontWeight={300} gutterBottom>
                  Tinggi
                </Typography>
              </Grid>
              <Grid item md={6} lg={6}>
                <TextField
                  fullWidth
                  name="tinggi"
                  variant="outlined"
                  margin="normal"
                  value={formData.tinggi}
                  onChange={handleChange}
                />
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
            </Box>
            <Typography variant="h6" fontWeight={300} gutterBottom>
              Hasil : {hasil}
            </Typography>
          </form>
        </Box>
      </Paper>
    </Box>
  );
}

export default KalkulatorJs;
