const fs = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) return reject(new Error('Cannot load the database'));
        const csvData = data.split('\n');
        const csStudent = [];
        const sweStudent = [];
        for (let i = 0; i < csvData.length; i++) {
            const student = csvData[i].split(',');
            if (student[2] === 'CS') {
                csStudent.push(student[0].trim());
            } else if (student[3] === 'SWE') {
                sweStudent.push(student[0].trim());
            }
        }
        return {
            'cs': csStudent,
            'swe': sweStudent
        };
    });
});

module.exports = readDatabase;