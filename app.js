const textarea = document.querySelector('textarea');

textarea.addEventListener('blur', () => {
	let json = JSON.stringify(textarea.value);
	localStorage.setItem('obj', json);
});

function func() {
	let json = localStorage.getItem('obj');
	let obj = JSON.parse(json);

	textarea.value = obj + 123;
}

func();