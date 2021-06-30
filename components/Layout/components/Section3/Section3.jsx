import React from 'react'

export default function Section3() {
    return (
        <div className="py-0" id="section3">
            <div className="container">
                <div className="half-post-entry d-block d-lg-flex bg-light">
                    {/* <div className="img-bg" style="background-image: url('images/big_img_1.jpg')"></div> */}
                    <img src="images/big_img_1.jpg" alt="Image" className="img-bg" />
                    <div className="contents">
                        <span className="caption">Editor's Pick</span>
                        <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                        <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate vero obcaecati natus adipisci necessitatibus eius, enim vel sit ad reiciendis. Enim praesentium magni delectus cum, tempore deserunt aliquid quaerat culpa nemo veritatis, iste adipisci excepturi consectetur doloribus aliquam accusantium beatae?</p>
                    
                        <div className="post-meta">
                            <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">Food</a></span>
                            <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                        </div>

                    </div>
            </div>
        </div>
    </div>
    )
}
