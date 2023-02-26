const crypto = require("crypto");

const createStringHash = data => {
  data = JSON.stringify(data);
  return crypto.createHash("sha3-512").update(data).digest("hex");
};

// export to create unit tests
exports.createStringHash = createStringHash;

exports.deterministicPartitionKey = event => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  if (event === undefined || event === null) {
    return TRIVIAL_PARTITION_KEY;
  }

  if (event.hasOwnProperty("partitionKey")) {
    let candidate = event.partitionKey;

    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }

    if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
      return createStringHash(candidate);
    }

    return candidate;
  }

  return createStringHash(event);
};
