import { useState, useEffect } from 'react';
import { exams } from '../data/questions';
import { Exam, ExamQuestion } from '../data/types';
interface PracticeExamsProps {
  onBack?: () => void;
}
export default function PracticeExams({ onBack }: PracticeExamsProps) {
  // States
  const [selectedExam, setSelectedExam] = useState<Exam | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [examFinished, setExamFinished] = useState(false);
  const [showReview, setShowReview] = useState(false);
  // Timer effect
  useEffect(() => {
    if (!selectedExam || examFinished) return;
    if (timeLeft <= 0) {
      if (selectedExam) {
        setTimeLeft(selectedExam.duration * 60);
      }
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setExamFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [selectedExam, examFinished]);
  // Start an exam
  const startExam = (exam: Exam) => {
    setSelectedExam(exam);
    setCurrentQuestion(0);
    setAnswers({});
    setTimeLeft(exam.duration * 60);
    setExamFinished(false);
    setShowReview(false);
  };
  // Select an answer
  const selectAnswer = (questionId: number, answerIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answerIndex }));
  };
  // Submit exam
  const submitExam = () => {
    setExamFinished(true);
  };
  // Calculate score
  const calculateScore = () => {
    if (!selectedExam) return { correct: 0, total: 0, percentage: 0 };
    
    let correct = 0;
    selectedExam.questions.forEach((q: ExamQuestion) => {
      if (answers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    
    const total = selectedExam.totalQuestions;
    const percentage = Math.round((correct / total) * 100);
    
    return { correct, total, percentage };
  };
  // Format time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  // Get subject color
  const getSubjectColor = (subject: string) => {
    const colors: { [key: string]: string } = {
      'Mathematics': 'from-blue-500 to-cyan-500',
      'Physics': 'from-purple-500 to-pink-500',
      'Chemistry': 'from-green-500 to-emerald-500',
      'Computer Science': 'from-orange-500 to-red-500',
      'Biology': 'from-teal-500 to-green-500'
    };
    return colors[subject] || 'from-gray-500 to-gray-600';
  };
  // Exam selection view
  if (!selectedExam) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
              Practice Exams
            </h1>
            <p className="text-gray-400">Test yourself with timed exams</p>
          </div>
          {/* Exam Cards */}
          <div className="grid gap-4">
            {exams.map((exam: Exam) => (
              <div 
                key={exam.id}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getSubjectColor(exam.subject)}`} />
                      <span className="text-sm text-gray-400">{exam.subject}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{exam.title}</h3>
                    <div className="flex gap-4 text-sm text-gray-400">
                      <span>📝 {exam.totalQuestions} Questions</span>
                      <span>⏱️ {exam.duration} Minutes</span>
                      <span>🎯 {exam.passingScore}% to Pass</span>
                    </div>
                  </div>
                  <button
                    onClick={() => startExam(exam)}
                    className={`px-6 py-3 rounded-xl bg-gradient-to-r ${getSubjectColor(exam.subject)} text-white font-medium hover:opacity-90 transition-opacity`}
                  >
                    Start Exam
                  </button>
                </div>
              </div>
            ))}
          </div>
          {onBack && (
            <button
              onClick={onBack}
              className="mt-8 px-6 py-3 bg-gray-800 rounded-xl text-gray-300 hover:bg-gray-700 transition-all"
            >
              ← Back to Home
            </button>
          )}
        </div>
      </div>
    );
  }
  // Exam finished view
  if (examFinished) {
    const { correct, total, percentage } = calculateScore();
    const passed = percentage >= selectedExam.passingScore;
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <div className="max-w-2xl mx-auto">
          {/* Result Card */}
          <div className="bg-gray-800 rounded-2xl p-8 text-center border border-gray-700">
            <div className={`w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl ${
              passed ? 'bg-green-500/20' : 'bg-red-500/20'
            }`}>
              {passed ? '🎉' : '📚'}
            </div>
            <h2 className="text-2xl font-bold mb-2">{selectedExam.title}</h2>
            <p className="text-gray-400 mb-6">Exam Complete!</p>
            {/* Score Circle */}
            <div className={`w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center border-4 ${
              passed ? 'border-green-500' : 'border-red-500'
            }`}>
              <div className="text-center">
                <div className="text-3xl font-bold">{percentage}%</div>
                <div className="text-sm text-gray-400">{correct}/{total}</div>
              </div>
            </div>
            {/* Status */}
            <div className={`text-lg font-medium mb-6 ${passed ? 'text-green-400' : 'text-red-400'}`}>
              {passed ? '✓ Congratulations! You passed!' : '✗ Keep practicing! You\'ll get there!'}
            </div>
            {/* Buttons */}
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setShowReview(true)}
                className="px-6 py-3 bg-gray-700 rounded-xl text-white hover:bg-gray-600 transition-all"
              >
                Review Answers
              </button>
              <button
                onClick={() => setSelectedExam(null)}
                className="px-6 py-3 bg-blue-500 rounded-xl text-white hover:bg-blue-600 transition-all"
              >
                Back to Exams
              </button>
            </div>
          </div>
          {/* Review Section */}
          {showReview && (
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold mb-4">Answer Review</h3>
              {selectedExam.questions.map((q: ExamQuestion, index: number) => {
                const userAnswer = answers[q.id];
                const isCorrect = userAnswer === q.correctAnswer;
                return (
                  <div 
                    key={q.id}
                    className={`p-4 rounded-xl border ${
                      isCorrect ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/10 border-red-500/30'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
                        isCorrect ? 'bg-green-500' : 'bg-red-500'
                      }`}>
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <p className="font-medium mb-2">{q.question}</p>
                        <p className="text-sm text-gray-400">
                          Your answer: {q.options[userAnswer] || 'Not answered'}
                        </p>
                        {!isCorrect && (
                          <p className="text-sm text-green-400">
                            Correct answer: {q.options[q.correctAnswer]}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
  // Exam in progress view
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold">{selectedExam.title}</h2>
            <p className="text-gray-400 text-sm">{selectedExam.subject}</p>
          </div>
          <div className={`text-2xl font-mono ${timeLeft < 60 ? 'text-red-400 animate-pulse' : 'text-white'}`}>
            ⏱️ {formatTime(timeLeft)}
          </div>
        </div>
        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Question {currentQuestion + 1} of {selectedExam.totalQuestions}</span>
            <span>{Object.keys(answers).length} answered</span>
          </div>
          <div className="flex gap-1">
            {selectedExam.questions.map((_: ExamQuestion, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`h-2 flex-1 rounded-full transition-all ${
                  index === currentQuestion
                    ? 'bg-blue-500'
                    : answers[selectedExam.questions[index].id] !== undefined
                      ? 'bg-green-500'
                      : 'bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>
        {/* Current Question */}
        {selectedExam.questions[currentQuestion] && (
          <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
            <h3 className="text-lg font-medium mb-6">
              {selectedExam.questions[currentQuestion].question}
            </h3>
            <div className="space-y-3">
              {selectedExam.questions[currentQuestion].options.map((option: string, index: number) => (
                <button
                  key={index}
                  onClick={() => selectAnswer(selectedExam.questions[currentQuestion].id, index)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    answers[selectedExam.questions[currentQuestion].id] === index
                      ? 'bg-blue-500/20 border-blue-500 text-white'
                      : 'bg-gray-700 border-gray-600 hover:bg-gray-600'
                  }`}
                >
                  <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
        {/* Navigation */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className="px-6 py-3 bg-gray-800 rounded-xl text-gray-300 hover:bg-gray-700 disabled:opacity-50 transition-all"
          >
            ← Previous
          </button>
          {/* Question Navigator */}
          <div className="flex gap-2">
            {selectedExam.questions.map((q: ExamQuestion, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-8 h-8 rounded-lg text-sm font-medium transition-all ${
                  index === currentQuestion
                    ? 'bg-blue-500 text-white'
                    : answers[q.id] !== undefined
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-gray-800 text-gray-400'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          {currentQuestion === selectedExam.totalQuestions - 1 ? (
            <button
              onClick={submitExam}
              className="px-6 py-3 bg-green-500 rounded-xl text-white hover:bg-green-600 transition-all"
            >
              Submit Exam ✓
            </button>
          ) : (
            <button
              onClick={() => setCurrentQuestion(Math.min(selectedExam.totalQuestions - 1, currentQuestion + 1))}
              className="px-6 py-3 bg-blue-500 rounded-xl text-white hover:bg-blue-600 transition-all"
            >
              Next →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
