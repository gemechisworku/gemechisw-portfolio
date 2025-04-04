import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Gemechis",
  lastName: "Worku",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer | Data Scientist",
  avatar: "/images/ppic.jpg",
  location: "Africa/Addis_Ababa", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/gemechisworku",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/gemechisw/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:game.worku@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer | Data Scientist</>,
  subline: (
    <>
      I’m Gemechis, a Software Engineer and Data Scientist specializing in the development of next-generation AI-powered solutions. 
      I am committed to continuously learning new technologies and pushing myself to achieve the best version of who I can be. 
      <br />
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am Gemechis, a dedicated Software Engineer and Data Scientist driven by a deep passion for harnessing AI and 
        data to unlock meaningful insights and simplify life’s complexities. My expertise spans data analysis, machine learning, 
        web development, and the creation of innovative generative AI applications. With a strong foundation in problem-solving, 
        leadership, and collaboration, I am committed to delivering excellence in every project I undertake. 
        My work is not just about building solutions, it’s about creating value, inspiring progress, and making a lasting impact.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Brainbite",
        timeframe: "January, 2025 - Present",
        role: "Data Scientist",
        achievements: [
          <>
           Tasked with research, analysis, and design of datasets, and making sure that every essential data 
           is maintained properly for future analysis.
          </>,
          <>
            Leading the development and deployment of Generative AI systems for generating accurate, 
            up-to-date educational content intended for kids.
          </>,
          <>
          Collaborating with product management teams to configure the app for web analytics and google data analytics.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "AidRigs",
        timeframe: "September, 2024 - Present",
        role: "Data Scientist",
        achievements: [
          <>
            Designing and developing end-to-end data management and real-time analytics tool for auto parts selling company
          </>,
          <>
            Leveraging the power of Google’s big data storage and analytics tools, such as BigQuery and Looker, to store data and generate
            actionable insights.
          </>,
          <>
          Creating reports and forms that enable easier management and administration of procurement and sales processes- Prices,
          negotiation with suppliers, coordination with logistics entities
          </>,
          <>
          Collecting, organizing and searching through mountains of online data and reconciling it various part information sources in the
          whole world.
          </>
        ],
        images: [],
      },
      {
        company: "Cooperative Bank of Oromia",
        timeframe: "February, 2022 - Present",
        role: "Card Banking Officer",
        achievements: [
          <>
            Successfully implemented FIS Payment Switch Solution - a system that drives more than 700 CRM/ATM and 1000 POS terminals
          </>,
          <>
          Facilitated the integration of FIS IST/Switch with Mastercard, VISA, and EthSwitch (National Payment Switch Solution)
          </>,
          <>
          Cardless Service Project Lead: Defined business requirements, designed the customer journey, facilitated integration efforts with
          various internal and third-party systems, communicated with vendors, and coordinated activities.
          </>,
          <>
          Developed new BI reporting dashboards, managed, and fine-tuned the existing ones for a better analysis and visualization of all
          financial transactions originated from payment terminals
          </>,
          <>
          Serving as a Payment Switch System Admin, made sure the system is available 24/7
          </>,
          <>
          Developed user documentation, training materials, and manuals; trained staff on new systems
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Addis Ababa Science and Technology University",
        description: <>Bsc in software engineering, 2017 - 2021 (CGPA 3.72).</>,
      },
      {
        name: "ALX Africa",
        description: <>Studied Data Science, and awarded a certificate of completion.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Front-end",
        description: (
          <>
            <ul>
              <li>HTML, CSS, Bootstrap</li>
              <li>Reactjs, Nextjs</li>
              <li>Retool</li>
            </ul>
          </>
        ),
        images: [],
      },
      {
        title: "Back-end",
        description: (
          <>
            <ul>
              <li>Nodejs</li>
              <li>FastAPI</li>
              <li>Django</li>
            </ul>
          </>
        ),
        images: [],
      },
      {
        title: "Databases",
        description: (
          <>
            <ul>
              <li>Postgresql</li>
              <li>MongoDB</li>
              <li>Mysql</li>
              <li>Supabase</li>
            </ul>
          </>
        ),
        images: [],
      },
      {
        title: "Data Analysis and Visualization",
        description: (
          <>
            <ul>
              <li>Spreadsheets</li>
              <li>Python libraries: Pandas, Numpy, matplotlib, scikit-learn</li>
              <li>Google Bigquery, Looker Studio, Power BI</li>
            </ul>
          </>
        ),
        images: [],
      },
      {
        title: "LLM and AI Frameworks",
        description: (
          <>
            <ul>
              <li>OpenAI, Stability, Groq, Mistral</li>
              <li>LangChain, LangGraph, Smolagents</li>
            </ul>
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
