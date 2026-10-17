// ALL YOUR CONTENT LIVES HERE — edit text, add projects, change links.
// Colour sets (use them as  palette: PAL.red  etc.)
const PAL = {
  amber:  { from: "#1c1003", via: "#6b3c06", to: "#0a0806", accent: "#ffb547" },
  green:  { from: "#03150f", via: "#0d5a40", to: "#050a08", accent: "#46e3a8" },
  purple: { from: "#120822", via: "#3d1a6e", to: "#07060c", accent: "#b98bff" },
  blue:   { from: "#04121f", via: "#0f4c6e", to: "#05080d", accent: "#4cc9ff" },
  red:    { from: "#24060b", via: "#6e0d1d", to: "#09070a", accent: "#ff3d5a" }
};

const DATA = {

  profile: {
    fullName: "Dongrajkar Abhinav Tanaji",
    displayName: "Abhinav Dongrajkar",
    firstName: "ABHINAV",
    seriesTag: "THE SERIES",
    originalLabel: "CLOUD • AUTOMATION • INNOVATION",
    role: "Aspiring Cloud & DevOps Engineer",
    tagline: ["Cloud Engineer", "AWS", "Linux", "Automation"],
    intro: "I am a B.Sc. Computer Science graduate with a CGPA of 9.14, currently pursuing MCA at Shri V.D. College, Kolpa, Latur. Learning Cloud Computing at Fortune Cloud, Pimpri, with hands-on focus on AWS, Linux, Python, Bash scripting, networking, and DevOps.",
    location: "Pimpri, Pune, Maharashtra, India",
    email: "dongrajkarabhinav@gmail.com",
    links: {
      linkedin: "https://www.linkedin.com/in/abhinav-dongrajkar-447693405/",
      github: "https://github.com/abhinav-1818"
    },
    resumePdf: "assets/resume.pdf",
    portrait: "assets/portrait.png",
    interests: ["Amazon Web Services (AWS)", "Cloud Computing", "Linux & Bash Scripting", "Cloud Networking", "DevOps & CI/CD", "Docker & Kubernetes", "Terraform & Infrastructure as Code", "System Design"]
  },

    techStrip: [
    { name: "AWS", icon: "aws.svg" },
    { name: "Linux", icon: "linux.svg" },
    { name: "Docker", icon: "docker.svg" },
    { name: "Kubernetes", icon: "kubernetes.svg" },
    { name: "Terraform", icon: "terraform.svg" },
    { name: "Jenkins", icon: "jenkins.svg" },
    { name: "GitHub", icon: "github.svg" },
    { name: "GitLab", icon: "gitlab.svg" },
    { name: "Python", icon: "python.svg" },
    { name: "Bash", icon: "bash.svg" }
  ],

  education: [
    { school: "Shri V.D. College, Kolpa, Latur", degree: "Master of Computer Applications (MCA)", period: "August 2026 – Present", score: "Currently Pursuing" },
    { school: "Swami Vivekanand Mahavidyalaya, Udgir", degree: "B.Sc. Computer Science", period: "June 2023 – May 2026", score: "CGPA: 9.14" }
  ],

  experience: [{
    company: "Fortune Cloud", role: "Cloud Computing Trainee", period: "Currently Pursuing",
    points: [
      "Currently attending Cloud Computing classes at Fortune Cloud, Pimpri.",
      "Learning AWS services, Linux fundamentals, and cloud networking.",
      "Practicing cloud infrastructure, storage management, and automation through hands-on exercises.",
      "Developing Bash scripting and Python skills for cloud automation.",
      "Building a foundation for a career in Cloud and DevOps Engineering."
    ]
  }],

  achievements: [
    { laurel: "ACADEMIC", title: "B.Sc. Computer Science Graduate", org: "Swami Vivekanand Mahavidyalaya, Udgir", detail: "Completed B.Sc. Computer Science with a CGPA of 9.14." },
    { laurel: "CLOUD PROJECTS", title: "AWS Hands-on Projects", org: "Personal Practice & Learning", detail: "Practiced AWS infrastructure, EC2 scheduling automation, EBS storage management, and multi-VPC networking." },
    { laurel: "TRAINING", title: "Cloud Computing Training", org: "Fortune Cloud, Pimpri", detail: "Currently learning cloud computing, AWS services, Linux, networking, and automation through classes and practical exercises." }
  ],

  certifications: [
    { issuer: "Fortune Cloud", name: "Cloud Computing Training — In Progress", link: "" }
  ],

  introSlides: [
    { kicker: "Education", title: "MCA", lines: ["Shri V.D. College, Kolpa, Latur", "August 2026 – Present"], chips: ["Currently Pursuing", "B.Sc. Computer Science", "CGPA 9.14"] },
    { kicker: "Cloud & DevOps", title: "Cloud first.", lines: ["AWS, Linux, Bash Scripting and Python", "Cloud Networking and Infrastructure", "Learning through hands-on practical labs"], chips: ["AWS", "Linux", "Bash", "Python", "Networking"] },
    { kicker: "Training", title: "The Learning Journey", lines: ["Cloud Computing classes at Fortune Cloud", "Pimpri, Pune", "Building practical Cloud and DevOps skills"], chips: ["Cloud Computing", "AWS Practice", "Automation"] },
    { kicker: "Projects", title: "Four AWS Projects", lines: ["AWS Production Architecture", "EC2 Instance Scheduler", "EBS Volume Management", "Multi-VPC Connectivity"], chips: ["AWS", "EC2", "EBS", "VPC"] },
    { kicker: "Infrastructure", title: "Building with AWS", lines: ["VPC, Load Balancer and Auto Scaling", "Lambda and EventBridge automation", "Linux storage and cloud networking"], chips: ["VPC", "ALB", "Lambda", "Auto Scaling"] },
    { kicker: "Current Mission", title: "Always Learning", lines: ["Developing Cloud and DevOps fundamentals", "Exploring Docker, Kubernetes and Terraform", "Working toward a Cloud Engineer career"], chips: ["Docker", "Kubernetes", "Terraform", "CI/CD"] }
  ],

  // Each project needs: palette, build (list), features (list), metrics (list, may be empty)
  projects: [
      {
      id: "aws-production-architecture", title: "AWS Production Architecture", year: "2026",
      github: "https://github.com/abhinav-1818/aws-production-architecture/tree/main",
      genre: "AWS • VPC • Load Balancer • Auto Scaling",
      logline: "Built a practice cloud architecture using a custom VPC, Application Load Balancer, target groups, launch template, and Auto Scaling Group to understand scalable AWS infrastructure.",
      stack: ["Amazon Web Services", "VPC", "EC2", "Application Load Balancer", "Target Groups", "Launch Template", "Auto Scaling"],
      build: ["Built a practice cloud architecture using a custom VPC, Application Load Balancer, target groups, launch template, and Auto Scaling Group to understand scalable AWS infrastructure."],
      features: ["Custom VPC", "Application Load Balancer", "Target Groups", "Launch Template", "Auto Scaling Group"],
      metrics: [], palette: PAL.blue
    },
    {
      id: "ec2-instance-scheduler", title: "EC2 Instance Scheduler", year: "2026",
      github: "https://github.com/abhinav-1818/YOUR-REPO-NAME",
      genre: "AWS • Lambda • EventBridge • Python",
      logline: "Practiced automating EC2 instance start and stop operations using AWS Lambda, EventBridge Scheduler, Boto3, and IAM permissions to understand cloud resource automation.",
      stack: ["AWS Lambda", "Amazon EC2", "EventBridge Scheduler", "Python", "Boto3", "IAM"],
      build: ["Practiced automating EC2 instance start and stop operations using AWS Lambda, EventBridge Scheduler, Boto3, and IAM permissions to understand cloud resource automation."],
      features: ["Automated EC2 start and stop", "EventBridge Scheduler", "Lambda + Boto3", "IAM permissions"],
      metrics: [], palette: PAL.green
    },
    {
      id: "ebs-volume-management", title: "EBS Volume Management", year: "2026",
      github: "https://github.com/abhinav-1818/YOUR-REPO-NAME",
      genre: "AWS • EBS • Linux • Storage",
      logline: "Practiced increasing an EBS volume, extending the ext4 filesystem, and mounting storage on a Linux instance to learn cloud storage administration.",
      stack: ["Amazon EBS", "Amazon EC2", "Linux", "ext4", "Filesystem Management", "Mount"],
      build: ["Practiced increasing an EBS volume, extending the ext4 filesystem, and mounting storage on a Linux instance to learn cloud storage administration."],
      features: ["Increase an EBS volume", "Extend the ext4 filesystem", "Mount storage on Linux"],
      metrics: [], palette: PAL.red
    },
    {
      id: "multi-vpc-connectivity", title: "Multi-VPC Connectivity", year: "2026",
      github: "https://github.com/abhinav-1818/YOUR-REPO-NAME",
      genre: "AWS • Networking • VPC Peering • Transit Gateway",
      logline: "Explored connecting VPCs across AWS regions and practiced understanding VPC Peering, Transit Gateway attachments, CIDR ranges, and route tables.",
      stack: ["Amazon VPC", "VPC Peering", "Transit Gateway", "CIDR", "Route Tables", "Cloud Networking"],
      build: ["Explored connecting VPCs across AWS regions and practiced understanding VPC Peering, Transit Gateway attachments, CIDR ranges, and route tables."],
      features: ["VPC Peering", "Transit Gateway attachments", "CIDR ranges", "Route tables"],
      metrics: [], palette: PAL.purple
    }
  ],

  seasons: [
    { number: 1, title: "The Foundation", period: "2023 – 2026", synopsis: "Completed B.Sc. Computer Science at Swami Vivekanand Mahavidyalaya, Udgir.", episodes: [
      { code: "S01 E01", title: "The Beginning", description: "Started the journey in computer science and developed a foundation in computing.", tags: ["Computer Science", "Education"], runtime: "June 2023 – May 2026", palette: PAL.amber },
      { code: "S01 E02", title: "The Graduate", description: "Completed B.Sc. Computer Science with a CGPA of 9.14.", tags: ["B.Sc. Computer Science", "CGPA 9.14"], runtime: "2026", palette: PAL.green }
    ]},
    { number: 2, title: "The MCA Chapter", period: "2026 – Present", synopsis: "Pursuing a Master of Computer Applications at Shri V.D. College, Kolpa, Latur.", episodes: [
      { code: "S02 E01", title: "The Next Step", description: "Started MCA to continue developing knowledge in computer applications and technology.", tags: ["MCA", "Computer Applications"], runtime: "August 2026 – Present", palette: PAL.purple }
    ]},
    { number: 3, title: "Cloud & DevOps", period: "2026 – Present", synopsis: "Learning Cloud Computing at Fortune Cloud, Pimpri, and developing practical AWS and Linux skills.", episodes: [
      { code: "S03 E01", title: "The Cloud Learner", description: "Attending Cloud Computing classes and learning AWS services, Linux fundamentals, networking, and cloud infrastructure.", tags: ["AWS", "Linux", "Cloud Computing"], runtime: "Currently Learning", palette: PAL.blue },
      { code: "S03 E02", title: "The Automator", description: "Practicing Bash scripting, Python automation, and EC2 instance scheduling using AWS services.", tags: ["Bash", "Python", "AWS Lambda"], runtime: "Hands-on Practice", palette: PAL.green }
    ]},
    { number: 4, title: "Building with AWS", period: "2026", synopsis: "Practicing cloud infrastructure, storage management, automation, and multi-VPC networking.", episodes: [
      { code: "S04 E01", title: "Production Architecture", description: "Practiced building an AWS architecture using a custom VPC, Application Load Balancer, target groups, launch templates, and Auto Scaling.", tags: ["VPC", "ALB", "Auto Scaling"], runtime: "AWS Project", palette: PAL.red },
      { code: "S04 E02", title: "Cloud Automation", description: "Practiced automating EC2 start and stop operations using Lambda, EventBridge Scheduler, Boto3, and IAM.", tags: ["EC2", "Lambda", "EventBridge"], runtime: "AWS Project", palette: PAL.amber },
      { code: "S04 E03", title: "Storage & Networking", description: "Practiced EBS volume management and explored connectivity between VPCs using VPC Peering and Transit Gateway.", tags: ["EBS", "VPC Peering", "Transit Gateway"], runtime: "AWS Projects", palette: PAL.blue }
    ]},
    { number: 5, title: "The Next Chapter", period: "In Progress", synopsis: "Continuing to build the skills needed for a career in Cloud and DevOps Engineering.", episodes: [
      { code: "S05 E01", title: "The Mission", description: "Strengthening AWS, Linux, networking, and automation fundamentals while exploring Docker, Kubernetes, Terraform, and CI/CD.", tags: ["Cloud Engineering", "DevOps", "CI/CD"], runtime: "Ongoing Learning", palette: PAL.purple }
    ]}
  ],

  sectionMeta: {
    about:     { nav: "About",     card: "About Me",         meta: "Education • Training • Career Goals",      palette: PAL.purple },
    journey:   { nav: "Journey",   card: "My Journey",       meta: "5 Chapters • Education & Cloud Learning",  palette: PAL.amber },
    originals: { nav: "Originals", card: "AWS Projects",     meta: "4 Projects • 2026",                        palette: PAL.red },
    picks:     { nav: "Top Picks", card: "Career Highlights",meta: "Cloud Projects • Skills • Education",      palette: PAL.green },
    skills:    { nav: "Skills",    card: "Technical Skills", meta: "4 Categories • Cloud & DevOps",            palette: PAL.blue },
    moments:   { nav: "Moments",   card: "Achievements",     meta: "Education • Training • AWS Practice",      palette: PAL.red },
    story:     { nav: "Resume",    card: "The Full Story",   meta: "Education • Skills • Projects",            palette: PAL.purple }
  },

  skillCategories: [
    { title: "Linux & Scripting", subtitle: "Command Line & Automation", skills: [
      { name: "Linux", mono: "LIN" }, { name: "Bash", mono: "SH" }, { name: "Shell Scripting", mono: "SH" }, { name: "File Permissions", mono: "RWX" },
      { name: "User Management", mono: "USR" }, { name: "Cron Jobs", mono: "CRON" }, { name: "Python", mono: "PY" } ] },
    { title: "Networking", subtitle: "Cloud Network Fundamentals", skills: [
      { name: "IP Addressing", mono: "IP" }, { name: "CIDR", mono: "CIDR" }, { name: "Subnets", mono: "NET" }, { name: "Route Tables", mono: "RT" },
      { name: "Security Groups", mono: "SG" }, { name: "VPC Peering", mono: "VPC" }, { name: "Transit Gateway", mono: "TGW" } ] },
    { title: "Cloud Computing", subtitle: "AWS Services & Infrastructure", skills: [
      { name: "AWS", mono: "AWS" }, { name: "EC2", mono: "EC2" }, { name: "S3", mono: "S3" }, { name: "IAM", mono: "IAM" }, { name: "VPC", mono: "VPC" },
      { name: "EBS", mono: "EBS" }, { name: "Lambda", mono: "LMB" }, { name: "ALB", mono: "ALB" }, { name: "Auto Scaling", mono: "ASG" } ] },
    { title: "DevOps Tools", subtitle: "Version Control & Deployment", skills: [
      { name: "Git", mono: "GIT" }, { name: "GitHub", mono: "GH" }, { name: "Docker", mono: "DK" }, { name: "Kubernetes", mono: "K8S" },
      { name: "Terraform", mono: "TF" }, { name: "CI/CD", mono: "CI" } ] }
  ],

  skillEvidence: {
    "AWS": ["Cloud Computing Training", "AWS Projects"],
    "EC2": ["AWS Production Architecture", "EC2 Instance Scheduler"],
    "S3": ["AWS Fundamentals"],
    "IAM": ["EC2 Instance Scheduler", "AWS Access Management"],
    "VPC": ["AWS Production Architecture", "Multi-VPC Connectivity"],
    "EBS": ["EBS Volume Management"],
    "Lambda": ["EC2 Instance Scheduler"],
    "ALB": ["AWS Production Architecture"],
    "Auto Scaling": ["AWS Production Architecture"],
    "Linux": ["Linux Practice", "EBS Volume Management"],
    "Bash": ["Shell Scripting Practice", "Automation"],
    "Shell Scripting": ["Linux Practice", "Automation"],
    "File Permissions": ["Linux User Management Practice"],
    "User Management": ["Linux Administration Practice"],
    "Cron Jobs": ["Linux Automation Practice"],
    "Python": ["Python Practice", "Boto3"],
    "IP Addressing": ["Cloud Networking"],
    "CIDR": ["Multi-VPC Connectivity"],
    "Subnets": ["AWS VPC"],
    "Route Tables": ["AWS Networking"],
    "Security Groups": ["AWS Networking"],
    "VPC Peering": ["Multi-VPC Connectivity"],
    "Transit Gateway": ["Multi-VPC Connectivity"],
    "Git": ["Version Control Practice"],
    "GitHub": ["Portfolio Projects"],
    "Docker": ["DevOps Learning"],
    "Kubernetes": ["DevOps Learning"],
    "Terraform": ["Infrastructure as Code Learning"],
    "CI/CD": ["DevOps Learning"]
  },

  topPicks: [
    { label: "Academic Achievement", title: "B.Sc. Computer Science",   detail: "Graduated with a CGPA of 9.14",                    palette: PAL.amber },
    { label: "Cloud Architecture",   title: "AWS Production Architecture", detail: "VPC • Application Load Balancer • Auto Scaling", palette: PAL.blue },
    { label: "Cloud Automation",     title: "EC2 Instance Scheduler",   detail: "Lambda • EventBridge Scheduler • Boto3",           palette: PAL.green },
    { label: "Cloud Storage",        title: "EBS Volume Management",    detail: "Linux • ext4 • Filesystem Management",             palette: PAL.red },
    { label: "Cloud Networking",     title: "Multi-VPC Connectivity",   detail: "VPC Peering • Transit Gateway • CIDR",             palette: PAL.purple },
    { label: "Current Training",     title: "Fortune Cloud",            detail: "Cloud Computing classes • Pimpri, Pune",           palette: PAL.blue },
    { label: "Linux Practice",       title: "Bash & Shell Scripting",   detail: "Linux commands • Permissions • Automation",        palette: PAL.green },
    { label: "Cloud Fundamentals",   title: "AWS Services",             detail: "EC2 • IAM • VPC • EBS • Lambda",                   palette: PAL.amber },
    { label: "Education",            title: "Master of Computer Applications", detail: "Currently pursuing MCA",                    palette: PAL.purple },
    { label: "Career Goal",          title: "Cloud & DevOps Engineer",  detail: "Learning AWS • Linux • Networking • Automation",   palette: PAL.red }
  ],

  // The FIRST profile decides the page order AND the navbar order:
  // Home → Resume → Moments → Skills → Originals → About → Journey → Top Picks
  viewerProfiles: [
    { id: "abhinav",   name: "Abhinav",   blurb: "The full series, in order",           color: "#e5132b", order: ["story", "moments", "skills", "originals", "about", "journey", "picks"] },
    { id: "recruiter", name: "Recruiter", blurb: "Resume, achievements & skills first", color: "#4cc9ff", order: ["story", "moments", "skills", "originals", "about", "journey", "picks"] },
    { id: "developer", name: "Developer", blurb: "Projects, stack & GitHub first",      color: "#46e3a8", order: ["originals", "skills", "journey", "moments", "about", "picks", "story"] },
    { id: "creative",  name: "Creative",  blurb: "The story arc & highlights first",    color: "#ffb547", order: ["journey", "picks", "originals", "moments", "about", "skills", "story"] }
  ]
};
