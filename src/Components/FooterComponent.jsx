import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <span
                        onClick={() => window.open('', '_blank', 'noopener,noreferrer')}
                        className="footer-link"
                        style={{ cursor: 'pointer', textDecoration: 'underline' }}
                    >
                        All Rights Reserved 2023@gauravi damahe
                    </span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent