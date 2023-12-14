# Academic-Admin-Java
# Student Management System in Java

## Description
This is a simple yet effective Student Management System written in Java. It manages student data, providing functionalities to add students, display all students, find a student by roll number, and calculate the average marks of all students.

## Classes

### Student
This class represents a student with four attributes - `name`, `rollNumber`, `age`, and `marks`.

### StudentDatabase
This class manages a list of students. It provides the following methods:
- `addStudent(String name, int rollNumber, int age, double marks)`: Adds a new student to the database.
- `viewStudents()`: Prints the details of all students in the database.
- `searchStudent(int rollNumber)`: Searches for a student by roll number and prints their details if found.
- `calculateAverageMarks()`: Calculates and prints the average marks of all students.

### Main
This is the entry point of the program. It creates an instance of `StudentDatabase` and uses it to add students, view student details, search for a student, and calculate average marks.

## Future Work
This project can be further expanded by adding more features like updating student details, deleting students, etc.

## Author
Akhilesh Kumar Yadav
## License
MIT license 
