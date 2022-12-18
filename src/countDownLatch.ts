export class CountDownLatch {

  private readonly promise: Promise<void>;

  private countDownFunction: () => number;
  private count: number;

  /**
   * Creates a new instance with a given count
   *
   * @param count The initial count
   */
  constructor(count: number) {
    this.count = Math.max(count, 0);
    this.promise = new Promise<void>(resolve => {
      this.countDownFunction = () => {
        if (this.count > 0) {
          this.count = this.count - 1;
          if (this.count <= 0) {
            resolve();
          }
        }
        return this.count;
      };

      //Resolve promise if initial value is less or equal 0
      //Maybe count was calculated from data or something else
      //so this case makes sense under some circumstances
      if (count <= 0) {
        resolve();
      }
    });
  }

  /**
   * Decrement the count by one
   */
  public countDown(): number {
    return this.countDownFunction();
  }

  /**
   * Get's the current count value of the latch
   */
  public getCount(): number {
    return this.count;
  }

  /**
   * Await until the count reaches zero (0)
   */
  public async awaitZero() {
    await this.promise;
  }

  /**
   * Get's the promise that will be resolve after count reached zero
   */
  public getPromise() {
    return this.promise;
  }
}