import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Navigation, 
  MapPin, 
  DollarSign, 
  TrendingUp, 
  Clock, 
  Fuel,
  Route,
  Star,
  AlertCircle,
  CheckCircle,
  Truck
} from "lucide-react";
import { Link } from "react-router-dom";

export const MandiPredictorPage = () => {
  const [selectedCrop, setSelectedCrop] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [predictions, setPredictions] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const crops = [
    "Wheat (गेहूं)", "Rice (चावल)", "Tomato (टमाटर)", "Onion (प्याज)", 
    "Potato (आलू)", "Cotton (कपास)", "Sugarcane (गन्ना)", "Maize (मक्का)"
  ];

  const locations = [
    "Delhi", "Mumbai", "Pune", "Bangalore", "Chennai", "Kolkata", 
    "Ahmedabad", "Jaipur", "Lucknow", "Patna"
  ];

  const handlePrediction = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setPredictions({
        bestMandi: {
          name: "Azadpur Mandi, Delhi",
          price: "₹2,400/quintal",
          distance: "45 km",
          transportCost: "₹180",
          netProfit: "₹2,220/quintal",
          rating: 4.5,
          bestDay: "Tuesday"
        },
        alternatives: [
          {
            name: "Ghazipur Mandi, UP",
            price: "₹2,200/quintal", 
            distance: "65 km",
            transportCost: "₹260",
            netProfit: "₹1,940/quintal",
            rating: 4.2,
            bestDay: "Wednesday"
          },
          {
            name: "Sonipat Mandi, Haryana", 
            price: "₹2,350/quintal",
            distance: "38 km", 
            transportCost: "₹152",
            netProfit: "₹2,198/quintal",
            rating: 4.3,
            bestDay: "Monday"
          }
        ],
        priceHistory: [
          { date: "Last Week", price: 2100 },
          { date: "Yesterday", price: 2280 },
          { date: "Today", price: 2350 },
          { date: "Tomorrow", price: 2400 },
          { date: "Next Week", price: 2500 }
        ],
        insights: [
          "Festival season approaching - prices expected to rise",
          "Low supply from competing regions",
          "Transport costs slightly higher due to fuel price",
          "Tuesday is best day - lower competition"
        ]
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-accent/5">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-soft border-b border-border/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground">
              ← Back to Dashboard
            </Link>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-harvest rounded-lg flex items-center justify-center">
                <Navigation className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Mandi Price Predictor</h1>
                <p className="text-sm text-muted-foreground">Find the best market and optimal selling time</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input Form */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Crop Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="crop">Select Crop</Label>
                  <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your crop" />
                    </SelectTrigger>
                    <SelectContent>
                      {crops.map((crop) => (
                        <SelectItem key={crop} value={crop}>{crop}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="quantity">Quantity (Quintals)</Label>
                  <Input 
                    id="quantity"
                    type="number" 
                    placeholder="Enter quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="location">Your Location</Label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((loc) => (
                        <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  className="w-full" 
                  onClick={handlePrediction}
                  disabled={!selectedCrop || !quantity || !location || isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Analyzing Markets...
                    </>
                  ) : (
                    <>
                      <Navigation className="w-4 h-4 mr-2" />
                      Find Best Mandi
                    </>
                  )}
                </Button>

                {/* Quick Stats */}
                <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                  <CardContent className="p-4">
                    <h4 className="font-medium text-green-900 mb-2">Today's Market Insight</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-green-700">Average Price:</span>
                        <span className="font-semibold">₹2,350/quintal</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-700">Price Trend:</span>
                        <span className="font-semibold text-green-600 flex items-center">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          +8.5%
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-2">
            {predictions && (
              <div className="space-y-6">
                {/* Best Recommendation */}
                <Card className="border-green-200 bg-gradient-to-r from-green-50 to-green-100">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-green-600" />
                        <span className="text-green-900">Best Recommendation</span>
                      </div>
                      <Badge className="bg-green-600">Recommended</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-green-900">{predictions.bestMandi.name}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < predictions.bestMandi.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                          <span className="text-sm text-green-700">({predictions.bestMandi.rating})</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-white rounded-lg">
                          <div className="text-sm text-green-700">Expected Price</div>
                          <div className="text-lg font-bold text-green-900">{predictions.bestMandi.price}</div>
                        </div>
                        <div className="p-3 bg-white rounded-lg">
                          <div className="text-sm text-green-700">Net Profit</div>
                          <div className="text-lg font-bold text-green-600">{predictions.bestMandi.netProfit}</div>
                        </div>
                        <div className="p-3 bg-white rounded-lg">
                          <div className="text-sm text-green-700">Distance</div>
                          <div className="text-lg font-bold text-green-900">{predictions.bestMandi.distance}</div>
                        </div>
                        <div className="p-3 bg-white rounded-lg">
                          <div className="text-sm text-green-700">Best Day</div>
                          <div className="text-lg font-bold text-green-900">{predictions.bestMandi.bestDay}</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-green-600 text-white rounded-lg">
                        <div>
                          <div className="font-medium">Total Earnings for {quantity} quintals</div>
                          <div className="text-xl font-bold">₹{(parseFloat(predictions.bestMandi.netProfit.replace(/[^\d.]/g, '')) * parseInt(quantity || '0')).toLocaleString()}</div>
                        </div>
                        <CheckCircle className="w-8 h-8" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Alternative Markets */}
                <Card>
                  <CardHeader>
                    <CardTitle>Alternative Markets</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {predictions.alternatives.map((market: any, index: number) => (
                        <div key={index} className="p-4 border border-border rounded-lg hover:bg-secondary/20 transition-colors">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{market.name}</h4>
                            <div className="flex items-center space-x-2">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-3 h-3 ${i < market.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                          </div>
                          <div className="grid grid-cols-4 gap-4 text-sm">
                            <div>
                              <div className="text-muted-foreground">Price</div>
                              <div className="font-semibold">{market.price}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Distance</div>
                              <div className="font-semibold">{market.distance}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Transport</div>
                              <div className="font-semibold">{market.transportCost}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Net Profit</div>
                              <div className="font-semibold text-green-600">{market.netProfit}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Price Trend */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5" />
                      <span>Price Trend Analysis</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        {predictions.priceHistory.map((point: any, index: number) => (
                          <div key={index} className="text-center">
                            <div className="text-sm text-muted-foreground">{point.date}</div>
                            <div className={`text-lg font-bold ${
                              index === 3 ? 'text-green-600' : 
                              index === 4 ? 'text-blue-600' : 'text-foreground'
                            }`}>
                              ₹{point.price}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="font-medium text-blue-900">Recommendation:</div>
                        <div className="text-blue-800">Sell tomorrow for maximum profit - price expected to peak at ₹2,400/quintal</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Market Insights */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <AlertCircle className="w-5 h-5" />
                      <span>Market Insights</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {predictions.insights.map((insight: string, index: number) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <span>{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            )}

            {!predictions && !isLoading && (
              <Card>
                <CardContent className="p-12 text-center">
                  <Navigation className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Ready to Find Best Markets</h3>
                  <p className="text-muted-foreground">
                    Enter your crop details to get personalized mandi recommendations with price predictions
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};