

const Blood = () => {
    return (
        <section className="bldR hero">
            <div className="container">
                <div className="data_profile">
                    <form action="#" method="post">
                        <div className="profile_items">
                            <h2>Blood Request</h2>
                            <div className="profile_form">
                                <div className="form_group">
                                    <label htmlFor="Division">Division</label>
                                    <div className="form_select">
                                        <select id="gender" required>
                                            <option value="" defaultValue>Select</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form_group">
                                    <label htmlFor="District">District</label>
                                    <div className="form_select">
                                        <select id="gender" required>
                                            <option value="" defaultValue>Select</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form_group">
                                    <label htmlFor="Upzilla">Upzilla</label>
                                    <div className="form_select">
                                        <select id="gender" required>
                                            <option value="" defaultValue>Select</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form_group">
                                    <label htmlFor="hospital">Hospital</label>
                                    <div className="form_select">
                                        <select id="hospital" required>
                                            <option value="" defaultValue>Select</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form_group">
                                    <label htmlFor="pasient">Patient Name</label>
                                    <input type="text" id="pasient" placeholder="Patient Name" required />
                                </div>
                                <div className="form_group">
                                    <label htmlFor="pasientNum">Patient Phone number</label>
                                    <input type="number" id="pasientNum" placeholder="Patient Phone number" required />
                                </div>
                                <div className="form_group">
                                    <label htmlFor="refNam">Reference name</label>
                                    <input type="text" id="refNam" placeholder="Reference name" required />
                                </div>
                                <div className="form_group">
                                    <label htmlFor="refNum">Reference  Phone number </label>
                                    <input type="number" id="refNum" placeholder="Reference  Phone number " required />
                                </div>
                                <div className="form_group">
                                    <label htmlFor="bldG">Blood Group</label>
                                    <div className="form_select">
                                        <select id="bldG" required>
                                            <option value="" defaultValue>Select</option>
                                            <option value="a">A+</option>
                                            <option value="ab">B</option>
                                            <option value="o">O+</option>
                                            <option value="b">B</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form_group">
                                    <label htmlFor="bldG">How many bag of blood</label>
                                    <div className="form_select">
                                        <select id="bldG" required>
                                            <option value="" defaultValue>Select</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form_group bldr_sms">
                                <label htmlFor="sms">Message</label>
                                <textarea id="sms" rows="7" placeholder="Message"></textarea>
                            </div>
                            <div className="profile_countinue">
                                <input type="submit" value="submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Blood;