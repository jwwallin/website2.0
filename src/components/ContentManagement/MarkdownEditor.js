import React from 'react'
import PropTypes from 'prop-types'
import { Column, Columns } from 'bloomer'
import Markdown from '../../components/ContentManagement/Markdown'
import Textarea from './Textarea'

const MarkdownEditor = ({ content, handleTextChange }) => {
  const decodedContent = decodeURI(content)
  return (
    <div className='markdown-area margin-top-1'>
      <Columns>
        <Column>
          <Textarea
            onTextChange={handleTextChange}
            value={decodedContent}
          />
        </Column>
        <Column>
          <Markdown source={decodedContent} />
        </Column>
      </Columns>
    </div>
  )
}

MarkdownEditor.propTypes = {
  content: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired
}

export default MarkdownEditor
