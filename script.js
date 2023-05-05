function insertHiddenCharacters() {
    var docId = "1zUmwPDvSjJGiggjEDUt4YRJqPGGCQrW1844Ye4f3d1s"; // set this value to the document id found in the url
    var doc = DocumentApp.openById(docId);
    var body = doc.getBody();
    var text = body.getText();
    var newText = body.editAsText();
    var count = 0;
    for (var i = 0; i < text.length; i++) {
        if (Math.random() < 0.1) {
            var index = i + count;
            newText.insertText(index, "\u034F");
            count++;
        }
    }
}