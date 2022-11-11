import React from 'react'

import { Modal } from 'flowbite-react'

function SignInAlert({ showAlert, setShowAlert, alertMessage }) {

    return (
        <React.Fragment>
            <Modal
                show={showAlert}
                size="lg"
                popup={true}
                position="top-center"
                onClose={() => setShowAlert(false)}
            >
                <Modal.Header />
                <Modal.Body>
                    <div className="flex flex-row justify-center">
                        <svg class="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd"></path></svg>
                        <h3 className=" pl-3 mb-5 text-lg font-normal text-black dark:text-gray-400">
                            {alertMessage}
                        </h3>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default SignInAlert