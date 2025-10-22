import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronRight, Play, Pause, Volume2, BookOpen, CheckCircle2, Circle, FileText, HelpCircle, List, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

// Mock data structure based on course.json
interface Slide {
  id: number;
  title: string;
  type: string;
  contents_json: string;
}

interface Section {
  id: number;
  uuid: string;
  title: string;
  content: string;
  duration_minutes: number;
  slide: Slide;
  audio_url: string | null;
  cloned_audio_url: string | null;
  avatar_video_url: string | null;
  completed?: boolean;
}

interface Lesson {
  id: number;
  title: string;
  duration_minutes: number;
  sections: Section[];
}

interface Module {
  id: number;
  title: string;
  duration_minutes: number;
  order: number;
  lessons: Lesson[];
}

interface Course {
  id: number;
  title: string;
  duration_minutes: number;
  modules: Module[];
}

// Mock course data (simplified from course.json)
const mockCourse: Course = {
  id: 5,
  title: "Machine Learning y Matemáticas",
  duration_minutes: 120,
  modules: [
    {
      id: 12,
      title: "Decisiones basadas en datos",
      duration_minutes: 20,
      order: 0,
      lessons: [
        {
          id: 12,
          title: "Decisiones guidate dai dati e etica",
          duration_minutes: 20,
          sections: [
            {
              id: 85,
              uuid: "981d08f4-9b0e-40ed-a134-07485c1a4d2a",
              title: "Data-driven vs intuizione",
              content: "Per iniziare, una domanda semplice ma potente: cosa guida davvero le nostre decisioni, i dati che osserviamo o solo la nostra sensazione? Benvenuti a questa lezione, dove esploriamo come la decisione guidata dai dati trasformi il modo in cui lavoriamo, pensiamo e prendiamo scelte nel mondo reale...",
              duration_minutes: 3,
              slide: {
                id: 780,
                title: "Decisioni data-driven e intuizione",
                type: "text",
                contents_json: JSON.stringify([
                  "Scelte **data-driven** basate su evidenze misurabili, test di ipotesi e monitoraggio continuo",
                  "L'**intuizione** deriva dall'esperienza e guida quando le informazioni sono scarse o servono decisioni *rapide*",
                  "**Vantaggi**: maggiore chiarezza, ripetibilità e riduzione dei bias personali",
                  "**Limiti**: quando i dati sono incompleti o mal interpretati; mitigare con fonti affidabili, metriche pertinenti e mentalità critica"
                ])
              },
              audio_url: "https://audios-avatar.s3.eu-north-1.amazonaws.com/audios/981d08f4-9b0e-40ed-a134-07485c1a4d2a.mp3",
              cloned_audio_url: "https://audios-avatar.s3.eu-north-1.amazonaws.com/audios/981d08f4-9b0e-40ed-a134-07485c1a4d2a_cloned.mp3",
              avatar_video_url: null,
              completed: false
            },
            {
              id: 86,
              uuid: "27423b5c-2c73-44ed-8fea-a04bb0de715f",
              title: "Ciclo dei dati",
              content: "Let's begin from the start: il ciclo dei dati nel contesto decisionale non è una sequenza sterile di operazioni, ma una narrazione coerente che costruisce evidenze affidabili. **Raccolta**: qui definiremo cosa e come misuriamo i fenomeni di interesse...",
              duration_minutes: 3,
              slide: {
                id: 781,
                title: "Ciclo dei dati decisionale",
                type: "text",
                contents_json: JSON.stringify([
                  "**Raccolta**: definire variabili, fonti e metadati per ridurre bias e garantire trasparenza",
                  "**Pulizia**: gestire valori mancanti, duplicati e outlier per separare segnale da rumore",
                  "**Trasformazione**: aggregazioni, nuove variabili e normalizzazioni per rendere i dati utilizzabili",
                  "**Analisi e interpretazione**: sintesi descrittive e collegamento al contesto per costruire evidenza affidabile"
                ])
              },
              audio_url: "https://audios-avatar.s3.eu-north-1.amazonaws.com/audios/27423b5c-2c73-44ed-8fea-a04bb0de715f.mp3",
              cloned_audio_url: "https://audios-avatar.s3.eu-north-1.amazonaws.com/audios/27423b5c-2c73-44ed-8fea-a04bb0de715f_cloned.mp3",
              avatar_video_url: null,
              completed: false
            },
            {
              id: 87,
              uuid: "9ef89be3-d8d8-46a5-884e-a37ff3cf3b2f",
              title: "Statistica descrittiva per decisioni",
              content: "Lasciamo da parte per un attimo la tecnica: la statistica descrittiva è lo strumento che ci consente di capire rapidamente cosa sta succedendo nei dati e, soprattutto, cosa possiamo fare con quello che vediamo...",
              duration_minutes: 3,
              slide: {
                id: 782,
                title: "Statistica descrittiva per decisioni",
                type: "text",
                contents_json: JSON.stringify([
                  "La statistica descrittiva è lo strumento per comprendere i dati e guidare le decisioni",
                  "La **media** indica il valore medio atteso se la distribuzione è equilibrata",
                  "La **mediana** è più robusta con valori estremi",
                  "La **varianza** e la **deviazione standard** misurano la dispersione e rivelano stabilità o rischio operativo"
                ])
              },
              audio_url: "https://audios-avatar.s3.eu-north-1.amazonaws.com/audios/9ef89be3-d8d8-46a5-884e-a37ff3cf3b2f.mp3",
              cloned_audio_url: "https://audios-avatar.s3.eu-north-1.amazonaws.com/audios/9ef89be3-d8d8-46a5-884e-a37ff3cf3b2f_cloned.mp3",
              avatar_video_url: null,
              completed: false
            }
          ]
        }
      ]
    },
    {
      id: 13,
      title: "Metodi di Machine Learning",
      duration_minutes: 40,
      order: 1,
      lessons: [
        {
          id: 13,
          title: "Metodi e valutazione del Machine Learning",
          duration_minutes: 40,
          sections: [
            {
              id: 75,
              uuid: "22851ec3-798f-4a16-a599-fe2947e7bdef",
              title: "Introduzione ai tipi di apprendimento",
              content: "Benvenuti a tutti in aula. Oggi iniziamo un viaggio pratico e concettuale nel mondo dell'apprendimento automatico...",
              duration_minutes: 4,
              slide: {
                id: 788,
                title: "Paradigmi di apprendimento",
                type: "text",
                contents_json: JSON.stringify([
                  "**Obiettivo**: fornire una mappa *pratica e concettuale* per scegliere il paradigma più adatto",
                  "**Apprendimento supervisionato**: usa dati etichettati per prevedere output da input",
                  "**Apprendimento non supervisionato**: scopre strutture e gruppi in dati non etichettati",
                  "**Apprendimento per rinforzo**: impara politiche tramite interazione sequenziale con l'ambiente"
                ])
              },
              audio_url: null,
              cloned_audio_url: null,
              avatar_video_url: null,
              completed: false
            }
          ]
        }
      ]
    }
  ]
};

