import logo from '../../assets/logos/logo.svg';

const PageLoader = () => (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F9FAF8]">
        <div className="flex flex-col items-center gap-6">
            <img
                src={logo}
                alt="Seanora Global"
                className="object-contain"
                style={{
                    height: '56px',
                    width: '198px',
                }}
                loading="eager"
                decoding="async"
                width={198}
                height={56}
            />

            <div className="relative w-16 h-16" aria-hidden="true">
                <div className="absolute inset-0 rounded-full border-2 border-black/10" />
                <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#1B1D1E] border-r-[#4F46E5] animate-spin" />
                <div className="absolute inset-[10px] rounded-full bg-white/80 border border-black/5" />
            </div>

            <div className="text-center">
                <p className="text-[15px] text-[#1B1D1E]/70 font-medium">Preparing your next page</p>
            </div>

            <div className="flex items-center gap-2" aria-hidden="true">
                <span className="w-2 h-2 rounded-full bg-[#1B1D1E]/60 animate-bounce [animation-delay:-0.2s]" />
                <span className="w-2 h-2 rounded-full bg-[#1B1D1E]/40 animate-bounce [animation-delay:-0.1s]" />
                <span className="w-2 h-2 rounded-full bg-[#1B1D1E]/60 animate-bounce" />
            </div>
        </div>
    </div>
);

export default PageLoader;
