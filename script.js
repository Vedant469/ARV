const toggleButton = document.getElementById('toggle-button');
const navbarLinks = document.getElementById('navbar-links');

toggleButton.addEventListener('click', () => {
     // Toggle the menu
     navbarLinks.classList.toggle('active');
   // Toggle the cross icon
   toggleButton.classList.toggle('active');
});
const excelFilePath = '"C:\Users\vedan\OneDrive\Desktop\ARV\data\data.xlsx"';

app.post('/contact/data/excel', (req, res) => {
    const data = req.body;
    const query = 'INSERT INTO contact_data SET ?';
    db.query(query, data, (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send({ message: 'Error inserting data' });
        } else {
            console.log('Data inserted successfully:', results);
            res.send({ message: 'Data inserted successfully' });
        }
    });
});