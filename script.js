		const input = document.getElementById('input-number');

		
		const output = document.getElementById('output');

		
		document.getElementById('submit-button').addEventListener('click', function(event) {
			event.preventDefault(); // Prevent form from submitting

			// Validate input
			const num = parseInt(input.value);
			if (isNaN(num) || num < 1) {
				output.innerHTML = '<p id="error">Please enter a positive integer.</p>';
				return;
			}

			// Calculate Fibonacci series
			let fib = [0, 1];
			while (fib[fib.length - 1] < num) {
				fib.push(fib[fib.length - 2] + fib[fib.length - 1]);
			}

			// Display output
			output.innerHTML = '<p>' + fib.slice(0, -1).join(', ') + '</p>';
        });