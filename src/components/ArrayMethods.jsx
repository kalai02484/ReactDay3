import React from 'react'

const ArrayMethods = () => {

    const arr = ['apple', 'banana', 'cherry', 'date'];

    const addFruit=() => {
        arr.push('mango');
        console.log(arr);
        console.log("Added Fruit", arr[arr.length - 1]);

        const fruitIndex= arr.indexOf('Strawberry');
        
        if(fruitIndex !== -1){
            console.log("Fruit Found at index:", fruitIndex);
        } else {
            console.log("Fruit Not Found");
            const LastEle = arr.push('Strawberry');
            console.log("Added Fruit", arr[LastEle - 1]);
            arr.forEach((ele)=>{
                console.log(ele);
            })
        }
    }

    const removeFruit=() => {
        const removedFruit = arr.pop();
        console.log("Removed Fruit:", removedFruit);
        console.log(arr);
    }

    const sliceFruit=() => {
        const newArr = arr.slice(1);
        console.log("Sliced Array:", newArr);
    }

    const spliceFruit=() => {
        const splicedArr = [...arr];
        splicedArr.splice(2,2,'kiwi','grape');
        console.log("Spliced Array:", splicedArr);
    }

  return (
    <div>
        <h1>Array Methods Component</h1>   
        <ul>
            {arr.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>  
        <button onClick={addFruit}>Add</button>
        <button onClick={removeFruit}>Remove</button>
        <button onClick={sliceFruit}>Slice</button>
        <button onClick={spliceFruit}>Splice</button> 
    </div>
  )
}

export default ArrayMethods
