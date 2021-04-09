class AstParser {
	buildAST(code) {
		const acorn = require("acorn");
		const ast = acorn.parse(code, { sourceType: "module", locations: true });
		console.log(ast);

		let funcDec = [];
		let funcCall = [];

		for (const node of ast.body) {
			if (node.type === "FunctionDeclaration") {
				funcDec = [...funcDec, { FuncName: node.id.name, Lines: node.loc.end.line - node.loc.start.line }];
				funcCall = [...funcCall, node.id.name];
			}
		}
		const parsedAST = {
			'FuncDec': funcDec,
			'FuncCall': funcCall
		}
		return parsedAST;
	}

	startTraverseAST(code, funcName) {
		const acorn = require("acorn");
		const ast = acorn.parse(code);
		return this.traverseAST(ast, funcName);
	}

	traverseAST(ast, funcName) {
		let data = {
			name: "",
			children: []
		};

		let statistics = {
			variableDeclaration: 0,
			updateExpression: 0,
			whileStatement: 0,
			ifStatement: 0,
			breakStatement: 0,
			switchStatement: 0,
			callExpression: 0
		}
		const acornWalk = require("acorn-walk");
		acornWalk.full(ast, (node) => {
			if (node.type === "FunctionDeclaration" && node.id.name === funcName) {
				data.name = "";
				//data.name = node.id.name;
				acornWalk.full(node, (innerNode) => {
					switch (innerNode.type) {
						case "VariableDeclaration":
							statistics.variableDeclaration++;
							break;

						case "UpdateExpression":
							statistics.updateExpression++;
							break;

						case "WhileStatement":
							statistics.whileStatement++;
							break;
						case "IfStatement":
							statistics.ifStatement++;
							break;

						case "BreakStatement":
							statistics.breakStatement++;
							break;

						case "SwitchStatement":
							statistics.switchStatement++;
							break;

						case "CallExpression":
							statistics.callExpression++;
							break;
					}
				});
			}
		});
		const childVD = {
			name: statistics.variableDeclaration + " variable declaration(s)"
		}
		const childUE = {
			name: statistics.updateExpression + " update expression(s)"
		}
		const childWS = {
			name: statistics.whileStatement + " while statement(s)"
		}
		const childIS = {
			name: statistics.ifStatement + " if statement(s)"
		}
		const childBS = {
			name: statistics.breakStatement + " break statement(s)"
		}
		const childSS = {
			name: statistics.switchStatement + " switch statement(s)"
		}
		const childCE = {
			name: statistics.callExpression + " call expression(s)"
		}
		if (statistics.variableDeclaration !== 0) {
			data.children = [...data.children, childVD];
		}

		if (statistics.updateExpression !== 0) {
			data.children = [...data.children, childUE];
		}

		if (statistics.whileStatement !== 0) {
			data.children = [...data.children, childWS];
		}

		if (statistics.ifStatement !== 0) {
			data.children = [...data.children, childIS];
		}

		if (statistics.breakStatement !== 0) {
			data.children = [...data.children, childBS];
		}

		if (statistics.switchStatement !== 0) {
			data.children = [...data.children, childSS];
		}

		if (statistics.callExpression !== 0) {
			data.children = [...data.children, childCE];
		}

		return data;
	}
}

const astParser = new AstParser();
export default astParser;