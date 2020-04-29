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


function myFunction3() {
  
  var myDoc = DocumentApp.openById('1voyx3qf8aVyRsuKbIfyKu10Btw1bVRyFzKg24bqK9xI');
  var body = myDoc.getBody();
  // TIP: \n is a line break
  var holder = "NEW OUTPUT\n";
  
  
  var style = {};
  
  style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
  style[DocumentApp.Attribute.BOLD] = true;
  style[DocumentApp.Attribute.STRIKETHROUGH] = true;
  style[DocumentApp.Attribute.FONT_SIZE] = '16';
  style[DocumentApp.Attribute.BACKGROUND_COLOR] = '#FF0000';

  for (i=0;i<body.getNumChildren();i++) {
    var english = body.getChild(i).getText();
    if (english.length > 0){
    var spanish = LanguageApp.translate(english, 'en', 'es');
    holder += english + ' = ' + spanish + '\n';
    }
  }
  //set body to a variable so you can assign the attribvutes to the variable
  var newAtt = body.appendParagraph(holder).editAsText();
  newAtt.setAttributes(style);
}

function myFunction4() {

  var myDoc = DocumentApp.openById('1voyx3qf8aVyRsuKbIfyKu10Btw1bVRyFzKg24bqK9xI');
  var body = myDoc.getBody();
  var email = Session.getActiveUser().getEmail();
  var docID = myDoc.getId();
  var docName = myDoc.getName();
  var docURL = myDoc.getUrl();
  var emailBody = 'Thrillhouse info for ya '+ docName + ' With ID ' + docID + ' \n click here!' + docURL;
  GmailApp.sendEmail(email, 'New Doc Info', emailBody)

}
