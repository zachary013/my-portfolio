import { FaPhoneAlt, FaEnvelope, FaLinkedin  } from 'react-icons/fa';
import { FaSquareUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";

export const contact = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+212) 6 74 70 51 81'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'azarkanzakariae@gmail.com',
    action: () => window.location.href = "mailto:azarkanzakariae@gmail.com"
  },
  {
    icon: <FaLinkedin />,
    title: 'LinkedIn',
    description: 'Zakariae Azarkan',
    action: () => window.open("https://www.linkedin.com/in/zakariae-azarkan/", "_blank")
  },
  {
    icon: <FaSquareUpwork />,
    title: 'Upwork',
    description: 'Zakariae A',
    action: () => window.open("https://www.upwork.com/freelancers/~011d6275a3b0fe672a", "_blank")
  },
  {
    icon: <TbBrandFiverr />,
    title: 'Fiverr',
    description: 'zakariaeazarkan',
    action: () => window.open("https://www.fiverr.com/zakariaeazarkan", "_blank")
  },
];