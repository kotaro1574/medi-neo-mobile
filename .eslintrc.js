// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "plugin:tailwindcss/recommended", "prettier"],
  plugins: ["tailwindcss", "prettier"],
  rules: {
    "prettier/prettier": "error",
  },
  ignorePatterns: ["/dist/*"],
};
