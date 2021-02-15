function foo(){
    let counter=document.getElementById("wordCount");
    let input=document.getElementById("evaluatedText").value;
   
   if(input=="")
       counter.innerHTML ="word_count ="+0;
       else{ 
         input=input.match(/\w+/g).length;
         counter.innerHTML = "word_count= "+input;
          }
}