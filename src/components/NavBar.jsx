// Library imports
import { AppBar, Box, Link, Typography } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import "@fontsource-variable/playfair-display";

const NavBar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#29435c",
        py: 2,
        userSelect: "none",
      }}
    >
      <Link href="/" color="#f3f3f3" underline="none">
        <Box display="flex" gap={2}>
          <MovieIcon fontSize="large" />
          <Typography
            variant="h2"
            fontSize={28}
            fontFamily="'Playfair Display Variable', sans-serif"
            fontWeight={800}
          >
            MVZ
          </Typography>
        </Box>
      </Link>
    </AppBar>
  );
};

export default NavBar;
