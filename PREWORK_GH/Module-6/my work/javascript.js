

        document.getElementById("shrinkBtn").addEventListener("click", function(){

            document.getElementById("box").style.height = "25px";

        });

        document.getElementById("blueBtn").addEventListener("click", function(){

            document.getElementById("box").style.backgroundColor = "blue";

        });

        document.getElementById("resetBtn").addEventListener("click", function(){

            document.getElementById("box").style.height = "150px"; 
            document.getElementById("box").style.backgroundColor = "orange"; 
            document.getElementById("box").style.opacity = 1;
            document.getElementById("box").style.margin = "25px";
            
        });

        document.getElementById("fadeBtn").addEventListener("click", function(){
            document.getElementById("box").style.opacity = .03;

        })

        document.getElementById("centerBtn").addEventListener("click", function(){
            document.getElementById("box").style.margin = "auto";
            
        })
   