
import SyntaxHighlighter from 'react-syntax-highlighter';
import React from 'react';
import { light, dark } from 'react-syntax-highlighter/dist/styles/hljs'


const theme = document.body.getAttribute('data-theme');

function Code(props){

    const { language, value } = props;

    return (
      <SyntaxHighlighter language={language} style={theme==='dark'? dark:light}>
        {value || ''}
      </SyntaxHighlighter>
    );
}

export default Code