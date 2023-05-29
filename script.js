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