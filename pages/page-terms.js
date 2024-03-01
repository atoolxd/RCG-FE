/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";


function Terms() {
    return (
        <>
            <Layout>
                <section className="section-box mt-50 mb-50">
                    <div className="container text-center">
                        <h1 className="text-heading-1">Terms and Conditions</h1>
                    </div>
                </section>
                <section className="section-box mt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mx-auto">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <div className="table-of-content">
                                            <h6 className="mb-15">Table of content</h6>
                                            <ul>
                                                <li>
                                                    <Link href="#section-1" legacyBehavior><a>Acceptance of Terms</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="#section-2" legacyBehavior><a>Scope of services</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="#section-3" legacyBehavior><a>User Responsibilities</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="#section-4" legacyBehavior><a>Privacy Policy</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="#section-5" legacyBehavior><a>Payment Terms</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="#section-6" legacyBehavior><a>Intellectual Property</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="#section-7" legacyBehavior><a>Termination of Services</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="#section-8" legacyBehavior><a>Limitation of Liability</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="#section-9" legacyBehavior><a>Update to Terms</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="#section-10" legacyBehavior><a>Refund Policy</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="#section-11" legacyBehavior><a>Governing Law</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="#section-12" legacyBehavior><a>Contact Information</a></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="single-detail"><img className="img-responsive bdr-16" src="assets/imgs/page/blog/single/img-1.png" alt="Agon" />
                                            <h6 className="mt-35 mb-25" id="section-1">Acceptance of Terms:</h6>
                                            <p>Users should explicitly agree to your terms and conditions before using your services. State that continued use of the services constitutes acceptance of these terms and conditions. Its advisable to have a clear mechanism for users to indicate their agreement, such as a checkbox during account creation.</p>
                                            <h6 className="mt-35 mb-25" id="section-2">Scope of Services:</h6>
                                            <p>Provide a detailed description of each service you offer. Specify the features, functionalities, and any limitations associated with each service. This section aims to set clear expectations for users regarding what they can expect from your offerings.</p>
                                            <h6 className="mt-35 mb-25" id="section-3">User Responsibilities:</h6>
                                            <p>Clearly outline the responsibilities of users. This may include providing accurate information during registration, refraining from engaging in any illegal or prohibited activities, and respecting the intellectual property rights of the company and other users.</p>
                                            <h6 className="mt-35 mb-25" id="section-4">Privacy Policy:</h6>
                                            <p>Reference or provide a brief summary of your privacy policy. Clearly communicate how user data is collected, stored, used, and shared. Include information about third-party data processors and any options users have regarding the collection and use of their data.</p>
                                            <h6 className="mt-35 mb-25" id="section-5">Payment Terms</h6>
                                            <p>Specify the payment terms for your services. This includes details such as the cost of services, payment methods accepted, billing cycles, and any applicable taxes or fees. If there are subscription-based services, outline the renewal process and cancellation policy.</p>
                                            <h6 className="mt-35 mb-25" id="section-6">Intellectual Property</h6>
                                            <p>Clearly state who owns the intellectual property created during the provision of services. This includes content, code, trademarks, and any other intellectual property associated with your company. Be explicit about any licenses granted to users for the use of your intellectual property.</p>
                                            <h6 className="mt-35 mb-25" id="section-7">Termination of Services:</h6>
                                            <p>Detail the circumstances under which either party can terminate the services. This may include violations of terms, non-payment, or other specified conditions. Clearly outline the consequences of termination, such as the loss of access to certain features or the forfeiture of fees.</p>
                                            <h6 className="mt-35 mb-25" id="section-8">Limitation of Liability:</h6>
                                            <p>Define the limitations of your companys liability. This may include disclaimers for certain types of damages or losses. Specify that the company is not liable for any indirect, incidental, or consequential damages.</p>
                                            <h6 className="mt-35 mb-25" id="section-9">Updates to Terms:</h6>
                                            <p>Specify the process for resolving disputes. This could involve negotiation, mediation, arbitration, or legal proceedings. Clearly outline the steps that must be taken before legal action is pursued, and provide information on how users can initiate dispute resolution.</p>
                                            <h6 className="mt-35 mb-25" id="section-10">Refund Policy</h6>
                                            <p>Inform users that the terms and conditions may be updated periodically. Specify how users will be notified of changes, whether through email notifications, on-site notifications, or other means. Include a statement that continued use of the services after changes implies acceptance of the updated terms.</p>
                                            <h6 className="mt-35 mb-25" id="section-11">Governing Law:</h6>
                                            <p>Clearly state the governing law that will apply to the terms and services. This helps establish the legal framework under which any disputes or legal actions will be handled. It is often the law of the jurisdiction where your company is based.</p>
                                            <h6 className="mt-35 mb-25" id="section-12">Contact Information:</h6>
                                            <p>Provide clear and accessible contact information for users to reach out with questions or concerns. Include an email address, phone number, or a contact form. This helps facilitate communication and addresses user inquiries promptly.</p>
                                            <h6 className="mt-50">- RCG TEAM -</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-2">
                                        <h3 className="text-heading-6 color-gray-400 mb-20 mt-150">Share</h3>
                                        <Link href="https://facebook.com" legacyBehavior><a className="share-social share-fb" target="_blank" rel="noreferrer" ></a></Link><br />
                                        <Link href="https://twitter.com" legacyBehavior><a className="share-social share-tw" target="_blank" rel="noreferrer" ></a></Link><br />
                                        <Link href="https://www.pinterest.com" legacyBehavior><a className="share-social share-pi" target="_blank" rel="noreferrer" ></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box overflow-visible mb-100">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="bg-6 box-newsletter position-relative">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-7"><span className="text-body-capitalized color-gray-500 text-uppercase">newsletter</span>
                                            <h4 className="text-heading-2 mb-10 mt-10">Subscribe our newsletter</h4>
                                            <p className="text-body-text color-gray-500">By clicking the button, you are agreeing with our</p>
                                            <Link href="/page-terms" legacyBehavior><a>Term and Conditions</a></Link>

                                            <div className="box-form-newsletter mt-30">
                                                <form className="form-newsletter"><input className="input-newsletter" placeholder="Enter you mail .." /><button className="btn btn-send" /></form>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                            <div className="block-chart shape-1"><img src="/assets/imgs/template/chart.png" alt="Agon" /></div><img className="img-responsive img-newsletter" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>

        </>
    )
}

export default Terms;