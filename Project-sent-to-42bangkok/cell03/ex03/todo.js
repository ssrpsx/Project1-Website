function setCookie(cname, cvalue){
  const data = new Date();
  data.setTime(data.getTime() + (365 * 24 * 60 * 60 * 1000));
  let expires = "expires" + data.toUTCString();
  document.cookie = `${cname}=${cvalue};${expires}; path=/`
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');

  for(let i = 0; i <ca.length; i++) {

    let c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function addtodo(){
  let input = prompt("Input your todo : ");
  if(input){
    let cookietodo = getCookie("todo")
    if(cookietodo){
      cookietodo += "," + input
    }
    else{
      cookietodo = input
    }
    setCookie("todo",cookietodo);
    showtodolist();
  }
}

function showtodolist(){
  let cookietodo = getCookie("todo")
  if(cookietodo){
    cookietodo = cookietodo.split(",");
    let html = "";
    for(let i = cookietodo.length-1; i >= 0; i--){
        html += `<li onclick="dellist(${i})">${cookietodo[i]}</li>`;
    }
    document.getElementById("ft_list").innerHTML = html;
  }
}

function dellist(i){
  let cookietodo = getCookie("todo")
  if(cookietodo){
    cookietodo = cookietodo.split(",");
    let input = confirm("Delete Sure?");
    if(input){
      if (i == 0){
        clearlist();
      } 
      else {
        cookietodo.splice(i, 1);
        setCookie("todo", cookietodo.join(","));
        showtodolist();
      }
    }
    else {
      return;
    }
  }
}

function clearlist(){
  document.getElementById("ft_list").innerHTML = "";
  setCookie("todo","");
  showtodolist();
}
showtodolist();