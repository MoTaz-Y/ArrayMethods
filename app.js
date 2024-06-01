var firstArray = document.getElementById("Array1");
var secondArray = document.getElementById("Array2");
var result1 = document.getElementById("result1");
var result2 = document.getElementById("result2");
var result3 = document.getElementById("result3");
var result4 = document.getElementById("result4");
var result5 = document.getElementById("result5");
var result6 = document.getElementById("result6");
var services = document.getElementById("services");
var servicesList = document.getElementById("servicesMenue");
var inputsArea = document.getElementById("inputs");
var resultArea = document.getElementById("resultArea");

// function resultAreaController(){
//     if (resultArea.style.display == "none") {
//         resultArea.style.display = "inline-block";
//     }
// }

function showRwsult(){

    var arr1=firstArray.value.split(" ");
    var arr2=secondArray.value.split(" ");
    
    resultArea.style.display = "inline-block";
    
    result1.innerText="First Array = "+"[ "+arr1+" ]";
    result2.innerText="Second Array = "+"[ "+arr2+" ]";
    result3.innerText="Merged Array = "+" [ "+arr1.concat(arr2)+" ]";

}

function showServicesList(){

    servicesList.style.display="inline-block";

}

function hideServicesList(){
    servicesList.style.display="none";
}

function showMergeArray(){
       
    if (inputsArea.style.display == "inline-block") {

        inputsArea.style.display="none";
        
    }else{
        inputsArea.style.display = "inline-block";
    }

}




