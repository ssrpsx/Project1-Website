$(document).ready(function(){

    // innerHTML

    jQuery("<button>",{
        id : "new",
        text :"New"
    }).appendTo("body");
    jQuery("<div>",{
        id : "ft_list"
    }).appendTo("body");

    // process
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
            jQuery("#ft_list").empty();
            for(let i = cookietodo.length-1; i >= 0; i--){
                jQuery("<li>",{
                    text:cookietodo[i],
                    click: function(){
                        dellist(i);
                    }
                }).appendTo("#ft_list");
            }
        }
    }
      
    function dellist(i){
        let cookietodo = getCookie("todo")
        if(cookietodo){
            cookietodo = cookietodo.split(",");
            let input = confirm("Delete Sure?");
            if(input){
                cookietodo.splice(i, 1);
                setCookie("todo", cookietodo.join(","));
                showtodolist();
            }
        }
    }
    showtodolist();
    $("#new").click(function(){
        addtodo();
    });
});