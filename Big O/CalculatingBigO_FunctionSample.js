//This program is to explain various statements and their Big O run times

function ChallengeInput(input){
    let a= 10; // O(1) CONSTANT Time we run this statement once
    a= 10+ 5 // O(1) CONSTANT Time

    for (let i=0;i<input.length;i++){ // O(n)
        ChallengeSecond(); // o(n)
        let newInput=true; // O(n)
        a++; // O(n)
    } //THUS THIS ENTIRE LOOP RUNS ON LINEAR TIME
    return a; //O(1)
}

//CALCULATING BIG O
// We have 3 Constant Time and 4 Linear Time
// Thus
 /// 3 +n+n+n+n
 // ==>3 + 4n
  // ==> Big O(3+4N)

