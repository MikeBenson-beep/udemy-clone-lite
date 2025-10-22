import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronRight, ArrowLeft, CheckCircle2, XCircle, RotateCcw, Loader2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

// Question types enum
enum QuestionType {
  MULTIPLE_CHOICE = "multiple_choice",
  SINGLE_CHOICE = "single_choice", 
  TRUE_FALSE = "true_false",
  TEXT_AREA = "text_area",
  FILL_IN_BLANK = "fill_in_blank"
}

// Mock quiz data based on the lesson content
interface QuizQuestion {
  id: number;
  type: QuestionType;
  question: string;
  options?: string[];
  correctAnswer?: number | number[] | string | boolean;
  explanation: string;
  blanks?: { position: number; correctAnswer: string }[];
  aiValidationPrompt?: string;
  paragraphWithBlanks?: string; // For fill-in-blank questions with inline blanks
}

interface Quiz {
  id: number;
  title: string;
  questions: QuizQuestion[];
  totalQuestions: number;
}

// Mock quiz data
const mockQuiz: Quiz = {
  id: 1,
  title: "Quiz: Decisiones basadas en datos",
  questions: [
    {
      id: 1,
      type: QuestionType.SINGLE_CHOICE,
      question: "¿Cuál es la principal diferencia entre decisiones data-driven y decisiones basadas en intuición?",
      options: [
        "Las decisiones data-driven son siempre más rápidas",
        "Las decisiones data-driven se basan en evidencias medidas y test de hipótesis",
        "Las decisiones basadas en intuición son siempre más precisas",
        "No hay diferencia significativa entre ambos enfoques"
      ],
      correctAnswer: 1,
      explanation: "Las decisiones data-driven se caracterizan por basarse en evidencias medidas, test de hipótesis y monitorización continua, mientras que la intuición deriva de la experiencia."
    },
    {
      id: 2,
      type: QuestionType.SINGLE_CHOICE,
      question: "En el ciclo de datos para decisiones, ¿qué etapa se encarga de gestionar valores faltantes y outliers?",
      options: [
        "Raccolta (Recolección)",
        "Pulizia (Limpieza)",
        "Trasformazione (Transformación)",
        "Analisi e interpretazione (Análisis e interpretación)"
      ],
      correctAnswer: 1,
      explanation: "La etapa de limpieza (pulizia) se encarga de gestionar valores faltantes, duplicados y outliers para separar el señal del ruido."
    },
    {
      id: 3,
      type: QuestionType.SINGLE_CHOICE,
      question: "¿Cuál estadística descriptiva es más robusta cuando hay valores extremos?",
      options: [
        "Media",
        "Mediana",
        "Varianza",
        "Desviación estándar"
      ],
      correctAnswer: 1,
      explanation: "La mediana es más robusta que la media cuando hay valores extremos, ya que no se ve afectada por outliers."
    },
    {
      id: 4,
      type: QuestionType.MULTIPLE_CHOICE,
      question: "¿Cuáles de las siguientes son ventajas de las decisiones data-driven? (Selecciona todas las correctas)",
      options: [
        "Mayor claridad en el proceso de decisión",
        "Repetibilidad de los resultados",
        "Reducción de bias personales",
        "Decisiones más rápidas siempre",
        "Mayor precisión en todos los casos"
      ],
      correctAnswer: [0, 1, 2],
      explanation: "Las decisiones data-driven ofrecen mayor claridad, repetibilidad y reducción de bias personales, pero no garantizan decisiones más rápidas o mayor precisión en todos los casos."
    },
    {
      id: 5,
      type: QuestionType.TRUE_FALSE,
      question: "La varianza y la desviación estándar miden la dispersión de los datos y revelan estabilidad o riesgo operativo.",
      correctAnswer: true,
      explanation: "Correcto. La varianza y la desviación estándar son medidas de dispersión que indican qué tan dispersos están los datos alrededor de la media, lo que puede indicar estabilidad o riesgo."
    },
    {
      id: 6,
      type: QuestionType.TRUE_FALSE,
      question: "El aprendizaje supervisado siempre requiere datos etiquetados para funcionar correctamente.",
      correctAnswer: true,
      explanation: "Correcto. El aprendizaje supervisado utiliza datos etiquetados para entrenar modelos que puedan predecir resultados en datos nuevos."
    },
    {
      id: 7,
      type: QuestionType.FILL_IN_BLANK,
      question: "Completa los espacios en blanco en el siguiente párrafo sobre el ciclo de datos:",
      paragraphWithBlanks: "En el ciclo de datos para decisiones, la etapa de _______ se encarga de definir variables, fuentes y metadatos para reducir _______ y garantizar _______. Esta etapa es fundamental porque establece las bases para un análisis confiable.",
      blanks: [
        { position: 0, correctAnswer: "recolección" },
        { position: 1, correctAnswer: "bias" },
        { position: 2, correctAnswer: "transparencia" }
      ],
      explanation: "La etapa de recolección (raccolta) es donde se definen las variables, fuentes y metadatos necesarios para el análisis, reduciendo bias y garantizando transparencia."
    },
    {
      id: 8,
      type: QuestionType.FILL_IN_BLANK,
      question: "Completa los espacios en blanco sobre estadísticas descriptivas:",
      paragraphWithBlanks: "La _______ es más robusta que la _______ cuando hay valores extremos o _______. Mientras que la media se ve afectada por valores atípicos, la mediana mantiene su estabilidad.",
      blanks: [
        { position: 0, correctAnswer: "mediana" },
        { position: 1, correctAnswer: "media" },
        { position: 2, correctAnswer: "outliers" }
      ],
      explanation: "La mediana es la medida de tendencia central más robusta ante la presencia de valores extremos (outliers), mientras que la media se ve afectada por estos valores atípicos."
    },
    {
      id: 13,
      type: QuestionType.FILL_IN_BLANK,
      question: "Completa los espacios sobre aprendizaje automático:",
      paragraphWithBlanks: "El aprendizaje _______ utiliza datos _______ para entrenar modelos, mientras que el aprendizaje _______ encuentra patrones sin etiquetas. El aprendizaje por _______ aprende mediante interacción con el entorno.",
      blanks: [
        { position: 0, correctAnswer: "supervisado" },
        { position: 1, correctAnswer: "etiquetados" },
        { position: 2, correctAnswer: "no supervisado" },
        { position: 3, correctAnswer: "refuerzo" }
      ],
      explanation: "El aprendizaje supervisado usa datos etiquetados, el no supervisado encuentra patrones sin etiquetas, y el por refuerzo aprende mediante interacción."
    },
    {
      id: 9,
      type: QuestionType.TEXT_AREA,
      question: "Explica brevemente por qué es importante la limpieza de datos en el proceso de toma de decisiones basadas en datos. Incluye al menos dos razones específicas.",
      correctAnswer: "Respuesta válida debe incluir conceptos sobre separar señal del ruido, gestionar valores faltantes, eliminar duplicados, y mejorar la calidad del análisis.",
      aiValidationPrompt: "Valida si la respuesta explica la importancia de la limpieza de datos mencionando al menos dos de estos conceptos: separar señal del ruido, gestionar valores faltantes, eliminar duplicados, mejorar calidad del análisis, reducir errores.",
      explanation: "La limpieza de datos es crucial porque ayuda a separar el señal del ruido, gestiona valores faltantes y duplicados, y mejora la calidad general del análisis para decisiones más confiables."
    },
    {
      id: 10,
      type: QuestionType.TEXT_AREA,
      question: "Describe las diferencias principales entre aprendizaje supervisado, no supervisado y por refuerzo. Proporciona un ejemplo de cada uno.",
      correctAnswer: "Debe incluir definiciones claras de cada tipo y ejemplos apropiados.",
      aiValidationPrompt: "Valida si la respuesta incluye: 1) Definición de aprendizaje supervisado con ejemplo (clasificación, regresión), 2) Definición de aprendizaje no supervisado con ejemplo (clustering, reducción dimensionalidad), 3) Definición de aprendizaje por refuerzo con ejemplo (juegos, robótica).",
      explanation: "Aprendizaje supervisado usa datos etiquetados (ej: clasificar emails), no supervisado encuentra patrones sin etiquetas (ej: agrupar clientes), y por refuerzo aprende mediante interacción (ej: jugar ajedrez)."
    },
    {
      id: 11,
      type: QuestionType.SINGLE_CHOICE,
      question: "¿Cuál es el objetivo principal de la estadística descriptiva en el contexto de decisiones empresariales?",
      options: [
        "Predecir eventos futuros con certeza absoluta",
        "Comprender rápidamente qué está sucediendo en los datos",
        "Eliminar todos los sesgos del análisis",
        "Reemplazar completamente la intuición humana"
      ],
      correctAnswer: 1,
      explanation: "La estadística descriptiva tiene como objetivo principal comprender rápidamente qué está sucediendo en los datos para guiar las decisiones."
    },
    {
      id: 12,
      type: QuestionType.MULTIPLE_CHOICE,
      question: "¿Cuáles son los componentes principales del ciclo de datos para decisiones? (Selecciona todas las correctas)",
      options: [
        "Recolección",
        "Limpieza",
        "Transformación",
        "Análisis e interpretación",
        "Predicción del futuro"
      ],
      correctAnswer: [0, 1, 2, 3],
      explanation: "El ciclo de datos incluye recolección, limpieza, transformación y análisis e interpretación. La predicción del futuro no es parte del ciclo básico de datos."
    }
  ],
  totalQuestions: 13
};

