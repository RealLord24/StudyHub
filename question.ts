import { Question, Exam, CourseSummary } from './types';
// ========================================
// MCQ PRACTICE QUESTIONS
// ========================================
export const questions: Question[] = [
  // MATHEMATICS
  {
    id: 1,
    subject: 'Mathematics',
    question: 'What is the derivative of x²?',
    options: ['x', '2x', '2x²', 'x²'],
    correctAnswer: 1,
    explanation: 'Using the power rule: d/dx(x^n) = nx^(n-1). So d/dx(x²) = 2x^(2-1) = 2x',
    difficulty: 'Easy'
  },
  {
    id: 2,
    subject: 'Mathematics',
    question: 'What is the integral of 2x?',
    options: ['x²', '2x²', 'x² + C', '2x + C'],
    correctAnswer: 2,
    explanation: '∫2x dx = 2(x²/2) + C = x² + C. Always remember the constant of integration!',
    difficulty: 'Easy'
  },
  {
    id: 3,
    subject: 'Mathematics',
    question: 'What is the limit of (sin x)/x as x approaches 0?',
    options: ['0', '1', '∞', 'undefined'],
    correctAnswer: 1,
    explanation: 'This is a fundamental limit in calculus. lim(x→0)[sin(x)/x] = 1',
    difficulty: 'Medium'
  },
  {
    id: 4,
    subject: 'Mathematics',
    question: 'Solve: log₁₀(100) = ?',
    options: ['1', '2', '10', '100'],
    correctAnswer: 1,
    explanation: 'log₁₀(100) asks "10 to what power equals 100?" Since 10² = 100, the answer is 2.',
    difficulty: 'Easy'
  },
  {
    id: 5,
    subject: 'Mathematics',
    question: 'What is the quadratic formula?',
    options: [
      'x = (-b ± √(b²-4ac)) / 2a',
      'x = (b ± √(b²-4ac)) / 2a',
      'x = (-b ± √(b²+4ac)) / 2a',
      'x = (b ± √(b²+4ac)) / 2a'
    ],
    correctAnswer: 0,
    explanation: 'The quadratic formula for ax² + bx + c = 0 is x = (-b ± √(b²-4ac)) / 2a',
    difficulty: 'Medium'
  },
  // PHYSICS
  {
    id: 6,
    subject: 'Physics',
    question: 'What is Newton\'s Second Law of Motion?',
    options: ['F = ma', 'E = mc²', 'F = mv', 'a = v/t'],
    correctAnswer: 0,
    explanation: 'Newton\'s Second Law states that Force equals mass times acceleration (F = ma)',
    difficulty: 'Easy'
  },
  {
    id: 7,
    subject: 'Physics',
    question: 'What is the SI unit of electric current?',
    options: ['Volt', 'Watt', 'Ampere', 'Ohm'],
    correctAnswer: 2,
    explanation: 'The SI unit of electric current is the Ampere (A), named after André-Marie Ampère.',
    difficulty: 'Easy'
  },
  {
    id: 8,
    subject: 'Physics',
    question: 'What is the speed of light in vacuum?',
    options: ['3 × 10⁶ m/s', '3 × 10⁸ m/s', '3 × 10¹⁰ m/s', '3 × 10⁴ m/s'],
    correctAnswer: 1,
    explanation: 'The speed of light in vacuum is approximately 3 × 10⁸ meters per second (299,792,458 m/s exactly).',
    difficulty: 'Medium'
  },
  {
    id: 9,
    subject: 'Physics',
    question: 'What is the formula for kinetic energy?',
    options: ['KE = mv²', 'KE = ½mv', 'KE = ½mv²', 'KE = mgh'],
    correctAnswer: 2,
    explanation: 'Kinetic Energy = ½ × mass × velocity². The formula KE = mgh is for potential energy.',
    difficulty: 'Easy'
  },
  {
    id: 10,
    subject: 'Physics',
    question: 'Which type of wave is sound?',
    options: ['Transverse', 'Longitudinal', 'Electromagnetic', 'Standing'],
    correctAnswer: 1,
    explanation: 'Sound waves are longitudinal waves where particles vibrate parallel to the direction of wave propagation.',
    difficulty: 'Medium'
  },
  // CHEMISTRY
  {
    id: 11,
    subject: 'Chemistry',
    question: 'What is the atomic number of Carbon?',
    options: ['4', '6', '12', '8'],
    correctAnswer: 1,
    explanation: 'Carbon has 6 protons in its nucleus, giving it an atomic number of 6. Its mass number is 12.',
    difficulty: 'Easy'
  },
  {
    id: 12,
    subject: 'Chemistry',
    question: 'What is the chemical formula for water?',
    options: ['H₂O₂', 'H₂O', 'HO₂', 'H₃O'],
    correctAnswer: 1,
    explanation: 'Water consists of two hydrogen atoms bonded to one oxygen atom: H₂O',
    difficulty: 'Easy'
  },
  {
    id: 13,
    subject: 'Chemistry',
    question: 'What type of bond forms between Na and Cl in NaCl?',
    options: ['Covalent', 'Ionic', 'Metallic', 'Hydrogen'],
    correctAnswer: 1,
    explanation: 'Na (metal) transfers an electron to Cl (non-metal), forming an ionic bond through electrostatic attraction.',
    difficulty: 'Medium'
  },
  {
    id: 14,
    subject: 'Chemistry',
    question: 'What is the pH of a neutral solution?',
    options: ['0', '7', '14', '1'],
    correctAnswer: 1,
    explanation: 'A pH of 7 is neutral. Below 7 is acidic, above 7 is basic (alkaline).',
    difficulty: 'Easy'
  },
  {
    id: 15,
    subject: 'Chemistry',
    question: 'Which gas is produced when an acid reacts with a metal?',
    options: ['Oxygen', 'Carbon Dioxide', 'Hydrogen', 'Nitrogen'],
    correctAnswer: 2,
    explanation: 'When acids react with metals, they produce hydrogen gas. Example: Zn + H₂SO₄ → ZnSO₄ + H₂',
    difficulty: 'Medium'
  },
  // COMPUTER SCIENCE
  {
    id: 16,
    subject: 'Computer Science',
    question: 'What is the time complexity of binary search?',
    options: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'],
    correctAnswer: 2,
    explanation: 'Binary search halves the search space with each comparison, resulting in O(log n) time complexity.',
    difficulty: 'Medium'
  },
  {
    id: 17,
    subject: 'Computer Science',
    question: 'Which data structure uses LIFO (Last In, First Out)?',
    options: ['Queue', 'Stack', 'Array', 'Tree'],
    correctAnswer: 1,
    explanation: 'A Stack follows LIFO - the last element pushed is the first one popped. Think of a stack of plates!',
    difficulty: 'Easy'
  },
  {
    id: 18,
    subject: 'Computer Science',
    question: 'What does HTML stand for?',
    options: [
      'Hyper Text Markup Language',
      'High Tech Modern Language',
      'Hyper Transfer Markup Language',
      'Home Tool Markup Language'
    ],
    correctAnswer: 0,
    explanation: 'HTML stands for Hyper Text Markup Language, the standard markup language for web pages.',
    difficulty: 'Easy'
  },
  {
    id: 19,
    subject: 'Computer Science',
    question: 'What is the worst-case time complexity of QuickSort?',
    options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
    correctAnswer: 2,
    explanation: 'QuickSort\'s worst case is O(n²) when the pivot is always the smallest or largest element.',
    difficulty: 'Hard'
  },
  {
    id: 20,
    subject: 'Computer Science',
    question: 'What does API stand for?',
    options: [
      'Application Programming Interface',
      'Automated Program Integration',
      'Application Process Integration',
      'Automated Programming Interface'
    ],
    correctAnswer: 0,
    explanation: 'API stands for Application Programming Interface - a set of protocols for building software.',
    difficulty: 'Easy'
  },
  // BIOLOGY
  {
    id: 21,
    subject: 'Biology',
    question: 'What is the powerhouse of the cell?',
    options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi apparatus'],
    correctAnswer: 2,
    explanation: 'Mitochondria produce ATP through cellular respiration, earning them the title "powerhouse of the cell".',
    difficulty: 'Easy'
  },
  {
    id: 22,
    subject: 'Biology',
    question: 'What molecule carries genetic information?',
    options: ['RNA', 'DNA', 'ATP', 'Protein'],
    correctAnswer: 1,
    explanation: 'DNA (Deoxyribonucleic Acid) carries genetic information in its sequence of nucleotides.',
    difficulty: 'Easy'
  },
  {
    id: 23,
    subject: 'Biology',
    question: 'What is the process by which plants make food?',
    options: ['Respiration', 'Photosynthesis', 'Fermentation', 'Digestion'],
    correctAnswer: 1,
    explanation: 'Photosynthesis converts CO₂ and H₂O into glucose using sunlight: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂',
    difficulty: 'Easy'
  },
  {
    id: 24,
    subject: 'Biology',
    question: 'How many chromosomes do humans have?',
    options: ['23', '46', '44', '48'],
    correctAnswer: 1,
    explanation: 'Humans have 46 chromosomes (23 pairs) - 22 pairs of autosomes and 1 pair of sex chromosomes.',
    difficulty: 'Medium'
  },
  {
    id: 25,
    subject: 'Biology',
    question: 'What is the function of red blood cells?',
    options: [
      'Fight infections',
      'Carry oxygen',
      'Blood clotting',
      'Produce antibodies'
    ],
    correctAnswer: 1,
    explanation: 'Red blood cells contain hemoglobin which binds to oxygen and carries it throughout the body.',
    difficulty: 'Easy'
  }
];
// ========================================
// PRACTICE EXAMS
// ========================================
export const exams: Exam[] = [
  {
    id: 1,
    title: 'Mathematics Midterm',
    subject: 'Mathematics',
    duration: 30,
    totalQuestions: 5,
    passingScore: 60,
    questions: [
      {
        id: 1,
        question: 'What is the value of ∫(3x² + 2x) dx?',
        options: ['x³ + x² + C', '3x³ + 2x² + C', 'x³ + x²', '6x + 2'],
        correctAnswer: 0
      },
      {
        id: 2,
        question: 'Find the derivative of sin(x)',
        options: ['cos(x)', '-cos(x)', 'sin(x)', '-sin(x)'],
        correctAnswer: 0
      },
      {
        id: 3,
        question: 'What is the sum of interior angles of a hexagon?',
        options: ['360°', '540°', '720°', '900°'],
        correctAnswer: 2
      },
      {
        id: 4,
        question: 'Solve: 2x + 5 = 13',
        options: ['x = 4', 'x = 5', 'x = 6', 'x = 9'],
        correctAnswer: 0
      },
      {
        id: 5,
        question: 'What is the value of cos(0°)?',
        options: ['0', '1', '-1', 'undefined'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 2,
    title: 'Physics Fundamentals',
    subject: 'Physics',
    duration: 25,
    totalQuestions: 5,
    passingScore: 60,
    questions: [
      {
        id: 1,
        question: 'A car travels 100m in 5 seconds. What is its average speed?',
        options: ['15 m/s', '20 m/s', '25 m/s', '500 m/s'],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'What is the unit of force?',
        options: ['Joule', 'Watt', 'Newton', 'Pascal'],
        correctAnswer: 2
      },
      {
        id: 3,
        question: 'What is the acceleration due to gravity on Earth?',
        options: ['9.8 m/s²', '10.8 m/s²', '8.9 m/s²', '11.2 m/s²'],
        correctAnswer: 0
      },
      {
        id: 4,
        question: 'Energy can neither be created nor destroyed. This is the law of:',
        options: ['Conservation of Momentum', 'Conservation of Energy', 'Newton\'s First Law', 'Ohm\'s Law'],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'What is the frequency of a wave with period 0.5 seconds?',
        options: ['0.5 Hz', '1 Hz', '2 Hz', '5 Hz'],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 3,
    title: 'Chemistry Basics',
    subject: 'Chemistry',
    duration: 20,
    totalQuestions: 5,
    passingScore: 60,
    questions: [
      {
        id: 1,
        question: 'How many electrons does a neutral Oxygen atom have?',
        options: ['6', '8', '16', '4'],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'What is the chemical symbol for Gold?',
        options: ['Go', 'Gd', 'Au', 'Ag'],
        correctAnswer: 2
      },
      {
        id: 3,
        question: 'Which subatomic particle has a negative charge?',
        options: ['Proton', 'Neutron', 'Electron', 'Photon'],
        correctAnswer: 2
      },
      {
        id: 4,
        question: 'What is Avogadro\'s number?',
        options: ['6.022 × 10²²', '6.022 × 10²³', '3.14 × 10²³', '9.8 × 10²⁴'],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'What type of reaction is: 2H₂ + O₂ → 2H₂O?',
        options: ['Decomposition', 'Synthesis', 'Single replacement', 'Double replacement'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 4,
    title: 'Computer Science Quiz',
    subject: 'Computer Science',
    duration: 25,
    totalQuestions: 5,
    passingScore: 60,
    questions: [
      {
        id: 1,
        question: 'What data structure would be best for implementing undo functionality?',
        options: ['Queue', 'Stack', 'Array', 'Linked List'],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'What is 1010 in binary equal to in decimal?',
        options: ['8', '9', '10', '11'],
        correctAnswer: 2
      },
      {
        id: 3,
        question: 'Which sorting algorithm has the best average-case performance?',
        options: ['Bubble Sort', 'Selection Sort', 'Merge Sort', 'Insertion Sort'],
        correctAnswer: 2
      },
      {
        id: 4,
        question: 'What does CPU stand for?',
        options: [
          'Central Processing Unit',
          'Computer Personal Unit',
          'Central Program Unit',
          'Core Processing Unit'
        ],
        correctAnswer: 0
      },
      {
        id: 5,
        question: 'In OOP, what is the concept of hiding implementation details called?',
        options: ['Inheritance', 'Polymorphism', 'Encapsulation', 'Abstraction'],
        correctAnswer: 3
      }
    ]
  },
  {
    id: 5,
    title: 'Biology Essentials',
    subject: 'Biology',
    duration: 20,
    totalQuestions: 5,
    passingScore: 60,
    questions: [
      {
        id: 1,
        question: 'Which organelle is responsible for protein synthesis?',
        options: ['Mitochondria', 'Ribosome', 'Nucleus', 'Lysosome'],
        correctAnswer: 1
      },
      {
        id: 2,
        question: 'What is the basic unit of life?',
        options: ['Atom', 'Molecule', 'Cell', 'Organ'],
        correctAnswer: 2
      },
      {
        id: 3,
        question: 'Which blood type is the universal donor?',
        options: ['A', 'B', 'AB', 'O'],
        correctAnswer: 3
      },
      {
        id: 4,
        question: 'What process do cells use to divide?',
        options: ['Fertilization', 'Mitosis', 'Photosynthesis', 'Respiration'],
        correctAnswer: 1
      },
      {
        id: 5,
        question: 'DNA has a structure known as:',
        options: ['Single helix', 'Double helix', 'Triple helix', 'Beta sheet'],
        correctAnswer: 1
      }
    ]
  }
];
// ========================================
// COURSE SUMMARIES
// ========================================
export const courseSummaries: CourseSummary[] = [
  {
    id: 1,
    title: 'Calculus Fundamentals',
    subject: 'Mathematics',
    description: 'Master the core concepts of differential and integral calculus, from basic limits to advanced integration techniques.',
    keyPoints: [
      'Limits are the foundation of calculus - they describe behavior as values approach a point',
      'Derivatives measure the rate of change (slope of tangent line)',
      'Integrals calculate area under curves and accumulated quantities',
      'The Fundamental Theorem connects differentiation and integration',
      'Chain Rule: d/dx[f(g(x))] = f\'(g(x)) × g\'(x)'
    ],
    formulas: [
      { name: 'Power Rule', formula: 'd/dx(xⁿ) = nxⁿ⁻¹', description: 'Derivative of x raised to a power' },
      { name: 'Product Rule', formula: '(fg)\' = f\'g + fg\'', description: 'Derivative of product of functions' },
      { name: 'Quotient Rule', formula: '(f/g)\' = (f\'g - fg\')/g²', description: 'Derivative of quotient of functions' },
      { name: 'Integration by Parts', formula: '∫udv = uv - ∫vdu', description: 'Integration technique for products' }
    ],
    topics: ['Limits & Continuity', 'Derivatives', 'Applications of Derivatives', 'Integrals', 'Integration Techniques', 'Applications of Integration'],
    difficulty: 'Intermediate'
  },
  {
    id: 2,
    title: 'Classical Mechanics',
    subject: 'Physics',
    description: 'Understand Newton\'s laws, motion, forces, energy, and momentum in this fundamental physics course.',
    keyPoints: [
      'Newton\'s First Law: Objects in motion stay in motion unless acted upon by a force',
      'Newton\'s Second Law: F = ma (Force equals mass times acceleration)',
      'Newton\'s Third Law: Every action has an equal and opposite reaction',
      'Energy is conserved in closed systems (KE + PE = constant)',
      'Momentum is conserved in collisions (p = mv)'
    ],
    formulas: [
      { name: 'Kinematic Equation 1', formula: 'v = u + at', description: 'Final velocity' },
      { name: 'Kinematic Equation 2', formula: 's = ut + ½at²', description: 'Displacement' },
      { name: 'Kinetic Energy', formula: 'KE = ½mv²', description: 'Energy of motion' },
      { name: 'Potential Energy', formula: 'PE = mgh', description: 'Gravitational potential energy' }
    ],
    topics: ['Kinematics', 'Newton\'s Laws', 'Work and Energy', 'Momentum', 'Rotational Motion', 'Gravitation'],
    difficulty: 'Beginner'
  },
  {
    id: 3,
    title: 'Organic Chemistry Essentials',
    subject: 'Chemistry',
    description: 'Learn the structure, properties, and reactions of organic compounds including hydrocarbons and functional groups.',
    keyPoints: [
      'Carbon forms 4 covalent bonds - this versatility allows complex molecules',
      'Functional groups determine chemical behavior (OH, COOH, NH₂, etc.)',
      'Isomers have same formula but different structures',
      'Nomenclature follows IUPAC rules systematically',
      'Reaction mechanisms show electron movement with curved arrows'
    ],
    formulas: [
      { name: 'Alkane', formula: 'CₙH₂ₙ₊₂', description: 'Saturated hydrocarbons' },
      { name: 'Alkene', formula: 'CₙH₂ₙ', description: 'One double bond' },
      { name: 'Alkyne', formula: 'CₙH₂ₙ₋₂', description: 'One triple bond' },
      { name: 'Alcohol', formula: 'R-OH', description: 'Hydroxyl functional group' }
    ],
    topics: ['Hydrocarbons', 'Functional Groups', 'Isomerism', 'Nomenclature', 'Reaction Mechanisms', 'Stereochemistry'],
    difficulty: 'Intermediate'
  },
  {
    id: 4,
    title: 'Data Structures & Algorithms',
    subject: 'Computer Science',
    description: 'Master essential data structures and algorithms for efficient problem-solving and coding interviews.',
    keyPoints: [
      'Arrays provide O(1) access but O(n) insertion/deletion',
      'Linked Lists have O(1) insertion but O(n) access',
      'Hash Tables offer O(1) average case for lookups',
      'Trees (BST, AVL, Red-Black) maintain sorted data efficiently',
      'Graphs model relationships - use BFS/DFS for traversal'
    ],
    formulas: [
      { name: 'Binary Search', formula: 'O(log n)', description: 'Divide and conquer search' },
      { name: 'QuickSort (average)', formula: 'O(n log n)', description: 'Efficient sorting' },
      { name: 'Merge Sort', formula: 'O(n log n)', description: 'Guaranteed efficient sorting' },
      { name: 'Hash Table Lookup', formula: 'O(1) avg', description: 'Fast key-value access' }
    ],
    topics: ['Arrays & Strings', 'Linked Lists', 'Stacks & Queues', 'Trees', 'Graphs', 'Sorting Algorithms', 'Searching Algorithms', 'Dynamic Programming'],
    difficulty: 'Intermediate'
  },
  {
    id: 5,
    title: 'Cell Biology',
    subject: 'Biology',
    description: 'Explore the structure and function of cells, the basic units of life, including organelles and cellular processes.',
    keyPoints: [
      'Cells are the basic structural and functional units of life',
      'Prokaryotes lack a nucleus; Eukaryotes have a true nucleus',
      'The nucleus contains DNA and controls cell activities',
      'Mitochondria produce ATP through cellular respiration',
      'The cell membrane controls what enters and exits the cell'
    ],
    formulas: [
      { name: 'Cell Respiration', formula: 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP', description: 'Glucose breakdown' },
      { name: 'Photosynthesis', formula: '6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂', description: 'Plant food production' },
      { name: 'ATP', formula: 'C₁₀H₁₆N₅O₁₃P₃', description: 'Energy currency of cells' }
    ],
    topics: ['Cell Structure', 'Organelles', 'Cell Membrane', 'Cell Transport', 'Cell Division', 'Cellular Respiration', 'Protein Synthesis'],
    difficulty: 'Beginner'
  }
];
