import Layout from "../layout/Layout";

const ClientQuestionnaire = () => {
    return (
        <>
            <Layout navWithBackground>
                <section className="container">
                    <h1>Client Questionnaire</h1>

                    <form>
                        <div className="grid">
                            <div>
                                <label>Company Name*</label>
                                <input type="text" className="form-input" placeholder="Company Name*" />
                            </div>
                            <div>
                                <label>Contact Email*</label>
                                <input type="text" className="form-input" placeholder="Contact Email" />
                            </div>
                            <div>
                                <label>Contact Number*</label>
                                <input type="text" className="form-input" placeholder="Contact Number" />
                            </div>
                            <div>
                                <label>Person Name*</label>
                                <input type="text" className="form-input" placeholder="Person Name" />
                            </div>
                        </div>

                        <div className="sub-section">
                            <h2>Event Overview</h2>
                        </div>

                        <div className="grid">
                            <div>
                                <label>What type of Events are you planning for?*</label>
                                <select className="form-input">
                                    <option value="Family Day">Family Day</option>
                                    <option value="Young Employee">Young Employee</option>
                                    <option value="Public Events">Public Events</option>
                                    <option value="Internal Events">Internal Events</option>
                                    <option value="Annual Event">Annual Event</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label>Where would you like the Event to be held?*</label>
                                <select className="form-input">
                                    <option value="Out-door">Out-door</option>
                                    <option value="Work place">Work place</option>
                                    <option value="Hotel">Hotel</option>
                                    <option value="Resort">Resort</option>
                                    <option value="In-door">In-door</option>
                                    <option value="Other">Other</option>
                                </select>
                                {/* IF other */}
                                {/* <input type="text" className="form-input" placeholder="Where would you like the Event to be held?*" /> */}
                            </div>
                            <div>
                                <label>How long would you like the event to run?*</label>
                                <input type="text" className="form-input" placeholder="How long would you like the event to run?*" />
                            </div>
                            <div>
                                <label>What is the Event Date?*</label>
                                <input type="date" className="form-input" />
                            </div>
                            <div>
                                <label>What is the project range budget?*</label>
                                <select className="form-input">
                                    <option value="0 - 100.000 SR">0 - 100.000 SR</option>
                                    <option value="100.000 - 500.000 SR">100.000 - 500.000 SR</option>
                                    <option value="500.000 - 1.000.000 SR">500.000 - 1.000.000 SR</option>
                                    <option value="Other">Other</option>
                                </select>
                                {/* IF other */}
                                {/* <input type="text" className="form-input" placeholder="What is the project range budget?*" /> */}
                            </div>
                            <div></div>
                            <div>
                                <label>What is your main goal from this event?</label>
                                <textarea className="form-input" placeholder="What is your main goal from this event?"></textarea>
                            </div>
                            <div>
                                <label>Do you have any concerns or potential challenges in mind?</label>
                                <textarea className="form-input" placeholder="Do you have any concerns or potential challenges in mind?"></textarea>
                            </div>
                            <div>
                                <label>What is the identity and overall atmosphere?</label>
                                <textarea className="form-input" placeholder="What is the identity and overall atmosphere?"></textarea>
                            </div>
                            <div>
                                <label>Have you been to other similar event before? Positive/Negative?</label>
                                <textarea className="form-input" placeholder="Have you been to other similar event before? Positive/Negative?"></textarea>
                            </div>
                        </div>

                        <div className="sub-section" style={{ backgroundColor: 'rgb(247, 0, 108)' }}>
                            <h2>Audience Overview</h2>
                        </div>

                        <div className="grid">
                            <div>
                                <label>What is expected number of attendees?*</label>
                                <input type="number" className="form-input" placeholder="What is expected number of attendees?*" />
                            </div>
                            <div>
                                <label>How would you like to invite the audience?*</label>
                                <select className="form-input">
                                    <option value="E-Invitation">E-Invitation</option>
                                    <option value="Through Social media platform">Through Social media platform</option>
                                    <option value="Printing Invitation">Printing Invitation</option>
                                </select>
                            </div>
                            <div>
                                <label>What food option would you like to offer the audience?*</label>
                                <select className="form-input">
                                    <option value="Open Buffet">Open Buffet</option>
                                    <option value="Trucks & Booths">Trucks & Booths</option>
                                    <option value="Snaks">Snaks</option>
                                    <option value="Coffee Break">Coffee Break</option>
                                    <option value="Seated">Seated</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label>Who is the main target audience for this event*</label>
                                <select className="form-input">
                                    <option value="Kids">Kids</option>
                                    <option value="Families">Families</option>
                                    <option value="Mixed">Mixed</option>
                                    <option value="Women">Women</option>
                                    <option value="Men">Men</option>
                                </select>
                            </div>
                            <div>
                                <label>What is the target age?*</label>
                                <textarea className="form-input" placeholder="What is the target age?*"></textarea>
                            </div>
                            <div></div>
                            <div>
                                <div className="flex ai-c">
                                    <input type="checkbox" />
                                    <label>Will be there a special guest?*</label>
                                </div>
                                <label>More details</label>
                                <input type="number" className="form-input" placeholder="What is expected number of attendees?*" />
                            </div>
                        </div>

                        <div className="sub-section" style={{ backgroundColor: 'rgb(0, 121, 145)' }}>
                            <h2>Event Details</h2>
                        </div>

                        <div className="grid">
                            <div>
                                <label>What is the event name?*</label>
                                <input type="number" className="form-input" placeholder="What is the event name?*" />
                            </div>
                            <div></div>
                            <div>
                                <label>What is the most important elements you want to see at the event?*</label>
                                <select className="form-input">
                                    <option value="Logistics">Logistics</option>
                                    <option value="Activities">Activities</option>
                                    <option value="Valet">Valet</option>
                                    <option value="Documentation">Documentation</option>
                                    <option value="Catering">Catering</option>
                                    <option value="Catering">Stage & Shows</option>
                                </select>
                                <label>More details</label>
                                <textarea className="form-input" placeholder="More details"></textarea>
                            </div>
                            <div></div>
                            <div>
                                <label>Do you intend to have MC, live entertainment or speakers?*</label>
                                <textarea className="form-input" placeholder="Do you intend to have MC, live entertainment or speakers?"></textarea>
                            </div>
                            <div>
                                <label>What registration system do you prefer to provide?*</label>
                                <textarea className="form-input" placeholder="What registration system do you prefer to provide?"></textarea>
                            </div>
                        </div>

                        <div className="sub-section" style={{ backgroundColor: 'rgb(255, 197, 129)' }}>
                            <h2>Other Details</h2>
                        </div>

                        <div className="grid">
                            <div>
                                <div className="flex ai-c">
                                    <input type="checkbox" />
                                    <label>Are you a previous client?*</label>
                                </div>
                                <label>More details</label>
                                <textarea className="form-input" placeholder="More details" />
                            </div>
                            <div></div>
                            <div>
                                <label>How did you hear about us?*</label>
                                <select className="form-input">
                                    <option value="Through Friends">Through Friends</option>
                                    <option value="Through Social media platform">Through Social media platform</option>
                                    <option value="Website">Website</option>
                                </select>
                            </div>
                            <div></div>
                            <div>
                                <label>Do you prefer to have a meeting with us?*</label>
                                <textarea className="form-input" placeholder="Do you prefer to have a meeting with us?*" />
                            </div>
                            <div></div>
                            <div>
                                <label>How do you prefer to get in touch with us ?</label>
                                <select className="form-input">
                                    <option value="Email">Email</option>
                                    <option value="Phone Number">Phone Number</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </section>
            </Layout>

            <style jsx>{`
                section {
                    padding-top: 200px;
                    padding-bottom: 60px;
                    min-height: calc(100vh - 187px);
                    position: relative;
                    z-index: 98;
                }

                h1 {
                    font-size: 28px;
                    color: #46356A;
                    margin-bottom: 20px;
                }

                .grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 15px;
                }

                .sub-section {
                    padding: 5px 40px 8px;
                    background-color: #46356A;
                    border-radius: 40px;
                    margin: 25px 0px;
                }

                .sub-section h2 {
                    font-size: 18px;
                    font-weight: 500;
                    color: #fff;
                }

                textarea {
                    height: 90px;
                }

                input[type=checkbox] {
                    margin-right: 10px;
                }
            `}</style>
        </>
    )
}

export default ClientQuestionnaire;