const Quiz = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: any }>({});
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isValidatingAI, setIsValidatingAI] = useState(false);
  const [aiValidationResults, setAiValidationResults] = useState<{ [key: number]: boolean }>({});

  const currentQuestion = mockQuiz.questions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / mockQuiz.totalQuestions) * 100;
  const isLastQuestion = currentQuestionIndex === mockQuiz.totalQuestions - 1;

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answerIndex
    }));
  };

  const handleMultipleChoiceSelect = (answerIndex: number, checked: boolean) => {
    setSelectedAnswers(prev => {
      const currentAnswers = prev[currentQuestion.id] || [];
      if (checked) {
        return {
          ...prev,
          [currentQuestion.id]: [...currentAnswers, answerIndex]
        };
      } else {
        return {
          ...prev,
          [currentQuestion.id]: currentAnswers.filter((i: number) => i !== answerIndex)
        };
      }
    });
  };

  const handleTextAnswerChange = (answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));
  };

  const handleFillInBlankChange = (blankIndex: number, answer: string) => {
    setSelectedAnswers(prev => {
      const currentAnswers = prev[currentQuestion.id] || {};
      return {
        ...prev,
        [currentQuestion.id]: {
          ...currentAnswers,
          [blankIndex]: answer
        }
      };
    });
  };

  const handleTrueFalseSelect = (answer: boolean) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));
  };

  // AI Validation function
  const validateWithAI = async (questionId: number, answer: string, prompt: string): Promise<boolean> => {
    setIsValidatingAI(true);
    try {
      // Simulate AI validation API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock AI validation logic - in real implementation, this would call an AI API
      const mockValidation = Math.random() > 0.3; // 70% chance of being correct
      
      setAiValidationResults(prev => ({
        ...prev,
        [questionId]: mockValidation
      }));
      
      return mockValidation;
    } catch (error) {
      console.error('AI validation error:', error);
      return false;
    } finally {
      setIsValidatingAI(false);
    }
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      setShowResults(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFinishQuiz = () => {
    setQuizCompleted(true);
    // Navigate back to lesson after a delay
    setTimeout(() => {
      navigate(`/lesson/${slug}`);
    }, 3000);
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
    setQuizCompleted(false);
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    mockQuiz.questions.forEach(question => {
      const userAnswer = selectedAnswers[question.id];
      const correctAnswer = question.correctAnswer;
      
      if (question.type === QuestionType.TEXT_AREA) {
        // For text area questions, use AI validation result
        if (aiValidationResults[question.id] !== undefined) {
          if (aiValidationResults[question.id]) correctAnswers++;
        }
      } else if (question.type === QuestionType.MULTIPLE_CHOICE) {
        // For multiple choice, compare arrays
        if (Array.isArray(userAnswer) && Array.isArray(correctAnswer)) {
          const userSorted = [...userAnswer].sort();
          const correctSorted = [...correctAnswer].sort();
          if (JSON.stringify(userSorted) === JSON.stringify(correctSorted)) {
            correctAnswers++;
          }
        }
      } else if (question.type === QuestionType.FILL_IN_BLANK) {
        // For fill in blank, compare each blank
        if (userAnswer && typeof userAnswer === 'object') {
          const allCorrect = question.blanks?.every((blank, index) => 
            userAnswer[index]?.toLowerCase().trim() === blank.correctAnswer.toLowerCase().trim()
          );
          if (allCorrect) correctAnswers++;
        }
      } else {
        // For single choice and true/false
        if (userAnswer === correctAnswer) {
          correctAnswers++;
        }
      }
    });
    return correctAnswers;
  };

  const isAnswerValid = () => {
    const userAnswer = selectedAnswers[currentQuestion.id];
    
    if (currentQuestion.type === QuestionType.TEXT_AREA) {
      return userAnswer && userAnswer.trim().length > 0;
    } else if (currentQuestion.type === QuestionType.MULTIPLE_CHOICE) {
      return Array.isArray(userAnswer) && userAnswer.length > 0;
    } else if (currentQuestion.type === QuestionType.FILL_IN_BLANK) {
      return userAnswer && typeof userAnswer === 'object' && 
        currentQuestion.blanks?.every((blank, index) => userAnswer[index]?.trim().length > 0);
    } else {
      return userAnswer !== undefined && userAnswer !== null;
    }
  };

  const getScoreColor = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const renderParagraphWithBlanks = () => {
    if (!currentQuestion.paragraphWithBlanks || !currentQuestion.blanks) return null;
    
    const userAnswer = selectedAnswers[currentQuestion.id] || {};
    const text = currentQuestion.paragraphWithBlanks;
    
    // Split text by blanks and render with inline inputs
    let parts = text.split('_______');
    const elements = [];
    
    for (let i = 0; i < parts.length; i++) {
      // Add text part
      if (parts[i]) {
        elements.push(
          <span key={`text-${i}`} className="text-[#1c1d1f]">
            {parts[i]}
          </span>
        );
      }
      
      // Add input for blank (except after last text part)
      if (i < parts.length - 1) {
        const blankIndex = i;
        elements.push(
          <Input
            key={`input-${blankIndex}`}
            placeholder="..."
            value={userAnswer[blankIndex] || ''}
            onChange={(e) => handleFillInBlankChange(blankIndex, e.target.value)}
            className="inline-block w-32 mx-1 text-center border-b-2 border-primary bg-transparent focus:border-primary focus:ring-0"
          />
        );
      }
    }
    
    return (
      <div className="space-y-4">
        <div className="text-sm text-gray-600 mb-2">
          Completa los espacios en blanco en el párrafo:
        </div>
        <div className="p-4 bg-gray-50 rounded-lg leading-relaxed">
          {elements}
        </div>
      </div>
    );
  };

  const renderQuestionContent = () => {
    const userAnswer = selectedAnswers[currentQuestion.id];
    
    switch (currentQuestion.type) {
      case QuestionType.SINGLE_CHOICE:
        return (
          <RadioGroup
            value={userAnswer?.toString()}
            onValueChange={(value) => handleAnswerSelect(parseInt(value))}
            className="space-y-3"
          >
            {currentQuestion.options?.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        );

      case QuestionType.MULTIPLE_CHOICE:
        return (
          <div className="space-y-3">
            {currentQuestion.options?.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox
                  id={`option-${index}`}
                  checked={userAnswer?.includes(index) || false}
                  onCheckedChange={(checked) => handleMultipleChoiceSelect(index, checked as boolean)}
                />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </div>
        );

      case QuestionType.TRUE_FALSE:
        return (
          <RadioGroup
            value={userAnswer?.toString()}
            onValueChange={(value) => handleTrueFalseSelect(value === 'true')}
            className="space-y-3"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="true" id="true" />
              <Label htmlFor="true" className="cursor-pointer">Verdadero</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="false" id="false" />
              <Label htmlFor="false" className="cursor-pointer">Falso</Label>
            </div>
          </RadioGroup>
        );

      case QuestionType.TEXT_AREA:
        return (
          <div className="space-y-4">
            <Textarea
              placeholder="Escribe tu respuesta aquí..."
              value={userAnswer || ''}
              onChange={(e) => handleTextAnswerChange(e.target.value)}
              className="min-h-[120px]"
            />
            {userAnswer && userAnswer.trim().length > 0 && (
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => validateWithAI(currentQuestion.id, userAnswer, currentQuestion.aiValidationPrompt || '')}
                  disabled={isValidatingAI}
                >
                  {isValidatingAI ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Validando...
                    </>
                  ) : (
                    'Validar con IA'
                  )}
                </Button>
                {aiValidationResults[currentQuestion.id] !== undefined && (
                  <div className="flex items-center gap-1">
                    {aiValidationResults[currentQuestion.id] ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-green-600">Respuesta válida</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-4 w-4 text-red-600" />
                        <span className="text-sm text-red-600">Respuesta necesita mejora</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        );

      case QuestionType.FILL_IN_BLANK:
        return renderParagraphWithBlanks();

      default:
        return null;
    }
  };

  if (quizCompleted) {
    const score = calculateScore();
    const percentage = (score / mockQuiz.totalQuestions) * 100;
    
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto p-8">
          <div className="text-center">
            <div className="mb-8">
              <div className={`text-6xl mb-4 ${getScoreColor(score, mockQuiz.totalQuestions)}`}>
                {percentage >= 80 ? "🎉" : percentage >= 60 ? "👍" : "📚"}
              </div>
              <h1 className="text-4xl font-bold text-[#1c1d1f] mb-4">
                ¡Quiz Completado!
              </h1>
              <p className="text-xl text-[#6a6f73] mb-6">
                Obtuviste {score} de {mockQuiz.totalQuestions} respuestas correctas
              </p>
              <div className={`text-3xl font-bold ${getScoreColor(score, mockQuiz.totalQuestions)}`}>
                {percentage.toFixed(0)}%
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-[#6a6f73]">
                {percentage >= 80 
                  ? "¡Excelente trabajo! Has dominado el contenido de esta lección."
                  : percentage >= 60 
                  ? "Buen trabajo. Considera revisar algunos conceptos."
                  : "No te preocupes. Te recomendamos revisar la lección y volver a intentar."
                }
              </p>
              <p className="text-sm text-[#6a6f73]">
                Serás redirigido a la lección en unos segundos...
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto p-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-[#6a6f73] mb-2">
              <span>Quiz</span>
              <ChevronRight className="h-4 w-4" />
              <span>{mockQuiz.title}</span>
            </div>
            <h1 className="text-3xl font-bold text-[#1c1d1f] mb-4">
              Resultados del Quiz
            </h1>
          </div>

          <div className="space-y-6 mb-8">
            {mockQuiz.questions.map((question, index) => {
              const selectedAnswer = selectedAnswers[question.id];
              let isCorrect = false;
              
              // Determine if answer is correct based on question type
              if (question.type === QuestionType.TEXT_AREA) {
                isCorrect = aiValidationResults[question.id] === true;
              } else if (question.type === QuestionType.MULTIPLE_CHOICE) {
                const userSorted = Array.isArray(selectedAnswer) ? [...selectedAnswer].sort() : [];
                const correctSorted = Array.isArray(question.correctAnswer) ? [...question.correctAnswer].sort() : [];
                isCorrect = JSON.stringify(userSorted) === JSON.stringify(correctSorted);
              } else if (question.type === QuestionType.FILL_IN_BLANK) {
                isCorrect = question.blanks?.every((blank, index) => 
                  selectedAnswer?.[index]?.toLowerCase().trim() === blank.correctAnswer.toLowerCase().trim()
                ) || false;
              } else {
                isCorrect = selectedAnswer === question.correctAnswer;
              }
              
              return (
                <Card key={question.id} className={`${isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {isCorrect ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-600" />
                      )}
                      Pregunta {index + 1}
                      <Badge variant="secondary" className="text-xs ml-2">
                        {question.type === QuestionType.SINGLE_CHOICE && "Opción única"}
                        {question.type === QuestionType.MULTIPLE_CHOICE && "Opción múltiple"}
                        {question.type === QuestionType.TRUE_FALSE && "Verdadero/Falso"}
                        {question.type === QuestionType.TEXT_AREA && "Respuesta libre"}
                        {question.type === QuestionType.FILL_IN_BLANK && "Completar espacios"}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium mb-4">{question.question}</p>
                    
                    {/* Render answer based on question type */}
                    {question.type === QuestionType.TEXT_AREA && (
                      <div className="space-y-2">
                        <div className="p-3 rounded-md border border-gray-200 bg-white">
                          <strong>Tu respuesta:</strong> {selectedAnswer || 'Sin respuesta'}
                        </div>
                        <div className="p-3 rounded-md border border-blue-200 bg-blue-50">
                          <strong>Respuesta esperada:</strong> {question.correctAnswer}
                        </div>
                      </div>
                    )}
                    
                    {question.type === QuestionType.FILL_IN_BLANK && (
                      <div className="space-y-2">
                        <div className="p-3 rounded-md border border-gray-200 bg-white">
                          <strong>Párrafo con respuestas:</strong>
                          <div className="mt-2 p-3 bg-gray-50 rounded leading-relaxed">
                            {question.paragraphWithBlanks?.split('_______').map((part, partIndex) => (
                              <span key={partIndex}>
                                {part}
                                {partIndex < question.paragraphWithBlanks!.split('_______').length - 1 && (
                                  <span className={`inline-block px-2 py-1 mx-1 rounded border ${
                                    selectedAnswer?.[partIndex]?.toLowerCase().trim() === question.blanks?.[partIndex]?.correctAnswer.toLowerCase().trim()
                                      ? 'bg-green-100 border-green-500 text-green-800'
                                      : 'bg-red-100 border-red-500 text-red-800'
                                  }`}>
                                    "{selectedAnswer?.[partIndex] || 'Sin respuesta'}"
                                  </span>
                                )}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="p-3 rounded-md border border-blue-200 bg-blue-50">
                          <strong>Respuestas correctas:</strong>
                          <div className="mt-1 space-y-1">
                            {question.blanks?.map((blank, blankIndex) => (
                              <div key={blankIndex} className="text-sm">
                                Espacio {blankIndex + 1}: <span className="font-medium text-green-600">"{blank.correctAnswer}"</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {(question.type === QuestionType.SINGLE_CHOICE || question.type === QuestionType.MULTIPLE_CHOICE || question.type === QuestionType.TRUE_FALSE) && question.options && (
                      <div className="space-y-2">
                        {question.options.map((option, optionIndex) => {
                          let className = "p-3 rounded-md border ";
                          let isSelected = false;
                          
                          if (question.type === QuestionType.MULTIPLE_CHOICE) {
                            isSelected = Array.isArray(selectedAnswer) && selectedAnswer.includes(optionIndex);
                            if (Array.isArray(question.correctAnswer) && question.correctAnswer.includes(optionIndex)) {
                              className += "border-green-500 bg-green-100 text-green-800";
                            } else if (isSelected && (!Array.isArray(question.correctAnswer) || !question.correctAnswer.includes(optionIndex))) {
                              className += "border-red-500 bg-red-100 text-red-800";
                            } else {
                              className += "border-gray-200 bg-white";
                            }
                          } else {
                            isSelected = optionIndex === selectedAnswer;
                            if (optionIndex === question.correctAnswer) {
                              className += "border-green-500 bg-green-100 text-green-800";
                            } else if (isSelected && optionIndex !== question.correctAnswer) {
                              className += "border-red-500 bg-red-100 text-red-800";
                            } else {
                              className += "border-gray-200 bg-white";
                            }
                          }
                          
                          return (
                            <div key={optionIndex} className={className}>
                              {option}
                            </div>
                          );
                        })}
                      </div>
                    )}
                    
                    <div className="mt-4 p-3 bg-blue-50 rounded-md">
                      <p className="text-sm text-blue-800">
                        <strong>Explicación:</strong> {question.explanation}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-6 border-t">
            <Button
              variant="outline"
              onClick={handleRetakeQuiz}
              className="flex items-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Repetir Quiz
            </Button>
            <Button
              onClick={handleFinishQuiz}
              className="bg-primary hover:bg-primary/90"
            >
              Finalizar Quiz
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-4xl mx-auto p-8">
        {/* Quiz Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-[#6a6f73] mb-2">
            <span>Lección</span>
            <ChevronRight className="h-4 w-4" />
            <span>Quiz</span>
          </div>
          <h1 className="text-3xl font-bold text-[#1c1d1f] mb-4">
            {mockQuiz.title}
          </h1>
          <div className="flex items-center gap-4 mb-6">
            <Badge variant="outline" className="text-sm">
              Pregunta {currentQuestionIndex + 1} de {mockQuiz.totalQuestions}
            </Badge>
            <Badge variant="outline" className="text-sm">
              {mockQuiz.totalQuestions} preguntas
            </Badge>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">
              {currentQuestion.question}
            </CardTitle>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="secondary" className="text-xs">
                {currentQuestion.type === QuestionType.SINGLE_CHOICE && "Opción única"}
                {currentQuestion.type === QuestionType.MULTIPLE_CHOICE && "Opción múltiple"}
                {currentQuestion.type === QuestionType.TRUE_FALSE && "Verdadero/Falso"}
                {currentQuestion.type === QuestionType.TEXT_AREA && "Respuesta libre"}
                {currentQuestion.type === QuestionType.FILL_IN_BLANK && "Completar espacios"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            {renderQuestionContent()}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-6 border-t">
          <Button
            variant="outline"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Pregunta anterior
          </Button>
          <Button
            onClick={handleNextQuestion}
            disabled={!isAnswerValid()}
            className="bg-primary hover:bg-primary/90"
          >
            {isLastQuestion ? 'Ver resultados' : 'Siguiente pregunta'}
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Quiz;
