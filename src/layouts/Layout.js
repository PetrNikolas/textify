import React, { PureComponent, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import config from 'utils/config'
import withRouter from 'umi/withRouter'

import './Layout.less'

@withRouter
class BaseLayout extends PureComponent {
  render() {
    const { children } = this.props

    return (
      <Fragment>
        <Helmet>
          <title>{config.siteName}</title>
        </Helmet>
        {children}
      </Fragment>
    )
  }
}

export default BaseLayout
