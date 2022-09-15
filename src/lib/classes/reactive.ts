import {
    Callback,
    OnChange,
    OnValueChanged,
    SetValue
    } from '../types';

export class Reactive<TValue> implements ReactiveTS<TValue> {
	/**
	 * Creates new Reactive
	 * @param initialValue - Initial value
	 * @returns Reactive instance
	 */
	static New<TValue>(initialValue: TValue) {
		return new Reactive(initialValue);
	}

	value: TValue;

	constructor(initialValue: TValue) {
		this.value = initialValue;
	}

	setValue = (value: TValue) => {
		const oldValue = this.value;
		this.value = value;
		this.#onChangeCallbacks.forEach(({ callback }) => callback(value, oldValue));
	};

	onChange = (callback: OnValueChanged<TValue>) => {
		const id = (Math.random() * 16).toString();
		this.#onChangeCallbacks.push({ callback, id });
		return () => {
			this.#onChangeCallbacks.filter((callback) => callback.id !== id);
		};
	};

	#onChangeCallbacks: Callback<OnValueChanged<TValue>>[] = [];
}

interface ReactiveTS<TValue> {
	/**The current value */
	value?: TValue;

	/**Sets a new value */
	setValue: SetValue<TValue>;
	/**
	 *
     ```js
    const theme = new Reactive("darkmode");
    //Will be called whenever someone calls the setValue function
    theme.onValueChanged(newVal => {
        console.log(`new value for theme is: ${newVal}`)
    })
     ```
	 * @param callback - Callback function to be called when the value changes
	 * @returns Unsubscribe function
	 */
	onChange: OnChange<TValue>;
}
