import React from "react";
import Header from "../../components/Header";
import TitleSection from "../../components/TitleSection";
import DebugFonts from "../../components/DebugFonts";

const Pricing = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-8 w-full max-w-7xl mx-auto">

            <Header />
            <TitleSection />
            <DebugFonts />

        </div>
    );
};

export default Pricing;
