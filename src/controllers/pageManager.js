class PageManager {
	clearOldUpload = (e) => {
		const divRuntime = document.getElementById("visualizerRuntime");
		const divLine = document.getElementById("visualizerSize");
		if (divRuntime.firstChild) {
			divRuntime.removeChild(divRuntime.firstChild);
		}
		if (divLine.firstChild) {
			divLine.removeChild(divLine.firstChild);
		}
		document.getElementById("clickToSeeGraphId").style.display = "none";
		document.getElementById("astTreeGraphId").style.display = "none";
		document.getElementById("astTreeGraphFuncNameId").style.display = "none";
		document.getElementById("totalRuntime").style.display = "none";
		document.getElementById("totalLineNumber").style.display = "none";
	}

	setDisplay(id, toDisplay) {
		let display = "none";
		if (toDisplay) {
			display = "block";
		}
		document.getElementById(id).style.display = display;
	}

	setTotalRuntimeDisplay(toDisplay) {
		this.setDisplay("totalRuntime", toDisplay);
	}

	setTotalLinesDisplay(toDisplay) {
		this.setDisplay("totalLineNumber", toDisplay);
	}

	setAstTreeGraphDisplay(toDisplay) {
		this.setDisplay("astTreeGraphId", toDisplay);
	}

	setAstTreeGraphFuncNameDisplay(toDisplay) {
		this.setDisplay("astTreeGraphFuncNameId", toDisplay);
	}

	setRuntimeGraphDisplay(toDisplay) {
		this.setDisplay("visualizerRuntime", toDisplay);
	}

	setSizeGraphGraphDisplay(toDisplay) {
		this.setDisplay("visualizerSize", toDisplay);
	}

	setClickToSeeInstructionDisplay(toDisplay) {
		this.setDisplay("clickToSeeGraphId", toDisplay);
	}

	showRuntimeGraph = (e) => {
		pageManager.setRuntimeGraphDisplay(true);
		pageManager.setSizeGraphGraphDisplay(false);

		if (document.getElementById("visualizerRuntime").firstChild) {
			pageManager.setTotalRuntimeDisplay(true);
			pageManager.setTotalLinesDisplay(false);
		}
	}

	showLineNumberGraph = (e) => {
		pageManager.setRuntimeGraphDisplay(false);
		pageManager.setSizeGraphGraphDisplay(true);

		if (document.getElementById("visualizerRuntime").firstChild) {
			pageManager.setTotalRuntimeDisplay(false);
			pageManager.setTotalLinesDisplay(true);
		}
	}
}

const pageManager = new PageManager();
export default pageManager;