import React from 'react'
import PackageDetails from '../../components/common/PackageContainer'

const Pricing = () => {
    const PricingDetails = [
        {
            name:"Basic",
            description:"Best for:Beginners & Casual Fitness Enthusiasts",
            price:"29",
            features:[
            "Access to Cardio & Strength Equipment",
            "5 Group Fitness Classes/Month (Zumba & Aerobics)",
            "Locker & Shower Facilities",
            "Free Fitness Assessment (1 Time)",
            "Access During Regular Hours",
          ],
        },

        {
            name:"Standard",
            description:"Best For: Fitness Enthusiasts & Intermediate Lifters",
            price:"49 ",
            features:[
                "Full Gym Access (All Equipment)",
                "Unlimited Group Fitness Classes",
                "2 Personal Training Sessions",
                "Customized Workout Plan",
                "Locker & Shower Facilities",
                "Priority Class Booking",
                "Nutrition Consultation (1 Time",
          ],
        },

        {
            name:"Premium",
            description:"Best For: Advanced Athletes & Serious Lifters",
            price:"79",
            features:[
                "24/7 Full Gym & Equipment Access",
                "Unlimited Group Fitness Classes",
                "Weekly Personal Training Sessions",
                "Custom Workout & Nutrition Plans",
                "Advanced Body Assessments",
                "VIP Locker, Towel, & Lounge Access",
                "Exclusive Access to CrossFit & Powerlifting",
          ],
        },
    ]


    return (

        <section className=" h-screen bg-black">

            <div className="uppercase text-bronze font-bold flex-col py-30 px-20">
                <div className="flex gap-4">
                <div
                    style={{
                        borderTop: '5px solid #b08d57', // Change to borderTop for horizontal line
                        width: '60px', // Adjust the width as needed
                        margin: '8px 0', // Adjust margins if needed
                        
                    }}
                ></div>
                <div><p className="text-lg font-koulen tracking-[0.2em]  ">Our plans</p></div>
                </div>
                <h2 className="text-2xl tracking-[0.05em] font-sairaCondensed">Effective <span className="text-4xl text-white">Membership Plans</span> for You</h2>
            </div>

            <div>

            <div className= "grid grid-cols-3 gap-12 px-20 py-5">
                <PackageDetails data = {PricingDetails[0]} />
                <PackageDetails data = {PricingDetails[1]} />
                <PackageDetails data = {PricingDetails[2]} />
            </div>

            </div>
        </section>
    )
}

export default Pricing