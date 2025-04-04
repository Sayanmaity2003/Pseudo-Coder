import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./logo.svg";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import upload_area from "./upload_area.png";
import stripe_logo from "./stripe_logo.png";
import logo1 from "./logo1.png";
import razorpay_logo from "./razorpay_logo.png";
import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import doc15 from "./doc15.png";
import linkedin_icon from "./linkedin_icon.png";
import twitter_icon from "./twitter_icon.png";
import whatsapp_icon from "./whatsapp_icon.png";
import instagram_icon from "./instagram_icon.jpg";
import telegram_icon from "./telegram_icon.png";
import github_icon from "./github_icon.jpg";
import cat_icon from "./cat_icon.png";
import Dermatologist from "./Dermatologist.svg";
import Gastroenterologist from "./Gastroenterologist.svg";
import General_physician from "./General_physician.svg";
import Gynecologist from "./Gynecologist.svg";
import Neurologist from "./Neurologist.svg";
import Pediatricians from "./Pediatricians.svg";

export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  upload_area,
  stripe_logo,
  razorpay_logo,
  linkedin_icon,
  twitter_icon,
  whatsapp_icon,
  instagram_icon,
  telegram_icon,
  github_icon,
  cat_icon,
  logo1,
};

export const specialityData = [
  {
    speciality: "General physician",
    image: General_physician,
  },
  {
    speciality: "Gynecologist",
    image: Gynecologist,
  },
  {
    speciality: "Dermatologist",
    image: Dermatologist,
  },
  {
    speciality: "Pediatricians",
    image: Pediatricians,
  },
  {
    speciality: "Neurologist",
    image: Neurologist,
  },
  {
    speciality: "Gastroenterologist",
    image: Gastroenterologist,
  },
];

