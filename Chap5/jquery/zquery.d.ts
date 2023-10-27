interface zQuery {
    (tag: string | string[]): zQueryInstance;
    (tag: zQueryInstance): zQueryInstance;
}
interface zQueryInstance {
    removeClass(param: string): this;
    addClass(param: string): this;
    addClass(callback: (this: zQueryInstance, index: number) => string): this;
    text(param: string): this;
    html(param: string): this;
    html(callback: (this: zQueryInstance, index: number) => string): this;
    data(param: string): this;
}
declare const Z: zQuery;
declare const tag2: zQueryInstance;
