export default function tableGen(a: number, callback: Function){
    for(let i=0; i < (a * a); i++){
        let combination = i.toString(2).split('');
        if(combination.length < a){
            let length = combination.length;
            for(let i = a-length; i > 0; i--) {
                combination.reverse();
                combination.push('0');
                combination.reverse();
            }
        }
        let table = combination.map( (item) => Boolean(+item));
        console.table([table, callback(table)]);
    }
}