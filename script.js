function insertHiddenCharacters() {
	var docId = "";
	var doc = DocumentApp.openById(docId);
	var body = doc.getBody();
	var text = body.getText();
	var newText = body.editAsText();
	var count = 0;
	for (var i = 0; i < text.length; i++) {
		var char = text.charAt(i);
		if (char == " ") {
			var index = i + count;
			newText.insertText(index, "\u034F");
			count++;
		}
	}
}