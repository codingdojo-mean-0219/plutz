module.exports = function (){
    return {
      add: function(num1, num2) { 
           // add code here
           num1+num2;
      },
      multiply: function(num1, num2) {
           // add code here 
           num1*num2;
      },
      square: function(num) {
           // add code here 
           num*num;
      },
      random: function(num1, num2) {
           // add code here
           Math.floor(Math.random() * num1) + num2;
      }
    }
  };
  