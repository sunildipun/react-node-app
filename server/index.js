const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api', (req, res) => {
    res.json({message: 'Hello from Server'});
});

app.listen(PORT, () => {
    console.log(`Server is running on port - ${PORT}`);
});
