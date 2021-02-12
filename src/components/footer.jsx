import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="container space-2 text-center mt-5">
                <ul className="list-inline mb-4">
                    <p>
                            <a className="underline" href="https://puloks.github.io/portfolio" >
                                Arif Chowdhury Pulok</a> &copy; 2021
                        </p>
                    <li className="list-inline-item  mb-sm-0">
                        <a className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" href="https://www.facebook.com/arifchowdhurypulok">
                            <i className="fab fa-facebook-f fs-5"></i>
                        </a>
                    </li>
                    
                    <li className="list-inline-item  mb-sm-0">
                        <a className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" href="https://github.com/puloks">
                            <i className="fab fa-github fs-5"></i>
                        </a>
                    </li>
                    <li className="list-inline-item  mb-sm-0">
                        <a className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" href="https://www.instagram.com/arifchowdhurypulok/">
                            <i className="fab fa-instagram fs-5"></i>
                        </a>
                    </li>
                    <li className="list-inline-item  mb-sm-0">
                        <a className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" href="https://www.linkedin.com/in/arifchowdhurypulok/">
                            <i className="fab fa-linkedin fs-5"></i>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer