import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginTs from "@typescript-eslint/eslint-plugin";
import parserTs from "@typescript-eslint/parser";
import pluginNext from "@next/eslint-plugin-next";
import pluginPrettier from "eslint-plugin-prettier";
import pluginTailwind from "eslint-plugin-tailwindcss";

export default [

  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      "prettier/prettier": "error", 
      "no-unused-vars": "warn",
      "no-console": "warn",
    },
  },

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        project: "./tsconfig.json", 
      },
    },
    plugins: {
      "@typescript-eslint": pluginTs,
    },
    rules: {
      ...pluginTs.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": ["warn"],
      "@typescript-eslint/explicit-function-return-type": "off", 
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },

  {
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      "react/prop-types": "off", 
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    plugins: {
      "@next/next": pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      "@next/next/no-html-link-for-pages": "error",
    },
  },

  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    plugins: {
      tailwindcss: pluginTailwind,
    },
    rules: {
      ...pluginTailwind.configs.recommended.rules,
      "tailwindcss/classnames-order": "warn", 
      "tailwindcss/no-custom-classname": "off", 
    },
  },

  {
    ignores: [
      "node_modules/",
      "dist/",
      ".next/",
      "*.config.js",
      "*.config.mjs",
    ],
  },
];