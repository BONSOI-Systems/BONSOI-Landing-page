import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Benefits you Get",
  desc: "We will provide you the best services with our expert team through which you will get Cutting-Edge Technology, Tailored Solutions, Customer Centric Support.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Technology Consulting",
      desc: "We will create the application in demanded technology with all new services.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Data Analytics",
      desc: "Unlock actionable business intelligence with our data science team and get deeper analysis of your applications.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "IT Support",
      desc: "We will be providing you our best IT support team which will guide you through every steps of using and maintaining the apps.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offers we Provide",
  desc: "Get access to offers which are for limited period and benefited to your work experience.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Free Initial Consultation",
      desc: "Get a complimentary consultation to discuss your business challenges and explore potential solutions.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Flexible Payment Plans",
      desc: "Choose from various payment options that fit your budget and cash flow.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Early Bird Discounts",
      desc: "Enjoy special discounts for early project engagements or long-term contracts.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
