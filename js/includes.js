fetch('./footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });


fetch('./whats.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('whats').innerHTML = data;
    });
