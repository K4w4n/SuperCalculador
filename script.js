
   function c(){ 
        var i = +(document.querySelector("#n1").value)
        var f = +(document.querySelector("#nA").value)
        var r = +(document.querySelector("#r").value)
        var res = document.querySelector("#res")
        var b = document.querySelector("#b")
        


        
        if(i<0 || f<0 || r<0){
            alert("Insira um numero valido")
        }else{
            
                for(let c = i;c<=f;c+=r){
                
                res.innerHTML += (`${c} - `)
            }
            
            
        }
    
    
}
