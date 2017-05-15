module.exports = {
	"extends": "airbnb",
	"plugins": [
		"react",
		"jsx-a11y",
		"import"
	],
	"rules": {
		"no-tabs": 0, // We're using tabs instead of spaces
		"indent": ["error", "tab", { "SwitchCase": 1 }], // We're using ONLY tabs instead of spaces
		"max-len": 0,
		"no-template-curly-in-string": 0, // pg-promise needs curly braces in strings
		"arrow-body-style": ["error", "as-needed"], // Only use braces in => functions when we need to,
		"arrow-parens": ["error", "as-needed"],
		"comma-dangle": ["warn", "only-multiline"], // Comma dangles can be nice multiline, but we don't want them everywhere
		"object-shorthand": "off", // Object shorthand can be a bit arcane.
		"dot-notation": "warn",
		"radix": ["error", "as-needed"],
		"no-console": 0,
		"no-useless-constructor": ["warn"],
		"no-param-reassign": 0,
		"no-plusplus": 0,
		'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
		"react/jsx-indent": ["error", "tab"], // Still tabs, not spaces
		"react/no-direct-mutation-state": ["error"],
		"class-methods-use-this": "off",
		"react/prefer-stateless-function": ["warn"], // Stateless functions are usually better than a class when possible
		"react/sort-comp": ["off"],
		"react/sort-prop-types": "off",
		"react/prop-types": "off",
		"react/jsx-first-prop-new-line": 0,
		"react/jsx-space-before-closing": ["warn"],
		"jsx-a11y/img-has-alt": "off",
		"jsx-a11y/img-redundant-alt": "off",
		"jsx-a11y/aria-role": "off",
		"jsx-a11y/no-access-key": "off",
		"jsx-a11y/label-has-for": "off"
	}
};
