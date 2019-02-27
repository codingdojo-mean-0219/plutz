function fib() {
    // Some variables here
    //(0), 1, 1, 2, 3, 5, 8,
    let previous=0;
    let current=1;

    function nacci() {
      // do something to those variables here
      const temp=previous;
      console.log(current);
      previous=current;
      current=current+temp;
    }
    return nacci
  }
  var fibCounter = fib();
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "2"
  fibCounter() // should console.log "3"
  fibCounter() // should console.log "5"
  fibCounter() // should console.log "8"
  