const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Endpoint to submit code for review
app.post('/submit', (req, res) => {
    const codeSnippet = req.body.code;
    if (!codeSnippet) {
        return res.status(400).send('Code snippet is required.');
    }
    // TODO: Add logic to analyze code
    res.status(200).send('Code submitted for review successfully!');
});

// Endpoint to get code analysis suggestions
app.get('/suggestions', (req, res) => {
    const suggestions = ["Use descriptive variable names", "Avoid deeply nested structures", "Comment your code appropriately"];  // Example suggestions
    res.status(200).json(suggestions);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});