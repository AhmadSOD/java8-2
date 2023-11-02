function getvalues() {
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);

    if ( num1 <= 0 || num2 <=0){
    
        setresult("een van de getalen is te laag");
        return false;
    }
    else{
        return true;
    }
    

}

function setresult(result) {
    resulth2.innerHTML = "Resultaat: " + result;
}


    



function multiply() {
           if (getvalues()){
            result=(num1*num2);
            setresult(result);
           }
            
        }

        function divide() {
            if (getvalues()){
            result=(num1/num2);
            setresult(result);
            }
        }

        function add() {
            if (getvalues()){
            result=(num1+num2);
            setresult(result);}
        }

        function minus() {
            if (getvalues()){
            result=(num1-num2);
            setresult(result);}
         }
    
