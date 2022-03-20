function noReturn(...args: string[]): void {
  console.log(args.join(' '));
}

noReturn('a', 'b', 'c');
