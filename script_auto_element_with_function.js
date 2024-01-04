function element_Creation(ele_name,att_name1,att_value1,content,name,id_value) {
    var ele = document.createElement(ele_name);
    ele.setAttribute(att_name1,att_value1);
    ele.setAttribute("name",name || "");
    ele.setAttribute("id",id_value || "")
    ele.innerHTML=content;
    return ele;
}
function element_break() {
    var ele = document.createElement("br");
    return ele;    
}

var firstname_lb = new element_Creation("label","for","firstname","Firstname");
var break1 = new element_break();
var firstname_ip = new element_Creation("input","type","text","Devi","firstname");
var break2 = new element_break(); 

var middlename_lb = new element_Creation("label","for","middlename","Middlename");
var break3 = new element_break();
var middlename_ip = new element_Creation("input","type","text","sri","middlename");
var break4 = new element_break(); 

var lastname_lb = new element_Creation("label","for","lastname","Lastname");
var break5 = new element_break();
var lastname_ip = new element_Creation("input","type","text","Prashad","lastname");
var break6 = new element_break(); 

var email_lb = new element_Creation("label","for","email","Email");
var break7 = new element_break();
var email_ip = new element_Creation("input","type","email","Devex@gmail.com","email");
var break8 = new element_break(); 

var password_lb = new element_Creation("label","for","password","Password");
var break9 = new element_break();
var password_ip = new element_Creation("input","type","password","desc***jsk","password");
var break10 = new element_break(); 

var phonenumber_lb = new element_Creation("label","for","phone","Phone Number");
var break11 = new element_break();
var phonenumber_ip = new element_Creation("input","type","number","9952417265","phone");
var break12 = new element_break(); 

document.body.append(
    firstname_lb,break1,firstname_ip,break2,
    middlename_lb,break3,middlename_ip,break4,
    lastname_lb,break5,lastname_ip,break6,
    email_lb,break7,email_ip,break8,
    password_lb,break9,password_ip,break10,
    phonenumber_lb,break11,phonenumber_ip,break12
    );