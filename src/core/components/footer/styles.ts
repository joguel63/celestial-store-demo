import { SxProps, Theme } from "@mui/material";

type Styles = Record<
  | "footer"
  | "grid"
  | "brand"
  | "tagline"
  | "socials"
  | "socialIcon"
  | "columnTitle"
  | "linkList"
  | "link"
  | "newsletterDesc"
  | "inputRow"
  | "input"
  | "sendButton"
  | "bottom"
  | "copyright",
  SxProps<Theme>
>;

export const styles: Styles = {
  footer: {
    bgcolor: "background.default",
    borderTop: "1px solid",
    borderColor: "celestial.goldMist",
    py: 8,
    px: { xs: "20px", md: "64px" },
  },
  grid: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
    gap: 3,
    maxWidth: "1280px",
    mx: "auto",
  },
  brand: {
    color: "primary.main",
    mb: 2,
    display: "block",
  },
  tagline: {
    color: "text.secondary",
    fontSize: "1rem",
    mb: 3,
    pr: 2,
  },
  socials: {
    display: "flex",
    gap: 1,
  },
  socialIcon: {
    color: "celestial.goldDim",
    "&:hover": { color: "celestial.teal", bgcolor: "transparent" },
  },
  columnTitle: {
    color: "primary.main",
    fontWeight: 700,
    fontSize: "0.875rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    mb: 3,
  },
  linkList: {
    listStyle: "none",
    p: 0,
    m: 0,
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  link: {
    color: "text.secondary",
    fontSize: "0.875rem",
    textDecoration: "underline",
    textDecorationColor: "celestial.tealVeil",
    textUnderlineOffset: "4px",
    cursor: "pointer",
    "&:hover": {
      color: "celestial.teal",
    },
  } ,
  newsletterDesc: {
    color: "text.secondary",
    fontSize: "1rem",
    mb: 2,
  },
  inputRow: {
    display: "flex",
  },
  input: {
    bgcolor: "background.paper",
    "& .MuiOutlinedInput-root": {
      "& fieldset": { border: "none" },
      "&:focus-within fieldset": {
        border: "1px solid",
        borderColor: "celestial.teal",
      },
    },
    "& input": {
      color: "text.primary",
      "&::placeholder": { color: "celestial.stone" },
    },
  } ,
  sendButton: {
    bgcolor: "celestial.goldDim",
    color: "celestial.bronze",
    borderRadius: 0,
    "&:hover": {
      bgcolor: "primary.main",
    },
  } ,
  bottom: {
    maxWidth: "1280px",
    mx: "auto",
    mt: 8,
    pt: 4,
    borderTop: "1px solid",
    borderColor: "celestial.goldGlass",
    textAlign: "center",
  },
  copyright: {
    color: "text.secondary",
    fontSize: "0.875rem",
  },
};
