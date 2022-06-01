export default function createIteratorObject(report) {
    const employee = [];
    for (const [dept, employees] of Object.entries(report.allEmployees)) {
        for (const emp of employees) {
            employee.push(emp);
        }
    }
    return employee;
}