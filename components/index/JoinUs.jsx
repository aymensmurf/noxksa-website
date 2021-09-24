import { useState } from 'react';
import Image from 'next/image';
import Modal from '../shared/Modal';
import FileDropZone from '../shared/FileDropZone';
import PictureDropZone from '../shared/PictureDropZone';

const JoinUs = () => {
    const [isEmployeeModalOpen, setIsEmployeeModalOpen] = useState(false);
    const [isOrganizerModalOpen, setIsOrganizerModalOpen] = useState(false);
    const [file, setFile] = useState("");
    const [photo, setPhoto] = useState("");

    const handleFileDrop = files => {
        setFile(files[0]);
    }

    const handleCloseEmployeeModal = () => {
        setFile("");
        setIsEmployeeModalOpen(false);
    }
    const handleCloseOrganizerModal = () => {
        setFile("");
        setPhoto("");
        setIsOrganizerModalOpen(false);
    }

    const handlePhotoDrop = files => {
        const cover = files[0];
        Object.assign(cover, { preview: URL.createObjectURL(cover) });
        setPhoto(cover);
    }


    return (
        <>
            <a name="join-the-team" />
            <section className="flex flex-column ai-c jc-c" style={{ textAlign: 'center', gap: 10 }}>
                <h2>Join us</h2>

                <div className="options flex ai-c jc-c flex-wrap">
                    <button onClick={() => { setIsEmployeeModalOpen(true) }}>Employee</button>
                    <button onClick={() => { setIsOrganizerModalOpen(true) }}>Organizer</button>
                </div>

                <Image src="/img/team.png" alt="Join Us" width={1250} height={518} objectFit="contain" />
            </section>

            <Modal
                title="Join Us - Employee"
                isModalOpen={isEmployeeModalOpen}
                handleClose={handleCloseEmployeeModal}
                footer={
                    <button className="btn">Send Your Application</button>
                }
            >
                <form>
                    <div className="grid">
                        <div>
                            <label htmlFor="fullName">Full Name*</label>
                            <input type="text" name="fullName" className="form-input" placeholder="John Smith" />
                        </div>
                        <div>
                            <label htmlFor="phone">Mobile number*</label>
                            <input type="text" name="phone" className="form-input" placeholder="Mobile number" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email">Email*</label>
                        <input type="email" name="email" className="form-input" placeholder="john.smith@noxksa.com" />
                    </div>
                    <div className="grid">
                        <div>
                            <label htmlFor="nationality">Nationality*</label>
                            <input type="text" name="nationality" className="form-input" placeholder="Nationality" />
                        </div>
                        <div>
                            <label htmlFor="region">Region*</label>
                            <input type="text" name="region" className="form-input" placeholder="Region" />
                        </div>
                    </div>
                    <div className="grid">
                        <div>
                            <label htmlFor="gender">Gender*</label>
                            <select name="gender" className="form-input">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="dateOfBirth">Date of Birth*</label>
                            <input type="date" name="dateOfBirth" className="form-input" placeholder="Date of Birth" />
                        </div>
                    </div>

                    <div>
                        <label>Upload your Resume*</label>
                        <div style={{ marginTop: 4 }}>
                            <FileDropZone file={file} handleDrop={handleFileDrop} />
                        </div>
                    </div>
                </form>
            </Modal>

            <Modal
                title="Join Us - Organizer"
                isModalOpen={isOrganizerModalOpen}
                handleClose={handleCloseOrganizerModal}
                footer={
                    <button className="btn">Send Your Application</button>
                }
            >
                <form>
                    <div className="grid">
                        <div>
                            <label htmlFor="fullName">Full Name*</label>
                            <input type="text" name="fullName" className="form-input" placeholder="John Smith" />
                        </div>
                        <div>
                            <label htmlFor="phone">Mobile number*</label>
                            <input type="text" name="phone" className="form-input" placeholder="Mobile number" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email">Email*</label>
                        <input type="email" name="email" className="form-input" placeholder="john.smith@noxksa.com" />
                    </div>
                    <div className="grid">
                        <div>
                            <label htmlFor="nationality">Nationality*</label>
                            <input type="text" name="nationality" className="form-input" placeholder="Nationality" />
                        </div>
                        <div>
                            <label htmlFor="region">Region*</label>
                            <input type="text" name="region" className="form-input" placeholder="Region" />
                        </div>
                    </div>
                    <div className="grid">
                        <div>
                            <label htmlFor="gender">Gender*</label>
                            <select name="gender" className="form-input">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="dateOfBirth">Date of Birth*</label>
                            <input type="date" name="dateOfBirth" className="form-input" placeholder="Date of Birth" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="languages">What languages do you speak?*</label>
                        <input type="text" name="languages" className="form-input" placeholder="Arabic, English" />
                    </div>
                    <div>
                        <label htmlFor="isExperiences">Do You Have any Experiences in this role?*</label>
                        <input type="text" name="isExperiences" className="form-input" placeholder="Do You Have any Experiences in this role?" />
                    </div>

                    <div>
                        <label>Upload your Resume*</label>
                        <div style={{ marginTop: 4 }}>
                            <FileDropZone file={file} handleDrop={handleFileDrop} />
                        </div>
                    </div>
                    <div>
                        <label>Upload your Personal Photo*</label>
                        <div style={{ marginTop: 4 }}>
                            <PictureDropZone picture={photo} handleDrop={handlePhotoDrop} />
                        </div>
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

                @media only screen and (max-width: 412px) {
                    .options {
                        gap: 20px;
                    }
                }

                @media only screen and (max-width: 360px) {
                    .options {
                        gap: 10px;
                    }
                }
            `}</style>
        </>
    )
}

export default JoinUs;