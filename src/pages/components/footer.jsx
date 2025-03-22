import Link from 'next/link'
import { Facebook, Gitlab, Instagram, Mail } from 'react-feather'
import ScrollToTop from "react-scroll-to-top";

export default function Footer() {
    return (
        <>
            <div>

                {/* <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                                <Link href="#" className="logo-footer">
                                    <img src="https://ik.imagekit.io/nodehive/brit/logo-3.png" height={24} alt="logo-dark" />
                                </Link>
                                <p className="mt-4">Start working with NODEHIVE that can provide everything digitalized for your business. Our modern technicial solutions helps your business optimization that reaches for more users via your website/web app/mobile app.</p>
                            </div>
                            <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h4 className="text-light footer-head">Company</h4>
                                <ul className="list-unstyled footer-list mt-4">
                                    <li><Link href="/" className="text-foot"><i className="mdi mdi-chevron-right mr-1" />Home</Link></li>
                                    <li><Link href="/about" className="text-foot"><i className="mdi mdi-chevron-right mr-1" /> About Us</Link></li>
                                    <li><Link href="/career" className="text-foot"><i className="mdi mdi-chevron-right mr-1" /> Career</Link></li>
                                    <li><Link href="/contact" className="text-foot"><i className="mdi mdi-chevron-right mr-1" /> Contact Us</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h4 className="text-light footer-head">Services</h4>
                                <ul className="list-unstyled footer-list mt-4">
                                    <li><Link href="/services/web" className="text-foot"><i className="mdi mdi-chevron-right mr-1" /> Web Services</Link></li>
                                    <li><Link href="/services/mobile" className="text-foot"><i className="mdi mdi-chevron-right mr-1" /> Mobile App Development</Link></li>
                                    <li><Link href="/services/seo" className="text-foot"><i className="mdi mdi-chevron-right mr-1" /> Digital Marketing</Link></li>
                                    <li><Link href="/services/trainings" className="text-foot"><i className="mdi mdi-chevron-right mr-1" /> Trainings Programs</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h4 className="text-light footer-head">Newletter</h4>
                                <form  name="subscribe" method="POST" data-netlify="true">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="mt-2 foot-subscribe form-group position-relative">
                                                <label>Subscribe Us to get Updates</label>
                                                <Mail className="fea icon-sm icons" />
                                                <input type="email" name="email" className="form-control pl-5 rounded" placeholder="Your email : " required />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <button type="submit" className="btn btn-soft-primary btn-block"> Submit </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </footer> */}
                <footer className="footer footer-bar">
                    <div className="container text-center">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <div className="text-sm-left">
                                    <p className="mb-0">© 2022-2026 <span className="text-primary mx-extra-bold">BRIT Resourcing LTD</span> </p>
                                </div>
                            </div>
                            <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <ul className="list-unstyled text-sm-right mb-0">
                                    {/* <li className="list-inline-item mx-2"><Link href="https://www.facebook.com/nodehivecorp" className="btn btn-icon btn-pills btn-lg btn-blue" data-toggle="tooltip" data-placement="top" title="Facebook"><Facebook className="icons" /></Link></li> */}
                                    <li className="list-inline-item mx-2"><Link href="https://www.instagram.com/britresourcing_2025/" className="btn btn-icon btn-pills btn-lg btn-danger" data-toggle="tooltip" data-placement="top" title="Instagram"><Instagram className="icons" /></Link></li>
                                    {/* <li className="list-inline-item mx-2"><Link href="https://github.com/nodehive" className="btn btn-icon btn-pills btn-lg btn-warning" data-toggle="tooltip" data-placement="top" title="Gitlab"><Gitlab className="icons" /></Link></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            <ScrollToTop smooth color="#5caafd" width='20' height='20' className="btn btn-icon btn-soft-primary b-t-t" />

        </>
    )
}
