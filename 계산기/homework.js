// if문의 중첩줄이기
// function test() {
//     let result = '';
//     if (a) {
//         if (!b) {
//             result = 'c'; }
//     }
// } else {
//     result = 'a';
// }
// result += 'b';
// return result;
// }

function test() {
    let result = '';
    if(!a) {
        result = 'a';
        result += 'b';
        return result;
    }
        if(!b) {
            result = 'c';
        }
        result += 'b';
        return result;
}