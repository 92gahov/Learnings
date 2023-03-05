// function outer() {
//     let counter = 0;
//     function inner() {
//         counter++;
//         console.log(counter)
//     }
//     inner();
// }
// outer();
// outer();

function outer() {
    let counter = 0;
    function inner() {
        counter++;
        console.log(counter)
    }
    return inner;
}
const fn = outer();
fn();
fn();