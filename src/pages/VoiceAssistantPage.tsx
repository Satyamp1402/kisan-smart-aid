import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Mic, 
  MicOff, 
  Send, 
  Volume2, 
  VolumeX, 
  MessageSquare,
  Bot,
  User,
  Headphones,
  Languages,
  Settings,
  Zap,
  Leaf,
  Cloud,
  DollarSign,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  Smartphone
} from "lucide-react";
import { Link } from "react-router-dom";

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  audioUrl?: string;
}

interface QuickQuery {
  id: string;
  text: string;
  icon: any;
  category: string;
}

export const VoiceAssistantPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: 'नमस्कार! मैं आपका कृषि सहायक हूं। आप मुझसे खेती, मौसम, बाजार की कीमतों और फसल की देखभाल के बारे में कुछ भी पूछ सकते हैं। आप बोलकर या टाइप करके सवाल पूछ सकते हैं।',
      timestamp: new Date(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('hi');
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQueries: QuickQuery[] = [
    { id: '1', text: 'आज का मौसम कैसा है?', icon: Cloud, category: 'Weather' },
    { id: '2', text: 'गेहूं की कीमत क्या है?', icon: DollarSign, category: 'Market' },
    { id: '3', text: 'फसल में रोग के लक्षण', icon: Leaf, category: 'Health' },
    { id: '4', text: 'सिंचाई का समय', icon: Calendar, category: 'Schedule' },
    { id: '5', text: 'खाद कब डालें?', icon: Zap, category: 'Fertilizer' },
    { id: '6', text: 'कटाई का सही समय', icon: Calendar, category: 'Harvest' }
  ];

  const languages = [
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
    { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
    { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' },
    { code: 'mr', name: 'मराठी', flag: '🇮🇳' }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate AI response
    setTimeout(() => {
      const responses = getAIResponse(message);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: responses,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const getAIResponse = (query: string): string => {
    const lowercaseQuery = query.toLowerCase();
    
    if (lowercaseQuery.includes('मौसम') || lowercaseQuery.includes('weather')) {
      return '🌤️ **आज का मौसम:** आज का तापमान 28°C है, आर्द्रता 65% है। कल बारिश की संभावना है, इसलिए आज सिंचाई न करें।\n\n📅 **सुझाव:** खेत का काम आज पूरा करें क्योंकि कल से बारिश शुरू हो सकती है।';
    }
    
    if (lowercaseQuery.includes('कीमत') || lowercaseQuery.includes('price') || lowercaseQuery.includes('गेहूं')) {
      return '💰 **आज की मंडी भाव:**\n\n🌾 गेहूं: ₹2,400/क्विंटल (+5%)\n🌾 धान: ₹3,200/क्विंटल\n🌽 मक्का: ₹1,800/क्विंटल\n\n📈 **सुझाव:** गेहूं की कीमतें बढ़ रही हैं, अगले हफ्ते बेचना फायदेमंद होगा।';
    }
    
    if (lowercaseQuery.includes('रोग') || lowercaseQuery.includes('बीमारी') || lowercaseQuery.includes('disease')) {
      return '🔍 **फसल स्वास्थ्य जांच:**\n\n⚠️ **सामान्य लक्षण:**\n• पत्तियों पर पीले धब्बे\n• पत्तियों का मुरझाना\n• तना में कीड़े\n\n💊 **उपाय:**\n• नीम का तेल छिड़कें\n• कॉपर सल्फेट का प्रयोग करें\n• अच्छी जल निकासी सुनिश्चित करें';
    }
    
    if (lowercaseQuery.includes('सिंचाई') || lowercaseQuery.includes('पानी') || lowercaseQuery.includes('irrigation')) {
      return '💧 **सिंचाई सुझाव:**\n\n✅ **अभी सिंचाई करें:** मिट्टी की नमी 45% है\n\n⏰ **सिंचाई समय:** सुबह 6-8 बजे या शाम 5-7 बजे\n\n📊 **मात्रा:** एकड़ के लिए 1000-1500 लीटर पानी\n\n⚡ **टिप:** कल बारिश की संभावना है, इसलिए हल्की सिंचाई करें।';
    }
    
    if (lowercaseQuery.includes('खाद') || lowercaseQuery.includes('fertilizer') || lowercaseQuery.includes('उर्वरक')) {
      return '🌱 **खाद और उर्वरक सुझाव:**\n\n📅 **अभी डालें:**\n• यूरिया: 50 किलो/एकड़\n• DAP: 25 किलो/एकड़\n• पोटाश: 20 किलो/एकड़\n\n⚡ **जैविक खाद:**\n• गोबर की खाद: 500 किलो/एकड़\n• केंचुआ खाद बहुत फायदेमंद\n\n💰 **लागत:** लगभग ₹3,000/एकड़';
    }

    if (lowercaseQuery.includes('कटाई') || lowercaseQuery.includes('harvest') || lowercaseQuery.includes('फसल काटना')) {
      return '🌾 **कटाई की जानकारी:**\n\n📅 **सही समय:** अगले 2 सप्ताह में कटाई करें\n\n🌤️ **मौसम:** धूप वाले दिन कटाई करें\n\n📊 **फसल तैयारी:** 85% दाने पक गए हैं\n\n💰 **बाजार सुझाव:** कटाई के तुरंत बाद बेचें, कीमतें अच्छी हैं';
    }

    return '🤔 मुझे आपका सवाल समझ नहीं आया। कृपया अपना सवाल दोबारा पूछें या निम्नलिखित विषयों के बारे में पूछें:\n\n• मौसम की जानकारी\n• बाजार की कीमतें\n• फसल की बीमारी\n• सिंचाई और खाद\n• कटाई का समय\n\nआप वॉइस या टेक्स्ट दोनों में सवाल पूछ सकते हैं।';
  };

  const handleQuickQuery = (query: string) => {
    handleSendMessage(query);
  };

  const toggleListening = () => {
    if (isListening) {
      // Stop listening
      setIsListening(false);
    } else {
      // Start listening
      setIsListening(true);
      // Simulate voice recognition
      setTimeout(() => {
        setInputMessage('मेरी फसल में पत्तियां पीली हो रही हैं');
        setIsListening(false);
      }, 3000);
    }
  };

  const toggleSpeaking = () => {
    setIsSpeaking(!isSpeaking);
    setVoiceEnabled(!voiceEnabled);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Header */}
      <header className="bg-card/95 backdrop-blur-sm shadow-medium border-b border-border/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-muted-foreground hover:text-foreground">
                ← Back to Dashboard
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">AI Voice Assistant</h1>
                  <p className="text-sm text-muted-foreground">Your personal agricultural advisor</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Languages className="w-4 h-4" />
                <select 
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="text-sm border border-border rounded px-2 py-1 bg-background"
                >
                  {languages.map(lang => (
                    <option key={lang.code} value={lang.code}>
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="h-[600px] flex flex-col border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader className="border-b border-border/20">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-5 h-5" />
                    <span>Chat with AI Assistant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-100 text-green-800">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Online
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleSpeaking}
                      className={voiceEnabled ? 'text-blue-600' : 'text-gray-400'}
                    >
                      {voiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 p-0 overflow-y-auto">
                <div className="p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-3 max-w-[80%] ${
                        message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.type === 'user' 
                            ? 'bg-gradient-primary text-white' 
                            : 'bg-gradient-sage text-white'
                        }`}>
                          {message.type === 'user' ? 
                            <User className="w-4 h-4" /> : 
                            <Bot className="w-4 h-4" />
                          }
                        </div>
                        <div className={`rounded-lg p-3 ${
                          message.type === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary text-secondary-foreground'
                        }`}>
                          <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                          <div className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString('en-IN', { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>

              {/* Input Area */}
              <div className="border-t border-border/20 p-4">
                <div className="flex space-x-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your question or use voice..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputMessage)}
                    className="flex-1"
                  />
                  <Button
                    onClick={toggleListening}
                    variant={isListening ? "default" : "outline"}
                    size="icon"
                    className={isListening ? 'bg-red-500 hover:bg-red-600 text-white' : ''}
                  >
                    {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </Button>
                  <Button
                    onClick={() => handleSendMessage(inputMessage)}
                    disabled={!inputMessage.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                
                {isListening && (
                  <div className="mt-3 flex items-center justify-center space-x-2 text-red-600">
                    <div className="animate-pulse">
                      <Mic className="w-4 h-4" />
                    </div>
                    <span className="text-sm">Listening... Speak now</span>
                    <div className="flex space-x-1">
                      <div className="w-1 h-4 bg-red-500 animate-pulse"></div>
                      <div className="w-1 h-4 bg-red-500 animate-pulse" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-1 h-4 bg-red-500 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Quick Actions & Info */}
          <div className="space-y-6">
            {/* Voice Status */}
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Headphones className="w-5 h-5 text-green-500" />
                  <span>Voice Assistant Status</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Voice Recognition</span>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Text to Speech</span>
                  <Badge className={voiceEnabled ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}>
                    {voiceEnabled ? 'Enabled' : 'Disabled'}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Language</span>
                  <Badge className="bg-blue-100 text-blue-800">Hindi</Badge>
                </div>
                
                <div className="pt-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Voice Quality</span>
                    <span className="text-sm text-green-600">Excellent</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Quick Queries */}
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-orange-500" />
                  <span>Quick Questions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-2">
                  {quickQueries.map((query) => {
                    const Icon = query.icon;
                    return (
                      <Button
                        key={query.id}
                        variant="ghost"
                        onClick={() => handleQuickQuery(query.text)}
                        className="justify-start text-left h-auto p-3 hover:bg-secondary/50"
                      >
                        <Icon className="w-4 h-4 mr-2 text-blue-500" />
                        <span className="text-sm">{query.text}</span>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* AI Capabilities */}
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="w-5 h-5 text-purple-500" />
                  <span>AI Capabilities</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Weather Information</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Market Price Updates</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Crop Disease Diagnosis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Irrigation Guidance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Fertilizer Recommendations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Harvest Timing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>Government Schemes (Coming Soon)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="bg-blue-50 border-blue-200 border-border/50 bg-card/90 backdrop-blur-sm">
              <CardContent className="p-4">
                <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Voice Assistant Tips:
                </h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Speak clearly and slowly</li>
                  <li>• Ask specific questions</li>
                  <li>• Use Hindi or English</li>
                  <li>• You can type or speak</li>
                  <li>• Ask follow-up questions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};