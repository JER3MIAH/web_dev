import express from "express";

const port = process.env.PORT || 3000;
const app = express();

const courses = ['Economics', 'Accounting', 'International Relations']


app.get('/', (req, res) => {
    res.send("Welcome Back to Backend")
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const courseId = req.params.id;
    if (!courses[parseInt(courseId)]) {
        res.status(404).send('This course does not exist');
    }
    res.send(courses[parseInt(courseId)]);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});