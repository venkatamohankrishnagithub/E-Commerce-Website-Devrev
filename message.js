function UserInfo(data)  
{  
    username = data.name;  
    userdob = data.dob;  
    usermessage = data.message
    usertimezone = data.timezone;  
}  
$(function ()  
{  
    UserInfoDetail();  
})  
function UserInfoDetail() {  
    document.getElementById('name').innerHTML = username;  
    document.getElementById('dob').innerHTML = userdob;  
    document.getElementById('message').innerHTML = usermessage;   
}  
