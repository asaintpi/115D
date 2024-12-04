import React from "react";

const DebugFonts = () => {
    return (
        <div>
            <h1>DebugFont Component Loaded</h1>
            <div className="p-8 space-y-4">
                <h1 className="font-sans text-4xl font-thin">Inter Thin (100)</h1>
                <h1 className="font-sans text-4xl font-light">Inter Light (300)</h1>
                <h1 className="font-sans text-4xl font-normal">Inter Normal (400)</h1>
                <h1 className="font-sans text-4xl font-medium">Inter Medium (500)</h1>
                <h1 className="font-sans text-4xl font-semibold">Inter Semi Bold (600)</h1>
                <h1 className="font-sans text-4xl font-bold">Inter Bold (700)</h1>
                <h1 className="font-sans text-4xl font-extrabold">Inter Extra Bold (800)</h1>
            </div>
        </div>
    );
};


export default DebugFonts;
