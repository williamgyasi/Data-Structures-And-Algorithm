function reverseString(str){
    //Check Input
    if(!str|| str.length<2 ||typeof(str)!=='string'){
      return 'Wrong Input'
    }
    const reversed=[]
    const strLength=str.length -1
    for (let i=strLength;i>=0;i--){
        reversed.push(str[i])
    }
  
    return reversed.join('')
   
  }
reverseString("Welcome William")