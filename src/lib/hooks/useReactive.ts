import { Reactive } from '../classes';
import { useReactiveValue } from './useReactiveValue';

/**
 * Returns reactive as a state
 * Invoking this hook will cause the component to rerender whenever the value changes
 * ```ts
 * const yourReactive = new Reactive("Darkmode")
 * Function App(){
 * const [value, setValue, onChange] = useReactive(yourReactive);
 * return (<div>{value}</div>)
 * }
 * ```
 * @param reactive - Reactive instance
 * @returns [value, setValue, onChange]
 * @since v0.0.1
 */
export function useReactive<TValue>(reactive: Reactive<TValue>) {
	const state = useReactiveValue(reactive);
	return [state, reactive.setValue, reactive.onChange];
}
