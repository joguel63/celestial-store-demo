import { SxProps, Theme } from "@mui/material";

type Styles = Record<
  "nav" | "toolbar" | "brand" | "links" | "link" | "activeLink" | "actions",
  SxProps<Theme>
>;

export const styles: Styles = {
  nav: {
    bgcolor: "celestial.voidFog",
    backdropFilter: "blur(20px)",
    borderBottom: "1px solid",
    borderColor: "celestial.goldVeil",
    boxShadow: "none",
  },
  toolbar: {
    maxWidth: "1280px",
    width: "100%",
    mx: "auto",
    display: "flex",
    justifyContent: "space-between",
    height: 80,
    px: { xs: "20px", md: "64px" },
  },
  brand: {
    fontFamily: '"Playfair Display", serif',
    fontWeight: 700,
    fontSize: { xs: "1.25rem", md: "2rem" },
    color: "primary.main",
  },
  links: {
    display: { xs: "none", md: "flex" },
    gap: 5,
  },
  link: {
    fontFamily: '"Manrope", sans-serif',
    fontSize: "0.875rem",
    fontWeight: 600,
    letterSpacing: "0.1em",
    color: "text.secondary",
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      color: "celestial.teal",
    },
  },
  activeLink: {
    color: "primary.main",
    fontWeight: 700,
    borderBottom: "2px solid",
    borderColor: "primary.main",
    paddingBottom: "4px",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: 3,
  },
};
