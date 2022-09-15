import { OnValueChanged } from '../types';
import { Reactive } from '../classes';
import { useEffect } from 'react';

/**
 * Invokes your function whenever the value of the reactive changes
 * @param cb - Function to call whenever the reactive's value property changes
 * @param reactive - Reactive instance
 * @returns void
 * @since v0.0.1
 */
export function useOnReactiveChanged<TValue>(cb: OnValueChanged<TValue>, reactive: Reactive<TValue>) {
	useEffect(() => {
		const unsubscribe = reactive.onChange(cb);

		return unsubscribe;
	}, []);
}
