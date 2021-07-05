import fetch from 'isomorphic-fetch'

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
        fallback: false   //other routes should 404
    }
}

export const getStaticProps = async (context) => {
 
        const id = context.params.id;
        console.log(id)
        const project = await fetch(`http://localhost:1337/projects/${id}`);
        const authors = await fetch(`http://localhost:1337/authors`);
        const projectData = await project.json();
        const authorsdata = await authors.json();


    return {
        props: { 
            project: projectData,
            authors: authorsdata
        }    //single object feched by id
    }

}

const Details = ({ project, authors }) => {
    authors.map((author)=> console.log(author.project.id))
    return (           
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <span className="caption d-block small">Categories</span>
                        <h2>Projects</h2>
                    </div>
                    {      
                            <div key={project.id} className="post-entry-2 d-flex">
                                
                                <img  width="100%" height="100%"  src={`http://localhost:1337${project.ProjectImage.url}`} alt="Image" className="thumbnail order-md-2" />
                                <div className="contents order-md-1 pl-0">
                                    <h2><a href="blog-single.html">{project.ProjectName}</a></h2>
                                    <h3><a href="blog-single.html">{authors.map((author)=>(project.id===author.project.id)?  <h2>{author.AuthorName}</h2> : " ")}</a></h3> 
                                    <p className="mb-4">{project.Abstract}</p>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}
 
export default Details;