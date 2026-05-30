import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
    "agolum-portfolio/**",
  ]),
  {
    // Basic rules; full Next.js flat config integration can be added later
    // when eslint-config-next provides array-compatible flat exports.
    rules: {
      "no-unused-vars": "warn",
    },
  },
]);

export default eslintConfig;
