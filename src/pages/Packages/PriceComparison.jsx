import React from 'react'

const PriceComparison = () => {
const features = [
    "Best for",
    "Gym Access",
    "Group Fitness Classes",
    "Personal Training Sessions",
    "Custom Workout & Nutrition Plans",
    "Fitness Assessment",
    "Locker & Shower Facilities",
    "Priority Class Booking",
    "Nutrition Consultations",
    "Access Hours"
];

const data = [
    ["Beginners & casual fitness enthusiasts", "Cardio & strength equipment acess", "5 classes/month(Zumba, Aerobics)", "-", "-", "1 free assessment(one-time)", "Included", "-", "-", "Regular hours only"],
    ["Fitness enthusiasts & intermidiate Lifters", "Full gym access(All equipment)", "Unlimited group classes", "2 Sessions", "Customized workout plan", "-", "Included", "Priority booking", "1 Free session", "24/7 Access"],
    ["Advanced athletes & serious lifters", "24/7 Full gym & eqipment access", "Unlimited group classes", "Weekly personal training sessions", "Custom workout & nutrition plans", "Advanced body assessments", "VIP locker, towel & lounge access", "Exclusive access to Crossfit & Powerlifting", "Weekly consultations", "24/7 Access"]
];

return (
    <section>
        <div className="w-full max-w-screen-2xl mx-auto h-auto tracking-wide bg-black px-10 md:px-40 py-10">
        <div className="overflow-x-auto">
            <table className="table-auto w-full border-2  border-bronze text-lg font-sairaCondensed text-white/85">
                <thead>
                    <tr className="bg-black border-2 text-xl border-bronze">
                        <th className="px-4 py-2">Feature</th>
                        <th className="px-4 py-2">Basic-$29/month</th>
                        <th className="px-4 py-2">Standard-$49/month</th>
                        <th className="px-4 py-2">Premium - $49/month</th>
                    </tr>
                </thead>
                <tbody>
                    {features.map((feature, index) => (
                        <tr key={index} className="bg-inherit odd:bg-customDarkGrey text-white/65 border-bronze">
                            <td className="border text-bronze font-bold px-4 py-2">{feature}</td>
                            <td className="border px-4 py-2">{data[0][index]}</td>
                            <td className="border px-4 py-2">{data[1][index]}</td>
                            <td className="border px-4 py-2">{data[2][index]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    </section>
);
}

export default PriceComparison