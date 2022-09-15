React library for state management without regards to parents/children

Reactive is a state management library that lives outside the react virutal DOM.
A reactive can be imported into any Functional component, and it can also be accessed by normal functions.

```ts
type Theme = 'Darkmode' | 'Lightmode';
const reactive = new Reactive<Theme>('Darkmode');

function App() {
	const [value, setValue, onChange] = useReactive(reactive);

	return (
		<div>
			Theme is: ${value}
			<button>Toggle</button>
		</div>
	);
}
```
