import React from 'react'
import withRouter from 'umi/withRouter'

import BaseLayout from './Layout'

@withRouter
class Layout extends React.Component {
	render() {
		const { children } = this.props

		return <BaseLayout>{children}</BaseLayout>
	}
}

export default Layout
