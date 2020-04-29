function myFunction() {
  var myDoc = DocumentApp.create('My Test Doc 4');
  var body = myDoc.getBody();
  body.appendParagraph("Adding content to the document.");
  
}


function myFunction1() {
  
  var myDoc = DocumentApp.openById('1voyx3qf8aVyRsuKbIfyKu10Btw1bVRyFzKg24bqK9xI');
  var body = myDoc.getBody();
  var curDate = new Date();
  body.appendParagraph('Current Time and Date in San Diego '+ curDate.toLocaleString());
}

function myFunction2() {
  
  var myDoc = DocumentApp.openById('1voyx3qf8aVyRsuKbIfyKu10Btw1bVRyFzKg24bqK9xI');
  var body = myDoc.getBody();
  var holder = "NEW OUTPUT";
  var style = {};
  
  style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
  style[DocumentApp.Attribute.BOLD] = true;
  style[DocumentApp.Attribute.STRIKETHROUGH] = true;
  style[DocumentApp.Attribute.FONT_SIZE] = '24';
  style[DocumentApp.Attribute.BACKGROUND_COLOR] = '#90ee90';

  for (i=0;i<body.getNumChildren();i++) {
    // TIP: \n is a line break
  holder += i + '.' + body.getChild(i).getText() + '\n';
  }
  //set body to a variable so you can assign the attribvutes to the variable
  var newAtt = body.appendParagraph(holder).editAsText();
  newAtt.setAttributes(style);
}

