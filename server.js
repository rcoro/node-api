const express = require("express");
const Joi = require("joi");
const app = express();
app.use(express.json());

const employees = [
    { id: 1, name: "jhon", age: 30 },
    { id: 2, name: "lucas", age: 31 },
    { id: 3, name: "david", age: 32 },
    { id: 4, name: "maria", age: 33 }
];

app.get("/", (req, res) => {
    res.send("node api + express + joi");
});

app.get("/api/employees", (req, res) => {
    res.send(employees);
});

app.get("/api/employees/:id", (req, res) => {
    const employee = employees.find(e => e.id === parseInt(req.params.id));

    if (employee) {
        res.send(employee);
    } else {
        res.status(404).send(`employee with id ${req.params.id} not found`);
    }
});

app.listen(3000);
