const hello = whoever => () => {console.log(`Hello ${whoever}`)}

const helloWorld = hello('World!')

helloWorld()