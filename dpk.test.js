const { deterministicPartitionKey, createStringHash } = require("./dpk");

describe("createStringHash", () => {
  it("Returns a hash string of length 128 if the input is a string", () => {
    stringHash = createStringHash("some string");
    expect(typeof stringHash).toBe("string");
    expect(stringHash.length).toBe(128);
  });

  it("Returns a hash string of length 128 if input is an integer", () => {
    stringHash = createStringHash(123456);
    expect(typeof stringHash).toBe("string");
    expect(stringHash.length).toBe(128);
  });

  it("Returns a hash string of length 128 if input is a boolean", () => {
    stringHash = createStringHash(false);
    expect(typeof stringHash).toBe("string");
    expect(stringHash.length).toBe(128);
  });

  it("Returns a hash string of length 128 if input is an object", () => {
    stringHash = createStringHash({ partitionKey: "0123" });
    expect(typeof stringHash).toBe("string");
    expect(stringHash.length).toBe(128);
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '0' when the input value is null", () => {
    const inputValue = null;
    const trivialKey = deterministicPartitionKey(inputValue);
    expect(trivialKey).toBe("0");
  });

  it("Returns a hash generated when any input is passed", () => {
    const inputValue = "0123";
    const trivialKey = deterministicPartitionKey(inputValue);

    expect(typeof trivialKey).toBe("string");
    expect(trivialKey.length).toBe(128);

    const resultHash =
      "35adc3afcc64f59d7f668f200a01b9b67021bc6611fd475c65b350ece6e6287ff8abf9651e53b9f1414d3123ea9a853575115e99decf0c2cabfc7c31f232282e";
    expect(trivialKey).toBe(resultHash);
  });

  it("Returns a hash generated when the input value is 'false'", () => {
    const inputValue = false;
    const trivialKey = deterministicPartitionKey(inputValue);

    expect(typeof trivialKey).toBe("string");
    expect(trivialKey.length).toBe(128);
  });

  it("Returns the value of the obj when the input is partitionKey: string", () => {
    const inputValue = { partitionKey: "0123" };
    const trivialKey = deterministicPartitionKey(inputValue);
    expect(trivialKey).toBe("0123");
  });

  it("Returns a string when the input is partitionKey: '!== string'", () => {
    const inputValue = { partitionKey: 1 };
    const trivialKey = deterministicPartitionKey(inputValue);
    expect(typeof trivialKey).toBe("string");
    expect(trivialKey).toBe("1");
  });

  it("Return literal 'false' when passed partitionKey: false", () => {
    const inputValue = { partitionKey: false };
    const trivialKey = deterministicPartitionKey(inputValue);
    expect(typeof trivialKey).toBe("string");
    expect(trivialKey).toBe("false");
  });

  it("Returns a string of length 128 when the input partitionKey: string is greater than the maximum", () => {
    const stringValue = "a".repeat(257);
    const inputValue = { partitionKey: stringValue };
    const trivialKey = deterministicPartitionKey(inputValue);
    expect(trivialKey.length).toBe(128);
  });

  it("Returns a string of length 128 when the input is greater than the maximum", () => {
    const stringValue = "a".repeat(257);
    const trivialKey = deterministicPartitionKey(stringValue);
    expect(trivialKey.length).toBe(128);
  });
});
