import { useState,useEffect } from "react";
import Layout from "../layout/Layout";
import axios from 'axios';
import { API_URL } from '../utils/consts';
import { toast } from 'react-toastify';
import { i18n, withTranslation } from '../i18n'

const ClientQuestionnaire = ({t}) => {
    const [isRTL, setIsRTL] = useState(false)

    useEffect(() => {
        let isRTL = i18n.language === 'ar' ? true : false;
        setIsRTL(isRTL)
        
    });
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
            eventGoal:eventGoal,challenges:challenges,atmosphere:atmosphere,similarEvent:similarEvent,numberAudiences:numberAudiences,invitationMethod:invitationMethod,foodOption:foodOption,targetAudience:targetAudience,targetAge:targetAge,specialGuest:{checked:specialGuestChecked,details:specialGuestDetails}
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
                    toast.success(`${t('toast.SUCCESS')}`)      
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
        toast.info(`${t('toast.CN')}`)
        return false;
       }
       if(!contactEmail){
        toast.info(`${t('toast.CE')}`)
        return false;
       }
       if(!contactNumber){
        toast.info(`${t('toast.CNU')}`)
        return false;
       }

       if(!personName){
        toast.info(`${t('toast.PN')}`)
        return false;

       }
       if(!typeEvents){
        toast.info(`${t('toast.TE')}`)
        return false;

       }
       if(whereEventsSelected=="Other" && !whereEventsDetails){
        toast.info(`${t('toast.EH')}`)
        return false
       }
       if(!howLongEvents){
        toast.info(`${t('toast.HE')}`)
        return false   
       }
       if (!eventDate){
        toast.info(`${t('toast.Ed')}`)
        return false      
       }
       
       if(rangeBudgetSelected=="Other" && !rangeBudgetDetails){
        toast.info(`${t('toast.RB')}`)
        return false
       }

       if(!numberAudiences){
        toast.info(`${t('toast.NA')}`)
        return false         
       }

       if(!foodOption){
        toast.info(`${t('toast.FO')}`)
        return false     
       }

       if(!targetAudience){
        toast.info(`${t('toast.TA')}`)
        return false     
       }
       if(!targetAge){
        toast.info(`${t('toast.TAG')}`)
        return false 
       }

       if(!eventName){
        toast.info(`${t('toast.EN')}`)
        return false 
       }

       if(!intention){
        toast.info(`${t('toast.EI')}`)
        return false 
       }
       if(!registrationSystem){
        toast.info(`${t('toast.ER')}`)
        return false 
       }
       if(!meeting){
        toast.info(`${t('toast.EM')}`)
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
                    <h1>{t('CLIENTQUEST.title')}</h1>

                    <form onSubmit={e => handleSubmit(e)}>
                        <div className="grid">
                            <div>
                                <label>{t('CLIENTQUEST.compN')}*</label>
                                <input type="text" className="form-input" placeholder={t('CLIENTQUEST.compN')} value={companyName}  onChange={(e) => {setCompanyName(e.target.value)}}/>
                            </div>
                            <div>
                                <label>{t('CLIENTQUEST.contE')}*</label>
                                <input type="text" className="form-input" placeholder={t('CLIENTQUEST.contE')} value={contactEmail} onChange={(e) => {setContactEmail(e.target.value)}} />
                            </div>
                            <div>
                                <label>{t('CLIENTQUEST.contN')}*</label>
                                <input type="text" className="form-input" placeholder={t('CLIENTQUEST.contN')} value={contactNumber} onChange={(e) => {setContactNumber(e.target.value)}}/>
                            </div>
                            <div>
                                <label>{t('CLIENTQUEST.personN')}*</label>
                                <input type="text" className="form-input" placeholder={t('CLIENTQUEST.personN')} value={personName} onChange={(e) => {setPersonName(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="sub-section">
                            <h2>{t('EVENTQUEST.title')}</h2>

                        </div>

                        <div className="grid">
                            <div>
                                <label>{t('EVENTQUEST.eventType')}*</label>
                                <select className="form-input" value= {typeEvents} onChange={(e) => {setTypeEvents(e.target.value)}} >
                                    <option value="Family Day">{t('EVENTQUEST.eventTypeChoice1')}</option>
                                    <option value="Young Employee">{t('EVENTQUEST.eventTypeChoice2')}</option>
                                    <option value="Public Events">{t('EVENTQUEST.eventTypeChoice3')}</option>
                                    <option value="Internal Events">{t('EVENTQUEST.eventTypeChoice4')}</option>
                                    <option value="Annual Event">{t('EVENTQUEST.eventTypeChoice5')}</option>
                                    <option value="Other">{t('EVENTQUEST.eventTypeChoice6')}</option>
                                </select>
                            </div>
                            <div>
                                <label>{t('EVENTQUEST.eventHeld')}*</label>
                                <select className="form-input" value= {whereEventsSelected} onChange={(e) => {setWhereEventsSelected(e.target.value)}} >
                                    <option value="Out-door">{t('EVENTQUEST.eventHeldChoice1')}</option>
                                    <option value="Work place">{t('EVENTQUEST.eventHeldChoice2')}</option>
                                    <option value="Hotel">{t('EVENTQUEST.eventHeldChoice3')}</option>
                                    <option value="Resort">{t('EVENTQUEST.eventHeldChoice4')}</option>
                                    <option value="In-door">{t('EVENTQUEST.eventHeldChoice5')}</option>
                                    <option value="Other">{t('EVENTQUEST.eventHeldChoice6')}</option>
                                </select>
                                {(whereEventsSelected=="Other")?
                                <input type="text" className="form-input" placeholder={`${t('EVENTQUEST.eventHeld')}*`} value= {whereEventsDetails} onChange={(e) => {setWhereEventsDetails(e.target.value)}} /> 
                                :
                                <div></div>
                            }
                                {/* <input type="text" className="form-input" placeholder="Where would you like the Event to be held?*" /> */}
                            </div>
                            <div>
                                <label>{t('EVENTQUEST.eventLong')}*</label>
                                <input type="text" className="form-input" placeholder={t('EVENTQUEST.eventLong')} value= {howLongEvents} onChange={(e) => {setHowLongEvents(e.target.value)}} />
                            </div>
                            <div>
                                <label>{t('EVENTQUEST.eventDate')}*</label>
                                <input type="date" className="form-input" value= {eventDate} onChange={(e) => {setEventDate(e.target.value)}}  />
                            </div>
                            <div>
                                <label>{t('EVENTQUEST.eventBudget')}*</label>
                                <select className="form-input" value={rangeBudgetSelected} onChange={(e) => {setRangeBudgetSelected(e.target.value)}}>
                                    <option value="0 - 100.000 SR">0 - 100.000 SR</option>
                                    <option value="100.000 - 500.000 SR">100.000 - 500.000 SR</option>
                                    <option value="500.000 - 1.000.000 SR">500.000 - 1.000.000 SR</option>
                                    <option value="Other">{t('EVENTQUEST.eventBudgetChoice4')}</option>
                                </select>
                                {(rangeBudgetSelected=="Other")?
                                <input type="text" className="form-input" placeholder={`${t('EVENTQUEST.eventBudget')}*`} value={rangeBudgetDetails} onChange={(e) => {setRangeBudgetDetails(e.target.value)}} /> 
                                :
                                <div></div>
                                }
                                {/* <input type="text" className="form-input" placeholder="What is the project range budget?*" /> */}
                            </div>
                            <div></div>
                            <div>
                                <label>{t('EVENTQUEST.eventGoal')}</label>
                                <textarea className="form-input" placeholder={t('EVENTQUEST.eventGoal')} value= {eventGoal} onChange={(e) => {setEventGoal(e.target.value)}} ></textarea>
                            </div>
                            <div>
                                <label>{t('EVENTQUEST.eventChallenges')}</label>
                                <textarea className="form-input" placeholder={t('EVENTQUEST.eventChallenges')} value= {challenges} onChange={(e) => {setChallenges(e.target.value)}} ></textarea>
                            </div>
                            <div>
                                <label>{t('EVENTQUEST.eventAtmosphere')}</label>
                                <textarea className="form-input" placeholder={t('EVENTQUEST.eventAtmosphere')} value= {atmosphere} onChange={(e) => {setAtmosphere(e.target.value)}} ></textarea>
                            </div>
                            <div>
                                <label>{t('EVENTQUEST.eventSimilar')}</label>
                                <textarea className="form-input" placeholder={t('EVENTQUEST.eventSimilar')} value= {similarEvent} onChange={(e) => {setSimilarEvent(e.target.value)}} ></textarea>
                            </div>
                        </div>

                        <div className="sub-section" style={{ backgroundColor: 'rgb(247, 0, 108)' }}>
                            <h2>{t('AUDIENCEQUEST.title')}</h2>
                        </div>

                        <div className="grid">
                            <div>
                                <label>{t('AUDIENCEQUEST.number')}*</label>
                                <input type="number" className="form-input" placeholder={t('AUDIENCEQUEST.number')} value= {numberAudiences} onChange={(e) => {setNumberAudiences(e.target.value)}}  />
                            </div>
                            <div>
                                <label>{t('AUDIENCEQUEST.invite')}*</label>
                                <select className="form-input" value= {invitationMethod} onChange={(e) => {setInvitationMethod(e.target.value)}} >
                                    <option value="E-Invitation">{t('AUDIENCEQUEST.inviteChoice1')}</option>
                                    <option value="Through Social media platform">{t('AUDIENCEQUEST.inviteChoice2')}</option>
                                    <option value="Printing Invitation">{t('AUDIENCEQUEST.inviteChoice3')}</option>
                                </select>
                            </div>
                            <div>
                                <label>{t('AUDIENCEQUEST.food')}*</label>
                                <select className="form-input" value= {foodOption} onChange={(e) => {setFoodOption(e.target.value)}} >
                                    <option value="Open Buffet">{t('AUDIENCEQUEST.foodChoice1')}</option>
                                    <option value="Trucks & Booths">{t('AUDIENCEQUEST.foodChoice2')}</option>
                                    <option value="Snaks">{t('AUDIENCEQUEST.foodChoice2')}</option>
                                    <option value="Coffee Break">{t('AUDIENCEQUEST.foodChoice3')}</option>
                                    <option value="Seated">{t('AUDIENCEQUEST.foodChoice4')}</option>
                                    <option value="Other">{t('AUDIENCEQUEST.foodChoice5')}</option>
                                </select>
                            </div>
                            <div>
                                <label>{t('AUDIENCEQUEST.target')}*</label>
                                <select className="form-input" value= {targetAudience} onChange={(e) => {setTargetAudience(e.target.value)}}>
                                    <option value="Kids">{t('AUDIENCEQUEST.targetChoice1')}</option>
                                    <option value="Families">{t('AUDIENCEQUEST.targetChoice2')}</option>
                                    <option value="Mixed">{t('AUDIENCEQUEST.targetChoice3')}</option>
                                    <option value="Women">{t('AUDIENCEQUEST.targetChoice4')}</option>
                                    <option value="Men">{t('AUDIENCEQUEST.targetChoice5')}</option>
                                </select>
                            </div>
                            <div>
                                <label>{t('AUDIENCEQUEST.age')}*</label>
                                <textarea className="form-input" placeholder={t('AUDIENCEQUEST.age')} value= {targetAge} onChange={(e) => {setTargetAge(e.target.value)}}></textarea>
                            </div>
                            <div></div>
                            <div>
                                <div className="flex ai-c">
                                    <input type="checkbox" checked={specialGuestChecked} onChange={(e) => {setSpecialGuestChecked(!specialGuestChecked)}}/>
                                    <label>{t('AUDIENCEQUEST.guest')}</label>
                                </div>
                                <label>{t('AUDIENCEQUEST.details')}</label>
                                <input type="text" className="form-input" placeholder={t('AUDIENCEQUEST.details')} value= {specialGuestDetails} onChange={(e) => {setSpecialGuestDetails(e.target.value)}}  />
                            </div>
                        </div>

                        <div className="sub-section" style={{ backgroundColor: 'rgb(0, 121, 145)' }}>
                            <h2>{t('EVENTDETAILSQUEST.title')}</h2>
                        </div>

                        <div className="grid">
                            <div>
                                <label>{t('EVENTDETAILSQUEST.name')}*</label>
                                <input type="text" className="form-input" placeholder={t('EVENTDETAILSQUEST.name')} value={eventName} onChange={(e) => {setEventName(e.target.value)}} />
                            </div>
                            <div></div>
                            <div>
                                <label>{t('EVENTDETAILSQUEST.elements')}*</label>
                                <select className="form-input" value={elementsSelected} onChange={(e) => {setElementsSelected(e.target.value)}}>
                                    <option value="Logistics">{t('EVENTDETAILSQUEST.elementsChoice1')}</option>
                                    <option value="Activities">{t('EVENTDETAILSQUEST.elementsChoice2')}</option>
                                    <option value="Valet">{t('EVENTDETAILSQUEST.elementsChoice3')}</option>
                                    <option value="Documentation">{t('EVENTDETAILSQUEST.elementsChoice4')}</option>
                                    <option value="Catering">{t('EVENTDETAILSQUEST.elementsChoice5')}</option>
                                    <option value="Stage & Shows">{t('EVENTDETAILSQUEST.elementsChoice6')}</option>
                                </select>
                                <label>{t('EVENTDETAILSQUEST.details')}</label>
                                <textarea className="form-input" placeholder={t('EVENTDETAILSQUEST.details')} value={elementsDetails} onChange={(e) => {setElementsDetails(e.target.value)}} ></textarea>
                            </div>
                            <div></div>
                            <div>
                                <label>{t('EVENTDETAILSQUEST.intention')}*</label>
                                <textarea className="form-input" placeholder={t('EVENTDETAILSQUEST.intention')} value={intention} onChange={(e) => {setIntention(e.target.value)}}></textarea>
                            </div>
                            <div>
                                <label>{t('EVENTDETAILSQUEST.registration')}*</label>
                                <textarea className="form-input" placeholder={t('EVENTDETAILSQUEST.registration')} value={registrationSystem} onChange={(e) => {setRegistrationSystem(e.target.value)}}></textarea>
                            </div>
                        </div>

                        <div className="sub-section" style={{ backgroundColor: 'rgb(255, 197, 129)' }}>
                            <h2>{t('EVENTDETAILSQUEST.title')}</h2>
                        </div>

                        <div className="grid">
                            <div>
                                <div className="flex ai-c">
                                    <input type="checkbox"  checked={previousClientSelected} onChange={(e) => {setPreviousClientSelected(!previousClientSelected)}}/>
                                    <label>{t('OTHERDETAILSQUEST.prevclient')}*</label>
                                </div>
                                <label>{t('OTHERDETAILSQUEST.details')}</label>
                                <textarea className="form-input" placeholder={t('OTHERDETAILSQUEST.details')} value= {previousClientDetails} onChange={(e) => {setPreviousClientDetails(e.target.value)}} />
                            </div>
                            <div></div>
                            <div>
                                <label>{t('OTHERDETAILSQUEST.hear')}*</label>
                                <select className="form-input" value={hearAboutUS} onChange={(e) => {setHearAboutUS(e.target.value)}}>
                                    <option value="Through Friends">{t('OTHERDETAILSQUEST.hearChoice1')}</option>
                                    <option value="Through Social media platform">{t('OTHERDETAILSQUEST.hearChoice2')}</option>
                                    <option value="Website">{t('OTHERDETAILSQUEST.hearChoice3')}</option>
                                </select>
                            </div>
                            <div></div>
                            <div>
                                <label>{t('OTHERDETAILSQUEST.meeting')}*</label>
                                <textarea className="form-input" placeholder={t('OTHERDETAILSQUEST.meeting')} value={meeting} onChange={(e) => {setMeeting(e.target.value)}} />
                            </div>
                            <div></div>
                            <div>
                                <label>{t('OTHERDETAILSQUEST.touch')}</label>
                                <select className="form-input" value={touch} onChange={(e) => {setTouch(e.target.value)}}>
                                    <option value="Email">{t('OTHERDETAILSQUEST.touchChoice1')}</option>
                                    <option value="Phone Number">{t('OTHERDETAILSQUEST.touchChoice2')}</option>
                                </select>
                            </div>
                        </div>
                        <div align="right" style={{marginTop:20}}>
                             <button className="btn" disabled={disable}>{t('JOINUS.sendapp')}</button>
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
                    direction: ${isRTL ? 'rtl' : 'ltr'};

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
                form > div {
                    margin-top: 10px;
                    direction: ${isRTL ? 'rtl' : 'ltr'};

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

export default withTranslation('common')(ClientQuestionnaire);