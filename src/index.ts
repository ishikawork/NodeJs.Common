export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  let result = new Greeter('Ishika');
  console.log(result.greet());
  return a + b;
};
