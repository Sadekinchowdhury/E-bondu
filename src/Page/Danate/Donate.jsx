

const Donate = () => {
    return (
        <div className="data_profile">
            <div>
                <h2>Donation Clarification Form</h2>
                <form action="#" method="post">
                    <div className="profile_items">
                        <div className="profile_form">
                            <div className="form_group">
                                <label htmlFor="amount">Amount</label>
                                <input type="number" id="amount" placeholder="Amount" required />
                            </div>

                            <div className="form_group">
                                <label htmlFor="recipient">Recipient No</label>
                                <input type="number" id="recipient" placeholder="Recipient" required />
                            </div>

                            <div className="form_group">
                                <label htmlFor="currency">Currency</label>
                                <div className="form_select">
                                    <select id="currency" required>
                                        <option value="select">Select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form_group">
                                <label htmlFor="donationReason">Donation Reason</label>
                                <div className="form_select">
                                    <select id="donationReason" required>
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
                                <label htmlFor="donorsPhoneNumber">Donors Phone Number</label>
                                <input type="number" id="donorsPhoneNumber" placeholder="Donor's Phone Number" required />
                            </div>

                            <div className="form_group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Name" required />
                            </div>
                            <div className="form_group">
                                <label htmlFor="transaction">Transaction Id</label>
                                <input type="text" id="transaction" placeholder="Transaction Id" required />
                            </div>
                            <div className="form_group">
                                <label htmlFor="attachment">Attachment</label>
                                <input type="file" id="attachment" required />
                            </div>
                            <div className="form_group">
                                <label htmlFor="message">Message</label>
                                <br />
                                <br />
                                <textarea style={{ width: '100%', padding: '10px' }} id="message" rows="5"></textarea>
                            </div>
                        </div>
                        <div className="profile_continue">
                            <input type="submit" value="Continue" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Donate;