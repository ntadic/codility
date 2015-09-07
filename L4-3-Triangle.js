function solution(A) {
    var len = A.length;
    if(len < 3) return 0;
    A = A.sort(function(a,b){return a-b;});
    for(var i = 0; i < len-2; i++)
    if(
        A[i] + A[i+1] > A[i+2]
        && A[i] + A[i+2] > A[i+1]
        && A[i+1] + A[i+2] > A[i]
    )
    return 1;
    return 0;
}
