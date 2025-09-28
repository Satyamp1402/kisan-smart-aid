import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

const languages: Language[] = [
  { code: "hi", name: "Hindi", nativeName: "हिंदी", flag: "🇮🇳" },
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు", flag: "🇮🇳" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்", flag: "🇮🇳" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ", flag: "🇮🇳" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം", flag: "🇮🇳" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা", flag: "🇮🇳" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી", flag: "🇮🇳" },
  { code: "mr", name: "Marathi", nativeName: "मराठी", flag: "🇮🇳" },
  { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ", flag: "🇮🇳" },
];

interface LanguageSelectorProps {
  onLanguageSelect: (language: Language) => void;
}

export const LanguageSelector = ({ onLanguageSelect }: LanguageSelectorProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
  };

  const handleContinue = () => {
    if (selectedLanguage) {
      onLanguageSelect(selectedLanguage);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-accent/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl mx-auto shadow-medium border-border/50 bg-card/95 backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🌾</div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Choose Your Language
            </h1>
            <p className="text-muted-foreground">
              अपनी भाषा चुनें • Select your preferred language
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language)}
                className={`p-4 rounded-lg border-2 transition-all hover:scale-105 ${
                  selectedLanguage?.code === language.code
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="text-2xl mb-2">{language.flag}</div>
                <div className="font-semibold text-foreground">
                  {language.nativeName}
                </div>
                <div className="text-sm text-muted-foreground">
                  {language.name}
                </div>
              </button>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={handleContinue}
              disabled={!selectedLanguage}
              size="lg"
              className="px-8"
            >
              Continue • जारी रखें
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};