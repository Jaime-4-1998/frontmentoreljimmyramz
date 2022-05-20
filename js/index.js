$("#submit").click(function(e){
	e.preventDefault();
	$("#error_mail").html(''); 
	function validatecorr($corr) {
		var corrok = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		return corrok.test($corr);
	}  
  if($("#corr").val()== ''){
		  $("#error_mail").html('* Tu Correo es Requerido');
		  return false;    
	}else if(!validatecorr($("#corr").val())){
		$("#error_mail").html('* Correo No Aceptado');
		  return false; 
	}else{
	  $.ajax({
		  data:$("#form-data").serialize(),
		  success:function(response){
			document.getElementById("form-data").reset();
			alert("Email Send");
		  }
	  });
	}
});
//navmenu
const close = document.getElementById('show__close');
const menu = document.getElementById('show__menu');
const moblie = document.querySelector('.moblie__nav__menu');
let isShown = false
close.style.display = 'none'
menu.addEventListener('click',()=>{
    if (!isShown) 
    {
        moblie.style.transform = 'translateX(-50%) scale(1)'
		menu.style.display = 'none'
		close.style.display = 'initial'
		close.style.marginLeft = '30%'
        isShown = true;
    } 
    else if (isShown)
    {
        moblie.style.transform = 'translateX(-50%) scale(0)'
        isShown = false;
    }
})
close.addEventListener('click',()=>{
    if (!isShown) 
    {
        moblie.style.transform = 'translateX(-50%) scale(1)'
		close.style.display = 'none'
		close.style.marginLeft = '30%'
        isShown = true;
    } 
    else if (isShown)
    {
        moblie.style.transform = 'translateX(-50%) scale(0)'
		menu.style.display = 'initial'
		close.style.display = 'none'
        isShown = false;
    }
})