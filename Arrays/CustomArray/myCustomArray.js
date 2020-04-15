class MyArray{
    constructor(){
        this.length=0;
        this.data={}
    }
    get(index){ //O(1)
        return this.data[index]
    }
    push(item){ //O(1)
      this.data[this.length] =item
      this.length++
      return this.length
    }
    pop(){ // 0(1)
      let lastItem=this.data[this.length-1]
      delete this.data[this.length -1]
      this.length--
      return lastItem 
    }
    getItemAndPosition(index){
      let item=this.data[index]
      return item

    }
    deleteItem(index){
      const item =this.data[index]
      this.shiftItems(index);
      return item
    }

    shiftItems(index){
      for(let i=index;i<index.length-1;i++){
        this.data[i]=this.data[i+1]
      }
      delete this.data[this.length]
      this.length --
    }

}

const test=new MyArray()
test.push('william')
test.push('Kwabena')
test.push('Gyasi')
console.log(test)
