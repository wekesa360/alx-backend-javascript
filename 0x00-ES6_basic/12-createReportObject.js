export default function createReportObject(employeesList) {
    return {
        allEmployees: {...employeesList},
        getNumberOfDepartments(employeesList) {
            let  i = 0;
            for (const obj in employeesList) {
                i += 1;
            }
            return i;
        },
    };
}