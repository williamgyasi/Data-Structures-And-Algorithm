// PROBLEM SOLVING 
// QUESTION 1
// IF YOU WORKED AT TWITTER AND YOUR BOSS ASK YOU TO IMPLEMENT AN ALORITHM TO ALLOW USERS RETRIEVE THEIR
// LATEST AND FIRST TWEET?
// (2) COMPARE DATE OF TWEETS


//HOW WILL YOU IMPLEMENT THIS
// WHAT IS THE BIG(O) OF THE ALGORITHM

                        //SOLUTION
//Asumming all tweets of a user is stored in an array
arrayList=['first','second','Third Tweet','Last Tweet']
arrayWithDates=[
    {tweet:'first',
    date:2016},
    {tweet:'second',
    date:2015},
    {tweet:'third',
    date:2023},
    {tweet:'fourth',
    date:2069},
    {tweet:'lastTweet',
    date:2099},

]

function getTweets(array){
  console.log(array[0]) //O(1)
  console.log(array[array.length-1])//O(1)
}

//THIS FUNCTION WILL SPEND MORE TIME EXECUTING 
function compareTweetDate(dateTweet){ // O(N^2)
    for(let i=0;i<dateTweet.length;i++){
        console.log(dateTweet[i]['date'])
    }
}
compareTweetDate(arrayWithDates)
// getTweets(arrayList)
