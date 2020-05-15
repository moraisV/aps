
	function openNav() {
	  document.getElementById("mySidebar").style.width = "150px";				  
	  document.getElementByClassName("header").style.marginLeft= "150px";			  
	  document.getElementByClassName("main").style.marginLeft= "150px";
	}

	function closeNav() {
	  document.getElementById("mySidebar").style.width = "0";
	  document.getElementByClassName("header").style.marginLeft= "0";				  
	  document.getElementByClassName("main").style.marginLeft= "0";
	  
	}
					
var coll = document.getElementsByClassName("collapse");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
			