const fs = require('fs');

async function countStudents(path) {
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
    const sum = csStudent.length + sweStudent.length;
    console.log(`Number of students: ${sum}`);
    console.log(`Number of CS students: ${csStudent.length}, List: ${csStudent.toString().split(',').join(', ')}`);
    console.log(`Number of SWE students: ${sweStudent.length}, List: ${sweStudent.toString().split(',').join(', ')}`);
} catch (err) {
    throw new Error('Cannot load the database');
}
}
module.exports = countStudents;