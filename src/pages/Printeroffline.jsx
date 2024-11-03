// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInfoCircle, faBullseye, faListAlt, faShieldAlt, faHandshake, faSmile } from '@fortawesome/free-solid-svg-icons';

// const content = [
//   {
//     id: 2,
//     title: 'Who We Are',
//     icon: faInfoCircle,
//     content:
//       'At Hewlett Hub Solutions ,we are your trusted specialists in resolving printer issues across all brands and models. With a strong focus on restoring your printers to full functionality, we ensure that your devices are up and running smoothly, minimizing downtime and frustration. Additionally, we offer a wide range of tech services designed to meet your every need.',
//   },
//   {
//     id: 3,
//     title: 'Our Mission',
//     icon: faBullseye,
//     content:
//       'Our mission is to deliver reliable and efficient solutions to all your tech challenges. We aim to simplify your tech experience by providing top-notch support and services, so you can enjoy a hassle-free experience with your technology. Your satisfaction and the seamless functioning of your devices are our top priorities.',
//   },
//   {
//     id: 4,
//     title: 'What We Offer',
//     icon: faListAlt,
//     content:
//       'We provide a comprehensive range of services, including Printer Repairs: Expert service for printers of all brands and models.New Computer Setup: Ensuring your new devices are configured and ready to go.Operating System Installations: Smooth installation or re-installation of operating systems.Software Configuration: Customized setup and configuration of software.Computer Repair: Expert repairs to keep your devices running smoothly.Data Backup and Transfer: Secure and efficient data management.Virus Removal and Cleanup: Thorough cleaning of your devices to protect your data and performance.',
//   },
//   {
//     id: 5,
//     title: 'Warranty and Returns',
//     icon: faShieldAlt,
//     content:
//       'We stand by the quality of our services and products. All services and products come with a warranty to ensure your satisfaction. If you’re not completely satisfied, we offer easy and hassle-free returns. Our goal is to provide you with peace of mind, knowing that your technology is in good hands.',
//   },
//   {
//     id: 6,
//     title: 'Our Commitment',
//     icon: faHandshake,
//     content:
//       'At Hewlett Hub Solutions, we are committed to providing exceptional service and support. We believe in building long-term relationships with our clients by offering dependable solutions and ensuring that your technology works seamlessly. Our team of experts is dedicated to your success, working tirelessly to resolve any tech issues you may encounter.',
//   },
//   {
//     id: 7,
//     title: 'Thank You',
//     icon: faSmile,
//     content:
//       'Thank you for choosing Hewlett Hub Solutions as your trusted partner for all your tech needs. We appreciate the opportunity to serve you and are committed to ensuring your satisfaction with our services. Your trust in us drives our dedication to delivering reliable, efficient, and high-quality solutions. We look forward to continuing to support you and helping you navigate your tech challenges with ease.',
//   },
// ];

// const About = () => {
//   return (
//     <div className="bg-gradient-to-r from-blue-100 to-blue-200 py-10">
//       <div className="container mx-auto px-4 mt-20 bg-white shadow-lg p-8 rounded-lg">
//         <h1 className="text-[#0C71C3] text-4xl font-extrabold text-center mb-10">
//           Welcome to Hewlett Hub Solutions
//         </h1>
//         <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {content.map((section) => (
//             <div
//               key={section.id}
//               className="bg-gray-50 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
//             >
//               {section.title && (
//                 <h2 className="text-3xl text-[#0C71C3] mb-4 text-center flex items-center justify-center space-x-4">
//                   <FontAwesomeIcon icon={section.icon} className="text-[#0C71C3] text-2xl" />
//                   <span>{section.title}</span>
//                 </h2>
//               )}
//               <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
//                 {section.content}
//               </p>
//             </div>
//           ))}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default About;


import React from 'react';

