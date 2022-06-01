const protocol = require('http');

const host = '127.0.0.1';
const port = 1245;
const path = process.arg[2];
const fs = require('fs');

async function countStudents() {
    try {
        const csvFile = await fs.promises.readFile(path, {encoding: 'utf8'});
        const csvData = csvFile.split('\n');
        const csStudent = [];
        const sweStudent = [];
        for (let i = 1; i < csvData.length -1; i += 1) {
            const line = csvData[i].split(',');
            if (line[3] === 'CS') {
                csStudent.push(line[0].trim());
            }
            else if (line[3] === 'SWE') {
                sweStudent.push(line[0].trim());
            }
        }
        return ({
            csStudent,
            sweStudent
        });

        } catch (e) {
            throw new Error('Cannot load the database');
        }
}

const app = protocol.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/') {
        res.end('Hello Holberton School!');
    }
    else if (req.url === '/students') {
        countStudents(path).then(({
            csStudent,
            sweStudent
        }) => {
            res.write(`Number of students: ${csStudent.length + sweStudent.length}\nNumber of CS students: ${csStudent.length}, List: ${csStudent.toString().split(',').join(', ')}\nNumber of SWE students: ${sweStudent.length}, List: ${sweStudent.toString().split(',').join(', ')}`);
            res.end();
        }).catch(() => {
            res.end('Cannot load the database');
        });
    }
    });

    app.listen(port, host);

    module.exports = app;