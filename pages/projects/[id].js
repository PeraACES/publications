export async function getStaticPaths() {
    const res = await fetch('http://localhost:1337/projects');
    const data = await res.json();

    const paths = data.map(project => {
        return {
            params: {id: project.id.toString()}
        }
    })

    return {
        paths,
        fallback: false  
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;

    const project = await fetch(`http://localhost:1337/projects/${id}`);
    const projectData = await project.json();

    return {
        props: { 
            project: projectData,
        }    
    }

}

const Details = ({ project }) => {
    return (           
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <span className="caption d-block small">Categories</span>
                        <h2>Projects</h2>
                    </div>
                    <div className="post-entry-2 d-flex">    
                        <img  width="100%" height="100%"  src={`http://localhost:1337${project.ProjectImage.url}`} alt="Image" className="thumbnail order-md-2" />
                        <div className="contents order-md-1 pl-0">
                            <h2><a href="blog-single.html">{project.ProjectName}</a></h2>
                            <p className="mb-4">{project.Abstract}</p>
                            <h2>Supervisors</h2>
                            <div className="col-lg-6">
                                <div className="post-entry-2 d-flex">    
                                    {project.supervisors.map((supervisor)=> (
                                        <div className="col-md-8">
                                            <div className="post-entry-1">                                         
                                                {/* <img  width="70" height="70" src={`http://localhost:1337${supervisor.AuthorImage.url}`} alt="Image" className="img-fluid" /> */}
                                                <h2><a href="blog-single.html">{supervisor.SupervisorName}</a></h2>
                                            </div>
                                        </div>                
                                    ))}
                                </div>
                            </div>
                            <h2>Authors</h2>
                            <div className="col-lg-6">
                                <div className="post-entry-2 d-flex">    
                                    {project.authors.map((author)=> (
                                        <div className="col-md-8">
                                            <div className="post-entry-1">                                         
                                                <img  width="70" height="70" src={`http://localhost:1337${author.AuthorImage.url}`} alt="Image" className="img-fluid" />
                                                <h2><a href="blog-single.html">{author.AuthorName}</a></h2>
                                            </div>
                                        </div>                
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )
}
 
export default Details;