
import React from 'react'
import fetch from 'isomorphic-fetch'

const Contact = ({contact_pages, error}) => {
        if (error) {
            return <div>An error occured: {error.message}</div>;
        }
    return (
        <div class="site-section bg-light" id="Contact">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title">
                            <h2>{contact_pages.header.title}</h2>
                            <h3>{contact_pages.body[0].title}</h3> 
                        </div>    
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <p className="mb-3">{contact_pages.body[0].list[0].title}</p>
                                    <p className="mb-3">{contact_pages.body[0].list[0].subtitle}</p>
                                    <p className="mb-3">{contact_pages.body[0].list[0].content}</p> 
                                </div>
                                <div class="col-md-6 form-group">
                                    <p className="mb-3">{contact_pages.body[0].list[1].title}</p>
                                    <p className="mb-3">{contact_pages.body[0].list[1].subtitle}</p>
                                    <p className="mb-3">{contact_pages.body[0].list[1].content}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <p className="mb-3">{contact_pages.body[0].list[2].subtitle}</p>
                                    <p className="mb-3">{contact_pages.body[0].list[2].title}</p>
                                    <p className="mb-3">{contact_pages.body[0].list[2].content}</p> 
                                </div>
                            </div>
                    </div>           
                </div>        
            </div>
        </div>
    )
    }

    Contact.getInitialProps = async ctx => {
        try {
            // Parses the JSON returned by a network request
            const parseJSON = resp => (resp.json ? resp.json() : resp);
            // Checks if a network request came back fine, and throws an error if not
            const checkStatus = resp => {
                if (resp.status >= 200 && resp.status < 300) {
                    return resp;
                }
        
                return parseJSON(resp).then(resp => {
                    throw resp;
                });
            };
        
            const headers = {
                'Content-Type': 'application/json',
            };
        
            const contact_pages = await fetch('https://aces-admin.herokuapp.com/contact-page', {
                method: 'GET',
                headers,
            })
                .then(checkStatus)
                .then(parseJSON);
        
            return { contact_pages };
        } catch (error) {
            return { error };
        }
    };
    
    export default Contact;
