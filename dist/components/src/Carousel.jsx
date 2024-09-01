var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { useEffect } from "react";
var Carousel = function () {
    useEffect(function () {
        var init = function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a, Carousel, initTWE;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, import("tw-elements")];
                    case 1:
                        _a = _b.sent(), Carousel = _a.Carousel, initTWE = _a.initTWE;
                        initTWE({ Carousel: Carousel });
                        return [2 /*return*/];
                }
            });
        }); };
        init();
    }, []);
    return (<div id="carouselExampleCaptions" className="relative mt-6 items-center flex justify-center" data-twe-carousel-init data-twe-ride="carousel">

  <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[10%] mb-2 lg:mb-4 flex list-none justify-center p-0" data-twe-carousel-indicators>
    <button type="button" data-twe-target="#carouselExampleCaptions" data-twe-slide-to="0" data-twe-carousel-active className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-twe-target="#carouselExampleCaptions" data-twe-slide-to="1" className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" aria-label="Slide 2"></button>
    <button type="button" data-twe-target="#carouselExampleCaptions" data-twe-slide-to="2" className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" aria-label="Slide 3"></button>
  </div>


  <div className="relative w-full Image-box overflow-hidden after:clear-both after:block after:content-['']">
    
    <div className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none" data-twe-carousel-active data-twe-carousel-item style={{ backfaceVisibility: "hidden" }}>
      <img src="/anh1.jpg" className="block w-full" alt="..."/>
      <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
        <h5 className={"text-3xl font-bold relative z-10"}>ITIS: NGÀY TRỞ VỀ</h5>
        
      </div>
      <div className="w-full h-full inset-0 absolute bg-gradient-to-t from-[#000000a0] to-transparent"></div>
    </div>

    <div className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none" data-twe-carousel-item style={{ backfaceVisibility: "hidden" }}>
      <img src="/anh2.jpg" className="block w-full" alt="..."/>
      <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
        <h5 className="text-3xl font-bold relative z-10">BIGGAME ITIS</h5>
      </div>
      <div className="w-full h-full inset-0 absolute bg-gradient-to-t from-[#000000a0] to-transparent"></div>
    </div>

    <div className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none" data-twe-carousel-item style={{ backfaceVisibility: "hidden" }}>
      <img src="/anh3.jpg" className="block w-full" alt="..."/>
      <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
        <h5 className="text-3xl font-bold relative z-10">ITIS CUP 2020</h5>
      </div>
      <div className="w-full h-full inset-0 absolute bg-gradient-to-t from-[#000000a0] to-transparent"></div>
    </div>
  </div>


  <button className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none" type="button" data-twe-target="#carouselExampleCaptions" data-twe-slide="prev">
    <span className="inline-block h-8 w-8">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
      </svg>
    </span>
    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
  </button>

  <button className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none" type="button" data-twe-target="#carouselExampleCaptions" data-twe-slide="next">
    <span className="inline-block h-8 w-8">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
      </svg>
    </span>
    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
  </button>
    </div>);
};
export default Carousel;
