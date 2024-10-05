import React from 'react'

function index(data) {
    const { facebook, twitter, youtube, dribble, behance, instagram, copyright } = data

    return (
        <footer id="tt-footer">
            <div className="tt-footer-inner">

                {/* Begin footer column 
							========================= */}
                <div className="footer-col tt-align-center-left">
                    <div className="footer-col-inner">

                        <a href="#" className="tt-btn tt-btn-link scroll-to-top">
                            <span className="tt-btn-icon"><i className="fas fa-arrow-up"></i></span>
                            <div data-hover="Back to Top">Back to Top</div>
                        </a>

                    </div> {/* /.footer-col-inner */}
                </div>
                {/* Begin footer column */}

                {/* Begin footer column 
							========================= */}
                <div className="footer-col tt-align-center order-m-last">
                    <div className="footer-col-inner">

                        <div className="tt-copyright text-gray">
                            <a href="https://themetorium.net" target="_blank" rel="noopener" className="tt-btn tt-btn-link">
                                <span className="tt-btn-icon"><i className="far fa-copyright"></i></span>
                                <div data-hover={copyright?.value || "YourBusiness"}>{copyright?.value || "YourBusiness"}</div>
                            </a>
                        </div>

                    </div> {/* /.footer-col-inner */}
                </div>
                {/* Begin footer column */}

                {/* Begin footer column 
							========================= */}
                <div className="footer-col tt-align-center-right">
                    <div className="footer-col-inner">

                        <div className="footer-social">
                            <div className="footer-social-text"><span>Follow</span><i className="fas fa-share-alt"></i></div>
                            <div className="social-buttons">
                                <ul>
                                    {facebook || <li><a href={facebook?.url || '#'} className="magnetic-item" target="_blank" rel="noopener"><i className="fab fa-facebook-f"></i></a></li>
                                    }
                                    {twitter || <li><a href={twitter?.url || '#'} className="magnetic-item" target="_blank" rel="noopener"><i className="fab fa-twitter"></i></a></li>
                                    }
                                    {youtube || <li><a href={youtube?.url || '#'} className="magnetic-item" target="_blank" rel="noopener"><i className="fab fa-youtube"></i></a></li>
                                    }
                                    {dribble || <li><a href={dribble?.url || '#'} className="magnetic-item" target="_blank" rel="noopener"><i className="fab fa-dribbble"></i></a></li>
                                    }
                                    {behance || <li><a href={behance?.url || '#'} className="magnetic-item" target="_blank" rel="noopener"><i className="fab fa-behance"></i></a></li>
                                    }
                                </ul>
                            </div> {/* /.social-buttons */}
                        </div> {/* /.footer-social */}
                    </div> {/* /.footer-col-inner */}
                </div>
                {/* Begin footer column */}
            </div> {/* /.tt-section-inner */}
        </footer>
    )
}

export default index