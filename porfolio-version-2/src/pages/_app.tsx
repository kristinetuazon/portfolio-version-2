import { type AppType } from "next/app";
import localFont from "next/font/local";

const AmsterdamScript = localFont({ src: "../../assets/AmsterdamScript.otf",
variable: '--font-amsterdam' });
const Trap = localFont({
  src: [
    {
      path: "../../assets/TrapFont/OpenType-PS/Trap-Black.otf",
      weight: "400",
      style: "bold",
    },
    {
      path: "../../assets/TrapFont/OpenType-PS/Trap-Bold.otf",
      weight: "600",
      style: "bold",
    },
    {
      path: "../../assets/TrapFont/OpenType-PS/Trap-Light.otf",
      weight: "100",
      style: "light",
    },
    {
      path: "../../assets/TrapFont/OpenType-PS/Trap-Medium.otf",
      weight: "200",
      style: "medium",
    },
    {
      path: "../../assets/TrapFont/OpenType-PS/Trap-Regular.otf",
      weight: "300",
      style: "regular",
    },
    {
      path: "../../assets/TrapFont/OpenType-PS/Trap-SemiBold.otf",
      weight: "500",
      style: "semibold",
    },
    
  ],
  variable: '--font-trap' 
});
const MarseilleRegular = localFont({
  src: "../../assets/marseille-regular.otf",
  variable: '--font-mariselle',
});
const NeutralFace = localFont({ src: "../../assets/NeutralFace.otf",
variable: '--font-neutralface', });
const Krylon = localFont({
  src: "../../assets/KRYLON_030222/Krylon-Regular.otf",
  variable: '--font-krylon'
});

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <main className={`${Trap.variable} ${AmsterdamScript.variable} ${MarseilleRegular.variable} ${NeutralFace} font-sans`}><Component {...pageProps} /></main>
};

export default api.withTRPC(MyApp);
