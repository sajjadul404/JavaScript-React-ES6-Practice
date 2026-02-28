// Fake data
const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" }
];

// Fake API function using Promise
function getPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false; 

      if (!error) {
        resolve(posts);  
      } else {
        reject("Error: Something went wrong!"); 
      }
    }, 1000); 
  });
}

