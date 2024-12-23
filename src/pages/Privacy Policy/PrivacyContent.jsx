import React from 'react'

const PrivacyContent = () => {
return (
    <section className="bg-customDarkGrey py-10">
        <div className=" text-white font-sairaCondensed px-5 md:px-20 mx-auto">
            <p className="mb-4 text-bronze font-bold">Effective Date: [20-12-2024]</p>
            <p className="mb-6">We value your privacy at FitZone Fitness Center. This policy explains how we collect, use, and protect your personal information.</p>
            <ol className="list-decimal list-inside space-y-6">
                <li>
                    <strong>Information We Collect</strong>
                    <p className="mt-2">We may collect personal details like your name, contact info, payment details, and health-related data with your consent.</p>
                </li>
                <li>
                    <strong>How We Use Your Information</strong>
                    <p className="mt-2">We use your data to manage memberships, provide personalized services, process payments, and communicate offers or updates.</p>
                </li>
                <li>
                    <strong>Sharing of Information</strong>
                    <p className="mt-2">We only share your information with trusted service providers, legal authorities (if required), or with your consent.</p>
                </li>
                <li>
                    <strong>Data Security</strong>
                    <p className="mt-2">We use advanced security measures to safeguard your data but cannot guarantee complete security.</p>
                </li>
                <li>
                    <strong>Your Rights</strong>
                    <p className="mt-2">You can access, update, or delete your data and opt out of marketing communications.</p>
                </li>
                <li>
                    <strong>Cookies and Tracking</strong>
                    <p className="mt-2">We use cookies to enhance website functionality and improve services. You can manage cookie preferences through browser settings.</p>
                </li>
                <li>
                    <strong>Policy Updates</strong>
                    <p className="mt-2">We may update this policy periodically and notify you through our website.</p>
                </li>
                <li>
                    <strong>Contact Us</strong>
                    <p className="mt-2">For privacy concerns, contact us at:</p>
                    <p>FitZone Fitness Center</p>
                    <p>Email: Support.fitzone@gmail.com</p>
                    <p>Phone: 125-711-811  |  125-668-886</p>
                    <p>Address: 333 Middle Winchendon Rd, Rindge, NH 03461</p>
                </li>
            </ol>
        </div>  
    </section>
)
}

export default PrivacyContent