export const doctors = [
  {
    _id: "doc1",
    name: "Dr. Richard James",
    image: doc1,
    speciality: "General physician",
    degree: "MBBS, MD (General Medicine)",
    experience: "7 Years",
    about:
      "Dr. Richard James is a highly experienced General Physician with expertise in preventive care and managing chronic illnesses. He believes in early diagnosis and provides personalized treatment plans for his patients.",
    fees: 80,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Central London",
    },
  },
  {
    _id: "doc2",
    name: "Dr. Emily Larson",
    image: doc2,
    speciality: "Gynecologist",
    degree: "MBBS, MS (Obstetrics and Gynecology)",
    experience: "5 Years",
    about:
      "Dr. Emily Larson is a dedicated Gynecologist with a passion for women's health, providing specialized care in pregnancy, fertility treatments, and gynecological surgeries. She prioritizes patient comfort and trust in her practice.",
    fees: 100,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, East London",
    },
  },
  {
    _id: "doc3",
    name: "Dr. Sarah Patel",
    image: doc3,
    speciality: "Dermatologist",
    degree: "MBBS, MD (Dermatology)",
    experience: "3 Years",
    about:
      "Dr. Sarah Patel is a skilled Dermatologist, specializing in treating skin disorders, hair fall issues, and cosmetic dermatology. She combines cutting-edge treatments with a personalized approach for her patients.",
    fees: 60,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, West London",
    },
  },
  {
    _id: "doc4",
    name: "Dr. Christopher Lee",
    image: doc4,
    speciality: "Pediatricians",
    degree: "MBBS, MD (Pediatrics)",
    experience: "6 Years",
    about:
      "Dr. Christopher Lee is a compassionate Pediatrician who specializes in providing care for infants, children, and adolescents. His areas of expertise include childhood vaccinations, growth monitoring, and developmental assessments.",
    fees: 90,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, South London",
    },
  },
  {
    _id: "doc5",
    name: "Dr. Jennifer Garcia",
    image: doc5,
    speciality: "Neurologist",
    degree: "MBBS, DM (Neurology)",
    experience: "10 Years",
    about:
      "Dr. Jennifer Garcia is a leading Neurologist with a decade of experience treating disorders of the nervous system, including migraines, epilepsy, and neurodegenerative diseases. Her patient-focused approach ensures holistic care.",
    fees: 150,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, North London",
    },
  },
  {
    _id: "doc6",
    name: "Dr. Andrew Williams",
    image: doc6,
    speciality: "Neurologist",
    degree: "MBBS, DM (Neurology)",
    experience: "8 Years",
    about:
      "Dr. Andrew Williams is an expert Neurologist specializing in brain and spine disorders, including stroke management and Parkinson’s disease. His comprehensive diagnostic methods lead to effective treatment strategies.",
    fees: 130,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, North London",
    },
  },
  {
    _id: "doc7",
    name: "Dr. Christopher Davis",
    image: doc7,
    speciality: "General physician",
    degree: "MBBS, MD (General Medicine)",
    experience: "9 Years",
    about:
      "Dr. Christopher Davis is an experienced General Physician known for managing complex health conditions, providing preventive care, and focusing on the long-term health of his patients.",
    fees: 85,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Central London",
    },
  },
  {
    _id: "doc8",
    name: "Dr. Timothy White",
    image: doc8,
    speciality: "Gynecologist",
    degree: "MBBS, MS (Obstetrics and Gynecology)",
    experience: "6 Years",
    about:
      "Dr. Timothy White is a proficient Gynecologist offering advanced care in women's health, from prenatal care to reproductive health surgeries. He emphasizes providing compassionate and comprehensive care for women of all ages.",
    fees: 95,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, East London",
    },
  },
  {
    _id: "doc9",
    name: "Dr. Ava Mitchell",
    image: doc9,
    speciality: "Dermatologist",
    degree: "MBBS, MD (Dermatology)",
    experience: "4 Years",
    about:
      "Dr. Ava Mitchell specializes in treating skin, hair, and nail conditions. She is highly experienced in cosmetic dermatology and laser treatments, offering her patients cutting-edge solutions for their dermatological concerns.",
    fees: 70,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, West London",
    },
  },
  {
    _id: "doc10",
    name: "Dr. Jeffrey King",
    image: doc10,
    speciality: "Pediatricians",
    degree: "MBBS, MD (Pediatrics)",
    experience: "5 Years",
    about:
      "Dr. Jeffrey King is a dedicated Pediatrician with expertise in managing childhood diseases, providing vaccinations, and monitoring growth and development in children. He is known for his gentle and caring approach.",
    fees: 100,
    address: {
      line1: "47th Cross, Richmond",
      line2: "Circle, South London",
    },
  },
  {
    _id: "doc11",
    name: "Dr. Zoe Kelly",
    image: doc11,
    speciality: "Gastroenterologist",
    degree: "MBBS, DM (Gastroenterology)",
    experience: "7 Years",
    about:
      "Dr. Zoe Kelly is a skilled Gastroenterologist with extensive experience in treating digestive system disorders. She offers advanced diagnostic techniques and treatment plans for conditions like IBS, ulcers, and liver diseases.",
    fees: 120,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, North London",
    },
  },
  {
    _id: "doc12",
    name: "Dr. Patrick Harris",
    image: doc12,
    speciality: "Neurologist",
    degree: "MBBS, DM (Neurology)",
    experience: "9 Years",
    about:
      "Dr. Patrick Harris is a well-known Neurologist who treats complex neurological disorders, including multiple sclerosis and seizures. He is renowned for his diagnostic precision and patient-centered care.",
    fees: 140,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, North London",
    },
  },
  {
    _id: "doc13",
    name: "Dr. Chloe Evans",
    image: doc13,
    speciality: "General physician",
    degree: "MBBS, MD (General Medicine)",
    experience: "7 Years",
    about:
      "Dr. Chloe Evans is an experienced General Physician who focuses on providing preventive healthcare, chronic disease management, and patient education. Her holistic approach to treatment ensures effective and sustainable health outcomes.",
    fees: 80,
    address: {
      line1: "17th Cross, Richmond",
      line2: "Circle, Central London",
    },
  },
  {
    _id: "doc14",
    name: "Dr. Ryan Martinez",
    image: doc14,
    speciality: "Gynecologist",
    degree: "MBBS, MS (Obstetrics and Gynecology)",
    experience: "5 Years",
    about:
      "Dr. Ryan Martinez is a Gynecologist with expertise in minimally invasive surgeries and prenatal care. He provides a range of services, from routine checkups to complex surgeries, ensuring optimal women's health.",
    fees: 110,
    address: {
      line1: "27th Cross, Richmond",
      line2: "Circle, East London",
    },
  },
  {
    _id: "doc15",
    name: "Dr. Amelia Hill",
    image: doc15,
    speciality: "Dermatologist",
    degree: "MBBS, MD (Dermatology)",
    experience: "4 Years",
    about:
      "Dr. Amelia Hill is a Dermatologist who specializes in treating a variety of skin conditions, including acne, eczema, and psoriasis. She is also skilled in cosmetic procedures such as Botox and chemical peels.",
    fees: 75,
    address: {
      line1: "37th Cross, Richmond",
      line2: "Circle, West London",
    },
  },
];
