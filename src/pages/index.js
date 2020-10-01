import React from 'react'
import { Editor, Page, Footer } from 'components'
import { convertToRaw } from 'draft-js'
import { Row, Col, Card } from 'antd'
import draftToHtml from 'draftjs-to-html'
import draftToMarkdown from 'draftjs-to-markdown'

import styles from './index.less'

class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			editorContent: null,
		}
	}

	onEditorStateChange = editorContent => {
		this.setState({
			editorContent,
		})
	}

	render() {
		const { editorContent } = this.state
		const colProps = {
			lg: 12,
			md: 24,
			style: {
				marginBottom: 32,
			},
		}
		const textareaStyle = {
			minHeight: 496,
			width: '100%',
			background: '#f7f7f7',
			borderColor: '#F1F1F1',
			padding: '16px 8px',
			resize: 'none',
		}
		return (
			<Page className={styles.home}>
				<div className="hero">
					<h1 className="title">Welcome to Textify!</h1>
					<p className="description">Generate HTML, JSON and Markdown from plain text.</p>
				</div>

				<Row gutter={32}>
					<Col {...colProps}>
						<Card title="Plain text" style={{ overflow: 'visible' }}>
							<Editor
								wrapperStyle={{
									minHeight: 500,
								}}
								editorStyle={{
									minHeight: 376,
								}}
								editorState={editorContent}
								onEditorStateChange={this.onEditorStateChange}
							/>
						</Card>
					</Col>
					<Col {...colProps}>
						<Card title="HTML">
							<textarea
								style={textareaStyle}
								disabled
								value={
									editorContent
										? draftToHtml(
												convertToRaw(
													editorContent.getCurrentContent(),
												),
										  )
										: ''
								}
							/>
						</Card>
					</Col>
					<Col {...colProps}>
						<Card title="Markdown">
							<textarea
								style={textareaStyle}
								disabled
								value={
									editorContent
										? draftToMarkdown(
												convertToRaw(
													editorContent.getCurrentContent(),
												),
										  )
										: ''
								}
							/>
						</Card>
					</Col>
					<Col {...colProps}>
						<Card title="JSON">
							<textarea
								style={textareaStyle}
								disabled
								value={
									editorContent
										? JSON.stringify(
												convertToRaw(
													editorContent.getCurrentContent(),
												),
										  )
										: ''
								}
							/>
						</Card>
					</Col>
				</Row>

				<Footer />
			</Page>
		)
	}
}

export default Index
