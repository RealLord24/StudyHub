import { useState } from 'react';
import MCQPractice from './components/MCQPractice';
import PracticeExams from './components/PracticeExams';
import CourseSummaries from './components/CourseSummaries';
type View = 'home' | 'mcq' | 'exams' | 'summaries';
export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  // Render different views based on state
  if (currentView === 'mcq') {
    return (
      <div>
        <nav className="bg-gray-800 border-b border-gray-700 p-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <button 
              onClick={() => setCurrentView('home')}
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              StudyHub
            </button>
            <button
              onClick={() => setCurrentView('home')}
              className="px-4 py-2 bg-gray-700 rounded-lg text-gray-300 hover:bg-gray-600 transition-all"
            >
              ← Back to Home
            </button>
          </div>
        </nav>
        <MCQPractice />
      </div>
    );
  }
  if (currentView === 'exams') {
    return (
      <div>
        <nav className="bg-gray-800 border-b border-gray-700 p-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <button 
              onClick={() => setCurrentView('home')}
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              StudyHub
            </button>
            <button
              onClick={() => setCurrentView('home')}
              className="px-4 py-2 bg-gray-700 rounded-lg text-gray-300 hover:bg-gray-600 transition-all"
            >
              ← Back to Home
            </button>
          </div>
        </nav>
        <PracticeExams />
      </div>
    );
  }
  if (currentView === 'summaries') {
    return (
      <div>
        <nav className="bg-gray-800 border-b border-gray-700 p-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <button 
              onClick={() => setCurrentView('home')}
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              StudyHub
            </button>
            <button
              onClick={() => setCurrentView('home')}
              className="px-4 py-2 bg-gray-700 rounded-lg text-gray-300 hover:bg-gray-600 transition-all"
            >
              ← Back to Home
            </button>
          </div>
        </nav>
        <CourseSummaries />
      </div>
    );
  }
  // Home View
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            StudyHub
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentView('mcq')}
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Practice
            </button>
            <button
              onClick={() => setCurrentView('exams')}
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Exams
            </button>
            <button
              onClick={() => setCurrentView('summaries')}
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Summaries
            </button>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="max-w-6xl mx-auto px-6 py-24 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Master Your Studies with{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Interactive Learning
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Practice MCQs, take timed exams, and review course summaries — 
              all in one place. Free forever.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setCurrentView('mcq')}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25"
              >
                Start Practicing →
              </button>
              <button
                onClick={() => setCurrentView('exams')}
                className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-xl font-semibold hover:bg-gray-700 transition-all"
              >
                Take an Exam
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Everything You Need to Succeed</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* MCQ Practice Card */}
            <div 
              onClick={() => setCurrentView('mcq')}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 cursor-pointer transition-all group hover:transform hover:scale-105"
            >
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                <span className="text-3xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">MCQ Practice</h3>
              <p className="text-gray-400 mb-4">
                Practice hundreds of questions with instant feedback and explanations.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-700 rounded text-xs">25+ Questions</span>
                <span className="px-2 py-1 bg-gray-700 rounded text-xs">5 Subjects</span>
                <span className="px-2 py-1 bg-gray-700 rounded text-xs">Instant Feedback</span>
              </div>
            </div>
            {/* Practice Exams Card */}
            <div 
              onClick={() => setCurrentView('exams')}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 cursor-pointer transition-all group hover:transform hover:scale-105"
            >
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <span className="text-3xl">⏱️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Practice Exams</h3>
              <p className="text-gray-400 mb-4">
                Take timed exams to simulate real test conditions and track your progress.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-700 rounded text-xs">5 Exams</span>
                <span className="px-2 py-1 bg-gray-700 rounded text-xs">Timed Tests</span>
                <span className="px-2 py-1 bg-gray-700 rounded text-xs">Score Tracking</span>
              </div>
            </div>
            {/* Course Summaries Card */}
            <div 
              onClick={() => setCurrentView('summaries')}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-green-500/50 cursor-pointer transition-all group hover:transform hover:scale-105"
            >
              <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Course Summaries</h3>
              <p className="text-gray-400 mb-4">
                Quick revision notes with key concepts, formulas, and study tips.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-700 rounded text-xs">5 Courses</span>
                <span className="px-2 py-1 bg-gray-700 rounded text-xs">Formulas</span>
                <span className="px-2 py-1 bg-gray-700 rounded text-xs">Key Points</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">25+</div>
              <div className="text-gray-400">Practice Questions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">5</div>
              <div className="text-gray-400">Practice Exams</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">5</div>
              <div className="text-gray-400">Course Summaries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-400 mb-2">5</div>
              <div className="text-gray-400">Subjects</div>
            </div>
          </div>
        </div>
      </section>
      {/* Subjects Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Subjects We Cover</h2>
          <p className="text-gray-400 text-center mb-12">Comprehensive content across multiple disciplines</p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: 'Mathematics', icon: '∑', color: 'from-blue-500 to-cyan-500' },
              { name: 'Physics', icon: '⚛', color: 'from-purple-500 to-pink-500' },
              { name: 'Chemistry', icon: '🧪', color: 'from-green-500 to-emerald-500' },
              { name: 'Computer Science', icon: '💻', color: 'from-orange-500 to-red-500' },
              { name: 'Biology', icon: '🧬', color: 'from-teal-500 to-green-500' },
            ].map((subject) => (
              <div
                key={subject.name}
                className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-gray-600 transition-all"
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${subject.color} flex items-center justify-center text-2xl`}>
                  {subject.icon}
                </div>
                <div className="font-medium">{subject.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl p-12 text-center border border-gray-700">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-gray-400 mb-8">
              Jump into MCQ practice, take a practice exam, or review course summaries.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setCurrentView('mcq')}
                className="px-6 py-3 bg-blue-500 rounded-xl font-medium hover:bg-blue-600 transition-colors"
              >
                Practice MCQs
              </button>
              <button
                onClick={() => setCurrentView('exams')}
                className="px-6 py-3 bg-purple-500 rounded-xl font-medium hover:bg-purple-600 transition-colors"
              >
                Take Exam
              </button>
              <button
                onClick={() => setCurrentView('summaries')}
                className="px-6 py-3 bg-green-500 rounded-xl font-medium hover:bg-green-600 transition-colors"
              >
                View Summaries
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p className="mb-2">StudyHub — Your Learning Companion</p>
          <p className="text-sm">Built with ❤️ for students everywhere</p>
        </div>
      </footer>
    </div>
  );
}
