

export async function getStaticPaths() {
    const res = await fetch('https://aces-admin.herokuapp.com/home-page');
    const data = await res.json();

    const paths = data.map(home_pages => {
        return {
            params: {id: home_pages.id.toString()}
        }
    })

    return {
        paths,
        fallback: false  
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;

    const home_pages = await fetch(`https://aces-admin.herokuapp.com/home-page/${id}`);
    const home_pagesData = await  home_pages.json();

    return {
        props: { 
            home_pages: home_pagesData,
        }    
    }

}

const Details = ({ home_pages }) => {
    return (           
        
            <div class="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title mb-5">
                            <h2>Home</h2>
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