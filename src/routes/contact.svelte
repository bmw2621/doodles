<script lang="ts">
	import { goto } from '$app/navigation';
	import { Email } from '$lib/utils/email';
	import validateEmail from '$lib/utils/validateEmail';
	export const prerender = true;

	let name: string;
	let email: string;
	let message: string;

	let formState = {
		name: false,
		email: false,
		message: false,
		dirty: new Set([])
	};

	const handleDirty = ({ target }) => {
		const field: string = target.id.split('-')[1];
		formState = { ...formState, dirty: formState.dirty.add(field) };
	};

	const validate = (e) => {
		const { target } = e;
		const field: string = target.id.split('-')[1];
		switch (field) {
			case 'name':
			case 'message':
				if (target.value.length > 5) {
					formState = { ...formState, [field]: true };
				} else {
					formState = { ...formState, [field]: false };
				}
				return;
			case 'email':
				if (validateEmail(target.value)) {
					formState = { ...formState, [field]: true };
				} else {
					formState = { ...formState, [field]: false };
				}
				return;
		}
	};

	const handleSubmit = () => {
		if (Object.values(formState).every((x) => x)) {
			Email.send({
				SecureToken: import.meta.env.VITE_SMTP_TOKEN,
				To: 'benjamin.m.winchester@googlemail.com',
				From: 'benjamin.m.winchester@googlemail.com',
				Subject: `Doodles: Message from ${name}`,
				Body: `From: ${email}\n---------------------------\n\n${message}`
			}).then((message: string) => {
				if (message.toLowerCase() === 'ok') {
					goto('/');
				} else {
					alert(message);
				}
			});
		}
	};
</script>

<div class="content">
	<h1>The Doodles Tell All</h1>
	<a href="https://form.jotform.com/220944254673156">Apply to Adopt</a>
	<hr />
	<h2>Contact</h2>
	<div id="contact-form">
		<input
			on:input={validate}
			on:change={handleDirty}
			id="contact-name"
			type="text"
			placeholder="Name"
			bind:value={name}
			class={formState.dirty.has('name') && !formState.name ? 'invalid' : ''}
		/>
		<input
			on:input={validate}
			on:change={handleDirty}
			id="contact-email"
			type="text"
			placeholder="Email"
			bind:value={email}
			class={formState.dirty.has('email') && !formState.email ? 'invalid' : ''}
		/>
		<textarea
			on:input={validate}
			on:change={handleDirty}
			id="contact-message"
			cols="30"
			rows="10"
			placeholder="Message"
			bind:value={message}
			class={formState.dirty.has('message') && !formState.message ? 'invalid' : ''}
		/>
		<button disabled={!Object.values(formState).every((x) => x)} on:click={handleSubmit}
			>Send</button
		>
	</div>
</div>

<style>
	#contact-form {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	#contact-form * {
		margin-bottom: 10px;
		padding: 10px;
		font-family: Arial, Helvetica, sans-serif;
		border-radius: 10px;
		border: 1px solid var(--accent-color);
	}

	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}

	a,
	button {
		color: var(--pure-white);
		padding: 1rem;
		background: var(--heading-color);
		text-align: center;
		border-radius: 10px;
		transition: box-shadow 400ms ease-in-out;
	}

	button:disabled {
		background: var(--primary-color);
	}

	textarea {
		resize: none;
	}

	h2 {
		font-family: Arial, Helvetica, sans-serif;
	}

	a:hover {
		text-decoration: none;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
		transition: box-shadow 400ms ease-in-out;
	}

	hr {
		width: 100%;
		color: var(--accent-color);
		margin: 1rem;
	}
	.invalid {
		border: 5px solid red;
		color: red;
	}
</style>
