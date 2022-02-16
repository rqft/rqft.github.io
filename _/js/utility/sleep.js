/**
 * Waits for some amount of time
 * @param {number} ms
 * @returns
 */
function sleep(ms) {
  return Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}
