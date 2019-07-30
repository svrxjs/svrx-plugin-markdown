
import React from 'react';
import ReactMarkdown from 'react-markdown';

function recursiveText({props}){
    if(props.value) return props.value;
    if(Array.isArray(props.children)){
        return props.children.map(recursiveText).join('')
    }
    return ''
}

function Root({children}){
    const TOCLines = children.reduce((acc, { key, props }) => {
        // Skip non-headings
        if (key.indexOf('heading') !== 0) {
            return acc;
        }

        // Indent by two spaces per heading level after h1
        let indent = '';
        for (let idx = 1; idx < props.level; idx++) {
            indent = `${indent}  `;
        }

        // Append line to TOC
        // This is where you'd add a link using Markdown syntax if you wanted
        const value = recursiveText({props});
        return acc.concat([`${indent}* ${value}`]);
    }, []);

    console.log(TOCLines)

    return (
    <div>
        <ReactMarkdown source={TOCLines.join("\n")} />
        {children}
    </div>
    );
}

export default Root