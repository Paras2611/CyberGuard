export enum View {
  DASHBOARD = 'DASHBOARD',
  GUIDELINES = 'GUIDELINES',
  PROJECT_DETAILS = 'PROJECT_DETAILS',
  PREDICTION_ENGINE = 'PREDICTION_ENGINE',
  AI_ASSISTANT = 'AI_ASSISTANT'
}

export interface GuidelinePoint {
  id: number;
  title: string;
  description: string;
  category: 'General' | 'Finance' | 'Technical' | 'Coordination';
}

export interface ChartDataPoint {
  name: string;
  value: number;
  risk?: number;
}

export interface RiskPrediction {
  location: string;
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  probability: number;
  factors: string[];
  recommendedAction: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}