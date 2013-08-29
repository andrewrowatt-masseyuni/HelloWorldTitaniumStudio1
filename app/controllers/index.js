function doClick(e) {
    alert($.label.text);
}

function doButtonClick(e) {
	Titanium.UI.createAlertDialog({
    cancel: 1,
    buttonNames: ['Confirm', 'Cancel', 'Info'],
    message: 'Would you like to delete the file?',
    title: 'Delete'
  }).show();
}


$.index.open();
