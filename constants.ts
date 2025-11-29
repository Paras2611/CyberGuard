import { GuidelinePoint } from './types';

export const APP_NAME = "CyberGuard Analytics";
export const SIH_TITLE = "Smart India Hackathon 2025";

export const PROBLEM_STATEMENT_TEXT = `
Problem Statement Title: Development of a Predictive Analytics Framework for Cybercrime Complaints to Forecast Likely Cash Withdrawal Locations in Advance, Enabling Generation of Actionable Intelligence for Timely and Proactive Cybercrime Intervention.

Background: The National Cybercrime Reporting Portal is the centralized Portal, which is serving the whole country. Currently, the Portal facilitates citizens in filing complaints, LEAs act on complaints, Banking/Financial Institutions for their actions along with reports/graphs being pulled on daily basis. Presently, the Portal is receiving approximately 8000 complaints on daily basis. The number of complaints has increased manifold during the past months, and this will continue to rise in future. To address the issue of increasing cybercrimes, the proactive approach shall be adopted.

Description: This framework focuses on the mitigation of cybercrimes by the adopting a proactive approach. This framework’s output will enable the prediction of likely cash withdrawal locations, which, in turn, will allow Law Enforcement Agencies (LEAs) at the state and local levels, coordinated by I4C, to implement proactive interventions. These interventions could include deploying special teams or alerting local banks and ATMs in high-risk areas. The intelligence generated would also help banks and Financial Institutions (FIs) through the Citizen Financial Cyber Fraud Reporting and Management System, enabling faster, fund blocking and increasing the chances of recovery.

Key Deliverables:
a. Predictive Analytics Engine: AI/ML – based system to analyse historical cybercrime and financial data to predict potential withdrawal hotspots.
b. Risk Heatmap Dashboard: GIS-enabled dashboard visualizing real-time and potential risk zones.
c. Law Enforcement Interface: Secure interface for investigators to access alerts, intelligence reports, and evidence documentation.
d. Alert & Notification System: Real-time notifications to law enforcements, banks and I4C officers.
`;

export const SIH_GUIDELINES_DATA: GuidelinePoint[] = [
  {
    id: 1,
    title: "Prototype Maturity",
    description: "Hackathon prototypes are usually crude. Considerable work is required to make them reliable, field-ready solutions.",
    category: "Technical"
  },
  {
    id: 2,
    title: "Development Duration",
    description: "Ideally 6 months to 1 year. Can be adjusted with mutual consent.",
    category: "General"
  },
  {
    id: 3,
    title: "Initiation",
    description: "Ministries should directly contact winning teams to discuss the roadmap once contact details are shared by MoE/AICTE.",
    category: "Coordination"
  },
  {
    id: 4,
    title: "Project Plan",
    description: "Ministries should request a detailed plan including implementation details, tools (software/hardware), expert support, and timelines.",
    category: "Coordination"
  },
  {
    id: 5,
    title: "Procurement",
    description: "Ministry should procure critical commercial software/hardware for the project.",
    category: "Finance"
  },
  {
    id: 6,
    title: "Oversight Agency",
    description: "Ministry should identify an autonomous/technical agency for overall coordination. Alternatively, a panel of experts may be appointed.",
    category: "Coordination"
  },
  {
    id: 7,
    title: "Mentorship",
    description: "Minimum one experienced technical expert per idea should be assigned as a 'mentor'.",
    category: "Technical"
  },
  {
    id: 8,
    title: "Monitoring",
    description: "Regular weekly/monthly video conference monitoring sessions are highly recommended as teams work remotely.",
    category: "Coordination"
  },
  {
    id: 9,
    title: "Faculty Mentor",
    description: "A faculty member from the team's institution may be co-opted as an additional mentor.",
    category: "Coordination"
  },
  {
    id: 10,
    title: "Institutional Consent",
    description: "Written consent from the educational institution is required for support/time. No financial burden on the institution.",
    category: "General"
  },
  {
    id: 11,
    title: "Travel Expenses",
    description: "Ministry bears expenses for travel, stay, and logistics when teams visit deployment sites.",
    category: "Finance"
  },
  {
    id: 12,
    title: "Cybersecurity",
    description: "For software solutions, a cybersecurity expert may be engaged to ensure safety standards.",
    category: "Technical"
  },
  {
    id: 13,
    title: "Hardware Design",
    description: "For hardware products, a 'Product Design Expert' may be consulted.",
    category: "Technical"
  },
  {
    id: 14,
    title: "Stipend",
    description: "Recommended stipend of Rs 5,000/- per month per student for 6 months (min). Max 6 students per team. Adjusted if team is larger.",
    category: "Finance"
  },
  {
    id: 15,
    title: "Reporting",
    description: "Quarterly status reports to be shared with Ministry of Education’s Innovation Cell and AICTE.",
    category: "Coordination"
  }
];

export const FULL_PDF_CONTEXT = `
${PROBLEM_STATEMENT_TEXT}

SIH 2025 Implementation Guidelines:
${SIH_GUIDELINES_DATA.map(g => `${g.id}. ${g.title}: ${g.description}`).join('\n')}
`;
