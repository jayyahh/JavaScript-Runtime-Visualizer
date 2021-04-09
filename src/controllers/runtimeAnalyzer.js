import Iroh from 'iroh/dist/iroh-node.es';
import astParser from './astParser';

class RuntimeAnalyzer {
	analyzeFunction(program, code) {
		let totalRuntime = 0;
		let stage = new Iroh.Stage(program + " " + code + "();");
		let now = 0;
		stage.addListener(Iroh.CALL)
			.on("before", (e) => {
				if (e.name === code) {
					now = performance.now();
				}
			})
			.on("after", (e) => {
				if (e.name === code) {
					let then = performance.now();
					totalRuntime = then - now;
				}
			});
		eval(stage.script);
		return totalRuntime;
	}

	buildRuntimeVisualizationData(code) {
		const ast = astParser.buildAST(code);

		let totalTime = 0;
		let functions = [];
		for (let call of ast.FuncCall) {
			// avg 5 times
			let summedResultTime = 0;
			let i = 0;
			while (i < 5) {
				summedResultTime += runtimeAnalyzer.analyzeFunction(code, call);
				i++;
			}

			const result = summedResultTime / 5;
			totalTime += result;
			let funcRuntime = {
				name: call,
				value: result
			}
			functions = [...functions, funcRuntime]
		}

		const toVisualizeRuntime = {
			name: "root",
			children: functions
		}

		const runtimeData = {
			toVisualizeRuntimeData: toVisualizeRuntime,
			totalRuntime: totalTime
		}

		return runtimeData;
	}

	buildLineNumberVisualizationData(code) {
		const ast = astParser.buildAST(code);

		let lines = 0;
		let decs = [];
		for (let dec of ast.FuncDec) {
			lines += dec.Lines;
			let decLine = {
				name: dec.FuncName,
				value: dec.Lines
			}
			decs = [...decs, decLine]
		}

		const toVisualizeLineSize = {
			name: "root",
			children: decs
		}

		const lineData = {
			toVisualizeLines: toVisualizeLineSize,
			totalLines: lines
		}

		return lineData;
	}
}

const runtimeAnalyzer = new RuntimeAnalyzer();
export default runtimeAnalyzer;