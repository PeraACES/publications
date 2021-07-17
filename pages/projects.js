
import fetch from 'isomorphic-fetch'
import Link from 'next/link'

const Projects = ({projects, error}) => {
    //console.log(projects);
    //console.log(projects.ProjectName);
    if (error) {
        return <div>An error occured: {error.message}</div>;
    }

    return (           
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        {/* <span className="caption d-block small">Categories</span>
                        <h2>Projects</h2> */}
                    </div>
                    <br />
                    {
                        projects.map((projects) => {
                            //console.log(projects.ProjectImage1.url);

                            return(
                                <div key={projects.id} className="post-entry-2 d-flex">
                                    {/* <img  width="100%" height="100%"  src={projects.ProjectImage1.url} alt="Image" className="thumbnail order-md-2" /> */}
                                    <div className="contents order-md-1 pl-0">                                        
                                        <h2><a href="blog-single.html">{projects.ProjectName}</a></h2>
                                        <p className="mb-3">{projects.Abstract}</p>
                                        <div className="row">
                                            <div className="col-12">
                                            <Link href={'/projects/' + projects.id}><input type="submit" value="View More" className="btn-2 btn-primary py-2 px-8" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                    {/* <div className="row">
                        <div className="col-lg-6">
                            <ul className="custom-pagination list-unstyled">
                            <li className="active">1</li>
                            <li ><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    ) 
}

Projects.getInitialProps = async ctx => {
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
    
        const projects = await fetch('https://aces-admin.herokuapp.com/projects', {
            method: 'GET',
            headers,
        })
            .then(checkStatus)
            .then(parseJSON);
    
        return { projects };
    } catch (error) {
        return { error };
    }
};

export default Projects;