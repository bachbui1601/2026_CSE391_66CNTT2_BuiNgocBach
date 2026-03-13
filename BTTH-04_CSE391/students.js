let students = []

const nameInput = document.getElementById("name")
const scoreInput = document.getElementById("score")
const addBtn = document.getElementById("addBtn")
const tableBody = document.getElementById("tableBody")
const stats = document.getElementById("stats")

function classify(score){

if(score>=8.5) return "Giỏi"
if(score>=7) return "Khá"
if(score>=5) return "Trung bình"

return "Yếu"

}

function renderTable(){

tableBody.innerHTML=""

students.forEach((s,index)=>{

let tr=document.createElement("tr")

if(s.score<5) tr.classList.add("warning")

tr.innerHTML=`

<td>${index+1}</td>
<td>${s.name}</td>
<td>${s.score}</td>
<td>${classify(s.score)}</td>
<td>
<button data-index="${index}" class="deleteBtn">Xóa</button>
</td>

`

tableBody.appendChild(tr)

})

updateStats()

}

function updateStats(){

let total=students.length

let avg=0

if(total>0){

avg=students.reduce((sum,s)=>sum+s.score,0)/total

}

stats.textContent=`Tổng SV: ${total} | Điểm TB: ${avg.toFixed(2)}`

}

addBtn.addEventListener("click",addStudent)

scoreInput.addEventListener("keyup",function(e){

if(e.key==="Enter") addStudent()

})

function addStudent(){

let name=nameInput.value.trim()

let score=Number(scoreInput.value)

if(name===""||isNaN(score)||score<0||score>10){

alert("Dữ liệu không hợp lệ")

return

}

students.push({

name,
score

})

nameInput.value=""
scoreInput.value=""
nameInput.focus()

renderTable()

}

tableBody.addEventListener("click",function(e){

if(e.target.classList.contains("deleteBtn")){

let index=e.target.dataset.index

students.splice(index,1)

renderTable()

}

})
let filteredStudents=[]
let sortAsc=true

const searchInput=document.getElementById("search")
const filter=document.getElementById("filter")
const sortBtn=document.getElementById("sortScore")

searchInput.addEventListener("input",applyFilters)
filter.addEventListener("change",applyFilters)
sortBtn.addEventListener("click",sortStudents)

function applyFilters(){

let keyword=searchInput.value.toLowerCase()

filteredStudents=students.filter(s=>{

let matchName=s.name.toLowerCase().includes(keyword)

let matchFilter=filter.value==="all" || classify(s.score)===filter.value

return matchName && matchFilter

})

renderFiltered()

}

function renderFiltered(){

tableBody.innerHTML=""

filteredStudents.forEach((s,index)=>{

let tr=document.createElement("tr")

tr.innerHTML=`
<td>${index+1}</td>
<td>${s.name}</td>
<td>${s.score}</td>
<td>${classify(s.score)}</td>
`

tableBody.appendChild(tr)

})

}

function sortStudents(){

sortAsc=!sortAsc

students.sort((a,b)=>sortAsc ? a.score-b.score : b.score-a.score)

renderTable()

}