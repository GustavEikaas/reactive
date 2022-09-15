import { Reactive } from '../classes';

/**
 * Returns a setter function for a given reactive
 * @param reactive - The reactive to get the setter from
 * @returns Setter function
 * @since v0.0.1
 */
export function useReactiveSetter<TValue>(reactive: Reactive<TValue>) {
	return reactive.setValue;
}
