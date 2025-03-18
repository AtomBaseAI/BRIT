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
                    <Briefcase size={40} />
                  </span>
                  <div className="card-body p-0 content">
                    <h5>Our Vision</h5>
                    <p className="para text-muted mb-0"> Clean and simple cleaning provides Clean and healthy spaces for our clients in hotels.we build long term relationships with our clients and employees by understanding their needs and providing for those needs with the highest level of integrity and professionalism in the hospitality industry</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                  <span className="h1 icon2 text-primary">
                    <Navigation size={40} />
                  </span>
                  <div className="card-body p-0 content">
                    <h5>Our Mission</h5>
                    <p className="para text-muted mb-0">Our Mission is to Acquiring the right talent is the most important key to growth.our goal is to increase current market share by 55% across all other sectors in the UK such as hotels and manufacturing units and restaurants that benefit from our services. </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                <div className="card features fea-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
                  <span className="h1 icon2 text-primary">
                    <Target size={40} />
                  </span>
                  <div className="card-body p-0 content">
                    <h5>Our Goal</h5>
                    <p className="para text-muted mb-0">To provide high quality services to meet our client requirements brit resourcing consultancy aims to increase market share by 60%.Then mainly the hospitality industry with plans to penetrate the businesses like hotels,manufacturing units and restaurants etc </p>
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
                        <img src="https://ik.imagekit.io/nodehive/brit/home/blog-img1.jpg?updatedAt=1740811511425" className="img-fluid" alt="work-image" />
                        <div className="overlay-work bg-dark" />
                        <div className="content">
                          <Link href="#" className="title text-white d-block font-weight-bold">Housekeeping</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-6">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                        <div className="card work-container work-modern overflow-hidden rounded border-0 shadow-md">
                          <div className="card-body p-0">
                            <img src="https://ik.imagekit.io/nodehive/brit/home/blog-img2.jpg?updatedAt=1740811511369" className="img-fluid" alt="work-image" />
                            <div className="overlay-work bg-dark" />
                            <div className="content">
                              <Link href="#" className="title text-white d-block font-weight-bold">Food and Beverage waiters/waitress</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 mt-4 pt-2">
                        <div className="card work-container work-modern overflow-hidden rounded border-0 shadow-md">
                          <div className="card-body p-0">
                            <img src="https://ik.imagekit.io/nodehive/brit/home/blog-img3.jpg?updatedAt=1740811511341" className="img-fluid" alt="work-image" />
                            <div className="overlay-work bg-dark" />
                            <div className="content">
                              <Link href="#" className="title text-white d-block font-weight-bold">Kitchen porters</Link>
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
                    <p className="text-muted para-desc ">As a trusted hospitality services and Manufacturing services company within the industry,we have vast experience in proactive and reactive solutions.This is included contract cleaning,one off kitchen deep cleans,structural cleans and a complete package for hotels,Restaurant colleges and more.Brit Resourcing consultancy Limited expanded to become one of the leading service providers in it's field. </p>
                    <p className="text-muted para-desc mb-0">and our services include:
                    </p>
                  </div>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-0 py-1"><span className="text-primary h4 mr-2"><CheckCircle /></span>Housekeeping                     </li>
                    <li className="mb-0 py-1"><span className="text-primary h4 mr-2"><CheckCircle /></span>Kitchen porters
                    </li>
                    <li className="mb-0 py-1"><span className="text-primary h4 mr-2"><CheckCircle /></span>Food and Beverage waiters/waitress
                    </li>
                    <li className="mb-0 py-1"><span className="text-primary h4 mr-2"><CheckCircle /></span>Manufacturing staffs 
                    </li>
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
                                <Zap />
                              </div>
                              <div className="media-body">
                                <h6 className="title text-dark mb-0">Fast Process</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-12 mt-4">
                            <div className="media align-items-center">
                              <div className="icon text-center rounded-circle h4 text-primary mr-2 mb-0">
                                <Umbrella />
                              </div>
                              <div className="media-body">
                                <h6 className="title text-dark mb-0">Secured</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-12 mt-4">
                            <div className="media align-items-center">
                              <div className="icon text-center rounded-circle h4 text-primary mr-2 mb-0">
                                <DollarSign />
                              </div>
                              <div className="media-body">
                                <h6 className="title text-dark mb-0">Low cost</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-12 mt-4">
                            <div className="media align-items-center">
                              <div className="icon text-center rounded-circle h4 text-primary mr-2 mb-0">
                                <UserCheck />
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
