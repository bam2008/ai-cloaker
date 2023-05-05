# AI Cloaker

This Google Apps Script makes text generated by AI completely undetectable by AI content detectors.
The script inserts the hidden unicode character, **\u034F**, randomly throughout your Google document.

Here is the function you need to run in a Google Apps Script:

```javascript
function cloak() {
    var docId = "1zUmwPDvSjJGiggjEDUt4YRJqPGGCQrW1844Ye4f3d1s";
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
```

Make sure to set the value of **docID** to the id of the document you want to make undetectable. 
The document id can be found in the url of the document between **u/** and **/edit**.