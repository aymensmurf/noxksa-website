import { useRef, useEffect } from 'react'

const Modal = ({ title, children, footer, isFullWidth, isModalOpen, handleClose }) => {
    const node = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    const handleClick = e => {
        if (node.current.contains(e.target)) {
            return;
        }

        handleClose();
    };

    return (
        <>
            <div className="modal flex ai-c jc-c">
                <div className="card" ref={node}>
                    <div className="header flex jc-sb ai-c">
                        {title && <h5>{title}</h5>}
                        <i className="fas fa-times action-icon back" onClick={handleClose}></i>
                    </div>

                    {children && (
                        <div className="body">
                            {children}
                        </div>
                    )}

                    {footer && (
                        <div className="footer flex jc-end">
                            {footer}
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                .modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    width: 100vw;
                    height: 100vh;
                    background-color: rgba(0, 0, 0, .6);
                    transition: opacity 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                    visibility: ${isModalOpen ? 'visible' : 'hidden'};
                    opacity: ${isModalOpen ? 1 : 0};
                    z-index: 999;
                }

                .card {
                    background-color: #fff;
                    border-radius: 10px;
                    width: calc(100% - 64px);
                    max-height: calc(100% - 64px);
                    padding: 0px;
                    transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
                    transform: ${isModalOpen ? 'none' : 'translateY(364px) translateY(0px)'};
                    max-width: ${isFullWidth ? "none" : "600px"};
                }

                .header {
                    padding: 12px 32px;
                }

                .body {
                    border-top: 1px solid rgba(0, 0, 0, 0.12);
                    padding: 18px 32px;
                    overflow: auto;
                    max-height: calc(100vh - 200px);
                }

                .footer {
                    border-top: 1px solid rgba(0, 0, 0, 0.12);
                    padding: 12px 32px;
                }

                h5, i {
                    color: #007991;
                }

                h5 {
                    font-size: 20px;
                }

                i {
                    cursor: pointer;
                }
            `}</style>
        </>
    )
}

Modal.defaultProps = {
    isFullWidth: false
}

export default Modal
