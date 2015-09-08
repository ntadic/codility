function solution(A) {
    var sumAll = 0, sumInArray = 0, len = A.length;
    for(var i = 0; i < len; i++){
        sumAll += i;
        sumInArray += A[i];
    }
    sumAll += len + len + 1;
    return sumAll - sumInArray;
}
