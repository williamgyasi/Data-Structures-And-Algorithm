//FINDING THE BIG O NOTATION OF THIS SAMPLE


function ChallengeInput(input){
    let a=5; // O(1)
    let b=10; // O(1)
    let c=15; // O(1)
    for(let i =0;i<input.length;i++){ 
        let x=i +1; // O(n)
        let y=i +2; // O(n)
        let z=i +3; // O(n)
    }
    for(let j=0 ;i<input.length;i++){ 
        let p= j*2; // O(n)
        let q=j*2; // O(n)
    }
    let StringLetters="ChatterBot Chatter" //O(1)

}

// CALCULATING BIG O 
// ==> 4 + n+n+n+n+n
// ==> 4 +5n
// ==> Big O(4+5n)