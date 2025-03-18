import Link from 'next/link'


export default function Contact() {
  return (
    <>
      <div>

        <section className="bg-half bg-light d-table w-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-center">
                <div className="page-next-level">
                  <h4 className="title">Contact Us</h4>
                  <div className="page-next">
                    <nav aria-label="breadcrumb" className="d-inline-block">
                      <ul className="breadcrumb bg-white rounded shadow mb-0">
                        <li className="breadcrumb-item"><Link href="/">BRIT Resourcing</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Contact uS</li>
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

        {/* Start Contact */}
        <section className="section pb-0">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="card contact-detail text-center border-0">
                  <div className="card-body p-0">
                    <div className="icon">
                      <img src="https://ik.imagekit.io/nodehive/brit/icon/Email.svg" className="avatar avatar-small" alt="hive" />
                    </div>
                    <div className="content mt-3">
                      <h4 className="title font-weight-bold">Email</h4>
                      <p className="text-muted">Mail us your querries to get instant solution<br /> for your business
                        (or) career development</p>
                      <Link href="mailto:support@britresourcing.com" className="text-primary">support@britresourcing.com</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="card contact-detail text-center border-0">
                  <div className="card-body p-0">
                    <div className="icon">
                      <img src="https://ik.imagekit.io/nodehive/brit/icon/location.svg" className="avatar avatar-small" alt="hive" />
                    </div>
                    <div className="content mt-3">
                      <h4 className="title font-weight-bold">Location(Head Office)</h4>
                      <p className="text-muted">5-1A , Moolapalayam, Bharathi nagar, <br />Erode, Tamilnadu.</p>
                      <Link href="#maponsite">View on Google map</Link>
                    </div>
                  </div>
                </div>
              </div> */}

            </div>

          </div>

          <div className="container mt-100 mt-60">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 pt-2 pt-sm-0 order-2 order-md-1">
                <div className="card shadow rounded border-0">
                  <div className="card-body py-5">
                    <h4 className="card-title mb-2 mt-4">Get In Touch !</h4>
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="icon m-5">
                          <Link href="tel:+44 7767952171">
                            <img src="https://ik.imagekit.io/nodehive/brit/social/1.png" className="avatar avatar-small" alt="hive" />
                          </Link>
                        </div>
                        {/* <div className="icon m-5">
                          <Link href="https://www.facebook.com/nodehivecorp">
                            <img src="https://ik.imagekit.io/nodehive/brit/social/3.png" className="avatar avatar-small" alt="hive" />
                          </Link>Then contact no:

+44 7767952171
+44 7767976170
                        </div> */}
                      </div>
                      <div className="col-6">
                        <div className="icon m-5">
                          <Link href="mailto:info@nodehive.in">
                            <img src="https://ik.imagekit.io/nodehive/brit/social/2.png" className="avatar avatar-small" alt="hive" />
                          </Link>
                        </div>
                        {/* <div className="icon m-5">
                          <Link href="https://www.instagram.com/nodehive/">
                            <img src="https://ik.imagekit.io/nodehive/brit/social/4.png" className="avatar avatar-small" alt="hive" />
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-7 col-md-6 order-1 order-md-2">
                <div className="card border-0">
                  <div className="card-body p-0">
                    <img src="https://ik.imagekit.io/nodehive/brit/contact.svg" className="img-fluid" alt="hive" />
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* <div className="container-fluid mt-100 mt-60" id="maponsite">
            <div className="row">
              <div className="col-12 p-0">
                <div className="card map border-0">
                  <div className="card-body p-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15649.173650039857!2d77.7215658!3d11.3132514!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc32a151bd4abbdfa!2sNODEHIVE!5e0!3m2!1sen!2sin!4v1613557717121!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen />
                  </div>
                </div>
              </div>
                
            </div>
              
          </div> */}

        </section>

        {/* End contact */}
      </div>


    </>
  )
}
