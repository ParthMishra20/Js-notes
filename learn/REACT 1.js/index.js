// ReactDOM.render(<h1>This is a way to make React Program</h1>,document.getElementById("root"))



// const h1 = document.createElement("h1")
// h1.textContent = "This is an another way to make a program"
// h1.className = "header"
// document.getElementById("root").append(h1)


//JSX
const page=(<div>
<h1 classname="header">This is JSX</h1>
<p>This is par</p>
</div>)
console.log(page)
ReactDOM.render(
   page,
document.getElementById("root"))