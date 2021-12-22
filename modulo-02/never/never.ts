function error(message: string): never {
  throw new Error(message);
}

console.log(error('An error occurred!'));
