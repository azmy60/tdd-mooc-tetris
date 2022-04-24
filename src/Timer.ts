type PendingFunction = { fn: Function; callAt: number };

export class Timer {
  public tick() {
    this.onUpdate();
    this.processPendingFuncs();
    this.time++;
  }

  private pendingFuncs: PendingFunction[] = [];

  private processPendingFuncs() {
    this.pendingFuncs
      .filter((p) => this.time === p.callAt)
      .forEach((p) => p.fn());

    this.pendingFuncs = this.pendingFuncs.filter((p) => this.time !== p.callAt);
  }

  private time: number = 0;

  protected onUpdate() {}

  protected nextTick(fn: Function) {
    this.pendingFuncs.push({ fn, callAt: this.time + 1 });
  }
}
