import { Reactive } from '../classes';
import { useEffect, useState } from 'react';

/**
 * Returns reactive as a state
 * Invoking this hook will cause the component to rerender whenever the value changes
 * @param reactive - Your reactive
 * @returns Value from the reactive as a useState
 * @since v0.0.1
 */
export function useReactiveValue<TValue>({ onChange, value }: Reactive<TValue>) {
	const [state, setState] = useState<TValue>(value);

	useEffect(() => {
		const unsubscribe = onChange(setState);
		return unsubscribe;
	}, []);

	return state;
}
