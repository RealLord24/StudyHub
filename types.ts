// This file defines the "blueprints" for our data
// MCQ Question structure
export interface Question {
  id: number;
  subject: string;
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct option (0-3)
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}
// Practice Exam structure
export interface Exam {
  id: number;
  title: string;
  subject: string;
  duration: number; // in minutes
  totalQuestions: number;
  questions: ExamQuestion[];
  passingScore: number;
}
export interface ExamQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}
// Course Summary structure
export interface CourseSummary {
  id: number;
  title: string;
  subject: string;
  description: string;
  keyPoints: string[];
  formulas?: Formula[];
  topics: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}
export interface Formula {
  name: string;
  formula: string;
  description: string;
}
// Subject list
export const SUBJECTS = [
  'Mathematics',
  'Physics',
  'Chemistry',
  'Computer Science',
  'Biology'
] as const;
export type Subject = typeof SUBJECTS[number];
