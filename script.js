function validateForm() {
  var fileInput = document.getElementById('fileip');
  var file = fileInput.files[0];

  if (file) {
    var fileName = file.name;
    var fileExtension = fileName.split('.').pop().toLowerCase();

    if (fileExtension === 'mp3') {

      console.log('File is valid.');
      // Perform any desired action for a valid MP3 file
    }
    else  {
      // Invalid file type
      alert('Please upload an MP3 file.');

      // Reset the file input field
      fileInput.value = '';
    }
  }
}