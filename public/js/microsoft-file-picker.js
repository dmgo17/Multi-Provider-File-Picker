function launchOneDrivePicker(){
    var pickerOptions = {
        success: function(files) {
            // Handle returned file object(s)
            var message = 'You picked: ' + files.values[0].fileName;
            document.getElementById('result').innerHTML = message;
        },

        cancel: function() {
            // handle when the user cancels picking a file
            var message = 'You picked: Nothing';
            document.getElementById('result').innerHTML = message;
        },

        linkType: "webViewLink", // or "downloadLink",
        multiSelect: false // or true
    }
    
    OneDrive.open(pickerOptions);
  }