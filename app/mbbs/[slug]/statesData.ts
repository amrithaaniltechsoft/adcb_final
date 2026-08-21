export interface MbbsStateData {
  title: string;
  metaTitle: string;
  metaDescription: string;
  bannerTitle: string;
  bannerDescription: string;
  bannerImage: string;
  overviewTitle: string;
  overviewContent: string;
  highlights: string[];
  previewTitle: string;
  previewPoints: string[];
}

export const statesData: Record<string, MbbsStateData> = {
  "tamil-nadu": {
    title: "MBBS in Tamil Nadu",
    metaTitle: "MBBS in Tamil Nadu | Admissions & Counselling | ADCB Consultancy",
    metaDescription: "Secure MBBS admission in top medical colleges across Tamil Nadu. Expert NEET UG counselling for government and private medical seats.",
    bannerTitle: "MBBS Admissions in Tamil Nadu",
    bannerDescription: "Secure your medical seat in premier medical colleges across Tamil Nadu. Expert guidance for NEET UG counselling and admissions.",
    bannerImage: "/courses/mbbs.jpg",
    overviewTitle: "MBBS in Tamil Nadu",
    overviewContent: "Tamil Nadu is one of India's premier destinations for medical education, home to some of the oldest and most prestigious government and private medical colleges. The state offers a wide range of MBBS seats through both government quota and management quota, with highly competitive NEET UG cutoffs for top institutions.",
    highlights: [
      "Home to premier government medical colleges like Madras Medical College, Stanley Medical College, and Coimbatore Medical College",
      "Well-established private medical colleges with excellent clinical exposure",
      "Affordable fee structures in government colleges compared to many other states",
      "Strong clinical training with high patient inflow in teaching hospitals",
      "NEET UG counselling conducted by Tamil Nadu Directorate of Medical Education"
    ],
    previewTitle: "Disclaimer Points",
    previewPoints: [
      "One mistake in document submission can lead to cancellation of admission, forfeiture of fees, and debarment from future counselling",
      "Certain rounds of counselling have strict joining rules. Failure to join after allotment may result in loss of Security Deposit and Tuition Fees",
      "Not all candidates are eligible for Minority, Institutional, NRI, or special category seats. Eligibility needs to be verified before counselling",
      "Security Deposit refunds are subject to counselling regulations. Many families are unaware of situations where refunds may be delayed or forfeited",
      "Fee structures, bond conditions, and college-specific rules may differ across institutions. Candidates should understand these before choice filling"
    ]
  },
  kerala: {
    title: "MBBS in Kerala",
    metaTitle: "MBBS in Kerala | Admissions & Counselling | ADCB Consultancy",
    metaDescription: "Complete guide to Kerala MBBS counselling — eligibility, CAP process, reservation, fees, and expert guidance for NEET admissions.",
    bannerTitle: "Kerala MBBS Counselling Guide",
    bannerDescription: "Complete information on eligibility criteria, CAP counselling, reservation, fee structure, and expert guidance for Kerala MBBS admissions.",
    bannerImage: "/courses/mbbs.jpg",
    overviewTitle: "MBBS in Kerala",
    overviewContent: "",
    highlights: [
      "Centralised Allotment Process (CAP) with online submission of options",
      "Reservations across State Merit, EWS, SEBC, SC/ST, Management, NRI, Minority & AIQ",
      "Eligibility categories — Keralite, Non-Keralite Category I & II",
      "4½-year MBBS course followed by 1-year compulsory internship"
    ],
    previewTitle: "Introduction",
    previewPoints: [
      "Is your NEET rank alone enough to secure an MBBS seat in Kerala?",
      "Do you know how Kerala's CAP counselling actually works?",
      "Are you aware of the hidden eligibility and counselling rules beyond your NEET rank?"
    ]
  },
  karnataka: {
    title: "MBBS in Karnataka",
    metaTitle: "MBBS in Karnataka | Admissions & Counselling | ADCB Consultancy",
    metaDescription: "Complete guide to Karnataka MBBS counselling — instructions, fee structure, document requirements, and expert guidance.",
    bannerTitle: "Karnataka MBBS Counselling Guide",
    bannerDescription: "Complete information on instructions, fee structure, and document requirements for Karnataka MBBS admissions.",
    bannerImage: "/courses/mbbs.jpg",
    overviewTitle: "MBBS in Karnataka",
    overviewContent: "",
    highlights: [
      "Admissions based on NEET UG for Academic Year 2025-26",
      "Specific instructions for candidates seeking First MBBS admission",
      "Separate fee structure for government and private colleges"
    ],
    previewTitle: "Instructions for First MBBS Admission (Academic Year 2025-26)",
    previewPoints: [
      "Additional documents may be required depending on your category",
      "Mandatory affidavits and bonds before admission",
      "Document verification is more than just carrying originals"
    ]
  },
  pondicherry: {
    title: "MBBS in Pondicherry",
    metaTitle: "MBBS in Pondicherry | Admissions & Counselling | ADCB Consultancy",
    metaDescription: "Complete guide to Pondicherry MBBS counselling — CENTAC process, eligibility, quotas, fee structure, and expert guidance.",
    bannerTitle: "Pondicherry MBBS Counselling Guide",
    bannerDescription: "Complete information on CENTAC counselling, seat categories, eligibility, fee structure, and expert guidance for Pondicherry MBBS admissions.",
    bannerImage: "/courses/mbbs.jpg",
    overviewTitle: "MBBS in Pondicherry",
    overviewContent: "",
    highlights: [
      "CENTAC online counselling conducted in multiple rounds",
      "Seat categories — Government Quota, Management & NRI",
      "Reservation algorithm for Government Quota seats",
      "Refund and forfeiture rules for registration & tuition fees"
    ],
    previewTitle: "Introduction",
    previewPoints: [
      "Can students from other states also get MBBS admission in Puducherry, or is it only for Puducherry domicile candidates?",
      "What is the difference between Government Quota, Management Quota, Self-Supporting Quota, Minority Quota, and NRI Quota in Puducherry MBBS admissions?",
      "Can I participate in both CENTAC counselling and MCC counselling for MBBS, and which option gives me a better chance of getting a seat?"
    ]
  },
  telangana: {
    title: "MBBS in Telangana",
    metaTitle: "MBBS in Telangana | Admissions & Counselling | ADCB Consultancy",
    metaDescription: "Complete guide to Telangana MBBS counselling — eligibility, reservation, application process, fees, and expert guidance.",
    bannerTitle: "Telangana MBBS Counselling Guide",
    bannerDescription: "Complete information on eligibility, seat quota, reservation, application process, and fee structure for Telangana MBBS admissions.",
    bannerImage: "/courses/mbbs.jpg",
    overviewTitle: "MBBS in Telangana",
    overviewContent: "",
    highlights: [
      "Competent Authority Quota seats under KNRUHS",
      "Eligibility, reservation and admission rules",
      "Online application and counselling process",
      "Fees and discontinuation rules"
    ],
    previewTitle: "Number of Seats under Competent Authority Quota",
    previewPoints: [
      "Can you get an MBBS seat if new seats are approved after the counselling process has already started?",
      "When will the final Telangana MBBS seat matrix be released, and how can it change your college options?",
      "Are all Government and Private MBBS seats available from the beginning, or are additional seats added later without a fresh notification?"
    ]
  },
  "andhra-pradesh": {
    title: "MBBS in Andhra Pradesh",
    metaTitle: "MBBS in Andhra Pradesh | Admissions & Counselling | ADCB Consultancy",
    metaDescription: "Complete guide to Andhra Pradesh MBBS counselling — regulations, seat categories, eligibility, fees, and expert guidance.",
    bannerTitle: "Andhra Pradesh MBBS Counselling Guide",
    bannerDescription: "Complete information on regulations, seat categories, eligibility criteria, and fee structure for Andhra Pradesh MBBS admissions.",
    bannerImage: "/courses/mbbs.jpg",
    overviewTitle: "MBBS in Andhra Pradesh",
    overviewContent: "",
    highlights: [
      "Dr. NTR UHS regulations for MBBS admission",
      "Number of seats and seat sharing across quotas",
      "Eligibility and educational qualifications",
      "Admission fees, university fees & tuition fees"
    ],
    previewTitle: "Regulations",
    previewPoints: [
      "Can a single application make you eligible for every MBBS seat category in Andhra Pradesh, or are separate counselling rules involved?",
      "What is the difference between Competent Authority, Management Quota (Category-B), and NRI (Category-C) seats — and which one are you actually eligible for?",
      "Why does Andhra Pradesh conduct separate counselling for different seat categories even though the application process is common?"
    ]
  },
  haryana: {
    title: "MBBS in Haryana",
    metaTitle: "MBBS in Haryana | Admissions & Counselling | ADCB Consultancy",
    metaDescription: "Complete guide to Haryana MBBS counselling — reservations, eligibility, admission process, NRI quota, fees, and expert guidance.",
    bannerTitle: "Haryana MBBS Counselling Guide",
    bannerDescription: "Complete information on reservations, eligibility criteria, admission process, NRI quota, and fee structure for Haryana MBBS admissions.",
    bannerImage: "/courses/mbbs.jpg",
    overviewTitle: "MBBS in Haryana",
    overviewContent: "",
    highlights: [
      "Reservations and eligibility criteria",
      "Admission process for government and private colleges",
      "Admission to the NRI category",
      "Fee structure and general instructions"
    ],
    previewTitle: "Reservations",
    previewPoints: [
      "Are all MBBS seats in Haryana reserved under the State Quota, or how are seats divided between All India Quota, State Quota, Management Quota, and NRI Quota?",
      "Can every NEET-qualified candidate claim Haryana State Quota benefits, or are there specific eligibility conditions for reservation?",
      "Are reservations and seat distribution the same in Government, Private, and Private University medical colleges in Haryana?"
    ]
  },
  punjab: {
    title: "MBBS in Punjab",
    metaTitle: "MBBS in Punjab | Admissions & Counselling | ADCB Consultancy",
    metaDescription: "Complete guide to Punjab MBBS counselling — general instructions, NRI quota, eligibility criteria, and expert guidance.",
    bannerTitle: "Punjab MBBS Counselling Guide",
    bannerDescription: "Complete information on general instructions, NRI admissions, and eligibility criteria for Punjab MBBS counselling.",
    bannerImage: "/courses/mbbs.jpg",
    overviewTitle: "MBBS in Punjab",
    overviewContent: "",
    highlights: [
      "General instructions for MBBS counselling",
      "Separate instructions for NRI candidates",
      "Eligibility criteria for admission"
    ],
    previewTitle: "General Instructions",
    previewPoints: [
      "Are you really eligible for Punjab MBBS State Counselling?",
      "Can your allotted MBBS seat be cancelled even after allotment?",
      "Did you know your preferred college may not appear in the final seat matrix?",
      "Will paying the admission fee confirm your MBBS seat?",
      "Are you filling the correct college and quota preferences during counselling?",
      "What happens if Punjab MBBS counselling rules change after you apply?"
    ]
  },
  "himachal-pradesh": {
    title: "MBBS in Himachal Pradesh",
    metaTitle: "MBBS in Himachal Pradesh | Admissions & Counselling | ADCB Consultancy",
    metaDescription: "Complete guide to Himachal Pradesh MBBS counselling — eligibility, seat distribution, NRI quota, and counselling procedure.",
    bannerTitle: "Himachal Pradesh MBBS Counselling Guide",
    bannerDescription: "Complete information on seat distribution, eligibility criteria, NRI category, and counselling procedure for Himachal Pradesh MBBS admissions.",
    bannerImage: "/courses/mbbs.jpg",
    overviewTitle: "MBBS in Himachal Pradesh",
    overviewContent: "",
    highlights: [
      "Distribution of seats and admission criteria",
      "NRI category seats",
      "Eligibility and educational qualifications",
      "Counselling and admission procedure"
    ],
    previewTitle: "Introduction",
    previewPoints: [
      "Are you eligible for Himachal Pradesh MBBS State Quota, or can you apply only under the Management Quota?",
      "Can non-Himachali candidates get admission to MBBS in Himachal Pradesh? If yes, under which quota and what are the eligibility conditions?",
      "What documents are mandatory after seat allotment, and can your admission be cancelled if even one document is missing at the time of reporting?"
    ]
  },
  "uttar-pradesh": {
    title: "MBBS in Uttar Pradesh",
    metaTitle: "MBBS in Uttar Pradesh | Admissions & Counselling | ADCB Consultancy",
    metaDescription: "Complete guide to Uttar Pradesh MBBS counselling — eligibility, choice filling, counselling rounds, and expert guidance.",
    bannerTitle: "Uttar Pradesh MBBS Counselling Guide",
    bannerDescription: "Complete information on eligibility, quota selection, counselling rounds, and strategic guidance for Uttar Pradesh MBBS admissions.",
    bannerImage: "/courses/mbbs.jpg",
    overviewTitle: "MBBS in Uttar Pradesh",
    overviewContent: "",
    highlights: [
      "State quota eligibility for candidates from other states",
      "Choice filling and upgradation strategy across rounds",
      "Round 1, Round 2 and Mop-Up Round participation",
      "Document requirements for seat allotment"
    ],
    previewTitle: "Key Questions",
    previewPoints: [
      "Can students from other states apply for MBBS admission in Uttar Pradesh? If yes, which quota are they eligible for?",
      "Which quota should you choose in Uttar Pradesh counselling to maximize your chances of getting an MBBS seat?",
      "Can a wrong choice filling strategy cost you a better medical college even with a good NEET rank?",
      "If you don't get a seat in Round 1, should you still participate in Round 2 and Mop-Up Round?",
      "Can you upgrade your allotted college without losing your existing seat during counselling?"
    ]
  },
  bihar: {
    title: "MBBS in Bihar",
    metaTitle: "MBBS in Bihar | Admissions & Counselling | ADCB Consultancy",
    metaDescription: "Complete guide to Bihar MBBS counselling — eligibility, seat categories, counselling rounds, choice filling, and expert guidance.",
    bannerTitle: "Bihar MBBS Counselling Guide",
    bannerDescription: "Complete information on eligibility, seat categories, counselling rounds, security deposit, and choice filling strategy for Bihar MBBS admissions.",
    bannerImage: "/courses/mbbs.jpg",
    overviewTitle: "MBBS in Bihar",
    overviewContent: "",
    highlights: [
      "50% of seats in private colleges offered at government college fees",
      "₹2,00,000 refundable security deposit for private college seats",
      "Government, Private, Minority & NRI seat categories",
      "Upgradation YES/NO choice strategy after each round"
    ],
    previewTitle: "Key Questions",
    previewPoints: [
      "Did you know that 50% of the seats in Bihar Private Medical Colleges are offered at Government Medical College fees? Are you eligible for them?",
      "Are you sure you know which candidates can participate in Bihar MBBS Counselling? Is Bihar domicile mandatory for every type of seat?",
      "Planning to apply for Private Medical Colleges? Do you know why you may have to deposit ₹2,00,000 as a refundable security deposit?",
      "Do you know what happens to your security deposit if you don't join the allotted college or skip the reporting process?",
      "Round 1, Round 2, Round 3 & Stray Vacancy Round — Do you know which rounds you remain eligible for after getting a seat?"
    ]
  }
};
