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
        <section className="bg-black">
            <div className="w-full max-w-screen-xl mx-auto h-auto px-5 md:px-20 py-7 md:py-10">
                <div className="uppercase text-bronze font-bold flex-col py-30 px-5 md:px-20">
                    <div className="flex gap-4">
                        <div
                            style={{
                                borderTop: '5px solid #b08d57',
                                width: '60px',
                                margin: '8px 0',
                            }}
                        ></div>
                        <div>
                            <p className="text-sm md:text-lg font-koulen tracking-[0.2em]">Our plans</p>
                        </div>
                    </div>
                    <h2 className="text-base md:text-2xl tracking-[0.05em] font-sairaCondensed">
                        Effective <span className="text-xl md:text-4xl text-white">Membership Plans</span> for You
                    </h2>
                </div>

                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 px-5 md:px-20 py-5">
                        <PackageDetails data={PricingDetails[0]} />
                        <PackageDetails data={PricingDetails[1]} />
                        <PackageDetails data={PricingDetails[2]} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing