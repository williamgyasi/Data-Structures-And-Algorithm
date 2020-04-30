class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  
  set(key,value){
    var address=this._hash(key)
    if(!this.data[address]){
      this.data[address]=[];
    }
    this.data[address].push([key,value])
    console.log(this.data)
  } // O(1)

  //GET ALL TGE 
  keys(){
    const keysArray= []
    this.data.forEach((current,index,arr)=>{
     if(current){
      keysArray.push(current[index][0][0])
     }
    })
    return keysArray;
  }

  values (){
    const valuesArray=[]
    this.data.forEach((current,index,arr)=>{
      valuesArray.push(current[index][0][0])
    })

    return valuesArray
  }
  
  
  
  get(key){
  var address=this._hash(key)
  var currentItem=this.data[address]
  if(currentItem){
    for(let el of currentItem){
      if(key===el[0]){
        return el[1]
      }
    }
  
  }
  return undefined
  
  } // O(1) When No Collosions are Found .... O(n) When Collision Exist
  }


  const myHashTable = new HashTable(2);
  myHashTable.set('grapes',304)
  myHashTable.set('apples',504)
  myHashTable.set('banana',13)
  

  console.log('-------------------------------')
  const getItem= myHashTable.get('banana')
  console.log(getItem)