var fs = require("fs");
const filename = "./utils/exercises.js";
fs.readFile(filename, "utf8", function (err, data) {
	if (err) throw err;

	const regex = /funcName: \s*"(.*?)"/g;
	const funcNames = [];
	while ((match = regex.exec(data))) {
		funcNames.push(match[1]);
	}

	let htmlImports = ``;

	funcNames.forEach((funcName) => {
		fs.writeFile(
			`./functions/${funcName}.js`,
			`function ${funcName}() {}`,
			(...args) => {
				console.log(args);
			}
		);
		htmlImports += `<script src="./functions/${funcName}.js"></script>\r\n`;
	});

	let htmlContent = fs.readFileSync("./index.html", "utf-8");
	const newHTML = htmlContent.replace("<!-- imports here -->", htmlImports);
	fs.writeFileSync("./index.html", newHTML, "utf-8");
});
