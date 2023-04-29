function addHiddenPeriods() {
	var docId = "";
	var doc = DocumentApp.openById(docId);
	var body = doc.getBody();
	var text = body.getText();
	var newText = body.editAsText();
	var count = 0;
	for (var i = 0; i < text.length; i++) {
		var char = text.charAt(i);
		if (char == " " && Math.random() < 0.3) {
			var index = i + count;
			newText.insertText(index, ".");
			newText.setForegroundColor(index, index, "#FFFFFF");
			newText.setFontSize(index, index, 1);
			count++;
		}
	}
}