import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  MessageSquare, 
  Mic, 
  Phone, 
  Volume2,
  Languages,
  Smartphone,
  Send,
  Bot,
  User,
  Clock,
  Zap,
  Shield,
  Globe,
  Wifi,
  WifiOff
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { VoiceAssistantSection } from "@/components/VoiceAssistantSection";

export const AssistantPage = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      type: "user",
      message: "मेरी टमाटर की पत्तियां पीली हो रही हैं",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      language: "hi"
    },
    {
      id: 2,
      type: "assistant",
      message: "यह नाइट्रोजन की कमी का लक्षण है। यूरिया खाद डालें और मिट्टी की जांच करवाएं।",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000 + 30000),
      language: "hi"
    },
    {
      id: 3,
      type: "user",
      message: "कब तक सिंचाई करनी चाहिए?",
      timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
      language: "hi"
    },
    {
      id: 4,
      type: "assistant",
      message: "अभी मिट्टी में नमी 72% है। 2-3 दिन बाद सिंचाई करें।",
      timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000 + 30000),
      language: "hi"
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: chatHistory.length + 1,
        type: "user",
        message: message,
        timestamp: new Date(),
        language: "hi"
      };
      setChatHistory(prev => [...prev, newMessage]);
      setMessage("");
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: chatHistory.length + 2,
          type: "assistant",
          message: "मैं आपकी समस्या समझ गया हूं। कृपया थोड़ा विस्तार से बताएं कि आपकी फसल की स्थिति कैसी है?",
          timestamp: new Date(),
          language: "hi"
        };
        setChatHistory(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  const quickQuestions = [
    "मेरी फसल में कीड़े लगे हैं",
    "खाद कब डालना चाहिए?",
    "बाजार में भाव क्या है?",
    "मौसम कैसा रहेगा?",
    "सिंचाई कब करें?",
    "बीज कौन सा बोएं?"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-accent/5">
      {/* Header */}
      <div className="bg-white/95 backdrop-blur-sm shadow-soft border-b border-border/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-2xl">
                🎤
              </div>
          <div>
                <h1 className="text-2xl font-bold text-foreground">Voice Assistant</h1>
                <p className="text-sm text-muted-foreground">AI-powered farming advisor</p>
              </div>
          </div>
          <Link to="/">
              <Button variant="outline">← Back to Dashboard</Button>
          </Link>
          </div>
        </div>
            </div>
            
      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="border-b">
              <CardTitle className="flex items-center space-x-2">
                  <Bot className="w-5 h-5 text-green-600" />
                  <span>Chat with AI Assistant</span>
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    Online
                  </Badge>
              </CardTitle>
            </CardHeader>
              
              <CardContent className="flex-1 flex flex-col p-0">
                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {chatHistory.map((chat) => (
                    <div key={chat.id} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] p-3 rounded-lg ${
                        chat.type === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}>
                        <div className="flex items-center space-x-2 mb-1">
                          {chat.type === 'user' ? (
                            <User className="w-4 h-4" />
                          ) : (
                            <Bot className="w-4 h-4" />
                          )}
                          <span className="text-xs opacity-70">
                            {chat.timestamp.toLocaleTimeString('en-IN', {
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </span>
                        </div>
                        <p className="text-sm">{chat.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Message Input */}
                <div className="border-t p-4">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Type your farming question..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button
                      variant={isRecording ? "destructive" : "outline"}
                      onClick={() => setIsRecording(!isRecording)}
                      size="icon"
                    >
                      <Mic className="w-4 h-4" />
              </Button>
                    <Button onClick={handleSendMessage} size="icon">
                      <Send className="w-4 h-4" />
              </Button>
                  </div>
                </div>
            </CardContent>
          </Card>
        </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Questions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {quickQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="w-full text-left h-auto p-3 justify-start"
                      onClick={() => setMessage(question)}
                    >
                      <MessageSquare className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="text-sm">{question}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Integration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-green-600" />
                  <span>WhatsApp Assistant</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Get farming advice directly on WhatsApp. Works on any phone!
                </p>
                <Button className="w-full bg-green-500 hover:bg-green-600">
                  <Phone className="w-4 h-4 mr-2" />
                  Start WhatsApp Chat
                </Button>
                <div className="mt-3 text-xs text-muted-foreground">
                  Send: "Hi" to +91-9876543210
                </div>
              </CardContent>
            </Card>

            {/* SMS Support */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Smartphone className="w-5 h-5 text-blue-600" />
                  <span>SMS Support</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Works offline! Send SMS for basic farming advice.
                </p>
                <Button variant="outline" className="w-full">
                  <WifiOff className="w-4 h-4 mr-2" />
                  Setup SMS
                </Button>
                <div className="mt-3 text-xs text-muted-foreground">
                  Text: "HELP" to 56767
                </div>
              </CardContent>
            </Card>

            {/* Language Support */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Languages className="w-5 h-5" />
                  <span>Supported Languages</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    "हिंदी", "English", "ગુજરાતી", "मराठी",
                    "ਪੰਜਾਬੀ", "বাংলা", "తెలుగు", "தமிழ்"
                  ].map((lang, index) => (
                    <div key={index} className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>{lang}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-yellow-600" />
                  <span>Features</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span>24/7 Available</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-blue-600" />
                    <span>Works Offline</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Volume2 className="w-4 h-4 text-purple-600" />
                    <span>Voice Support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-orange-600" />
                    <span>Instant Response</span>
                  </div>
                </div>
              </CardContent>
            </Card>
      </div>
        </div>
      </div>

      {/* Voice Assistant Section */}
      <VoiceAssistantSection />
    </div>
  );
};