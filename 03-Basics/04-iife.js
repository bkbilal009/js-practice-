// Immediately invoked Function Expression (IIFE)


(function chai (){
    console.log('DB Connected');
    
})();

( function aurcode()  {
    console.log('DB connected two');
    
})();
(  () => {
    console.log('DB connected two');
    
})()

(  (name) => {
    console.log('DB connected two ${name}');
    
})("Muhammad Bilal")
