import Link from "next/link";
import { Tab } from '@headlessui/react'
import { Smartphone, PieChart, Shield, Zap, Clock, MessageSquare, Award, BarChart, BarChart2, Hexagon, Cloud, Code } from 'react-feather';
export default function Home() {
  return (
    <>
      <section className="bg-half-170  d-table w-100" id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-7">
              <div className="title-heading mt-4">
                <h1 className="heading mb-3">Welcome to <span className="text-primary">BRIT Resourcing </span> </h1>
                <p className="para-desc text-muted"> we are specialist division of the Black Diamond Group and is dedicated to providing all cleaning and support service requirements to the hotel and commercial hospitality industry. We can assist in complete or partial facilities management providing cost and time efficiencies, ease of implementation, and seamless integration.</p>
                <div className="mt-4">
                  <Link href="#getstarted" className="btn btn-primary mt-2 mr-2">Get Started <i className="mdi mdi-chevron-right" /></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <img src="https://ik.imagekit.io/nodehive/brit/illustratorx/Startup_SVG_css.svg" alt="hive" />
            </div>
          </div>
        </div>
      </section>

      <section className="section style-0" id="getstarted">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div className="section-title mb-4 pb-2">
                <h4 className="title mb-4">Why choose us?</h4>
                <p className="text-muted para-desc mb-0 mx-auto">We provide highly skilled workforce to enhance your businnes and ensure seamless <span className="text-primary font-weight-bold"> workflows </span>. </p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-lg-3 col-md-4 mt-4 pt-2">
              <div className="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                <span className="h1 icon2 text-primary">
                  <PieChart size={40} />
                </span>
                <div className="card-body p-0 content">
                  <h5>Highly Scalable</h5>
                </div>
                <span className="big-icon text-center">
                  <PieChart size={130} />
                </span>
              </div>
            </div> */}
            {/* <div className="col-lg-3 col-md-4 mt-4 pt-2">
              <div className="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                <span className="h1 icon2 text-primary">
                  <Shield size={40} />
                </span>
                <div className="card-body p-0 content">
                  <h5>Most Secured</h5>
                </div>
                <span className="big-icon text-center">
                  <Shield size={130} />
                </span>
              </div>
            </div> */}
            {/* <div className="col-lg-3 col-md-4 mt-4 pt-2">
              <div className="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                <span className="h1 icon2 text-primary">
                  <Smartphone size={40} />
                </span>
                <div className="card-body p-0 content">
                  <h5>Device Compatability</h5>
                </div>
                <span className="big-icon text-center">
                  <Smartphone size={130} />
                </span>
              </div>
            </div> */}
            <div className="col-lg-3 col-md-4 mt-4 pt-2">
              <div className="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                <span className="h1 icon2 text-primary">
                  <Award size={40} />
                </span>
                <div className="card-body p-0 content">
                  <h5>Certified Company</h5>
                </div>
                <span className="big-icon text-center">
                  <Award size={130} />
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 pt-2">
              <div className="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                <span className="h1 icon2 text-primary">
                  <Zap size={40} />
                </span>
                <div className="card-body p-0 content">
                  <h5> Skilled Workforce </h5>
                </div>
                <span className="big-icon text-center">
                  <Zap size={130} />
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 pt-2">
              <div className="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                <span className="h1 icon2 text-primary">
                  <Clock size={40} />
                </span>
                <div className="card-body p-0 content">
                  <h5>Quick Process</h5>
                </div>
                <span className="big-icon text-center">
                  <Clock size={130} />
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 pt-2">
              <div className="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                <span className="h1 icon2 text-primary">
                  <MessageSquare size={40} />
                </span>
                <div className="card-body p-0 content">
                  <h5>Client Support</h5>
                </div>
                <span className="big-icon text-center">
                  <MessageSquare size={130} />
                </span>
              </div>
            </div>

            {/* <div className="col-lg-3 col-md-4 mt-4 pt-2">
              <div className="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
                <span className="h1 icon2 text-primary">
                  <BarChart2 size={40} />
                </span>
                <div className="card-body p-0 content">
                  <h5>Compititor Analysis</h5>
                </div>
                <span className="big-icon text-center">
                  <BarChart2 size={130} />
                </span>
              </div>
            </div> */}
          </div>
        </div>
        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-4">What we do?</h4>
                <p className="text-muted para-desc mb-0 mx-auto">Quick view of <span className="text-primary font-weight-bold">BRIT Resourcing</span>'s industrial services.</p>
              </div>
            </div>
          </div>
          <Tab.Group>
            <div className="row align-items-center">
              <div className="col-md-5 mt-4 pt-2">
                <Tab.List className="nav nav-pills bg-white nav-justified flex-column mb-0">
                  <Tab className="nav-item bg-light rounded-md tab-componentx">
                    <div className="nav-link rounded-md">
                      <div className="p-3 text-left">
                        <h5 className="title text-primary">F & B Waiters/Waitress</h5>
                        <p className="text-muted tab-para mb-0">A Waiter/Waitress ensures a great dining experience for guests through attentiveness and excellent customer service.</p>
                      </div>
                    </div>
                  </Tab>
                  <Tab className="nav-item bg-light rounded-md tab-componentx">
                    <div className="nav-link rounded-md">
                      <div className="p-3 text-left">
                        <h5 className="title text-primary">Head Chef/Chef</h5>
                        <p className="text-muted tab-para mb-0">Preparing food and ingredients. Managing kitchen staff or other employees. Ordering kitchen food supply. Controlling kitchen costs. </p>
                      </div>
                    </div>
                  </Tab>
                  <Tab className="nav-item bg-light rounded-md tab-componentx">
                    <div className="nav-link rounded-md">
                      <div className="p-3 text-left">
                        <h5 className="title text-primary">House Keeping & Kitchen porters</h5>
                        <p className="text-muted tab-para mb-0">must complete tasks like vacuuming, sweeping, emptying trash cans, dusting shelves, cleaning windows, and mopping floors. </p>
                      </div>
                    </div>
                  </Tab>
                  <Tab className="nav-item bg-light rounded-md tab-componentx">
                    <div className="nav-link rounded-md">
                      <div className="p-3 text-left">
                        <h5 className="title text-primary">Spring cleaning</h5>
                        <p className="text-muted tab-para mb-0">Wash Baseboards, door ceilings, window sills, doors, and walls. Vacuum and wash vents. Wash window treatments (drapes, etc.).</p>
                      </div>
                    </div>
                  </Tab>
                </Tab.List>
              </div>
              <div className="col-md-7 col-12 mt-4 pt-2">
                <Tab.Panels className="tab-content ml-lg-4">
                  <Tab.Panel>
                    <img src="http://francisandpartners.com/images/blog-img1.jpg" className="img-fluid mx-auto rounded-md shadow-lg d-block" alt="hive" />
                  </Tab.Panel>
                  <Tab.Panel>
                    <img src="http://francisandpartners.com/images/blog-img2.jpg" className="img-fluid mx-auto rounded-md shadow-lg d-block" alt="hive" />
                  </Tab.Panel>
                  <Tab.Panel>
                    <img src="http://francisandpartners.com/images/blog-img3.jpg" className="img-fluid mx-auto rounded-md shadow-lg d-block" alt="hive" />
                  </Tab.Panel>
                  <Tab.Panel>
                    <img src="http://francisandpartners.com/images/blog-img4.jpg" className="img-fluid mx-auto rounded-md shadow-lg d-block" alt="hive" />
                  </Tab.Panel>
                </Tab.Panels>
              </div>
            </div>
          </Tab.Group>
        </div>
      </section>
      {/* Start */}
      <section className="section pt-0">
        <div className="container">
          <div className="row mt-4 pt-2 position-relative" id="counter" style={{ zIndex: 1 }}>
            <div className="col-md-4 col-6 mt-4 pt-2">
              <div className="counter-box text-center">
                <img src="https://ik.imagekit.io/nodehive/brit/illustrator/Asset190.svg" className="avatar avatar-small" alt="hive" />
                <h2 className="mb-0 mt-4"><span className="counter-value" data-count={97}>99</span>%</h2>
                <h6 className="counter-head text-muted">Happy Client</h6>
              </div>
            </div>
            <div className="col-md-4 col-6 mt-4 pt-2">
              <div className="counter-box text-center">
                <img src="https://ik.imagekit.io/nodehive/brit/illustrator/Asset189.svg" className="avatar avatar-small" alt="hive" />
                <h2 className="mb-0 mt-4"><span className="counter-value" data-count={4}>4</span>+</h2>
                <h6 className="counter-head text-muted">Awards</h6>
              </div>
            </div>
            <div className="col-md-4 col-6 mt-4 pt-2">
              <div className="counter-box text-center">
                <img src="https://ik.imagekit.io/nodehive/brit/illustrator/Asset192.svg" className="avatar avatar-small" alt="hive" />
                <h2 className="mb-0 mt-4"><span className="counter-value" data-count={110}>110</span>+</h2>
                <h6 className="counter-head text-muted">Professionals</h6>
              </div>
            </div>
            {/* <div className="col-md-3 col-6 mt-4 pt-2">
              <div className="counter-box text-center">
                <img src="https://ik.imagekit.io/nodehive/brit/illustrator/Asset187.svg" className="avatar avatar-small" alt="hive" />
                <h2 className="mb-0 mt-4"><span className="counter-value" data-count={98}>98</span>%</h2>
                <h6 className="counter-head text-muted">Projects Completed</h6>
              </div>
            </div> */}
          </div>
          <div className="feature-posts-placeholder bg-light" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-4">How do we works ?</h4>
                <p className="text-muted para-desc mx-auto mb-0">Our Resourcing team follows Professional Recruitment Approch, This method makes work process easier and perfect.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mt-4 pt-2">
              <div className="card features work-process bg-transparent process-arrow border-0 text-center">
                <div className="icons rounded h1 text-center text-primary px-3">
                  <Hexagon size={40} />
                </div>
                <div className="card-body">
                  <h4 className="title text-dark">Planning &amp; Recruit</h4>
                  <p className="text-muted mb-0">We hire the eligible candidates to suit our workplace.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-md-5 pt-md-3 mt-4 pt-2">
              <div className="card features work-process bg-transparent process-arrow border-0 text-center">
                <div className="icons rounded h1 text-center text-primary px-3">
                  <Code size={40} />
                </div>
                <div className="card-body">
                  <h4 className="title text-dark">Training / Upskilling</h4>
                  <p className="text-muted mb-0">We train them based on the job requirements.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-md-5 pt-md-5 mt-4 pt-2">
              <div className="card features work-process bg-transparent d-none-arrow border-0 text-center">
                <div className="icons rounded h1 text-center text-primary px-3">
                  <Cloud size={40} />
                </div>
                <div className="card-body">
                  <h4 className="title text-dark">Deployment</h4>
                  <p className="text-muted mb-0">We'll outsoure woth our business partners for suitable positions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-1 mb-5 p-4 justify-content-center">
        <div className=" text-center">
          <div className="section-title">
            <h4 className="title mb-4">Have Question ? Get in touch!</h4>
            <p className="text-muted para-desc mx-auto">Grow your Bussiness services with<span className="text-primary font-weight-bold"> BRIT</span>. Contact us to get more detials about our services and pricings</p>
            <Link href="/contact" className="btn btn-primary mt-4"><i className="mdi mdi-phone" /> Contact us</Link>
          </div>
        </div>
      </div>
    </>
  )
}
