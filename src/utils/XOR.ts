export default function XOR(a: boolean, b: boolean){
    if(a === b){
        return false;
    } else {
        return Boolean(+a + +b);
    }
}