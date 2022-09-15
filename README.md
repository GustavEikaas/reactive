React library for complex state managment

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
