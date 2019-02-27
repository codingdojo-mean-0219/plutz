var _ = {
    map: function(arr,callback) {
      const newArr=[];
      for (let item of arr){
          newArr.push(callback(item));
      }
      return newArr;
    },
    reduce: function(array, callback, memo){
        let el = 0;
        if (!memo){
          memo = array[0];
          el = 1;
        }
        for (let i = el; i < array.length; i++) {
          memo = callback(array[i], memo);
        }
        return memo;
    },
    find: function(arr,callback) {   
        const match= '';
        for (let item of arr){
            if(callback(item)){
                match=item;
                break;
            }
        }
        return match;
    },
    filter: function(arr,callback) { 
      let match=[];
      for (let item of arr){
          if(callback(item)){
              match.push(item);
          }
      }
      return match;
    },
    reject: function(arr,callback) { 
      let returned=[];
      for( let item of arr){
          if(!callback(item)){
              returned.push(item);
          }
      }
      return returned;
    }
  }
 // you just created a library with 5 methods!
 