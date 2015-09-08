function solution(A) {
    if(A.length === 0) return 0;
    var min = Number.MAX_VALUE, leftSum = 0, rightSum = 0, sum = A.reduce(function(a,b){return a + b;});
    for(var i = 0; i < A.length - 1; i++){
        leftSum += A[i];
        rightSum = sum - leftSum;
        var diff = Math.abs(leftSum - rightSum);
        if(diff < min)
            min = diff;
    }
    return min;
}
