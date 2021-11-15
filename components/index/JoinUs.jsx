import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Modal from '../shared/Modal';
import FileDropZone from '../shared/FileDropZone';
import { toast } from 'react-toastify';
import { API_URL } from '../../utils/consts';
import { withTranslation } from '../../i18n'

const JoinUs = ({isRTL,t}) => {
    const [isEmployeeModalOpen, setIsEmployeeModalOpen] = useState(false);
    const [isOrganizerModalOpen, setIsOrganizerModalOpen] = useState(false);
    const [file, setFile] = useState("");
    const [fullName,setFullName]=useState("");
    const [mobileNumber,setMobileNumber]=useState("");
    const [email,setEmail]=useState("");
    const [nationality,setNationality]=useState("");
    const [region,setRegion]=useState("");
    const [gender,setGender]=useState("male");
    const [dateOfBirth,setDateOfBirth]=useState("");
    const [languages,setLanguages]=useState("");
    const [isExperiences,setIsexperiences]=useState("");
    const [disableEmployeeButton, setDisableEmployeeButton] = useState(false);
    const [disableOrganizerButton, setDisableOrganizerButton] = useState(false);

   
    
    const handleEmployeeSubmit = async e => {
        e.preventDefault();
        if(isEmployeeValid()){
            let data = new FormData();            
            data.append('files',file)
            data.append('fullname', fullName);
            data.append('mobileNumber', mobileNumber);
            data.append('email', email);
            data.append('nationality', nationality);
            data.append('region',region)
            data.append('dateBirth',dateOfBirth)
            data.append('gender',gender)
            const config = {
                method: 'POST',
                url: `${API_URL}/employees/`,
                data
            }
            setDisableEmployeeButton(true)
            axios(config)
                .then(({ status, data }) => {
                    console.log(status)
                    console.log(data)
                    toast.success(`${t('toast.SUCCESS')}`)                
                    initEmployee();
                    setIsEmployeeModalOpen(false)
                })
                .catch(err => {
                    if (err.response) {
                        const { status, data } = err.response;

                        if ((status === 400) || (status === 404) || (status === 401)) {
                            toast.error(data.error);
                        }
                    }
                })
                .finally(()=>{
                    setDisableEmployeeButton(false)

                })
        }   
    }



    const handleOrganizerSubmit = async e => {
        e.preventDefault();
        if(isOrganizerValid()){
            let data = new FormData();            
            data.append('files',file)
            data.append('fullname', fullName);
            data.append('mobileNumber', mobileNumber);
            data.append('email', email);
            data.append('nationality', nationality);
            data.append('region',region)
            data.append('dateBirth',dateOfBirth)
            data.append('gender',gender)
            data.append('experience',isExperiences)
            data.append('languages',languages)
            const config = {
                method: 'POST',
                url: `${API_URL}/organizers/`,
                data
            }
            setDisableOrganizerButton(true)
            axios(config)
                .then(({ status, data }) => {
                    console.log(status)
                    console.log(data)
                    toast.success('your application has been successfully send ')                
                    initOrganizer();
                    setIsOrganizerModalOpen(false)
               
               
               
                })
                .catch(err => {
                    if (err.response) {
                        const { status, data } = err.response;

                        if ((status === 400) || (status === 404) || (status === 401)) {
                            toast.error(data.error);
                        }
                    }
                })
                .finally(()=>{
                    setDisableOrganizerButton(false)
                })
        }   
    }


    const handleFileDrop = files => {
        setFile(files[0]);      
    }

    const handleCloseEmployeeModal = () => {
        setIsEmployeeModalOpen(false);

    }
    const handleCloseOrganizerModal = () => {
        setIsOrganizerModalOpen(false);

    }
    const initEmployee=() => {
        setFullName("")
        setEmail("")
        setMobileNumber("")
        setNationality("")
        setRegion("")
        setDateOfBirth("")
        setGender("male")
        setFile("")
    }

    const initOrganizer=() => {
        initEmployee()
        setLanguages("")
        setIsexperiences("")
    }
    const isOrganizerValid = () => {
        if (!fullName) {
            toast.info(`${t('toast.fullName')}`)
            return false;
        }

        if (!mobileNumber) {
            toast.info(`${t('toast.mobileNumber')}`)
            return false;
        }


        if (!email) {
            toast.info(`${t('toast.email')}`)
            return false;
        }
        if (!nationality) {
            toast.info(`${t('toast.nationality')}`)
            return false;
        }
        if (!region) {
            toast.info(`${t('toast.region')}`)
            return false;
        }

        if (!gender) {
            toast.info(`${t('toast.gender')}`)
            return false;
        }

        if (!dateOfBirth) {
            toast.info(`${t('toast.dateOfBirth')}`)
            return false;
        }

        if (!languages) {
            toast.info(`${t('toast.languages')}`)
            return false;   
        }

        if (!isExperiences) {
            toast.info(`${t('toast.isExperiences')}`)
            return false;
        }

        if(!file){
            toast.info(`${t('toast.file')}`)
            return false;
        }

        return true;
    }
    
    const isEmployeeValid = () => {  

        if (!fullName) {
            toast.info(`${t('toast.fullName')}`)
            return false;
        }

        if (!mobileNumber) {
            toast.info(`${t('toast.mobileNumber')}`)
            return false;
        }


        if (!email) {
            toast.info(`${t('toast.email')}`)
            return false;
        }
        if (!nationality) {
            toast.info(`${t('toast.nationality')}`)
            return false;
        }
        if (!region) {
            toast.info(`${t('toast.region')}`)
            return false;
        }

        if (!gender) {
            toast.info(`${t('toast.gender')}`)
            return false;
        }

        if (!dateOfBirth) {
            toast.info(`${t('toast.dateOfBirth')}`)
            return false;
        }

        if(!file){
            toast.info(`${t('toast.file')}`)
            return false;
        }


        return true;
    }

    return (
        <>
            <a name="join-the-team" />
            <section className="flex flex-column ai-c jc-c" style={{ textAlign: 'center', gap: 10 }}>
                <h2>{t('JOINUS.JOINUS')}</h2>

                <div className="options flex ai-c jc-c flex-wrap">
                    <button onClick={() => { setIsEmployeeModalOpen(true),initEmployee()}}>{t('JOINUS.EMP')}</button>
                    <button onClick={() => { setIsOrganizerModalOpen(true),initOrganizer() }}>{t('JOINUS.ORG')}</button>
                </div>

                <Image src="/img/team.png" alt="Join Us" width={1250} height={518} objectFit="contain" />
            </section>

            <Modal
                title={t('JOINUS.JOINUS')}
                isModalOpen={isEmployeeModalOpen}
                handleClose={handleCloseEmployeeModal}
               
            
            >
                <form onSubmit={e => handleEmployeeSubmit(e)}>
                    <div className="grid">
                        <div>
                            <label >{t('JOINUS.fullname')}*</label>
                            <input type="text"  value={fullName} className="form-input" placeholder="John Smith" onChange={e => { setFullName(e.target.value); }}/>
                        </div>
                        <div>
                            <label >{t('JOINUS.phone')}*</label>
                            <input type="text"  value={mobileNumber} className="form-input" placeholder={t('JOINUS.phone')} onChange={e => { setMobileNumber(e.target.value); }}/>
                        </div>
                    </div>
                    <div>
                        <label >{t('JOINUS.email')}*</label>
                        <input type="email"  value={email} className="form-input" placeholder="john.smith@noxksa.com" onChange={e => { setEmail(e.target.value); }} />
                    </div>
                    <div className="grid">
                        <div>
                            <label >{t('JOINUS.nation')}*</label>
                            <input type="text" name="nationality" value={nationality} className="form-input" placeholder={t('JOINUS.nation')} onChange={e => { setNationality(e.target.value); }}/>
                        </div>
                        <div>
                            <label >{t('JOINUS.region')}*</label>
                            <input type="text" name="region" value={region} className="form-input" placeholder={t('JOINUS.region')} onChange={e => { setRegion(e.target.value); }} />
                        </div>
                    </div>
                    <div className="grid">
                        <div>
                            <label >{t('JOINUS.gender')}*</label>
                            <select className="form-input" value={gender} onChange={(e) => setGender(e.target.value)}    >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div>
                            <label >{t('JOINUS.birth')}*</label>
                            <input type="date"value={dateOfBirth} className="form-input" placeholder={t('JOINUS.birth')} onChange={e => { setDateOfBirth(e.target.value); }}/>
                        </div>
                    </div>

                    <div>
                        <label>{t('JOINUS.resume')}*</label>
                        <div style={{ marginTop: 4 }}>
                            <FileDropZone file={file} handleDrop={handleFileDrop} />
                        </div>
                    </div>
                    <div align="right" style={{marginTop:20}}>
                    <button className="btn" disabled={disableEmployeeButton}>{t('JOINUS.sendapp')}</button>
                    </div>               
                </form>
            </Modal>

            <Modal
                title={t('JOINUS.JOINUS')}
                isModalOpen={isOrganizerModalOpen}
                handleClose={handleCloseOrganizerModal}
                
            >
                <form onSubmit={e => handleOrganizerSubmit(e)}>
                    <div className="grid">
                        <div>
                            <label >{t('JOINUS.fullname')}*</label>
                            <input type="text" value={fullName} className="form-input" placeholder="John Smith" onChange={e => { setFullName(e.target.value); }} />
                        </div>
                        <div>
                            <label >{t('JOINUS.phone')}*</label>
                            <input type="text" className="form-input" placeholder={t('JOINUS.phone')} value={mobileNumber} onChange={e => { setMobileNumber(e.target.value); }}/>
                        </div>
                    </div>
                    <div>
                        <label >{t('JOINUS.email')}*</label>
                        <input type="email"  className="form-input" value={email} placeholder="john.smith@noxksa.com" onChange={e => { setEmail(e.target.value); }} />
                    </div>
                    <div className="grid">
                        <div>
                            <label >{t('JOINUS.nation')}*</label>
                            <input type="text"  className="form-input" value={nationality} placeholder={t('JOINUS.nation')} onChange={e => { setNationality(e.target.value); }}/>
                        </div>
                        <div>
                            <label >{t('JOINUS.region')}*</label>
                            <input type="text"  className="form-input" placeholder={t('JOINUS.region')} value={region} onChange={e => { setRegion(e.target.value); }} />
                        </div>
                    </div>
                    <div className="grid">
                        <div>
                            <label >{t('JOINUS.gender')}*</label>
                            <select  className="form-input" value={gender} onChange={(e) => setGender(e.target.value)}    >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div>
                            <label>{t('JOINUS.birth')}*</label>
                            <input type="date" className="form-input" value={dateOfBirth} placeholder={t('JOINUS.birth')} onChange={e => { setDateOfBirth(e.target.value); }}/>
                        </div>
                    </div>
                    <div>
                        <label >{t('JOINUS.lang')}*</label>
                        <input type="text" className="form-input" value={languages} placeholder={t('JOINUS.lang')} onChange={e => { setLanguages(e.target.value); }}/>
                    </div>
                    <div>
                        <label>{t('JOINUS.exp')}*</label>
                        <input type="text" value={isExperiences} className="form-input" placeholder={t('JOINUS.exp')} onChange={e => { setIsexperiences(e.target.value); }}/>
                    </div>

                    <div>
                        <label>{t('JOINUS.resume')}*</label>
                        <div style={{ marginTop: 4 }}>
                            <FileDropZone file={file} handleDrop={handleFileDrop} />
                        </div>
                    </div>
                    <div align="right" style={{marginTop:20}}>
                    <button className="btn" disabled={disableOrganizerButton}>{t('JOINUS.sendapp')}</button>
                    </div>                                   
                </form>
            </Modal>

            <style jsx>{`
                section {
                    background-image: url('/img/join-us-bg.jpg');
                    background-repeat: no-repeat;
                    background-size: cover;
                    height: 100vh;
                    overflow: hidden;
                    padding: 50px 0px;
                    
                }

                h2 {
                    color: #fff;
                    font-size: 59px;
                    font-weight: 200;
                }

                .btn {
                    margin-top: 0px;
                    font-size: 14px;
                    padding: 16px 12px;
                }

                form > div {
                    margin-top: 10px;
                    direction: ${isRTL ? 'rtl' : 'ltr'};

                }

                form > div:nth-child(1){
                    margin-top: 0px;
                }

                .grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 15px;
                }

                .options {
                    gap: 60px;
                }

                @media only screen and (max-width: 560px) {
                    .grid {
                        grid-template-columns: 1fr;
                    }
                }

                @media only screen and (max-width: 412px) {
                    .options {
                        gap: 20px;
                    }
                }

                @media only screen and (max-width: 360px) {
                    .options {
                        gap: 10px;
                    }
                },
             
            `}</style>
        </>
    )
}

JoinUs.getInitialProps = async () => ({
    namespacesRequired: ['common'],
  })
  
export default withTranslation('common')(JoinUs);
