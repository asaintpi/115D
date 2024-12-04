import React from "react";
import Header from "../../../components/Header";
import TitleSection from "../../../components/TitleSection";
import PricingCard from "../../../components/PricingCard";

const Pricing = () => {
    const plans = [
        {
            planName: "Free",
            price: "$0",
            features: [
                "Parse candidate data from any source",
                "Basic sorting & filtering functionality",
                "Limit of 50 candidates/mo",
                "Community support only",
                "Limited customization options",
            ],
            cta: "Free",
        },
        {
            planName: "Basic",
            price: "$5/seat",
            features: [
                "Everything in Free",
                "Advanced filtering options",
                "Parse up to 500 candidates/mo",
                "Priority email support",
                "Access to pre-defined templates",
                "Team collaboration tools",
            ],
            cta: "Get Basic",
        },
        {
            planName: "Premium",
            price: "$20/seat",
            features: [
                "Everything in Basic",
                "Unlimited parsing for candidates",
                "AI-powered suggestions for sorting",
                "Advanced custom templates creation",
                "Detailed analytics and reporting dashboards",
                "Dedicated account manager",
            ],
            cta: "Get Premium",
        },
        {
            planName: "Enterprise",
            price: "Contact Us",
            features: [
                "Everything in Premium",
                "Tailored solutions for organizational needs",
                "Custom integrations with HR tools",
                "Support with 24/7 assistance",
                "Enhanced security and compliance features",
                "Onboarding and training for teams",
            ],
            cta: "Contact Us",
            isDark: true,
        },
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Elegant Header */}
            <Header className="border-b border-gray-200 shadow-sm" />

            <main className="flex-grow flex flex-col items-center px-6 lg:px-12 py-12 space-y-16">
                {/* Title Section */}
                <TitleSection />

                {/* Subtle Background Accent */}
                <div className="relative w-full max-w-7xl">
                    <div className="absolute -z-10 inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-lg shadow-lg blur-lg" />

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-8">
                        {plans.map((plan, index) => (
                            <PricingCard
                                key={index}
                                planName={plan.planName}
                                price={plan.price}
                                features={plan.features}
                                cta={plan.cta}
                                isDark={plan.isDark}
                            />
                        ))}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full border-t border-gray-300 py-6 flex justify-between items-center text-sm text-gray-600">
                {/* Left Logo Section */}
                <div className="flex items-center space-x-2 ml-6">
                    <img
                        src="/intualai-logo.png"
                        alt="IntualAI Logo"
                        className="w-6 h-6"
                    />
                    <span className="font-semibold">IntualAI</span>
                    <span className="text-gray-500">2024</span>
                </div>

                {/* Links Section */}
                <div className="flex space-x-8 text-gray-600 mr-6">
                    <div className="flex flex-col space-y-1">
                        <a href="#" className="hover:underline">About Us</a>
                        <a href="#" className="hover:underline">Legal</a>
                        <a href="#" className="hover:underline">Contact Us</a>
                        <a href="#" className="hover:underline">Careers</a>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <a href="#" className="hover:underline">Organizations</a>
                        <a href="#" className="hover:underline">Projects</a>
                        <a href="#" className="hover:underline">Workflows</a>
                        <a href="#" className="hover:underline">Functions</a>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <a href="#" className="hover:underline">Integrations</a>
                        <a href="#" className="hover:underline">Triggers</a>
                        <a href="#" className="hover:underline">Events</a>
                        <a href="#" className="hover:underline">Learn More</a>
                    </div>
                </div>
            </footer>


        </div>
    );
};

export default Pricing;
