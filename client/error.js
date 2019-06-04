import { render as _render } from 'react-dom';
import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: false };
    }

    static getDerivedStateFromError(error) {

        return { error: error };
    }

    componentWillUpdate(){
      this.state.error = false
    }

    componentDidCatch(error, info) {
        if(this.props.onError){
          this.props.onError()
        }
        console.error(error, info)
    }

    render() {
        if (this.state.error) {
          console.log('enter')
            return [
              <h1>Markdown Syntax Error.</h1>,
              <p> {this.state.error.message} </p>
            ]
              
        }

        return this.props.children;
    }
}

export default ErrorBoundary
