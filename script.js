function submitForm() {
    const fileInput = document.getElementById('fileip');
    const urlInput = document.getElementById('yt');
    const table = document.getElementById('outputTable');

    const formData = new FormData();
    if (fileInput.files.length > 0) {
        formData.append('file', fileInput.files[0]);
    }
    if (urlInput.value.trim() !== '') {
        formData.append('url', urlInput.value.trim());
    }

    fetch('your_server_endpoint.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Clear the existing table
        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }

        // Create table headers
        const headers = Object.keys(data[0]);
        const headerRow = document.createElement('tr');
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });
        table.appendChild(headerRow);

        // Create table rows
        data.forEach(rowData => {
            const row = document.createElement('tr');
            headers.forEach(header => {
                const cell = document.createElement('td');
                cell.textContent = rowData[header];
                row.appendChild(cell);
            });
            table.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
function generateMusicSymbol() {
    const symbol = document.createElement('span');
    symbol.className = 'music-symbol';
    
    // Set the symbol's position and appearance properties randomly
    symbol.style.top = `${Math.random() * 100}%`;
    symbol.style.left = `${Math.random() * 100}%`;
    symbol.style.fontSize = `${Math.random() * 2 + 1}rem`; // Adjust the symbol's size range
    
    // Append the symbol to the background
    document.querySelector('.main').appendChild(symbol);
    
    // Remove the symbol after a certain duration
    setTimeout(() => {
      symbol.remove();
    }, 3000); // Adjust the duration as needed
  }
  
  // Generate music symbols periodically
  setInterval(generateMusicSymbol, 1000);