const Lesson = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  // Get current section and lesson
  const currentModule = mockCourse.modules[0];
  const currentLesson = currentModule.lessons[0];
  const currentSection = currentLesson.sections[currentSectionIndex];
  const totalSections = currentLesson.sections.length;
  const progressPercentage = ((currentSectionIndex + 1) / totalSections) * 100;

  // Parse slide contents
  const slideContents = currentSection.slide.contents_json 
    ? JSON.parse(currentSection.slide.contents_json) 
    : [];

  const handleNextSection = () => {
    if (currentSectionIndex < totalSections - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      setIsPlaying(false);
    }
  };

  const handlePreviousSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
      setIsPlaying(false);
    }
  };

  const handleSectionSelect = (index: number) => {
    setCurrentSectionIndex(index);
    setIsPlaying(false);
  };

  const handleGenerateSlides = async () => {
    setIsGenerating(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsGenerating(false);
    // Here you would typically call an API to generate slides
    console.log('Generating slides for lesson:', currentLesson.title);
  };

  const handleGenerateQuiz = async () => {
    setIsGenerating(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsGenerating(false);
    // Navigate to quiz page
    navigate(`/lesson/${slug}/quiz`);
  };

  

  const handleMarkAsCompleted = () => {
    // Mark current section as completed
    currentSection.completed = !currentSection.completed;
    // Force re-render by updating state
    setCurrentSectionIndex(currentSectionIndex);
    console.log(`Section "${currentSection.title}" marked as ${currentSection.completed ? 'completed' : 'incomplete'}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex h-[calc(100vh-72px)]">
        {/* Sidebar */}
        <aside 
          className={`${
            sidebarCollapsed ? 'w-0' : 'w-80'
          } transition-all duration-300 border-r bg-background overflow-hidden`}
        >
          <div className="h-full flex flex-col">
            {/* Course Header */}
            <div className="p-4 border-b">
              <h2 className="font-bold text-lg text-[#1c1d1f] mb-2">
                {mockCourse.title}
              </h2>
              <div className="space-y-2">
                <Progress value={progressPercentage} className="h-2" />
                <p className="text-sm text-[#6a6f73]">
                  {currentSectionIndex + 1} de {totalSections} secciones completadas
                </p>
              </div>
            </div>

            {/* Modules and Lessons */}
            <ScrollArea className="flex-1">
              <div className="p-4 space-y-4">
                {mockCourse.modules.map((module, moduleIndex) => (
                  <div key={module.id} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <h3 className="font-semibold text-sm text-[#1c1d1f]">
                        Módulo {moduleIndex + 1}: {module.title}
                      </h3>
                    </div>
                    <div className="ml-6 space-y-1">
                      {module.lessons.map((lesson) => (
                        <div key={lesson.id} className="space-y-1">
                          <p className="text-sm font-medium text-[#1c1d1f] mb-2">
                            {lesson.title}
                          </p>
                          {lesson.sections.map((section, sectionIndex) => (
                            <button
                              key={section.id}
                              onClick={() => handleSectionSelect(
                                moduleIndex === 0 ? sectionIndex : 0
                              )}
                              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center gap-2 ${
                                currentSection.id === section.id
                                  ? 'bg-primary/10 text-primary font-medium'
                                  : 'text-[#6a6f73] hover:bg-muted'
                              }`}
                            >
                              {section.completed ? (
                                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                              ) : (
                                <Circle className="h-4 w-4 flex-shrink-0" />
                              )}
                              <span className="flex-1 line-clamp-2">{section.title}</span>
                              <span className="text-xs text-muted-foreground flex-shrink-0">
                                {section.duration_minutes} min
                              </span>
                            </button>
                          ))}
                        </div>
                      ))}
                    </div>
                    {moduleIndex < mockCourse.modules.length - 1 && (
                      <Separator className="my-4" />
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="max-w-5xl mx-auto p-8">
            {/* Section Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-sm text-[#6a6f73] mb-2">
                <span>{currentModule.title}</span>
                <ChevronRight className="h-4 w-4" />
                <span>{currentLesson.title}</span>
              </div>
              <h1 className="text-3xl font-bold text-[#1c1d1f] mb-4">
                {currentSection.title}
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <Badge variant="outline" className="text-sm">
                  {currentSection.duration_minutes} minutos
                </Badge>
                <Badge variant="outline" className="text-sm">
                  Sección {currentSectionIndex + 1} de {totalSections}
                </Badge>
              </div>
              
              {/* Generation Buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <Button
                  onClick={handleGenerateSlides}
                  disabled={isGenerating}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Sparkles className="h-4 w-4" />
                  {isGenerating ? 'Generando...' : 'Generar Slides'}
                </Button>
                <Button
                  onClick={handleGenerateQuiz}
                  disabled={isGenerating}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <HelpCircle className="h-4 w-4" />
                  {isGenerating ? 'Generando...' : 'Generar Quiz'}
                </Button>
                <Button
                  onClick={handleMarkAsCompleted}
                  variant={currentSection.completed ? "default" : "outline"}
                  className={`flex items-center gap-2 ${
                    currentSection.completed 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'border-green-600 text-green-600 hover:bg-green-50'
                  }`}
                >
                  <CheckCircle2 className="h-4 w-4" />
                  {currentSection.completed ? 'Marcada como completada' : 'Marcar como completada'}
                </Button>
              </div>
            </div>

            {/* Video/Audio Player Placeholder */}
            {(currentSection.avatar_video_url || currentSection.audio_url) && (
              <div className="mb-8 bg-[#1c1d1f] rounded-lg aspect-video flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20" />
                <Button
                  size="lg"
                  className="relative z-10 rounded-full h-16 w-16"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <Pause className="h-8 w-8" />
                  ) : (
                    <Play className="h-8 w-8 ml-1" />
                  )}
                </Button>
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="flex items-center gap-2 text-white">
                    <Volume2 className="h-5 w-5" />
                    <Progress value={33} className="flex-1" />
                    <span className="text-sm">1:23 / 3:00</span>
                  </div>
                </div>
              </div>
            )}

            {/* Slide Content */}
            <div className="mb-8 border rounded-lg p-6 bg-[#f7f9fa]">
              <h2 className="text-2xl font-bold text-[#1c1d1f] mb-4">
                {currentSection.slide.title}
              </h2>
              <div className="space-y-3">
                {slideContents.map((content: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p 
                      className="text-[#1c1d1f] leading-relaxed"
                      dangerouslySetInnerHTML={{ 
                        __html: content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          .replace(/\*(.*?)\*/g, '<em>$1</em>')
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Section Content */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#1c1d1f] mb-4">
                Contenido de la lección
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-[#1c1d1f] leading-relaxed whitespace-pre-line">
                  {currentSection.content}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-6 border-t">
              <Button
                variant="outline"
                onClick={handlePreviousSection}
                disabled={currentSectionIndex === 0}
                className="font-semibold"
              >
                ← Sección anterior
              </Button>
              <Button
                onClick={handleNextSection}
                disabled={currentSectionIndex === totalSections - 1}
                className="font-semibold bg-primary hover:bg-primary/90"
              >
                Siguiente sección →
              </Button>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Lesson;

