
### Plugins

- Auto Rename Tag
- Code Spell Checker
- Brazilian Portuguese - Code Spell Checker
- Color Highlight
- EditorConfig for VS Code
- ESLint
- Prettier
- Path Intellisense
- Relative Path
- vscode-icons

### Configuring Eslint
1. Run command`npm init @eslint/config`.
2. Answer the questions.
3. Run the commands
	- `npm install eslint-config-prettier -D`.
	- `npm i eslint-plugin-react-hooks`.
4. **[*.eslintrc* file]** Inside _"extends"_ property, add _"prettier"_.
5. **[*.eslintrc* file]** Inside _"plugins"_, add *"react-hooks"*
6. **[*.eslintrc* file]** Inside _"rules"_ property, add the following code:
```json
"rules": {
  "react/jsx-filename-extension": [
     "warn",
    {
     "extensions": [".js", ".jsx", ".ts", ".tsx"]
    }
  ],
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "warn",  
  "react/prop-types": "off",
  "react/react-in-jsx-scope": "off",
  "@typescript-eslint/explicit-module-boundary-types": "off",
  "@typescript-eslint/explicit-function-return-type": "off",
  "@typescript-eslint/triple-slash-reference": "off"
}
```
7. **[*.eslintrc* file]** Add this key in this file: 
```json
"settings": {
    "react": {
        "version": "detect"
    } 
}
```
8. **[*.eslintrc* file]** Inside _"parserOptions"_, add `"project": ["./tsconfig.json"]`

### Configuring Prettier
1. Run the command `npm install prettier -D`.
2. Create a _".prettierrc"_ file on root.
3. **[*.prettierrc* file]** Add the follow content:
```json
{
    "arrowParens": "always",
    "bracketSpacing": true,
    "jsxBracketSameLine": false,
    "jsxSingleQuote": false,
    "printWidth": 100,
    "proseWrap": "always",
    "quoteProps": "as-needed",
    "semi": true,
    "singleQuote": true,
    "tabWidth": 2,
    "trailingComma": "es5",
    "useTabs": false,
    "endOfLine": "auto"
}
```
4. Execute command `npm install --save-dev eslint-plugin-prettier`, `npm i --save-dev eslint-config-prettier`.
5. **[*.eslintrc* file]** Insert on *"extends"* key, the line *"plugin:prettier/recommended"*
```json
   "extends":[
      "plugin:react/recommended",
      "standard-with-typescript",
      "prettier",
      **"plugin:prettier/recommended"**
   ]
```

### Configuring Jest
1. Execute the following command `npm install --save-dev jest @babel/preset-typescript @types/jest`.
2. **[*.eslintrc* file]** ESLint must be configured previously. Add on _"env"_ the value `"jest": true` e `"node": true`. Example:

```json
   "env":{
      "browser":true,
      "es2021":true,
      "jest":true,
      "node":true
   }
```

3. Create _"jest.config.js"_ file on root.
4. **[*jest.config.js* file]** Add the following content inside this file:
```js
module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  collectCoverage: true,
  collectCoverageFrom: ["/src/**/*.ts(x)"],
  setupFilesAfterEnv: ["<rootDir>/.jest/jestSetupAfterEnv.ts"],
};
```
5. Run the following command `npm i jest-environment-jsdom`.
6. Create _".jest"_ folder in root (It'll be used when configuring _React Testing Library_).
7. **[*babelrc* folder]** Create a file with the same name you entered on _"setupFilesAfterEnv"_ property inside **_jest.config.js_ file** (jestSetupAfterEnv.ts).
8. Create _".babelrc"_ file on root.
9. **[*babelrc* file]** Add the following content inside this file:

```json
{
    "presets": ["next/babel", "@babel/preset-typescript"]
}
```

### Configuring React Testing Library + Jest DOM

1. Execute the following command `npm install --save-dev @testing-library/react @testing-library/jest-dom`.
2. **[*jest* folder]** Inside the file inside this folder, add `import  '@testing-library/jest-dom'`.

### Configuring Husky (Git hook)
1. You must have a *.git* folder created in the root.
2. Execute the following command `npx  husky-init  &&  npm  install`.
3. **[*package.json* file]** Modify the command of *"lint"* script. `"lint": "eslint src --max-warnings=0"`.

### Configuring lint-staged
1. Execute the command `npm install --save-dev lint-staged`.
2. **[*package.json* file]** Add the following key: 
```json
"lint-staged":{
   "src/**/*":[
      "npm run lint",
      "npm run test",
   ]
}
```
3. **[*package.json* file]** Add the following script: 
```json
"script":{
   "lint-staged": "lint-staged"
}
```
4. **[*husky* folder]** Inside *"pre-commit"* file, add the following code:
```markdown
.  "$(dirname  -- "$0")/_/husky.sh"

npx  --no-install  lint-staged
```
