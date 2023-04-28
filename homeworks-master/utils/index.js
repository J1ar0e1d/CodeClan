function test(testName, testFn) {
	try {
		const passed = testFn();
		if (passed) console.log(`✅ ${testName}`);
		else console.error(`❌ ${testName}`);
	} catch (err) {
		console.error(`❌ ${testName}: ${err.message}`);
	}
}

function expect(actual) {
	return { toBe: (expected) => actual === expected };
}

class TestRunner {
	constructor() {
		const select = document.getElementById("exercise-select");

		exercises.forEach((item) => {
			const option = document.createElement("option");
			option.value = item.id;
			option.text = item.name;
			select.appendChild(option);
		});

		this.exercise = exercises[0];
		this.renderExercise();

		select.addEventListener("change", (event) => {
			this.exercise = exercises.find((item) => item.id === event.target.value);
			this.renderExercise();
		});
	}

	runTests() {
		const testsTable = document.querySelector("#test-table");
		while (testsTable.firstChild) testsTable.firstChild.remove();
		const { funcName, params, tests, func } = this.exercise;

		const types = params.map(({ type }) => type);

		tests.forEach((test) => {
			const testRow = document.createElement("tr");
			const { params, expected } = test;
			const result = func(...params);
			const passed = result == expected;
			testRow.innerHTML = `
        <td><code>${this.generateFunc(funcName, types, params)}</code></td>
        <td>${expected}</td>
        <td>${result === undefined ? "" : result.toString()}</td>
        <td>${passed ? "✅" : "❌"}</td>
      `;
			testsTable.appendChild(testRow);
		});
	}

	renderExercise() {
		const exercise = this.exercise;
		document.querySelector("#name").innerHTML = exercise.name;
		document.querySelector("#description").innerHTML = exercise.description;

		const examplesList = document.querySelector("#examples-list");
		while (examplesList.firstChild) examplesList.firstChild.remove();
		exercise.examples.forEach((example) => {
			const exampleItem = document.createElement("li");
			exampleItem.innerHTML = `<code>${exercise.funcName}(${example.input})</code> should return <code>${example.output}</code>`;
			examplesList.appendChild(exampleItem);
		});

		this.runTests(exercise);
	}

	generateFunc(funcName, types, params) {
		const func = `<code>${funcName}(${params
			.map((param, index) => {
				const type = types[index];
				return type === "string" ? `"${param}"` : param;
			})
			.join(", ")})</code>`;
		return func;
	}
}

const tester = new TestRunner();
