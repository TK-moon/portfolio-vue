module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		"plugin:vue/vue3-essential",
		"eslint:recommended",
		"@vue/typescript/recommended",
		"@vue/prettier",
		"@vue/prettier/@typescript-eslint",
		// "plugin:vue/recommended",
		// "plugin:vue/vue3-recommended",
		// "plugin:vue/strongly-recommended",
		// "plugin:vue/vue3-strongly-recommended",
	],
	parserOptions: {
		parser: "@typescript-eslint/parser",
		ecmaVersion: 2020,
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/no-var-requires": 0,
		"prettier/prettier": [
			"error",
			{
				semi: false,
				useTabs: true,
				trailingComma: "all",
				bracketSpacing: true,
				arrowParens: "avoid",
				jsxBracketSameLine: false,
			},
		],
	},
}
