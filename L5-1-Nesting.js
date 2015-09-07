function solution(S) {
    var stack = [];
    for(var i = 0; i < S.length; i++){
        if(S[i] === '(') stack.push('(');
        else if (S[i] === ')' && stack.pop() !== '(') 
            return 0;
    }
    return stack.length === 0 ? 1 : 0;
}
