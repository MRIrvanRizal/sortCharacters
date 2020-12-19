function sortCharacters(chr){
    var arr = chr.split('');
    var tmp;
    for(var i = 0; i < arr.length; i++){
      for(var j = i + 1; j < arr.length; j++){
        if(arr[i] > arr[j]){
          tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
        }
      }
    }
    return arr.join('');
  }
  
  function sortItem(){
    if(document.getElementById('').value!=''){
      var res = sortString(document.getElementById('').value);
      document.getElementById('').innerHTML = res;
    } else {
      alert('');
    }
    
  }
  console.log(sortCharacters('parley'));
  console.log(sortCharacters('axixfa'));
  console.log(sortCharacters('myamalika'));
  console.log(sortCharacters('byzantium'));
  console.log(sortCharacters('ubiquitous'));