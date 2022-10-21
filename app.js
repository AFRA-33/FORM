let student=[
    {
        id:1,
        math:123,
        eng:234,
        isl:56,
    },
    {
        id:2,
        math:123,
        eng:234,
        isl:56,
    },
    {
        id:3,
        math:123,
        eng:234,
        isl:56,
    },
    {
        id:4,
        math:123,
        eng:234,
        isl:56,
    },
]

const enter=()=>{

    var rollno=document.getElementById('rollno').value;
    student.map((std,i)=>{
        if(std.id==rollno){
            document.getElementById('math').innerHTML=std.math;
        }
    })
}
// function std(){

// }
// var std=()=>{

// }