var invert = function (obj) {

    var new_obj = {1:"a",2:"b",3:"c"};
  
    for (var prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        new_obj[obj[prop]] = prop;
      }
    }
  
    return new_obj;
  };
  console.log(invert());