const exercises = [
	{
		id: "make_out_word",
		name: "Make Out Word",
		description:
			"Create a function that takes two strings, one representing a word and another representing a tag. The function should return a new string formed by inserting the tag into the middle of the word.",
		func: makeOutWord,
		funcName: "makeOutWord",
		params: [
			{ name: "word", type: "string" },
			{ name: "tag", type: "string" }
		],
		examples: [
			{
				input: ["<<>>", "Hello"],
				output: "<<Hello>>"
			},
			{
				input: ["[[]]", "World"],
				output: "[[World]]"
			},
			{
				input: ["!!", "Goodbye"],
				output: "!!Goodbye!!"
			}
		],
		tests: [
			{
				params: ["----", "Goodbye"],
				expected: "--Goodbye--"
			},
			{
				params: ["[[[]]]", "Hello"],
				expected: "[[[Hello]]]"
			},
			{
				params: ["!!", "World"],
				expected: "!World!"
			},
			{
				params: ["{}", "CodingBat"],
				expected: "{CodingBat}"
			}
		]
	},
	{
		id: "non_start",
		name: "Non-Starters",
		description:
			"Create a function that takes two strings and returns a new string formed by concatenating all characters of the first string except the first character and all characters of the second string except the first character.",
		func: nonStart,
		funcName: "nonStart",
		params: [
			{ name: "str1", type: "string" },
			{ name: "str2", type: "string" }
		],
		examples: [
			{
				input: ["Hello", "There"],
				output: "ellohere"
			},
			{
				input: ["JavaScript", "Python"],
				output: "avaSthon"
			},
			{
				input: ["Coding", "Bat"],
				output: "odingat"
			}
		],
		tests: [
			{
				params: ["apple", "banana"],
				expected: "ppleanana"
			},
			{
				params: ["coding", "interview"],
				expected: "odingnterview"
			},
			{
				params: ["hello", "world"],
				expected: "elloorld"
			},
			{
				params: ["abc", "xyz"],
				expected: "bcyz"
			}
		]
	},
	{
		id: "endsLy",
		name: "Ends Ly",
		description:
			"Create a function that takes in a string and returns true if the string ends with 'ly', false otherwise.",
		func: endsLy,
		funcName: "endsLy",
		params: [{ name: "str", type: "string" }],
		examples: [
			{ input: ["oddly"], output: true },
			{ input: ["really"], output: true },
			{ input: ["totally"], output: true },
			{ input: ["rapid"], output: false },
			{ input: ["awesome"], output: false }
		],
		tests: [
			{
				params: ["quickly"],
				expected: true
			},
			{
				params: ["happily"],
				expected: true
			},
			{
				params: ["great"],
				expected: false
			},
			{
				params: ["lovely"],
				expected: true
			},
			{
				params: ["badly"],
				expected: true
			}
		]
	},
	{
		id: "make_abba",
		name: "Make ABBA",
		description:
			"Create a function that takes two strings, a and b. The function should return the string formed by concatenating a + b + b + a.",
		func: makeAbba,
		funcName: "makeAbba",
		params: [
			{ name: "a", type: "string" },
			{ name: "b", type: "string" }
		],
		examples: [
			{
				input: ["Hi", "Bye"],
				output: "HiByeByeHi"
			},
			{
				input: ["Yo", "Alice"],
				output: "YoAliceAliceYo"
			},
			{
				input: ["What", "Up"],
				output: "WhatUpUpWhat"
			}
		],
		tests: [
			{
				params: ["Hi", "Bye"],
				expected: "HiByeByeHi"
			},
			{
				params: ["Yo", "Alice"],
				expected: "YoAliceAliceYo"
			},
			{
				params: ["What", "Up"],
				expected: "WhatUpUpWhat"
			},
			{
				params: ["x", "y"],
				expected: "xyyx"
			}
		]
	},
	{
		id: "front_times",
		name: "Front Times",
		description:
			"Create a function that takes a string and a non-negative integer n. The function should return a new string that is n copies of the first 3 characters of the original string. If the original string is less than 3 characters, the function should return n copies of the original string.",
		func: frontTimes,
		funcName: "frontTimes",
		params: [
			{ name: "str", type: "string" },
			{ name: "n", type: "number" }
		],
		examples: [
			{
				input: ["Chocolate", 2],
				output: "ChoCho"
			},
			{
				input: ["Abc", 3],
				output: "AbcAbcAbc"
			},
			{
				input: ["Ab", 4],
				output: "AbAbAbAb"
			}
		],
		tests: [
			{
				params: ["Chocolate", 2],
				expected: "ChoCho"
			},
			{
				params: ["Abc", 3],
				expected: "AbcAbcAbc"
			},
			{
				params: ["Ab", 4],
				expected: "AbAbAbAb"
			},
			{
				params: ["a", 10],
				expected: "aaaaaaaaaa"
			}
		]
	}
];
