type PendingFunction = { fn: Function; callAt: number; thisArg: any };

export class Timer {
  private time = 0;
  private pendingFuncs: PendingFunction[] = [];

  tick() {
    this.onUpdate();
    this.processPendingFuncs();
    this.time++;
  }

  private processPendingFuncs() {
    this.pendingFuncs
      .filter((p) => this.time === p.callAt)
      .forEach((p) => p.fn.call(p.thisArg));

    this.pendingFuncs = this.pendingFuncs.filter((p) => this.time !== p.callAt);
  }

  protected onUpdate() {}

  protected nextUpdate(fn: Function, thisArg?: any) {
    this.pendingFuncs.push({ fn, thisArg, callAt: this.time + 1 });
  }
}
