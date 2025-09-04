const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Endpoint to submit code for review
app.post('/submit', (req, res) => {
    const { code: codeSnippet, user } = req.body;
    if (!codeSnippet || !user) {
        return res.status(400).send('Code snippet and user info are required.');
    }
    // TODO: Add logic to analyze code
    res.status(200).send('Code submitted for review successfully!');
});

// Endpoint to get code analysis suggestions
app.get('/suggestions', (req, res) => {
    const suggestions = ["Use descriptive variable names to enhance readability", "Avoid deeply nested structures for better maintainability", "Comment your code appropriately to improve clarity"];  // Example suggestions
    res.status(200).json(suggestions);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});