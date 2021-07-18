

export async function getStaticPaths() {
    const res = await fetch('https://aces-admin.herokuapp.com/contact-page');
    const data = await res.json();

    const paths = data.map(contact_pages => {
        return {
            params: {id: contact_pages.id.toString()}
        }
    })

    return {
        paths,
        fallback: false  
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;

    const contact_pages = await fetch(`https://aces-admin.herokuapp.com/contact-page/${id}`);
    const contact_pagesData = await  contact_pages.json();

    return {
        props: { 
            contact_pages: contact_pagesData,
        }    
    }

}

const Details = ({ contact_pages }) => {
    return (           
        
            <div class="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title mb-5">
                            <h2>Contact Us</h2>
                            {/* <h2>{contact_pages.title}</h2>  */}
                        </div>
                    <div className="post-entry-2 d-flex">    
                        <div className="contents order-md-1 pl-0">
                            
                            {/* <h3>{contact_pages.body.title}</h3> */}
                            {/* <div className="row">
                                <p className="mb-3">{contact_pages.list.title}</p><br />
                                <p className="mb-3">{contact_pages.list.subtitle}</p><br />
                                <p className="mb-3">{contact_pages.list.content}</p><br />
                            </div> */}
                        </div>
                    </div>   
                </div>
            </div>
        </div>
       
    )
}
 
export default Details;