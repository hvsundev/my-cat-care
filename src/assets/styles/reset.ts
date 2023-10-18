import { css } from 'styled-components';

export const Reset = css`
	* {
		box-sizing: border-box;
		-webkit-text-size-adjust: none;
	}

	html,
	body,
	div,
	header,
	footer,
	article,
	section,
	aside,
	nav,
	figure,
	figcaption,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	ul,
	ol,
	li,
	dl,
	dt,
	dd,
	details,
	summary,
	span,
	a,
	img,
	em,
	i,
	table,
	caption,
	thead,
	tbody,
	tr,
	th,
	td,
	form,
	fieldset,
	legend,
	label,
	input,
	button,
	iframe,
	video,
	textarea {
		margin: 0;
		padding: 0;
		font-size: 16px;
		line-height: normal;
	}

	main {
		display: block;
	}

	a {
		color: #000;
		text-decoration: none;
	}

	a:active,
	a:focus,
	a:hover {
		text-decoration: none;
	}

	em,
	i,
	address {
		font-style: normal;
	}

	ol,
	ul,
	li,
	dl {
		list-style: none;
	}

	img,
	fieldset,
	iframe {
		border: none;
	}

	legend,
	caption {
		display: none;
	}

	table {
		table-layout: fixed;
		border-collapse: collapse;
		border-spacing: 0;
	}

	input[type='text'],
	input[type='password'],
	input[type='time'],
	input[type='date'],
	input[type='email'],
	input[type='tel'],
	input[type='number'],
	input[type='search'] {
		-webkit-appearance: none;
		appearance: none;
	}

	/* IE의 경우 */
	input::-ms-clear,
	input::-ms-reveal {
		display: none;
	}

	/* 크롬의 경우 */
	input::-webkit-search-decoration,
	input::-webkit-search-cancel-button,
	input::-webkit-search-results-button,
	input::-webkit-search-results-decoration {
		display: none;
	}

	button,
	input[type='button'],
	input[type='submit'],
	input[type='reset'],
	input[type='file'] {
		border: 0;
		border-radius: 0;
		background: none;
		cursor: pointer;
		-webkit-appearance: button;
		appearance: button;
		-webkit-tap-highlight-color: transparent;
	}

	label,
	a {
		-webkit-tap-highlight-color: transparent;
	}

	select {
		-webkit-appearance: none;
		appearance: none;
	}

	textarea {
		border: 1px solid var(--border-default);
		resize: none;
		-webkit-appearance: none;
	}

	input:focus,
	select:focus,
	textarea:focus {
		outline: none;
	}

	details {
		summary {
			display: block;

			&::-webkit-details-marker {
				display: none;
			}
		}

		&[open] summary + * {
			display: block;
		}
	}
`;
