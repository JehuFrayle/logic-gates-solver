import AND from "./utils/AND";
import OR from "./utils/OR";
import NOT from "./utils/NOT";
import XOR from "./utils/XOR";
import NAND from "./utils/NAND";
import NOR from "./utils/NOR";
import tableGen from "./utils/tableGen";


function main(){
    tableGen(2, (a:boolean[]) => {
        return NOR(a[0], a[1]);
    });   
}
main();
