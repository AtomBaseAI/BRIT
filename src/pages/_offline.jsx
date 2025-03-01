import Link from 'next/link'


export default function _offline() {
    return (
        <>
            <div>       
                <section className="bg-half bg-light d-table w-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 text-center">
                                <div className="page-next-level">
                                    <h4 className="title">Internet <span className="text-danger">Disconnected !</span></h4>
                                    <div className="page-next">
                                        <nav aria-label="breadcrumb" className="d-inline-block">
                                            <ul className="breadcrumb bg-white rounded shadow mb-0">
                                                <li className="breadcrumb-item"><Link href="/">BRIT Resourcing</Link></li>
                                                <li className="breadcrumb-item"><Link href="#">Errors</Link></li>
                                                <li className="breadcrumb-item text-danger" aria-current="page">Offline</li>
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
                  
                <section className="section pb-4 mb-2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <img src="https://ik.imagekit.io/nodehive/brit/illustrator/r4.svg" className="mr-md-4" alt="hive" />
                            </div>  
                            <div className="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title ml-lg-5">
                                    <h4 className="title mb-4">You're offline</h4>
                                    <p className="text-muted">Please Check your internet connection.</p>
                                    <Link href="/" className="btn btn-primary mt-4"><i className="mdi mdi-backup-restore" /> Go Back Home</Link>
                                </div>
                            </div>  
                        </div>  
                    </div>
                </section>  
            </div>
        </>
    )
}