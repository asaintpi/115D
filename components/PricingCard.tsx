import React from "react";
import { Plus, ShoppingCart } from "lucide-react";

interface PricingCardProps {
    planName: string;
    price: string;
    features: string[];
    cta: string;
    isDark?: boolean; // For the "Enterprise" card
}

const PricingCard: React.FC<PricingCardProps> = ({ planName, price, features, cta, isDark }) => {
    return (
        <div
            className={`rounded-xl shadow-lg p-6 ${
                isDark ? "bg-black text-white" : "bg-gray-50 text-black"
            } flex flex-col justify-between h-full transition-transform duration-200 hover:scale-105`}
        >
            {/* Icon and Plan Name */}
            <div className="flex items-center mb-4">
                <Plus className={`mr-2 ${isDark ? "text-gray-400" : "text-gray-600"}`} />
                <h3 className="text-2xl font-bold">{planName}</h3>
            </div>

            {/* Price Section */}
            <div className="flex flex-col items-center justify-center h-24 mb-6">
                {planName === "Enterprise" ? (
                    <p className="text-3xl font-bold">{price}</p>
                ) : (
                    <div className="flex items-baseline">
                        <span className="text-4xl font-bold">{price.split("/")[0]}</span>
                        <span className="text-lg font-medium text-gray-500 ml-1">/seat</span>
                    </div>
                )}
            </div>

            {/* Features List */}
            <ul className="flex-grow space-y-2 mb-6">
                {features.map((feature, index) => (
                    <li key={index} className="text-md">
                        ✓{" "}
                        <span
                            className={
                                feature.includes("500 candidates") || feature.includes("AI-powered")
                                    ? "font-semibold"
                                    : ""
                            }
                        >
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>

            {/* cta button */}
            <div className="mt-6">
                <button
                    className={`flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium text-[14px] ${
                        isDark ? "bg-white text-black" : "bg-black text-white"
                    } hover:shadow-lg hover:opacity-90`}
                >
                    <ShoppingCart className="w-4 h-4" />
                    {cta}
                </button>
            </div>
        </div>
    );
};

export default PricingCard;
