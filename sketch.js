function row(e)
{
  let cont=document.querySelector('.container');
  let row_element=cont.lastElementChild;
  let i=0;

   for(;i<e;i++)
  {
    let f=document.createElement('div');
    f.classList.add('size');
    let a=500/e;
    console.log(a);
    f.style.height=`${a}px`;
    row_element.appendChild(f);
  }
}
function column(e)
{
  let i=0;
  for(;i<e;i++)
  {
let con=document.querySelector('.container');
let a=document.createElement('div');
a.classList.add('row');
con.appendChild(a);
row(e);
}
}

function mouseOver()
{
  let all =document.querySelectorAll('.size');
  console.log(all);
  all.forEach(f=>{f.addEventListener("mouseover",f=>{changeGridColor(f);});});
}
function removeAll()
{
  let all =document.querySelectorAll('.size');
  all.forEach(f=>{f.style.backgroundColor="white";});
}

function changeGridColor(event) {
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);
  event.target.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
  event.target.style.opacity += 0.5;
}

let butt=document.querySelector('button');
butt.addEventListener("click",(f)=>
{   let cc=document.querySelector('.clear');
  cc.addEventListener("click",removeAll);
  let ff=document.querySelector('.container');
ff.innerHTML=" ";
  f.preventDefault();
  let a=Number(prompt("enter the value"));
  if(a>100 || a<2)
  {
    let b=Number(prompt("enter a value between 2 and 100"));
    column(b);
    mouseOver();
  }
  else {
  column(a);
  mouseOver();
}
})
