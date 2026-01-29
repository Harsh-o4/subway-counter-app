let counter = document.getElementById("counter")
let count = 0;
let total_counter = document.getElementById("total_count");
let total = 0;
let history = document.getElementById("history");

function increase(){
    count += 1;
    counter.textContent = count;
}

function decrease(){
    if (count > 0) {
      count -= 1;
      counter.textContent = count;
    }
}

function log(){
    total += count;
    total_counter.textContent = total;
    
    if (count > 0) {
      history.textContent +=  count + " ";
    }

    count = 0;
    counter.textContent = count;
}