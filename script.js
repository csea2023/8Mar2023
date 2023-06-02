function submitForm() {
    var fileInput = document.getElementById('fileip');
    var file = fileInput.files[0];
    
    if (file.type.indexOf('audio') === -1) {
      alert('Please select an audio file');
      return false;
    }   
    return true;
  }
