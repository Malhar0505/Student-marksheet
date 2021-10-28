var students = [];
var num = 0;

function get(id) {
  return document.getElementById(id);
}

function addmarks() {
  if (
    get("math").value == "" ||
    get("science").value == "" ||
    get("english").value == ""
  ) {
    get("info").innerText = "Please fill in all the Marks";
  } else if (
    get("math").value > 100 ||
    get("science").value > 100 ||
    get("english").value > 100 ||
    get("math").value < 0 ||
    get("science").value < 0 ||
    get("english").value < 0
  ) {
      get("info").innerText="Your marks should be in between 0 and 100"
  }
  else {
    var x=  {
        name: get("name").value.toLowerCase(),
        math: Number(get("math").value),
        science: Number(get("science").value),
        english: Number(get("english").value),
      };

      students.push(x);

      num++;
      get("info").innerText = `Marks of ${num} student/s entered!`;
      get("math").value = "";
      get("science").value = "";
      get("english").value = "";
      get("name").value = ""; 

      console.log(students);
  }
}
function result(){
   var input = get("stuname").value.toLowerCase()
   var output = get("output")
   for(var student of students){
     if(input===student.name){
       var avg = Math.round((student.math + student.english + student.science) / 3)
       output.innerHTML = `<h4>Name:${student.name}</h4><h4>Math:${student.math}</h4><h4>English:${student.english}</h4><h4>Science:${student.science}</h4><h4>Average:${avg}%</h4>`
       
     }  
   }
}

