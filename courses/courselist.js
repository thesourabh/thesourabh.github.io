const courseList = [
  {
    name: "Student Police Academy",
    field: "Criminology",
		category: "Criminology",
    number: "SPA",
    instructor: "Various",
    school: "Virginia Tech Police Department"
  },
  {
    name: "Introduction to Cinema Production",
    field: "Cinema",
		category: "Cinema",
    number: "CINE 2064",
    instructor: "Charles Dye",
    school: "Virginia Tech"
  },
  {
    name: "Introduction to Cinema",
    field: "Cinema",
		category: "Cinema",
    number: "CINE 2054",
    instructor: "Stephen Prince",
    school: "Virginia Tech",
    enrollment: "Audit"
  },
  {
    name: "Introductory Psychology",
    field: "Psychology",
		category: "Psychology",
    number: "PSYC 1004",
    instructor: "Kurt Hoffman & E. Scott Geller",
    school: "Virginia Tech",
    enrollment: "Audit"
  },
  {
    name: "Multimedia, Hypertext and Information Access",
    field: "Computer Science",
		category: "ComputerScience",
    number: "CS 4624",
    instructor: "Edward Fox",
    school: "Virginia Tech"
  },
  {
    name: "System and Software Security",
    field: "Computer Science",
		category: "ComputerScience",
    number: "CS 5590",
    instructor: "Matthew Hicks",
    school: "Virginia Tech"
  },
  {
    name: "Independent Study",
    field: "Computer Science",
		category: "ComputerScience",
    number: "CS 5974",
    instructor: "Eli Tilevich",
    school: "Virginia Tech"
  },
  {
    name: "Advanced Topics in Software Engineering",
    field: "Computer Science",
		category: "ComputerScience",
    number: "CS 6704",
    instructor: "Francisco Servant",
    school: "Virginia Tech"
  },
  {
    name: "Special Study: Big Data Text Summarization",
    field: "Computer Science",
		category: "ComputerScience",
    number: "CS 5984",
    instructor: "Edward Fox",
    school: "Virginia Tech"
  },
  {
    name: "Network Security",
    field: "Computer Science",
		category: "ComputerScience",
    number: "CS 5584",
    instructor: "J. Scot Ransbottom",
    school: "Virginia Tech"
  },
  {
    name: "Virtual Environments",
    field: "Computer Science",
		category: "ComputerScience",
    number: "CS 5754",
    instructor: "Doug Bowman",
    school: "Virginia Tech"
  },
  {
    name: "Usability Engineering",
    field: "Computer Science",
		category: "ComputerScience",
    number: "CS 5714",
    instructor: "Joe Gabbard",
    school: "Virginia Tech"
  },
  {
    name: "Software Engineering",
    field: "Computer Science",
		category: "ComputerScience",
    number: "CS 5704",
    instructor: "Na Meng",
    school: "Virginia Tech"
  },
  {
    name: "Theory of Algorithms",
    field: "Computer Science",
		category: "ComputerScience",
    number: "CS 5114",
    instructor: "Sharath Raghvendra",
    school: "Virginia Tech"
  },
  {
    name: "Information Visualization",
    field: "Computer Science",
		category: "ComputerScience",
    number: "CS 5764",
    instructor: "Chris North",
    school: "Virginia Tech"
  },
  {
    name: "Web Design Fundamentals",
    field: "Computer Science",
		category: "ComputerScienceOnline",
    number: "HTML5.1x",
    instructor: "edX",
    school: "W3C"
  },
  {
    name: "Distributed Operating Systems",
    field: "Computer Science",
		category: "ComputerScience",
    number: "410448",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Advanced Computer Architecture",
    field: "Computer Science",
		category: "ComputerScience",
    number: "410449",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Advanced Databases",
    field: "Computer Science",
		category: "ComputerScience",
    number: "410450",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Information Security",
    field: "Computer Science",
		category: "ComputerScience",
    number: "410451",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Design & Analysis of Algorithms",
    field: "Computer Science",
		category: "ComputerScience",
    number: "410441",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Principles of Compiler Design",
    field: "Computer Science",
		category: "ComputerScience",
    number: "410442",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Object Oriented Modeling & Design",
    field: "Computer Science",
		category: "ComputerScience",
    number: "410443",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Software Architecture",
    field: "Computer Science",
		category: "ComputerScience",
    number: "410444",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Software Testing & Quality Assurance",
    field: "Computer Science",
		category: "ComputerScience",
    number: "410445",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Programming Cloud Services for Android Handheld Systems",
    field: "Computer Science",
    category: "ComputerScienceOnline",
    number: "CourseraCloudAndroid",
    instructor: "Coursera",
    school: "Vanderbilt University"
  },
  {
    name: "Introduction to Computer Science",
    field: "Computer Science",
		category: "ComputerScienceOnline",
    number: "CS50x",
    instructor: "Coursera",
    school: "Harvard University"
  },
  {
    name: "Introduction to Forensic Science",
    field: "Criminology",
		category: "Criminology",
    number: "CourseraForensicScience",
    instructor: "Coursera",
    school: "Nanyang Technological University"
  },
  {
    name: "Microsoft Certified Professional",
    field: "Computer Science",
		category: "ComputerScienceOnline",
    number: "MCP",
    instructor: "ATS Learning Solutions",
    school: "Microsoft"
  },
  {
    name: "Microsoft Technology Associate: Web Development Fundamentals",
    field: "Computer Science",
		category: "ComputerScienceOnline",
    number: "MTA",
    instructor: "ATS Learning Solutions",
    school: "Microsoft"
  },
  {
    name: "Web Application Architectures",
    field: "Computer Science",
    category: "ComputerScienceOnline",
    number: "CourseraWebAppArch",
    instructor: "Coursera",
    school: "University of New Mexico"
  },
  {
    name: "Algorithms, Part I",
    field: "Computer Science",
    category: "ComputerScienceOnline",
    number: "CourseraAlgosI",
    instructor: "Coursera",
    school: "Princeton University"
  },
  {
    name: "Principles of Programming Languages",
    field: "Computer Science",
		category: "ComputerScience",
    number: "310249",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Computer Networks",
    field: "Computer Science",
		category: "ComputerScience",
    number: "310250",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Finance and Management Information Systems",
    field: "Computer Science",
		category: "ComputerScience",
    number: "310251",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Systems Programming & Operating Systems",
    field: "Computer Science",
		category: "ComputerScience",
    number: "310252",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Software Engineering",
    field: "Computer Science",
		category: "ComputerScience",
    number: "310253",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Programming Mobile Applications for Android Handheld Systems",
    field: "Computer Science",
    category: "ComputerScienceOnline",
    number: "CourseraMobileAndroid",
    instructor: "Coursera",
    school: "University of Maryland, College Park"
  },
  {
    name: "Creative, Serious and Playful Science of Android Apps",
    field: "Computer Science",
    category: "ComputerScienceOnline",
    number: "CourseraCreativeAndroid",
    instructor: "Coursera",
    school: "University of Illinois at Urbana-Champaign"
  },
  {
    name: "Functional Programming Principles in Scala",
    field: "Computer Science",
    category: "ComputerScienceOnline",
    number: "CourseraFunctionalScala",
    instructor: "Coursera",
    school: "École Polytechnique Fédérale de Lausanne"
  },
  {
    name: "Database Management Systems",
    field: "Computer Science",
		category: "ComputerScience",
    number: "310241",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Data Communications",
    field: "Computer Science",
		category: "ComputerScience",
    number: "310242",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Microprocessors and Microcontrollers",
    field: "Computer Science",
		category: "ComputerScience",
    number: "310243",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Digital Signal Processing",
    field: "Computer Science",
		category: "ComputerScience",
    number: "310244",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Theory of Computation",
    field: "Computer Science",
		category: "ComputerScience",
    number: "310245",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Introduction to Databases",
    field: "Computer Science",
    category: "ComputerScienceOnline",
    number: "stanforddatabases",
    instructor: "Stanford Online",
    school: "Stanford University"
  },
  {
    name: "Beginning Game Programming with C#",
    field: "Computer Science",
    category: "ComputerScienceOnline",
    number: "CourseraGameC#",
    instructor: "Coursera",
    school: "University of Colorado System"
  },
  {
    name: "The Language of Hollywood: Storytelling, Sound, and Color",
    field: "Cinema",
    category: "Cinema",
    number: "CourseraLangHollywood",
    instructor: "Coursera",
    school: "Wesleyan University"
  },
  {
    name: "Computing for Data Analysis",
    field: "Computer Science",
    category: "ComputerScienceOnline",
    number: "CourseraDataAnalysis",
    instructor: "Coursera",
    school: "Johns Hopkins University"
  },
  {
    name: "Programming Languages",
    field: "Computer Science",
    category: "ComputerScienceOnline",
    number: "CourseraProgLang",
    instructor: "Coursera",
    school: "University of Washington"
  },
  {
    name: "Game Theory",
    field: "Economics",
    category: "Economics",
    number: "CourseraGameTheory",
    instructor: "Coursera",
    school: "Stanford University & The University of British Columbia"
  },
  {
    name: "Microprocessors and Interfacing Techniques",
    field: "Computer Science",
		category: "ComputerScience",
    number: "210249",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Engineering Mathematics III",
    field: "Computer Science",
		category: "ComputerScience",
    number: "207003",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Data Structures",
    field: "Computer Science",
		category: "ComputerScience",
    number: "210250",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Computer Graphics",
    field: "Computer Science",
		category: "ComputerScience",
    number: "210251",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Computer Organization",
    field: "Computer Science",
		category: "ComputerScience",
    number: "210252",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Discrete Structures",
    field: "Computer Science",
		category: "ComputerScience",
    number: "210241",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Programming & Problem Solving",
    field: "Computer Science",
		category: "ComputerScience",
    number: "210242",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Digital Electronics and Logic Design",
    field: "Computer Science",
		category: "ComputerScience",
    number: "210243",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Data Structures and Algorithms",
    field: "Computer Science",
		category: "ComputerScience",
    number: "210244",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Humanities and Social Science",
    field: "Computer Science",
		category: "ComputerScience",
    number: "207005",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Engineering Mathematics II",
    field: "Computer Science",
		category: "ComputerScience",
    number: "107008",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Applied Science II",
    field: "Computer Science",
		category: "ComputerScience",
    number: "107009",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Engineering Mechanics",
    field: "Computer Science",
		category: "ComputerScience",
    number: "101010",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Basic Electronics Engineering",
    field: "Computer Science",
		category: "ComputerScience",
    number: "104011",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Engineering Graphics II",
    field: "Computer Science",
		category: "ComputerScience",
    number: "102012",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Basic Mechanical Engineering",
    field: "Mechanical Engineering",
		category: "Mechanical Engineering",
    number: "102013",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Engineering Mathematics I",
    field: "Computer Science",
		category: "ComputerScience",
    number: "107001",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Applied Science I",
    field: "Computer Science",
		category: "ComputerScience",
    number: "107002",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Fundamentals of Programming Languages",
    field: "Computer Science",
		category: "ComputerScience",
    number: "110003",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Basic Electrical Engineering",
    field: "Computer Science",
		category: "ComputerScience",
    number: "103004",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Basic Civil and Environmental Engineering",
    field: "Computer Science",
		category: "ComputerScience",
    number: "101005",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Engineering Graphics I",
    field: "Computer Science",
		category: "ComputerScience",
    number: "102006",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
  {
    name: "Manufacturing Practices",
    field: "Computer Science",
		category: "ComputerScience",
    number: "111007",
    instructor: "DYPSOE",
    school: "University of Pune"
  },
];


const categoryColor = {
  "ComputerScience": "LimeGreen",
  "ComputerScienceOnline": "ForestGreen",
  "Cinema": "OrangeRed",
  "Criminology": "MediumBlue",
  "Economics": "#39CCCC",
  "Psychology": "HotPink",
}
