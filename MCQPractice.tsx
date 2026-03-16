import { useState } from 'react';
import { questions } from '../data/questions';
import { Question } from '../data/types';
const SUBJECTS = ['All', 'Mathematics', 'Physics', 'Chemistry', 'Computer Science', 'Biology'];
export default function MCQPractice() {
  // State for filtering and tracking progress
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  // Filter questions by subject
  const filteredQuestions = selectedSubject === 'All' 
    ? questions 
    : questions.filter((q: Question) => q.subject === selectedSubject);
  const currentQuestion = filteredQuestions[currentQuestionIndex];
  // Handle answer selection
  const handleAnswerSelect = (index: number) => {
    if (selectedAnswer !== null) return; // Already answered
    
    setSelectedAnswer(index);
    setShowExplanation(true);
    setAnsweredCount(prev => prev + 1);
    
    if (index === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };
  // Move to next question
  const nextQuestion = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };
  // Move to previous question
  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };
  // Reset the quiz
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredCount(0);
  };
  // Get difficulty color
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500/20 text-green-400';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'Hard': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
            MCQ Practice
          </h1>
          <p className="text-gray-400">Test your knowledge with interactive questions</p>
        </div>
        {/* Subject Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {SUBJECTS.map((subject) => (
            <button
              key={subject}
              onClick={() => {
                setSelectedSubject(subject);
                resetQuiz();
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedSubject === subject
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {subject}
            </button>
          ))}
        </div>
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Question {currentQuestionIndex + 1} of {filteredQuestions.length}</span>
            <span>Score: {score}/{answeredCount}</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / filteredQuestions.length) * 100}%` }}
            />
          </div>
        </div>
        {/* Question Card */}
        {currentQuestion && (
          <div className="bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-700">
            {/* Question Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                {currentQuestion.subject}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm ${getDifficultyColor(currentQuestion.difficulty)}`}>
                {currentQuestion.difficulty}
              </span>
            </div>
            {/* Question Text */}
            <h2 className="text-xl font-semibold mb-6">{currentQuestion.question}</h2>
            {/* Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option: string, index: number) => {
                let optionStyle = 'bg-gray-700 hover:bg-gray-600 border-gray-600';
                
                if (selectedAnswer !== null) {
                  if (index === currentQuestion.correctAnswer) {
                    optionStyle = 'bg-green-500/20 border-green-500 text-green-400';
                  } else if (index === selectedAnswer) {
                    optionStyle = 'bg-red-500/20 border-red-500 text-red-400';
                  }
                }
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${optionStyle} ${
                      selectedAnswer === null ? 'cursor-pointer' : 'cursor-default'
                    }`}
                  >
                    <span className="font-medium mr-3">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    {option}
                    {selectedAnswer !== null && index === currentQuestion.correctAnswer && (
                      <span className="float-right">✓</span>
                    )}
                    {selectedAnswer === index && index !== currentQuestion.correctAnswer && (
                      <span className="float-right">✗</span>
                    )}
                  </button>
                );
              })}
            </div>
            {/* Explanation */}
            {showExplanation && (
              <div className={`mt-6 p-4 rounded-xl ${
                selectedAnswer === currentQuestion.correctAnswer
                  ? 'bg-green-500/10 border border-green-500/30'
                  : 'bg-red-500/10 border border-red-500/30'
              }`}>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  {selectedAnswer === currentQuestion.correctAnswer ? (
                    <>🎉 Correct!</>
                  ) : (
                    <>❌ Incorrect</>
                  )}
                </h3>
                <p className="text-gray-300">{currentQuestion.explanation}</p>
              </div>
            )}
          </div>
        )}
        {/* Navigation */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={prevQuestion}
            disabled={currentQuestionIndex === 0}
            className="px-6 py-3 bg-gray-800 rounded-xl text-gray-300 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            ← Previous
          </button>
          <button
            onClick={resetQuiz}
            className="px-6 py-3 bg-gray-800 rounded-xl text-gray-300 hover:bg-gray-700 transition-all"
          >
            Reset
          </button>
          <button
            onClick={nextQuestion}
            disabled={currentQuestionIndex === filteredQuestions.length - 1}
            className="px-6 py-3 bg-blue-500 rounded-xl text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
MCQ Practice component created. Now let's create the Practice Exams component.

Step 6: Create the Practice Exams Component
This component provides timed practice exams:


Created src/components/PracticeExams.tsx
Practice Exams component created. Now let's create the Course Summaries component.

Step 7: Create the Course Summaries Component
This component provides study materials and key concepts:


Created src/components/CourseSummaries.tsx
All three components are ready. Now let's create the main App that ties everything together.

Step 8: Create the Main App Component
This brings all parts together with a landing page and navigation:


Created src/App.tsx
The main App component is ready. Now let's update the page title and build the project.

Step 9: Update the Page Title
Editing index.html failed
Let me check the index.html file:


Exploring
Explored
,
0
1
2
3
4
5
6
7
8
9
0
1
2
3
4
5
6
7
8
9
0
1
2
3
4
5
6
7
8
9
 read
s
Read
index.html L1-13
The title is already updated. Now let's build the project.

Step 10: Build and Test the Project
Built the project
🎉 The website is now complete and built successfully!

Summary of What We Built
Here's a recap of the step-by-step process:

Step 1-2: Setup & Cleanup
Checked the project structure
Removed old files from the previous GitHub learning website
Step 3: Types File (src/data/types.ts)
Defined TypeScript interfaces for Questions, Exams, and Course Summaries
Created reusable data structures
Step 4: Questions Data (src/data/questions.ts)
Added 25 MCQ practice questions across 5 subjects
Created 5 practice exams with timed tests
Added 5 course summaries with key points and formulas
Step 5: MCQ Practice Component
Interactive question practice
Subject filtering
Instant feedback with explanations
Progress tracking
Step 6: Practice Exams Component
Timed exam simulation
Question navigator
Score calculation
Answer review after submission
Step 7: Course Summaries Component
Course notes and key points
Formula sheets with copy functionality
Topic breakdowns
Study tips
Step 8: Main App Component
Beautiful landing page
Navigation between sections
Feature cards
Stats section
Call-to-action
Step 9-10: Final Touches & Build
Updated page title
Built the project successfully
🚀 How to Use Your Website
Feature	What It Does
MCQ Practice	Click "Start Practicing" to answer questions with instant feedback
Practice Exams	Take timed tests with score tracking
Course Summaries	Review key concepts and formulas
The website is now ready for students to practice and learn! 📚

Show Less

Help me create it step by step please

Option A
A is better

Exploring
Explored
,
0
1
2
3
4
5
6
7
8
9
0
1
2
3
4
5
6
7
8
9
0
1
2
3
4
5
6
7
8
9
 read
s
Read
App.tsx L1-404
Read
index.html L1-13

Show More
Option B
B is better
I'll create a comprehensive student practice platform with MCQs, practice exams, and course summaries. Let me build this for you.


Created src/data/questions.ts



Show More

Now I want create a website where student get to practice MCQ's, practice exams and course summaries

Option A
A is better

Exploring
Explored
,
0
1
2
3
4
5
6
7
8
9
0
1
2
3
4
5
6
7
8
9
0
1
2
3
4
5
6
7
8
9
 read
s
,
0
1
2
3
4
5
6
7
8
9
0
1
2
3
4
5
6
7
8
9
0
1
2
3
4
5
6
7
8
9
 list
s
List
/
Read
App.tsx L1-400


Show More
Option B
B is better
Great question! Here's how you can access the GitLearn website:

Accessing the Website
The website is already built and ready! You can access it in the following ways:

1. In This Environment
The website should automatically be served after the build. Look for a preview panel or URL in your interface that shows the dist/index.html file being served.

2. Local Development
If you want to run it locally on your machine:

Bash

# Navigate to the project directory
cd your-project-folder

# Install dependencies
npm install

# Start the development server
npm run dev
Then open http://localhost:5173 in your browser.

3. Build for Production
Bash

npm run build
The production files will be in the dist/ folder. You can open dist/index.html directly in your browser.

4. Deploy Online (Free Options)
Platform	How to Deploy
GitHub Pages	Push to GitHub → Settings → Pages → Select branch
Netlify	Drag & drop the dist folder at netlify.com
Vercel	Connect your GitHub repo at vercel.com
What You'll See:
🏠 Home page with hero section and animated terminal
📚 Courses - Click "View Courses" or scroll down
🎯 Learning Paths - Structured curriculum
📖 Resources - Git cheat sheet and more
👆 Interactive - Click any course card for details
Would you like me to make any changes to the website, or help you deploy it somewhere?


How do access this website

Option A
A is better

Exploring
Explored
,
0
1
2
3
4
5
6
7
8
9
0
1
2
3
4
5
6
7
8
9
0
1
2
3
4
5
6
7
8
9
 read
s
,
0
1
2
3
4
5
6
7
8
9
0
1
2
3
4
5
6
7
8
9
0
1
2
3
4
5
6
7
8
9
 list
s
List
/
Read
App.tsx L1-29
Read
index.css L1-2
Read
index.html L1-13

Show More
Option B
B is better
I'll create a learning website for students focused on GitHub education. Let me first explore the project structure to understand what we're working with.


Exploring
Explored
,
0
1
2
3
4
5
6
7
8
9
0
1
2
3
4
5
6
7
8
9
0
1
2
3
4
5
6
7
8
9
 list
s
List
/

















Show More

I want to create a learning website for students using GitHub

