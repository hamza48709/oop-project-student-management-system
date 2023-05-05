class Person{
    name:string;
    age:number;
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    getName(){
        console.log(this.name);

    }
}



class Student extends Person{
    rollno:number;
    courses:course[]=[];
    constructor(name,age,rollno){
        super(name,age);
        this.rollno=rollno;
    }

    registerForCourse(cor:course){
        this.courses.push(cor);
    }



}
class instructor extends Person{
    salary:number;
    courses:course[]=[];
    constructor(name,age,salary){
        super(name,age);
        this.salary=salary;
        
    }
    assignCOurses(cor:course){
        this.courses.push(cor);
    }
}
class course{
    name:string;
    id:number;
    students:Student[]=[];
    constructor(id,name){
        this.name=name;
        this.id=id;

    }
    instructors:instructor[]=[];
    addstudent(std:Student){
        this.students.push(std);

    }
    addinstuctor(inst:instructor){
        this.instructors.push(inst);

    }
}

class Department{
    name:string;
    courses:course[]=[];
    addCourses(cor:course){
        this.courses.push(cor);

    }
}

const s1=new Student("Hamza",23,1);
const s2=new Student("javed",25,2);
const c1=new course(1,"english");
const c2=new course(2,"physics");
const i1=new instructor("khurrum",45,35000);
s1.registerForCourse(c1);
c1.addinstuctor(i1);
c1.addstudent(s1);
c1.addstudent(s2);
i1.assignCOurses(c1);

console.log(s1);
console.log(c1);
console.log(i1);
