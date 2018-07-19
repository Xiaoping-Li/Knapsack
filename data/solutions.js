// const fs = require('fs');
// const text = fs.readFileSync("./small1.txt").toString('utf-8');
// const textArr = text.split("\n");


//let allText = '';
// function readTextFile(file)
// {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function ()
//     {
//         if(rawFile.readyState === 4)
//         {
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 var allText = rawFile.responseText;
//                 alert(allText);
//             }
//         }
//     }
//     rawFile.send(null);
// }

// readTextFile("file:///C:/Users/lxp/Desktop/Knapsack/data/medium3.txt");




// function intoArray (lines) {
// // splitting all text data into array "\n" is splitting data from each new line
// //and saving each new line as each element*

// var lineArr = lines.split('\n'); 
// return lineArr;
// //just to check if it works output lineArr[index] as below
// // document.write(lineArr[2]);         
// // document.write(lineArr[3]);
// }

// function getData(){       //this will read file and send information to other function
//   var xmlhttp;

//   if (window.XMLHttpRequest) {
//       xmlhttp = new XMLHttpRequest();               
//   }           
//   else {               
//       xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");               
//   }

//   xmlhttp.onreadystatechange = function () {               
//       if (xmlhttp.readyState == 4) {                   
//         var lines = xmlhttp.responseText;    //*here we get all lines from text file*

//         intoArray(lines);     //here we call function with parameter "lines*"                   
//       }               
//   }

//   xmlhttp.open("GET", "small3.txt", true);
//   xmlhttp.send();    
// }

// getData();
