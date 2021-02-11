class ElementManager {
	getAppDIV() {
		return document.getElementById("app");
	}

	getSettingContainer() {
		return document.getElementById("setting-container");
	}
	getNameInput() {
		return document.getElementById("name-input");
	}

	getNameButton() {
		return document.getElementById("name-submit-button");
	}

	getCountInput() {
		return document.getElementById("count-input");
	}

	getCountButton() {
		return document.getElementById("count-submit-button");
	}
}

export default new ElementManager();
