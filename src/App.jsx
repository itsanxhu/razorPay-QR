import { Clock8, MapPin, Calendar } from "lucide-react";
import { IconTallymark1 } from "@tabler/icons-react";

const App = () => {
  return (
    <div className="flex justify-center mt-32">
      <div className="h-128 w-110 bg-linear-to-b border border-slate-300 from-slate-100/20 to-blue-400/6 via-slate-100/10 via-50% rounded-2xl flex justify-center items-center cursor-pointer">
        <div className="h-108 w-90 relative overflow-hidden bg-linear-to-t border border-slate-300 from-slate-100 to-blue-500/20 via-slate-100 via-70% rounded-2xl p-5  flex flex-col justify-between cursor-pointer active:scale-95 transition-transform duration-200 shadow-md">
          <div className="flex justify-center">
            <div className="relative z-10 flex flex-col justify-center items-center">
              <div className="px-1.5 py-1 bg-slate-50/30 border border-white/30 rounded-full flex justify-center items-center">
                <p className="italic text-slate-600 text-[9px] font-semibold">
                  Powered by
                </p>
                <img className="w-5" src="razorPay.png" alt="" />
              </div>
              <h1 className="text-xl text-slate-800 font-semibold tracking-wide mt-2">
                Check-In QR Code
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <img className="w-38" src="/QR.png" alt="" />
            <h2 className="font-semibold text-sm text-slate-800">RazorPay</h2>
          </div>
          <div className="flex py-1.5 px-2.5 items-center justify-between text-[13px] text-sky-950 bg-blue-200/50 font-semibold rounded-md">
            <div className="flex justify-center items-center gap-1">
              <Calendar size={12} />
              <p className="text-xs">Thu, 24 Oct</p>
            </div>
            <IconTallymark1 stroke={1} />
            <div className="flex justify-center items-center gap-1">
              <Clock8 size={12} />
              <p className="text-xs">2-3 PM</p>
            </div>
            <IconTallymark1 stroke={1} />
            <div className="flex justify-center items-center gap-1">
              <MapPin size={12} />
              <p className="text-xs">Noida</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold text-slate-800">Important</p>
            <p className="text-sm text-neutral-500 font-medium">
              Make sure you again get your qr code scanned once the test is over
              to make sure that your attempt is counted
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
