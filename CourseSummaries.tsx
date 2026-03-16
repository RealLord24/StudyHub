import { useState } from 'react';
import { courseSummaries } from '../data/questions';
import { CourseSummary, Formula } from '../data/types';
const SUBJECTS = ['All', 'Mathematics', 'Physics', 'Chemistry', 'Computer Science', 'Biology'];
export default function CourseSummaries() {
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedSummary, setSelectedSummary] = useState<CourseSummary | null>(null);
  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);
  // Filter summaries by subject
  const filteredSummaries = selectedSubject === 'All'
    ? courseSummaries
    : courseSummaries.filter((s: CourseSummary) => s.subject === selectedSubject);
  // Copy formula to clipboard
  const copyFormula = (formula: string) => {
    navigator.clipboard.writeText(formula);
    setCopiedFormula(formula);
    setTimeout(() => setCopiedFormula(null), 2000);
  };
  // Get difficulty color
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400';
      case 'Advanced': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };
  // Get subject gradient
  const getSubjectGradient = (subject: string) => {
    const gradients: { [key: string]: string } = {
      'Mathematics': 'from-blue-500 to-cyan-500',
      'Physics': 'from-purple-500 to-pink-500',
      'Chemistry': 'from-green-500 to-emerald-500',
      'Computer Science': 'from-orange-500 to-red-500',
      'Biology': 'from-teal-500 to-green-500'
    };
    return gradients[subject] || 'from-gray-500 to-gray-600';
  };
  // Summary detail view
  if (selectedSummary) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => setSelectedSummary(null)}
            className="mb-6 px-4 py-2 bg-gray-800 rounded-lg text-gray-300 hover:bg-gray-700 transition-all flex items-center gap-2"
          >
            ← Back to Summaries
          </button>
          {/* Header */}
          <div className="bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${getSubjectGradient(selectedSummary.subject)}`} />
              <span className="text-gray-400">{selectedSummary.subject}</span>
              <span className={`px-2 py-1 rounded text-xs ${getDifficultyColor(selectedSummary.difficulty)}`}>
                {selectedSummary.difficulty}
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-3">{selectedSummary.title}</h1>
            <p className="text-gray-400">{selectedSummary.description}</p>
          </div>
          {/* Topics Covered */}
          <div className="bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              📋 Topics Covered
            </h2>
            <div className="flex flex-wrap gap-2">
              {selectedSummary.topics.map((topic: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
          {/* Key Points */}
          <div className="bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              💡 Key Points
            </h2>
            <ul className="space-y-3">
              {selectedSummary.keyPoints.map((point: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Formulas */}
          {selectedSummary.formulas && selectedSummary.formulas.length > 0 && (
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                🔢 Important Formulas
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {selectedSummary.formulas.map((formula: Formula, index: number) => (
                  <div
                    key={index}
                    className="bg-gray-900 rounded-xl p-4 border border-gray-700 hover:border-gray-600 transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-sm font-medium text-blue-400">{formula.name}</span>
                      <button
                        onClick={() => copyFormula(formula.formula)}
                        className="text-gray-500 hover:text-white transition-colors"
                        title="Copy formula"
                      >
                        {copiedFormula === formula.formula ? (
                          <span className="text-green-400 text-sm">✓ Copied!</span>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        )}
                      </button>
                    </div>
                    <div className="text-xl font-mono text-white mb-2">{formula.formula}</div>
                    <div className="text-sm text-gray-400">{formula.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Study Tips */}
          <div className="mt-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/20">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              📚 Study Tips
            </h2>
            <ul className="space-y-2 text-gray-300">
              <li>• Review these notes regularly to reinforce your memory</li>
              <li>• Practice solving problems using these formulas</li>
              <li>• Create flashcards for key concepts</li>
              <li>• Try to explain these concepts to someone else</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  // Summary list view
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-2">
            Course Summaries
          </h1>
          <p className="text-gray-400">Quick revision notes and key concepts</p>
        </div>
        {/* Subject Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {SUBJECTS.map((subject) => (
            <button
              key={subject}
              onClick={() => setSelectedSubject(subject)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedSubject === subject
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {subject}
            </button>
          ))}
        </div>
        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {filteredSummaries.map((summary: CourseSummary) => (
            <div
              key={summary.id}
              onClick={() => setSelectedSummary(summary)}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 cursor-pointer transition-all hover:transform hover:scale-[1.02]"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getSubjectGradient(summary.subject)}`} />
                  <span className="text-sm text-gray-400">{summary.subject}</span>
                </div>
                <span className={`px-2 py-1 rounded text-xs ${getDifficultyColor(summary.difficulty)}`}>
                  {summary.difficulty}
                </span>
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{summary.title}</h3>
              
              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{summary.description}</p>
              {/* Topics Preview */}
              <div className="flex flex-wrap gap-1">
                {summary.topics.slice(0, 3).map((topic: string, index: number) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-400"
                  >
                    {topic}
                  </span>
                ))}
                {summary.topics.length > 3 && (
                  <span className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-400">
                    +{summary.topics.length - 3} more
                  </span>
                )}
              </div>
              {/* Footer */}
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-gray-500">
                  {summary.keyPoints.length} key points
                </span>
                {summary.formulas && summary.formulas.length > 0 && (
                  <span className="text-gray-500">
                    {summary.formulas.length} formulas
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
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

