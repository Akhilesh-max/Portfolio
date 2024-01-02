import java.util.*;
import java.util.Scanner;

class Student {
    String name;
    int rollNumber;
    int age;
    double marks;

    Student(String name, int rollNumber, int age, double marks) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.age = age;
        this.marks = marks;
    }
}

class StudentDatabase {
    Map<Integer, Student> database = new HashMap<>();
    Scanner scanner = new Scanner(System.in);

    void addStudent() {
        System.out.println("Enter student name:");
        String name = scanner.nextLine();
        System.out.println("Enter roll number:");
        int rollNumber = scanner.nextInt();
        System.out.println("Enter age:");
        int age = scanner.nextInt();
        System.out.println("Enter marks:");
        double marks = scanner.nextDouble();
        scanner.nextLine();  // Consume newline left-over
        if(database.containsKey(rollNumber)) {
            System.out.println("Roll number already exists.");
            return;
        }
        database.put(rollNumber, new Student(name, rollNumber, age, marks));
        System.out.println("Student added successfully!");
    }

    void viewStudents() {
        for(Student student : database.values()) {
            System.out.println("Name: " + student.name + ", Roll Number: " + student.rollNumber + ", Age: " + student.age + ", Marks: " + student.marks);
        }
    }

    void searchStudent() {
        System.out.println("Enter roll number to search:");
        int rollNumber = scanner.nextInt();
        scanner.nextLine();  // Consume newline left-over
        if(!database.containsKey(rollNumber)) {
            System.out.println("No student found with the given roll number.");
            return;
        }
        Student student = database.get(rollNumber);
        System.out.println("Name: " + student.name + ", Roll Number: " + student.rollNumber + ", Age: " + student.age + ", Marks: " + student.marks);
    }

    void calculateAverageMarks() {
        double totalMarks = 0;
        for(Student student : database.values()) {
            totalMarks += student.marks;
        }
        double averageMarks = totalMarks / database.size();
        System.out.println("Average Marks: " + averageMarks);
    }
}

public class Main {
    public static void main(String[] args) {
        StudentDatabase db = new StudentDatabase();
        while(true) {
            System.out.println("1. Add Student");
            System.out.println("2. View Students");
            System.out.println("3. Search Student");
            System.out.println("4. Calculate Average Marks");
            System.out.println("5. Exit");
            System.out.println("Enter your choice:");
            int choice = new Scanner(System.in).nextInt();
            switch(choice) {
                case 1:
                    db.addStudent();
                    break;
                case 2:
                    db.viewStudents();
                    break;
                case 3:
                    db.searchStudent();
                    break;
                case 4:
                    db.calculateAverageMarks();
                    break;
                case 5:
                    System.exit(0);
                default:
                    System.out.println("Invalid choice. Please enter a number between 1 and 5.");
            }
        }
    }
}
