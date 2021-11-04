import { useState } from "react";
import Layout from "../layout/Layout";
import axios from 'axios';
import { API_URL } from '../utils/consts';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { Router } from "next/dist/client/router";

const ClientQuestionnaire = () => {
    const router = useRouter();
    const [companyName,setCompanyName]=useState("")
    const [contactEmail,setContactEmail]=useState("")
    const [contactNumber,setContactNumber]=useState("")
    const [personName,setPersonName]=useState("")
    const [typeEvents,setTypeEvents]=useState("Family Day")
    const [whereEventsSelected,setWhereEventsSelected]=useState("Out-door")
    const [whereEventsDetails,setWhereEventsDetails]=useState("")

    const [howLongEvents,setHowLongEvents]=useState("")
    const [eventDate,setEventDate]=useState("")
    const [rangeBudgetSelected,setRangeBudgetSelected]=useState("0 - 100.000 SR")
    const [rangeBudgetDetails,setRangeBudgetDetails]=useState("")
    const [eventGoal,setEventGoal]=useState("")
    const [challenges,setChallenges]=useState("")
    const [atmosphere,setAtmosphere]=useState("")
    const [similarEvent,setSimilarEvent]=useState("")
    const [numberAudiences,setNumberAudiences]=useState("")
    const [invitationMethod,setInvitationMethod]=useState("E-Invitation")
    const [foodOption,setFoodOption]=useState("Open Buffet")
    const [targetAudience,setTargetAudience]=useState("Kids")
    const [targetAge,setTargetAge]=useState("")
    const [specialGuestChecked,setSpecialGuestChecked]=useState(true)
    const [specialGuestDetails,setSpecialGuestDetails]=useState("")

    const [eventName,setEventName]=useState("")
    const [elementsSelected,setElementsSelected]=useState("Logistics")
    const [elementsDetails,setElementsDetails]=useState("")
    const [intention,setIntention]=useState("")
    const [registrationSystem,setRegistrationSystem]=useState("")
    const [previousClientSelected,setPreviousClientSelected]=useState(true)
    const [previousClientDetails,setPreviousClientDetails]=useState("")

    const [hearAboutUS,setHearAboutUS]=useState("Through Friends")
    const [meeting,setMeeting]=useState("")
    const [touch,setTouch]=useState("Email")
    const [disable, setDisable] = useState(false);

    
    const handleSubmit = async e => {
        e.preventDefault();
        if(isValid())
        {
            const data = {companyName:companyName,contactEmail:contactEmail,contactNumber:contactNumber,personName:personName,typeEvents:typeEvents,whereEvents:{selected:whereEventsSelected,details:whereEventsDetails}
            ,howLongEvents:howLongEvents,eventDate:eventDate,rangeBudget:{selected:rangeBudgetSelected,details:rangeBudgetDetails},
            challenges:challenges,atmosphere:atmosphere,similarEvent:similarEvent,numberAudiences:numberAudiences,invitationMethod:invitationMethod,foodOption:foodOption,targetAudience:targetAudience,targetAge:targetAge,specialGuest:{checked:specialGuestChecked,details:specialGuestDetails}
            ,eventName:eventName,elements:{selected:elementsSelected,details:elementsDetails},intention:intention,registrationSystem:registrationSystem
            ,previousClient:{selected:previousClientSelected,details:previousClientDetails},hearAboutUS:hearAboutUS,meeting:meeting,touch:touch};
            const config = {
                method: 'POST',
                url: `${API_URL}/questionnaires/`,
                data
            }
            setDisable(true)
            axios(config)
                .then(({ status, data }) => {
                    console.log(status)
                    console.log(data)
                    toast.success('your form has been successfully send')      
                    InitQuestionnaire()                                 
                })
                .catch(err => {
                    
                    if (err.response) {
                        const { status, data } = err.response;

                        if ((status === 400) || (status === 404) || (status === 401)) {
                            console.log(data.error);
                            toast.error(data.error);

                        }
                    }
                })
                .finally(()=>{
                    setDisable(false)

                })

        }  
    }
    const isValid = () => {
       

       if(!companyName){
        toast.info("companyName is required")
        return false;
       }
       if(!contactEmail){
        toast.info("contactEmail is required")
        return false;
       }
       if(!contactNumber){
        toast.info("contactNumber is required")
        return false;
       }

       if(!personName){
        toast.info('personName is required')
        return false;

       }
       if(!typeEvents){
        toast.info('What type of Events are you planning for is required')
        return false;

       }
       if(whereEventsSelected=="Other" && !whereEventsDetails){
        toast.info('Where would you like the Event to be held is required')
        return false
       }
       if(!howLongEvents){
        toast.info('How long would you like the event to run is required')
        return false   
       }
       if (!eventDate){
        toast.info('What is the Event Date')
        return false      
       }
     
       if(rangeBudgetSelected=="Other" && !rangeBudgetDetails){
        toast.info('What is the project range budget is required')
        return false
       }

       if(!numberAudiences){
        toast.info('What is expected number of attendees is required')
        return false         
       }

       if(!foodOption){
        toast.info('What food option would you like to offer the audience is required')
        return false     
       }

       if(!targetAudience){
        toast.info('Who is the main target audience for this event is required')
        return false     
       }
       if(!targetAge){
        toast.info('What is the target age is required')
        return false 
       }

       if(!eventName){
        toast.info('What is the event name is required')
        return false 
       }

       if(!intention){
        toast.info('Do you intend to have MC, live entertainment or speakers is required')
        return false 
       }
       if(!registrationSystem){
        toast.info('What registration system do you prefer to provide is required')
        return false 
       }
       if(!meeting){
        toast.info('Do you prefer to have a meeting with us is required')
        return false 
       }
        return true;
    }

    const InitQuestionnaire = () => {
        setCompanyName("")
        setContactEmail("")
        setContactNumber("")
        setPersonName("")
        setTypeEvents("Family Day")
        setWhereEventsSelected("Out-door")
        setWhereEventsDetails("")
        setHowLongEvents("")
        setEventDate("")
        setRangeBudgetSelected("0 - 100.000 SR")
        setRangeBudgetDetails("")
        setEventGoal("")
        setChallenges("")
        setAtmosphere("")
        setSimilarEvent("")
        setNumberAudiences("")
        setInvitationMethod("E-Invitation")
        setFoodOption("Open Buffet")
        setTargetAudience("Kids")
        setTargetAge("")
        setSpecialGuestChecked(true)
        setSpecialGuestDetails("")
        setEventName("")
        setElementsSelected("Logistics")
        setElementsDetails("")
        setIntention("")
        setRegistrationSystem("")
        setPreviousClientSelected(true)
        setPreviousClientDetails("")
        setHearAboutUS("Through Friends")
        setMeeting("")
        setTouch("Email")
    }
  
    return (
        <>
            <Layout navWithBackground>
                <section className="container">
                    <h1>Client Questionnaire</h1>

                    <form onSubmit={e => handleSubmit(e)}>
                        <div className="grid">
                            <div>
                                <label>Company Name*</label>
                                <input type="text" className="form-input" placeholder="Company Name*" value={companyName}  onChange={(e) => {setCompanyName(e.target.value)}}/>
                            </div>
                            <div>
                                <label>Contact Email*</label>
                                <input type="text" className="form-input" placeholder="Contact Email" value={contactEmail} onChange={(e) => {setContactEmail(e.target.value)}} />
                            </div>
                            <div>
                                <label>Contact Number*</label>
                                <input type="text" className="form-input" placeholder="Contact Number" value={contactNumber} onChange={(e) => {setContactNumber(e.target.value)}}/>
                            </div>
                            <div>
                                <label>Person Name*</label>
                                <input type="text" className="form-input" placeholder="Person Name" value={personName} onChange={(e) => {setPersonName(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="sub-section">
                            <h2>Event Overview</h2>

                        </div>

                        <div className="grid">
                            <div>
                                <label>What type of Events are you planning for?*</label>
                                <select className="form-input" value= {typeEvents} onChange={(e) => {setTypeEvents(e.target.value)}} >
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
                                <select className="form-input" value= {whereEventsSelected} onChange={(e) => {setWhereEventsSelected(e.target.value)}} >
                                    <option value="Out-door">Out-door</option>
                                    <option value="Work place">Work place</option>
                                    <option value="Hotel">Hotel</option>
                                    <option value="Resort">Resort</option>
                                    <option value="In-door">In-door</option>
                                    <option value="Other">Other</option>
                                </select>
                                {(whereEventsSelected=="Other")?
                                <input type="text" className="form-input" placeholder="Where would you like the Event to be held?*" value= {whereEventsDetails} onChange={(e) => {setWhereEventsDetails(e.target.value)}} /> 
                                :
                                <div></div>
                            }
                                {/* <input type="text" className="form-input" placeholder="Where would you like the Event to be held?*" /> */}
                            </div>
                            <div>
                                <label>How long would you like the event to run?*</label>
                                <input type="text" className="form-input" placeholder="How long would you like the event to run?*" value= {howLongEvents} onChange={(e) => {setHowLongEvents(e.target.value)}} />
                            </div>
                            <div>
                                <label>What is the Event Date?*</label>
                                <input type="date" className="form-input" value= {eventDate} onChange={(e) => {setEventDate(e.target.value)}}  />
                            </div>
                            <div>
                                <label>What is the project range budget?*</label>
                                <select className="form-input" value={rangeBudgetSelected} onChange={(e) => {setRangeBudgetSelected(e.target.value)}}>
                                    <option value="0 - 100.000 SR">0 - 100.000 SR</option>
                                    <option value="100.000 - 500.000 SR">100.000 - 500.000 SR</option>
                                    <option value="500.000 - 1.000.000 SR">500.000 - 1.000.000 SR</option>
                                    <option value="Other">Other</option>
                                </select>
                                {(rangeBudgetSelected=="Other")?
                                <input type="text" className="form-input" placeholder="What is the project range budget?*" value={rangeBudgetDetails} onChange={(e) => {setRangeBudgetDetails(e.target.value)}} /> 
                                :
                                <div></div>
                                }
                                {/* <input type="text" className="form-input" placeholder="What is the project range budget?*" /> */}
                            </div>
                            <div></div>
                            <div>
                                <label>What is your main goal from this event?</label>
                                <textarea className="form-input" placeholder="What is your main goal from this event?" value= {eventGoal} onChange={(e) => {setEventGoal(e.target.value)}} ></textarea>
                            </div>
                            <div>
                                <label>Do you have any concerns or potential challenges in mind?</label>
                                <textarea className="form-input" placeholder="Do you have any concerns or potential challenges in mind?" value= {challenges} onChange={(e) => {setChallenges(e.target.value)}} ></textarea>
                            </div>
                            <div>
                                <label>What is the identity and overall atmosphere?</label>
                                <textarea className="form-input" placeholder="What is the identity and overall atmosphere?" value= {atmosphere} onChange={(e) => {setAtmosphere(e.target.value)}} ></textarea>
                            </div>
                            <div>
                                <label>Have you been to other similar event before? Positive/Negative?</label>
                                <textarea className="form-input" placeholder="Have you been to other similar event before? Positive/Negative?" value= {similarEvent} onChange={(e) => {setSimilarEvent(e.target.value)}} ></textarea>
                            </div>
                        </div>

                        <div className="sub-section" style={{ backgroundColor: 'rgb(247, 0, 108)' }}>
                            <h2>Audience Overview</h2>
                        </div>

                        <div className="grid">
                            <div>
                                <label>What is expected number of attendees?*</label>
                                <input type="number" className="form-input" placeholder="What is expected number of attendees?*" value= {numberAudiences} onChange={(e) => {setNumberAudiences(e.target.value)}}  />
                            </div>
                            <div>
                                <label>How would you like to invite the audience?*</label>
                                <select className="form-input" value= {invitationMethod} onChange={(e) => {setInvitationMethod(e.target.value)}} >
                                    <option value="E-Invitation">E-Invitation</option>
                                    <option value="Through Social media platform">Through Social media platform</option>
                                    <option value="Printing Invitation">Printing Invitation</option>
                                </select>
                            </div>
                            <div>
                                <label>What food option would you like to offer the audience?*</label>
                                <select className="form-input" value= {foodOption} onChange={(e) => {setFoodOption(e.target.value)}} >
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
                                <select className="form-input" value= {targetAudience} onChange={(e) => {setTargetAudience(e.target.value)}}>
                                    <option value="Kids">Kids</option>
                                    <option value="Families">Families</option>
                                    <option value="Mixed">Mixed</option>
                                    <option value="Women">Women</option>
                                    <option value="Men">Men</option>
                                </select>
                            </div>
                            <div>
                                <label>What is the target age?*</label>
                                <textarea className="form-input" placeholder="What is the target age?*" value= {targetAge} onChange={(e) => {setTargetAge(e.target.value)}}></textarea>
                            </div>
                            <div></div>
                            <div>
                                <div className="flex ai-c">
                                    <input type="checkbox" checked={specialGuestChecked} onChange={(e) => {setSpecialGuestChecked(!specialGuestChecked)}}/>
                                    <label>Will be there a special guest?</label>
                                </div>
                                <label>More details</label>
                                <input type="text" className="form-input" placeholder="more details" value= {specialGuestDetails} onChange={(e) => {setSpecialGuestDetails(e.target.value)}}  />
                            </div>
                        </div>

                        <div className="sub-section" style={{ backgroundColor: 'rgb(0, 121, 145)' }}>
                            <h2>Event Details</h2>
                        </div>

                        <div className="grid">
                            <div>
                                <label>What is the event name?*</label>
                                <input type="text" className="form-input" placeholder="What is the event name?*" value={eventName} onChange={(e) => {setEventName(e.target.value)}} />
                            </div>
                            <div></div>
                            <div>
                                <label>What is the most important elements you want to see at the event?*</label>
                                <select className="form-input" value={elementsSelected} onChange={(e) => {setElementsSelected(e.target.value)}}>
                                    <option value="Logistics">Logistics</option>
                                    <option value="Activities">Activities</option>
                                    <option value="Valet">Valet</option>
                                    <option value="Documentation">Documentation</option>
                                    <option value="Catering">Catering</option>
                                    <option value="Stage & Shows">Stage & Shows</option>
                                </select>
                                <label>More details</label>
                                <textarea className="form-input" placeholder="More details" value={elementsDetails} onChange={(e) => {setElementsDetails(e.target.value)}} ></textarea>
                            </div>
                            <div></div>
                            <div>
                                <label>Do you intend to have MC, live entertainment or speakers?*</label>
                                <textarea className="form-input" placeholder="Do you intend to have MC, live entertainment or speakers?" value={intention} onChange={(e) => {setIntention(e.target.value)}}></textarea>
                            </div>
                            <div>
                                <label>What registration system do you prefer to provide?*</label>
                                <textarea className="form-input" placeholder="What registration system do you prefer to provide?" value={registrationSystem} onChange={(e) => {setRegistrationSystem(e.target.value)}}></textarea>
                            </div>
                        </div>

                        <div className="sub-section" style={{ backgroundColor: 'rgb(255, 197, 129)' }}>
                            <h2>Other Details</h2>
                        </div>

                        <div className="grid">
                            <div>
                                <div className="flex ai-c">
                                    <input type="checkbox"  checked={previousClientSelected} onChange={(e) => {setPreviousClientSelected(!previousClientSelected)}}/>
                                    <label>Are you a previous client?</label>
                                </div>
                                <label>More details</label>
                                <textarea className="form-input" placeholder="More details" value= {previousClientDetails} onChange={(e) => {setPreviousClientDetails(e.target.value)}} />
                            </div>
                            <div></div>
                            <div>
                                <label>How did you hear about us?*</label>
                                <select className="form-input" value={hearAboutUS} onChange={(e) => {setHearAboutUS(e.target.value)}}>
                                    <option value="Through Friends">Through Friends</option>
                                    <option value="Through Social media platform">Through Social media platform</option>
                                    <option value="Website">Website</option>
                                </select>
                            </div>
                            <div></div>
                            <div>
                                <label>Do you prefer to have a meeting with us?*</label>
                                <textarea className="form-input" placeholder="Do you prefer to have a meeting with us?*" value={meeting} onChange={(e) => {setMeeting(e.target.value)}} />
                            </div>
                            <div></div>
                            <div>
                                <label>How do you prefer to get in touch with us ?</label>
                                <select className="form-input" value={touch} onChange={(e) => {setTouch(e.target.value)}}>
                                    <option value="Email">Email</option>
                                    <option value="Phone Number">Phone Number</option>
                                </select>
                            </div>
                        </div>
                        <div align="right" style={{marginTop:20}}>
                             <button className="btn" disabled={disable} >Send Your Application</button>
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

                @media only screen and (max-width: 1026px) {
                    .grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </>
    )
}

export default ClientQuestionnaire;