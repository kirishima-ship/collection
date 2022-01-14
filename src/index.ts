export class KirishimaCollection<K, V> extends Map<K, V> {
	/* @ts-expect-error temporary ignore, pr if you have solutions. */
	public set(key: K, value: V): Promise<this> {
		return new Promise((resolve) => {
			return resolve(super.set(key, value));
		});
	}

	/* @ts-expect-error temporary ignore, pr if you have solutions. */
	public get(key: K): Promise<V | undefined> {
		return new Promise((resolve) => {
			return resolve(super.get(key));
		});
	}

	public clear(): Promise<void> {
		return new Promise((resolve) => {
			return resolve(super.clear());
		});
	}

	/* @ts-expect-error temporary ignore, pr if you have solutions. */
	public delete(key: K): Promise<boolean> {
		return new Promise((resolve) => {
			return resolve(super.delete(key));
		});
	}

	/* @ts-expect-error temporary ignore, pr if you have solutions. */
	public has(key: K): Promise<boolean> {
		return new Promise((resolve) => {
			return resolve(super.has(key));
		});
	}

	public last(): Promise<V | undefined>;
	public last(amount: number): Promise<V[]>;
	public last(amount?: number): Promise<V | V[] | undefined> {
		return new Promise((resolve) => {
			const arr = [...this.values()];
			if (typeof amount === 'undefined') return resolve(arr[arr.length - 1]);
			if (amount < 0) return resolve(this.first(amount * -1));
			if (!amount) return [];
			return resolve(arr.slice(-amount));
		});
	}

	public first(): Promise<V | undefined>;
	public first(amount: number): Promise<V[]>;
	public first(amount?: number): Promise<V | V[] | undefined> {
		return new Promise((resolve) => {
			if (typeof amount === 'undefined') return this.values().next().value;
			if (amount < 0) return this.last(amount * -1);
			amount = Math.min(this.size, amount);
			const iter = this.values();
			return resolve(Array.from({ length: amount }, (): V => iter.next().value));
		});
	}
}
