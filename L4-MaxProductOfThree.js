function solution(A) {
    var len = A.length;
    A = A.sort(function(a, b) {return a - b;});
    var max1 = A[len - 1] * A[len - 2] * A[len - 3];
    var max2 = A[len - 1] * A[0] * A[1];
    return max1 > max2 ? max1 : max2;
}
