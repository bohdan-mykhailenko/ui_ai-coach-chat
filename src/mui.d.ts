import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    black: Palette['primary'];
    blue: Palette['primary'];
    gray: Palette['primary'];
    white: Palette['primary'];
  }

  interface PaletteOptions {
    black: PaletteOptions['primary'];
    blue: PaletteOptions['primary'];
    gray: PaletteOptions['primary'];
    white: PaletteOptions['primary'];
  }
}
