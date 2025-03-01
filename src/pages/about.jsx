import Link from 'next/link'
import { Briefcase, CheckCircle, DollarSign, Navigation, Target, Umbrella, UserCheck, Zap } from 'react-feather'

export default function About() {
  return (
    <>
      <div>

        <section className="bg-half bg-light d-table w-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                <div className="page-next-level">
                  <h4 className="title"> About BRIT Resourcing</h4>
                  <div className="page-next">
                    <nav aria-label="breadcrumb" className="d-inline-block">
                      <ul className="breadcrumb bg-white rounded shadow mb-0">
                        <li className="breadcrumb-item"><Link href="/">BRIT Resourcing</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Start */}
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                  <span className="h1 icon2 text-primary">
                    <Briefcase size={40}/>
                  </span>
                  <div className="card-body p-0 content">
                    <h5>Our Vision</h5>
                    <p className="para text-muted mb-0">Our vision is to become a midsized corporate by the year of 2025. Safe guard the client’s need through an utmost integration and satisfying them with our services.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                  <span className="h1 icon2 text-primary">
                    <Navigation size={40}/>
                  </span>
                  <div className="card-body p-0 content">
                    <h5>Our Mission</h5>
                    <p className="para text-muted mb-0">Our mission is to deliver the optimal solutions given with first-rated and standardized services at the affordable prices. First and foremost policy is to fulfill the customers need in a graded priority.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                <div className="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                  <span className="h1 icon2 text-primary">
                    <Target size={40}/>
                  </span>
                  <div className="card-body p-0 content">
                    <h5>Our Goal</h5>
                    <p className="para text-muted mb-0">Give massive contribution to our country economy development by growing up local business via digitalizing &amp; creating highly skilled programmers via in-office training programs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* About Start */}
          <div className="container mt-100 mt-60">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                    <div className="card work-container work-modern overflow-hidden rounded border-0 shadow-md">
                      <div className="card-body p-0">
                        <img src="https://ik.imagekit.io/nodehive/brit/about/ab01.jpg" className="img-fluid" alt="work-image" />
                        <div className="overlay-work bg-dark" />
                        <div className="content">
                          <Link href="#" className="title text-white d-block font-weight-bold">Digital Marketing</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-6">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                        <div className="card work-container work-modern overflow-hidden rounded border-0 shadow-md">
                          <div className="card-body p-0">
                            <img src="https://ik.imagekit.io/nodehive/brit/about/ab02.jpg" className="img-fluid" alt="work-image" />
                            <div className="overlay-work bg-dark" />
                            <div className="content">
                              <Link href="#" className="title text-white d-block font-weight-bold">Technologies</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 mt-4 pt-2">
                        <div className="card work-container work-modern overflow-hidden rounded border-0 shadow-md">
                          <div className="card-body p-0">
                            <img src="https://ik.imagekit.io/nodehive/brit/about/ab03.jpg" className="img-fluid" alt="work-image" />
                            <div className="overlay-work bg-dark" />
                            <div className="content">
                              <Link href="#" className="title text-white d-block font-weight-bold">In-Office Tranings</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mt-4 mt-lg-0 pt- pt-lg-0">
                <div className="ml-lg-4">
                  <div className="section-title mb-4 pb-2">
                    <h4 className="title mb-4">About Our Story</h4>
                    <p className="text-muted para-desc">We are the <span className="text-primary font-weight-bold">Tech Startup</span> founded on 2019, we have done a lot of projects on web and mobile technologies.</p>
                    <p className="text-muted para-desc ">We provides modern web and mobile services at affordable cost. We helps to grow the hundreds of local customers business by developing modern websites and mobile applications and SEO .</p>
                    <p className="text-muted para-desc mb-0">Our services are </p>
                  </div>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-0 py-1"><span className="text-primary h4 mr-2"><CheckCircle/></span>Web and Mobile Apps development</li>
                    <li className="mb-0 py-1"><span className="text-primary h4 mr-2"><CheckCircle/></span>Digital marketing &amp; SEO, Social Media Marketing</li>
                    <li className="mb-0 py-1"><span className="text-primary h4 mr-2"><CheckCircle/></span>Training Programs (Technical Skills)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid mt-100 mt-60">
            <div className="rounded py-5" style={{ background: 'url("https://ik.imagekit.io/nodehive/brit/about/cta.jpg") center center' }}>
              <div className="container py-md-5 py-3">
                <div className="row">
                  <div className="col-lg-6 col-md-7 col-12 offset-lg-6 offset-md-5">
                    <div className="card border-0">
                      <div className="card-body p-md-5 p-4 bg-white rounded">
                        <div className="section-title">
                          <h4 className="title mb-4">Features</h4>
                          <p className="text-muted para-desc mb-0">Start working with <span className="text-primary font-weight-bold">BRIT Resourcing</span> to improve your business on digital world . Our unique features make your business easier.</p>
                        </div>
                        <div className="row">
                          <div className="col-md-6 col-12 mt-4">
                            <div className="media align-items-center">
                              <div className="icon text-center rounded-circle h4 text-primary mr-2 mb-0">
                                <Zap/>
                              </div>
                              <div className="media-body">
                                <h6 className="title text-dark mb-0">Fast Process</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-12 mt-4">
                            <div className="media align-items-center">
                              <div className="icon text-center rounded-circle h4 text-primary mr-2 mb-0">
                                <Umbrella/>
                              </div>
                              <div className="media-body">
                                <h6 className="title text-dark mb-0">Secured</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-12 mt-4">
                            <div className="media align-items-center">
                              <div className="icon text-center rounded-circle h4 text-primary mr-2 mb-0">
                                <DollarSign/>
                              </div>
                              <div className="media-body">
                                <h6 className="title text-dark mb-0">Low cost</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-12 mt-4">
                            <div className="media align-items-center">
                              <div className="icon text-center rounded-circle h4 text-primary mr-2 mb-0">
                                <UserCheck/>
                              </div>
                              <div className="media-body">
                                <h6 className="title text-dark mb-0">Customer Support</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{/*end div*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>{/*end div*/}
          </div>{/*end container fluid*/}
        </section>
        <div className="mt-1 mb-5 p-5 justify-content-center">
          <div className="text-center">
            <div className="section-title">
              <h4 className="title mb-4">Have Question ? Get in touch!</h4>
              <p className="text-muted para-desc mx-auto">Grow your Bussiness services with<span className="text-primary font-weight-bold"> BRIT</span>. Contact us to get more detials about our services and pricings</p>
              <Link href="/contact" className="btn btn-primary mt-4"><i className="mdi mdi-phone" /> Contact us</Link>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
