import { useState, useEffect } from "react";
import { LanguageSelector } from "@/components/LanguageSelector";
import { MainLayout } from "@/components/MainLayout";

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export const AppWithLayout = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load saved language from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      try {
        const parsedLanguage = JSON.parse(savedLanguage);
        setSelectedLanguage(parsedLanguage);
      } catch (error) {
        console.error('Error parsing saved language:', error);
      }
    }
    setIsLoading(false);
  }, []);

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    // Save selected language to localStorage
    localStorage.setItem('selectedLanguage', JSON.stringify(language));
  };

  // Show loading while checking for saved language
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-accent/5 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!selectedLanguage) {
    return <LanguageSelector onLanguageSelect={handleLanguageSelect} />;
  }

  return <MainLayout selectedLanguage={selectedLanguage} />;
};