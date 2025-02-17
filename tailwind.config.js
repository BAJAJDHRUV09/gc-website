import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/*.{jsx,js}",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    themes: ["light", "dark"],
    colors:{
      subheading : "#6b7280",
      links : "#0673F0",
      success : "#2EA44E",
      sub2 : "#9099B3",
      lightPurple : "#e0d3fc"
    }
  },
};

export const plugins = [daisyui];

