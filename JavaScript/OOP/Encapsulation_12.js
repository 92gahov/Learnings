// class Student {
//     constructor() {
//         let name;
//         let marks
//     }

//     getName() {
//         return this.name;
//     }

//     setName(name) {
//         this.name = name;
//     }

//     getMarks() {
//         return this.marks;
//     }

//     setMarks(marks) {
//         this.marks = marks;
//     }
// }

// let stud = new Student();
// stud.setName("John");
// stud.setMarks(95);
// console.log(stud.getName() + " " + stud.getMarks())

/*--------------------------------------------------*/

// class Student {
//     constructor() {
//         let name;
//         let marks;
//     }

//     getName() {
//         return this.name;
//     }

//     setName(name) {
//         this.name = name;
//     }

//     getMarks() {
//         return this.marks;
//     }

//     setMarks(marks) {
//         if (marks < 0 || marks > 100) {
//             console.log("Invalid marks")
//         } else {
//             this.marks = marks;
//         }
//     }
// }

// let stud = new Student();
// stud.setName("John");
// stud.setMarks(110);
// console.log(stud.getName() + " " + stud.getMarks());

/*------------------------------------------------*/

function Student(name, marks) {
    let s_name = name;
    let s_marks = marks;
    Object.defineProperty(this, "name", {
        get: () => {
            return s_name;
        },
        set: () => {
            this.s_name = s_name;
        }
    });

    Object.defineProperty(this, "marks", {
        get: () => {
            return s_marks;
        },
        set: () => {
            this.s_marks = s_marks;
        }
    })
}

let stud = new Student("John", 95);
console.log(stud.name + " " + stud.marks);