import { Clock8, MapPin, Calendar } from "lucide-react";
import { IconTallymark1 } from "@tabler/icons-react";

const App = () => {
  return (
    <div className="flex justify-center mt-32">
      <div className="h-128 w-110 bg-gradient-to-b border border-slate-400/15 from-slate-100/20 to-blue-500/6 via-slate-100/10 via-50% rounded-2xl flex justify-center items-center">
        <div className="h-108 w-90 bg-gradient-to-t  from-slate-100 to-blue-500/20 via-slate-100 via-70% rounded-2xl p-5  flex flex-col justify-between">
          <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center">
              <div className="flex px-1.5 py-1 bg-slate-100/40 border border-neutral-400/40 rounded-full justify-center items-center">
                <p className="italic font-medium text-[10px] font-semibold">
                  Powered by
                </p>
                <img className="w-5" src="razorPay.png" alt="" />
              </div>
              <h1 className="text-xl font-semibold tracking-wide mt-3">
                Check-In QR Code
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="w-38" src="/QR.png" alt="" />
            <h2 className="font-semibold">RazorPay</h2>
          </div>
          <div className="flex py-1.5 px-2 items-center justify-between text-[13px] text-sky-950 bg-blue-200/50 font-semibold rounded-md">
            <div className="flex justify-center items-center gap-1">
              <Calendar size={12} />
              <p>Thu, 24 Oct</p>
            </div>
            <IconTallymark1 stroke={1} />
            <div className="flex justify-center items-center gap-1">
              <Clock8 size={12} />
              <p>2-3 PM</p>
            </div>
            <IconTallymark1 stroke={1} />
            <div className="flex justify-center items-center gap-1">
              <MapPin size={12} />
              <p>Noida</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-semibold">Important</p>
            <p className="text-sm text-neutral-500">
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
