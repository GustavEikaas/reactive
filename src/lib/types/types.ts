export interface Callback<TCallback extends (...args: any) => void> {
	id: string;
	callback: TCallback;
}

/** Function signature for setting a new value */
export type SetValue<TValue> = (value: TValue) => void;

/** Function signature for OnValueChanged event callback */
export type OnValueChanged<TValue> = (newValue: TValue, oldValue: TValue) => void;

/** Function signature for OnChange */
export type OnChange<TValue> = (callback: OnValueChanged<TValue>) => () => void;

/**
 * Function to determine if the old value and new value is equal
 * returns false if the values are not equal
 */
export type CompareFunction<TValue> = (newValue: TValue, oldValue: TValue) => boolean;
