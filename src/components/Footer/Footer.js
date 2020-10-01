import React, { Component } from 'react'
import config from 'utils/config'

export default class Footer extends Component {
	render() {
		return (
			<footer>
				You can also try{' '}
				<a href="https://genpassapp.com/" target="_blank" rel="noopener noreferrer">
					GENPASS
				</a>
				<br />
				{config.copyright} by{' '}
				<a href="https://www.petrnikolas.com/" target="_blank" rel="noopener noreferrer">
					Petr Nikolas
				</a>
			</footer>
		)
	}
}
