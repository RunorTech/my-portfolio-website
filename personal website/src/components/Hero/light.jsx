const LightLines = () => {
    return (
        <div className="relative w-full h-full overflow-hidden mx-auto">
            {/* Line 1 */}
            <div className="absolute w-px h-full left-1/2 -translate-x-1/2 bg-white/10">
                <div className="absolute w-full h-[15vh] top-[-50%] animate-drop1 bg-gradient-to-b from-transparent via-white to-white"></div>
            </div>

            {/* Line 2 (center) */}
            <div className="absolute w-px h-full left-[25%] -translate-x-1/2 bg-white/10">
                <div className="absolute w-full h-[15vh] top-[-50%] animate-drop2 bg-gradient-to-b from-transparent via-white to-white"></div>
            </div>

            {/* Line 3 (right) */}
            <div className="absolute w-px h-full left-[75%] -translate-x-1/2 bg-white/10">
                <div className="absolute w-full h-[15vh] top-[-50%] animate-drop3 bg-gradient-to-b from-transparent via-white to-white"></div>
            </div>
        </div>
    );
};

export default LightLines;
  