const Printeroffline= () => {
  return (
    <main className="flex justify-center items-center p-5 ">
      <section className="border w-[95%] p-10 bg-gray-100 shadow-xl ]">
        {printerSetupContent.map((item) => (
          <div key={item.id} className="my-8">
            <h2 className="text-2xl font-bold mb-4 text-[#1E3A8A]">{item.head}</h2>
            {item.description && (
              <p className="text-lg mb-4">{item.description}</p>
            )}
            <ul className="list-disc pl-6">
              {item.points.map((point, index) => (
                <li key={index} className="text-base mb-2">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Printeroffline;

const printerSetupContent = [
  {
    id: 1,
    head: 'Why is My Printer not Connected to the Internet? What are the Steps to Connect a Printer to Wifi?',
    description:
      'Here are some steps that you can check to connect your Printer to the internet or your home Wifi connection. But if the problem doesn’t get resolved even after following the given steps, you can take our support and leave us a message to resolve your issue with our experts.',
    points: [
      'If your wireless printer setup fails to connect with your internet, you can check for network issues and review setup requirements.',
      'Check the network connection: move your Printer and mobile device or computer closer to the wired or wireless router, and then check the signal quality. Try to open a website and check whether the internet connection is working properly or not. If your Wi-Fi is intermittent or slow, try to restart the router by unplugging the power cord. After that, please wait for at least 15 seconds and then reconnect it.',
      'How to fix the printer sleep mode issue? If you want to know how to set up the Printer, especially if it is facing a sleep mode issue, you need to touch the printer touchscreen or press the Power button to wake up your Printer and put it in a ready state.',
      'Restore the wireless connection or restart your Printer to identify and fix network issues.',
      'If your Printer includes a light next to a wireless button or icon, ensure that the light is on.',
      'Check the wireless setting and make sure that the signal is turned on.',
      'Based on your printer model, search the customer support and then check for a self-test page to find the document on how to print and calculate the report.',
    ],
  },
  {
    id: 2,
    head: 'What Type of Query Do You Have ?',
    description:
      'If you want to know the answer to any of the above questions, you can connect with us to get professional assistance. Moreover, if you wish to know your Printer’s wifi settings and are excited to learn the steps to install a printer or want to fix internet issues while connecting your Printer to Wifi, we ensure to help you faster and easier to resolve your issue.',
    points: [
      'How to set up a printer?',
      'How to connect a printer to wifi?',
      'How to fix the printer sleep mode issue?',
      'How to set up printers on windows?',
      'How to set up printers on mac?',
      'How do I install a printer?',
      'What are the steps for setting up a wireless printer?',
      'How to connect an HP printer to new wifi?',
      'What are my printer wifi settings?',
    ],
  },
  {
    id: 3,
    head: 'How Can Smart Device Assistant Assist You?',

    points: [
      'At Smart  Device Assistant , we have an experienced team who can guide you on printer troubleshooting and provide you with instant support to fix some common challenges that you face while working or connecting your printer with an internet connection, laptop, computer, mobile, and other devices.',

      'If you want to resolve your query within a few minutes and want professional help for free, you can send us a message to start a conversation with our experts or drop your query to get the best solution.',
      'Moreover, if you have just bought a brand new Printer from the market, regardless of its type and size, we ensure to address all your problems without any hassle.',
    ],
  },
  {
    id: 4,
    head: 'Why Is My Printer Not Connecting to Wi-Fi During Setup?',
    description: ` Are you trying to connect your printer to local Wi-Fi but don’t know how to get this step done? Below, we will discuss some reasons that you check why your printer may not connect to wi-fi during setup. 
      These are some basic steps that people always follow when they fail to connect 123 printer setup or any other printing device with Wi-Fi. However, if you want to solve your printer related query with experts or are interested in learning the complete steps to install a printer in Windows/Mac and want to fix the most common printer problems in Windows 7, Windows 8.1, and Windows 10, you can send us a message with your query. We ensure to help you connect with our specialized printer support team and provide faster assistance.`,
    points: [
      'If you have recently changed your network security, your printer won’t connect to Wi-Fi until you don’t allow it to reconnect to your network.',
      'Even if you have made any changes to your network devices, you may need to power cycle your printer. In other words, you can understand that you need to turn it off and turn it on to reconnect to your network. However, if you fail to connect your printer to Wi-Fi, you can contact us to get better help and use your printer in the right way.',
      'If you are looking for DIY tips to troubleshoot your printer issues, you can follow the given steps:',
      'Make sure your printer is on.',
      'Connect your printer to your computer/laptop or other devices.',
      'Check the toner and paper of your printer with its queue.',
      'Check for error messages or any warning lights on the printer.',
      'Make sure it is connected to WiFi.',
      'Use a USB cable to connect and check whether it is working or not.',
      'Confirm that you are using the right network to connect your printer.',
      'If you have recently updated your security software, browsers, firewalls, or operating systems, then the chances are high that you can experience a number of issues while connecting your wireless printer setup. Still, you don’t need to panic. In this case, you can reconnect your device to the network and install updated drivers.',
      'Check router settings.',
      'Restart all your devices and run the printing troubleshooter.',
      'Set your printer as a default printer.',
      'Update router firmware.',
      'Disable VPN Connections.',
      'Check your SSID.',
    ],
  },
];

