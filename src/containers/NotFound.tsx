import React, { Component } from 'react';

class NotFound extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        const styles = {
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }
        return (
            <div style={styles}>
                <h1>404 Page Not Found</h1>
            </div>
        );
    }
}

export default NotFound;