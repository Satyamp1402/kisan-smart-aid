import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  HelpCircle, 
  Phone, 
  Mail, 
  MessageSquare, 
  BookOpen,
  Video,
  Users,
  FileText
} from "lucide-react";
import { Link } from "react-router-dom";

export const HelpPage = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">सहायता केंद्र</h1>
            <p className="text-muted-foreground">Get help and support for farming solutions</p>
          </div>
          <Link to="/">
            <Button variant="outline">← डैशबोर्ड पर वापस</Button>
          </Link>
        </div>

        {/* Quick Help Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">तत्काल सहायता</h3>
              <p className="text-sm text-muted-foreground mb-3">24x7 हेल्पलाइन</p>
              <Button variant="outline" size="sm">
                1800-123-4567
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">चैट सपोर्ट</h3>
              <p className="text-sm text-muted-foreground mb-3">तुरंत सहायता</p>
              <Button variant="outline" size="sm">
                चैट शुरू करें
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Video className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">वीडियो ट्यूटोरियल</h3>
              <p className="text-sm text-muted-foreground mb-3">सीखने के लिए</p>
              <Button variant="outline" size="sm">
                देखें
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">कम्युनिटी</h3>
              <p className="text-sm text-muted-foreground mb-3">किसान समुदाय</p>
              <Button variant="outline" size="sm">
                जुड़ें
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* FAQ Section */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <HelpCircle className="w-5 h-5" />
                <span>अक्सर पूछे जाने वाले प्रश्न</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    question: "AI कैसे मेरी फसल की बीमारी पहचान सकता है?",
                    answer: "हमारा AI सिस्टम पत्तियों की तस्वीरों का विश्लेषण करके 95% सटीकता से बीमारियों की पहचान करता है।"
                  },
                  {
                    question: "मौसम की भविष्यवाणी कितनी सटीक है?",
                    answer: "हम सैटेलाइट डेटा और स्थानीय मौसम स्टेशनों का उपयोग करते हैं जो 85% तक सटीक है।"
                  },
                  {
                    question: "मार्केट प्राइस कैसे चेक करूं?",
                    answer: "डैशबोर्ड में मार्केटप्लेस सेक्शन में जाकर रियल-टाइम मंडी भाव देख सकते हैं।"
                  },
                  {
                    question: "सिंचाई की सलाह कैसे मिलती है?",
                    answer: "मिट्टी की नमी, मौसम और फसल की जरूरत के आधार पर AI स्वचालित सुझाव देता है।"
                  },
                  {
                    question: "ऑफलाइन में भी ऐप काम करता है?",
                    answer: "हां, बेसिक फीचर्स और पहले से डाउनलोड की गई जानकारी ऑफलाइन उपलब्ध है।"
                  }
                ].map((faq, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">{faq.question}</h4>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact & Resources */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>संपर्क जानकारी</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-semibold">हेल्पलाइन</p>
                      <p className="text-sm text-muted-foreground">1800-123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold">ईमेल सपोर्ट</p>
                      <p className="text-sm text-muted-foreground">help@kisanmitra.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">+91 98765-43210</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Learning Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>सीखने की सामग्री</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="ghost" className="w-full justify-start">
                    <Video className="w-4 h-4 mr-2" />
                    वीडियो ट्यूटोरियल
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-2" />
                    उपयोगकर्ता गाइड
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <BookOpen className="w-4 h-4 mr-2" />
                    कृषि तकनीक गाइड
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    किसान फोरम
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Support */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800">आपातकालीन सहायता</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-red-700 mb-3">
                  फसल में गंभीर समस्या या आपातकाल के लिए
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <Phone className="w-4 h-4 mr-2" />
                  तत्काल कॉल करें
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};