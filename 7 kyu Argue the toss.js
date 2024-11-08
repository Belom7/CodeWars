function anArgument(...args) {
    const n = args.length;
    if( !n ) return 'You didn\'t give me any arguments.';
    if( n === 1 ) return `You gave me 1 argument and it is "${args[0]}".`;
    return `You gave me ${n} arguments and they are "${args.slice(0, n - 1).join('", "')}" and "${args[n - 1]}".`;
}