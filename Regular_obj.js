// Create a regular object and make it iterable. In this case, the iteration should proceed as follows:
// All values from the object's from property to the to property must be traversed one by one. (if to < from - an error should occur).
// If to or from is not specified OR to or from are not numbers, an error should occur.

const myIterable = { from: 's', to: 4 };
myIterable[Symbol.iterator]=function (){
    if(typeof(this.from)==='number' && typeof(this.to)==='number')
    {
  const rangeArr=Array.from({length:1+this.to-this.from},(_,i)=>this.from+i)
  return rangeArr[Symbol.iterator]()
    }
    else throw new Error('Error!')
};
try{
for (let item of myIterable) { 
 console.log(item);
}
}
catch(error){
    console.error(error.message);
}

