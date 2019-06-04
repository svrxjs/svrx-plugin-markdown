import ReactMarkdown from 'react-markdown';
import ErrorBoundary from './error';
import { render as _render } from 'react-dom';
import React from 'react';
import Code from './code';
import { inViewport, findParent, getTarget } from './util';

const svrx = window.__svrx__;
const {io,events} = svrx; 
const pathname = location.pathname.slice(1);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: '' };

        this.fetchState().then(() => this.tryStartMutation());

        io.on('markdown:change', (evt) => {
            if (evt.payload.path.indexOf(pathname) !== -1) {
                this.fetchState();
            }
            // 取得
        });
    }

    changeInput(input) {
        this.setState({
            preInput: this.state.input,
            input
        });
    }

    onError() {
        if (this.state.preInput) {
            this.setState({
                input: this.state.preInput
            });
            this.state.preInput = '';
        }
    }

    fetchState() {
        return new Promise((resolve) => {
            svrx.io.call('markdown.content', pathname).then((input) => {
                this.changeInput(input);
                setTimeout(resolve, 100);
            });
        });
    }

    tryStartMutation() {
        const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        const observeMutationSupport = !!MutationObserver;

        if (observeMutationSupport) {
            const observer = new MutationObserver((records) => {
                // always handle only one recore
                this.keepVisualNode(getTarget(records[0]));
            });
            observer.observe(document.querySelector('.markdown-body'), {
                childList: true,
                characterData: true,
                subtree: true
            });
        }
    }

    keepVisualNode(node) {
        if (!node) return;
        node = findParent(node);

        if (inViewport(node)) return;

        window.scrollTo({
            behavior: 'smooth',
            left: 0,
            top: node.offsetTop
        });
    }

    render() {
        const { input } = this.state;
        const renderers = { code: Code };
        return (
            <ErrorBoundary>
                <ReactMarkdown source={input} renderers={renderers} />
            </ErrorBoundary>
        );
    }
}

_render(<App />, document.querySelector('.markdown-body'));
