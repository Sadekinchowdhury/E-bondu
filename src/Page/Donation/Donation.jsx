import { useState } from "react";


const Donation = () => {
    // const [donatProfileVisible, setDonatProfileVisible] = useState(false);
    // const [donatBankDtlsVisible, setDonatBankDtlsVisible] = useState(false);

    // const donatCei = () => {
    //     setDonatProfileVisible(!donatProfileVisible);
    //     setDonatBankDtlsVisible(false);
    // };
    const [show, setShow] = useState(false)

    const handLShow = () => {
        setShow(!show)
    }
    return (
        <section className="donat hero">
            <div className="container">
                <div className="donat_head">
                    <h2>Bank Information</h2>
                    <button onClick={handLShow}  ><a><b>Donation Certificate</b></a></button>
                </div>

                {


                    show ?
                        <div className="donat_profile">
                            <div>
                                <h2>Donation Clarification Form</h2>
                                <form action="" method="post">
                                    <div className="profile_items">
                                        <div className="profile_form">
                                            <div className="form_group">
                                                <label htmlFor="Ammount">Amount</label>
                                                <input type="number" id="Ammount" placeholder="Amount" required />
                                            </div>

                                            <div className="form_group">
                                                <label htmlFor="Recipient">Recipient No</label>
                                                <input type="number" id="Recipient" placeholder="Recipient" required />
                                            </div>

                                            <div className="form_group">
                                                <label htmlFor="Currency">Currency</label>
                                                <div className="form_select">
                                                    <select id="Currency" required>
                                                        <option value="select">Select</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form_group">
                                                <label htmlFor="DonationR">Donation Reason</label>
                                                <div className="form_select">
                                                    <select id="DonationR" required>
                                                        <option value="select">Select</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form_group">
                                                <label htmlFor="email">Email</label>
                                                <input type="email" id="email" placeholder="Email" required />
                                            </div>

                                            <div className="form_group">
                                                <label htmlFor="Donars">Donors Phone Number</label>
                                                <input type="number" id="Donars" placeholder="Donor's Phone Number" required />
                                            </div>

                                            <div className="form_group">
                                                <label htmlFor="name">Name</label>
                                                <input type="text" id="name" placeholder="Name" required />
                                            </div>
                                            <div className="form_group">
                                                <label htmlFor="Transaction">Transaction Id</label>
                                                <input type="text" id="Transaction" placeholder="Transaction Id" required />
                                            </div>
                                            <div className="form_group">
                                                <label htmlFor="Attachment">Attachment</label>
                                                <input type="file" id="Attachment" required />
                                            </div>
                                            <div className="form_group">
                                                <label htmlFor="message">Message</label>
                                                <br />
                                                <br />
                                                <textarea style={{ width: '100%', padding: '10px' }} id="message" rows="5" />
                                            </div>
                                        </div>
                                        <div className="profile_continue">
                                            <input type="submit" value="continue" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div> :
                        <> <div className="donatBank_dtls">
                            <div className="donat_bank">
                                <div>
                                    <h3>Payment With Mobail Banking</h3>
                                    <ul>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                                    <path
                                                        d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                                </svg>
                                            </span>
                                            Bank Name: TAP
                                        </li>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                                    <path
                                                        d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                                </svg>
                                            </span>
                                            A/C NAME: Bondhu Foundation
                                        </li>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                                    <path
                                                        d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                                </svg>
                                            </span>
                                            A/C TYPE: Merchant
                                        </li>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                                    <path
                                                        d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                                </svg>
                                            </span>
                                            A/C NO: xxxxxx

                                        </li>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                                    <path
                                                        d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                                </svg>
                                            </span>
                                            COUNTER NO: 1
                                        </li>
                                    </ul>
                                </div>
                                <div className="bank_dtl">
                                    <div className="donat_logo">
                                        <div className="donat_img">
                                            <img src="assets/Image/bkash.png" alt="" />
                                        </div>
                                    </div>
                                    <h2>City Bank</h2>
                                    <ul>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-credit-card" viewBox="0 0 16 16">
                                                    <path
                                                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                                                    <path
                                                        d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                                                </svg>
                                            </span>
                                            Bank Name: TAP
                                        </li>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-credit-card" viewBox="0 0 16 16">
                                                    <path
                                                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                                                    <path
                                                        d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                                                </svg>
                                            </span>
                                            A/C NAME: Bondhu Foundation
                                        </li>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-credit-card" viewBox="0 0 16 16">
                                                    <path
                                                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                                                    <path
                                                        d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                                                </svg>
                                            </span>
                                            A/C TYPE: Merchant
                                        </li>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-credit-card" viewBox="0 0 16 16">
                                                    <path
                                                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                                                    <path
                                                        d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                                                </svg>
                                            </span>
                                            A/C NO: xxxxxx

                                        </li>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-credit-card" viewBox="0 0 16 16">
                                                    <path
                                                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                                                    <path
                                                        d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                                                </svg>
                                            </span>
                                            COUNTER NO: 1
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <br />
                        </div>

                            <div className="donat_bank">
                                <div>
                                    <br />
                                    <h3>Payment With International Bank</h3>
                                    <ul>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                                    <path
                                                        d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                                </svg>
                                            </span>
                                            Bank Name: CITY BANK
                                        </li>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                                    <path
                                                        d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                                </svg>
                                            </span>
                                            A/C Name: Bondhu Foundation
                                        </li>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                                    <path
                                                        d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                                </svg>
                                            </span>
                                            A/C No: xxxxxxxxxxxxxx
                                        </li>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                                    <path
                                                        d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                                </svg>
                                            </span>
                                            Seife Code: xxxxx
                                        </li>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                                    <path
                                                        d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                                </svg>
                                            </span>
                                            Routing No: xxxx
                                        </li>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                                    <path
                                                        d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                                </svg>
                                            </span>
                                            Branches: xxxxxxxxxxxx
                                        </li>
                                    </ul>
                                </div>
                                <div className="bank_dtl international_dtl">
                                    <div className="donat_logo">
                                        <div className="donat_img">
                                            <img src="assets/Image/bkash.png" alt="" />
                                        </div>
                                    </div>
                                    <h2>International Bank</h2>
                                    <ul>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-credit-card" viewBox="0 0 16 16">
                                                    <path
                                                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                                                    <path
                                                        d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                                                </svg>
                                            </span>
                                            Bank Name: City Bank
                                        </li>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-credit-card" viewBox="0 0 16 16">
                                                    <path
                                                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                                                    <path
                                                        d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                                                </svg>
                                            </span>
                                            A/C NAME: Bondhu Foundation
                                        </li>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-credit-card" viewBox="0 0 16 16">
                                                    <path
                                                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                                                    <path
                                                        d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                                                </svg>
                                            </span>
                                            A/C No: xxxxxxxxxxxx
                                        </li>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-credit-card" viewBox="0 0 16 16">
                                                    <path
                                                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                                                    <path
                                                        d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                                                </svg>
                                            </span>
                                            Seife Code: xxxxxx

                                        </li>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-credit-card" viewBox="0 0 16 16">
                                                    <path
                                                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                                                    <path
                                                        d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                                                </svg>
                                            </span>
                                            Branches: xxxxxx
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <br />
                            <div className="donat_bank">
                                <div>
                                    <br />
                                    <h3>Payment With Bank</h3>
                                    <ul>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                                    <path
                                                        d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                                </svg>
                                            </span>
                                            Paypal
                                        </li>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                                    <path
                                                        d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                                </svg>
                                            </span>
                                            donate@bondhu.org.bd
                                        </li>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                                </svg>
                                            </span>
                                            A/C No: xxxxxxxxxxxxxx
                                        </li>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                                </svg>
                                            </span>
                                            Seife Code: xxxxx
                                        </li>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                                </svg>
                                            </span>
                                            Routing No: xxxx
                                        </li>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                                </svg>
                                            </span>
                                            Branches: xxxxxxxxxxxx
                                        </li>
                                    </ul>
                                </div>

                                <div className="bank_dtl">
                                    <div className="donat_logo">
                                        <div className="donat_img">
                                            <img src="assets/Image/bkash.png" alt="" />
                                        </div>
                                    </div>
                                    <h2>Bank</h2>
                                    <ul>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                    className="bi bi-credit-card" viewBox="0 0 16 16">
                                                    <path
                                                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                                                    <path
                                                        d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                                                </svg>
                                            </span>
                                            Bank Name: TAP
                                        </li>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
                                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                                                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                                                </svg>
                                            </span>
                                            A/C NAME: Bondhu Foundation</li>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
                                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                                                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                                                </svg>
                                            </span>
                                            A/C TYPE: Merchant
                                        </li>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
                                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                                                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                                                </svg>
                                            </span>
                                            A/C NO: xxxxxx

                                        </li>
                                        <li>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-credit-card" viewBox="0 0 16 16">
                                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                                                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                                                </svg>
                                            </span>
                                            COUNTER NO: 1
                                        </li>
                                    </ul>
                                </div>
                            </div></>
                }


            </div >


        </section >
    );
};

export default Donation;