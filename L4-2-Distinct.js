function solution(A) {
    var bag = [], distinct = [];
    for(var i = 0; i < A.length; i++){
        if(!bag.hasOwnProperty(A[i])){
            bag[A[i]] = true;
            distinct.push(true);
        }
    }
    return distinct.length;
}
