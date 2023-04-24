(()=>{
    type name = string; 
    let  studentName:name;
    studentName = "Sudhir";
    console.log(studentName);

    interface Rectangle{
        height: number;
        width: number;
    }

    let rectangle:Rectangle={
        height:20,
        width: 50
    }
    console.log(rectangle);
})();