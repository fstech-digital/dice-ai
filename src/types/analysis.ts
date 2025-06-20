export interface ValidationScore {
  logical: number;
  consistent: number;
  parsimonious: number;
  empirical: number;
  explanatory: number;
}

export interface DetectedTechnique {
  name: string;
  score: number;
  description: string;
}

export interface MetaReview {
  weakestPoint: string;
  conflictResolution: string;
  limitations: string;
  appliedFlexibilization?: string;
}

export interface AnalysisData {
  id: string;
  title: string;
  author: string;
  analysisDate: string;
  contentType: 'video' | 'article' | 'post' | 'email' | 'other';
  sourceUrl?: string;
  userChallenge?: string;
  
  diceScore: number;
  classification: 'Ético' | 'Neutro' | 'Tendencioso' | 'Manipulativo' | 'Prejudicial';
  
  finding: string;
  validationScores: ValidationScore;
  confidence: number;
  gaps?: string;
  tests?: string;
  
  context: string;
  detectedTechniques: DetectedTechnique[];
  identifiedRisks: string;
  mitigatingFactors?: string;
  
  optimizedContent: string;
  
  recommendations: string[];
  priorityLevel: 'Baixo' | 'Médio' | 'Alto' | 'Crítico';
  
  metaReview?: MetaReview;
  
  nextSteps: string[];
}