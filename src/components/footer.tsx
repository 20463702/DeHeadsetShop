import React from 'react';

const Footer = (): JSX.Element => {
    return (
        <footer id="footer">
            <h2>
                Contact
            </h2>
            <div className="horizontal-flex-container">
                <p>
                    Telefoonnummer: +31 70 4513500
                </p>
                <p>
                    E-mail: <a href="mailto:siebevandijck0209@gmail.com">siebevandijck0209@gmail.com</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;