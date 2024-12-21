// // 1


// class Reactangle {

//     constructor(width,height,color){
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }

//     area() {
//         const area = this. width * this.height;

//         return area;
//     }

//     paint(){

//         console.log(`color You Choose : ${this.color}`);
//     }

// }


// const rect = new Reactangle(3,4,"red");

// // console.log(this.width * this.height);

// const area = rect.area();

// rect.paint();

// console.log(area);


// // const paint = new Reactangle("red");
// // const  color = paint.paint();
// // console.log(color);




// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   function callback() {
//       console.log("3 seconds have passed");
//   }
  
//   setTimeoutPromisified(3000).then(callback)
  

function random(resolve) {

    setTimeout(resolve,3000);
    // resolve();

}

let p = new Promise(random);

function callback(){
    console.log("Promise Succed");
}

console.log("Other Data is in Waitng area");
p.then(callback);

// console.log(p);