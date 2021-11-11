function* createIdGenerator() {
    let i = 1;
    while (true) {
      yield i++;
    }
  }
  const idGenerator = createIdGenerator();
  console.log(idGenerator.next().value);
  console.log(idGenerator.next().value);
  console.log(idGenerator.next().value);
  console.log(idGenerator.next().value);