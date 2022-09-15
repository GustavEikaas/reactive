export interface Callback<TCallback extends (...args: any) => void> {
	id: string;
	callback: TCallback;
}

export type SetValue<TValue> = (value: TValue) => void;

export type OnValueChanged<TValue> = (newValue: TValue, oldValue: TValue) => void;

export type OnChange<TValue> = (callback: OnValueChanged<TValue>) => () => void;
