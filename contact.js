$(document).ready(function(){
    $('.submit').click(function(event){
        event.preventDefault()
        console.log('clicked btn')

        var fname=$('.fname').val()
        var lname=$('.lname').val()
        var email=$('.email').val()
        var subject=$('.subject').val()

        if(email.length>5 && email.includes('@') && email.includes('.')){
            console.log('Email is valid')
        }else{
                console.log('email not valid')
            }
        
    })
})