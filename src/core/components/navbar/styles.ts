import { SxProps, Theme } from "@mui/material";

type Styles = Record<
  | "nav"
  | "toolbar"
  | "brand"
  | "links"
  | "link"
  | "activeLink"
  | "actions"
  | "languageGroup"
  | "languageButton",
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
  languageGroup: {
    height: 32,
    border: "1px solid",
    borderColor: "celestial.goldVeil",
    borderRadius: 0,
    "& .MuiToggleButtonGroup-grouped": {
      border: 0,
      borderRadius: 0,
      "&:not(:first-of-type)": {
        borderLeft: "1px solid",
        borderColor: "celestial.goldVeil",
      },
    },
  },
  languageButton: {
    minWidth: 36,
    px: 1.25,
    py: 0.5,
    color: "text.secondary",
    fontFamily: '"Manrope", sans-serif',
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: "0.1em",
    "&:hover": {
      color: "celestial.teal",
      bgcolor: "celestial.tealGlass",
    },
    "&.Mui-selected": {
      color: "primary.main",
      bgcolor: "celestial.goldMist",
    },
    "&.Mui-selected:hover": {
      bgcolor: "celestial.goldVeil",
    },
  },
};
