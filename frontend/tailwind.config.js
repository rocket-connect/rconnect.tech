module.exports = {
  content: ["./src/**/*.{html,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      colors: {
        ["rocket-connect-darkblue"]: "#1A2735",
        ["rocket-connect-lightblue"]: "#00C0C6",
        ["rocket-connect-lightgrey"]: "#E4E4E4",
        ["rocket-connect-yellow"]: "#FED86E",
      },
    },
  },
};
