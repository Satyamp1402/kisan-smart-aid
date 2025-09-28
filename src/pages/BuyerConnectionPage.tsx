import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  MapPin,
  Phone,
  Star,
  TrendingUp,
  Shield,
  Truck,
  Calculator,
  Clock,
  CheckCircle,
  AlertTriangle,
  Filter,
  Search,
  Plus,
  MessageSquare,
  Eye,
  Edit,
  DollarSign,
  Package,
  Award,
  Globe,
  Building,
  Handshake,
  Target,
  Zap,
  FileText,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

interface Buyer {
  id: string;
  name: string;
  company: string;
  type: 'Processor' | 'Exporter' | 'Retailer' | 'Cooperative';
  location: string;
  distance: number;
  rating: number;
  totalPurchases: string;
  crops: string[];
  priceRange: { min: number; max: number };
  paymentTerms: string;
  minQuantity: number;
  verified: boolean;
  lastActive: string;
  contactPreference: string;
  description: string;
}

interface FarmerListing {
  id: string;
  crop: string;
  quantity: number;
  quality: string;
  expectedPrice: number;
  harvestDate: string;
  location: string;
  description: string;
  status: 'active' | 'negotiating' | 'sold';
  offers: number;
}

interface Deal {
  id: string;
  buyerName: string;
  crop: string;
  quantity: number;
  agreedPrice: number;
  status: 'pending' | 'accepted' | 'completed';
  deliveryDate: string;
  paymentStatus: 'pending' | 'advance_paid' | 'completed';
}

export const BuyerConnectionPage = () => {
  const [activeTab, setActiveTab] = useState('buyers');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('all');

  const buyers: Buyer[] = [
    {
      id: '1',
      name: 'Rajesh Kumar',
      company: 'Green Valley Foods Pvt Ltd',
      type: 'Processor',
      location: 'Delhi, India',
      distance: 45,
      rating: 4.8,
      totalPurchases: '₹50L+',
      crops: ['Wheat', 'Rice', 'Maize'],
      priceRange: { min: 2200, max: 2500 },
      paymentTerms: 'Within 7 days',
      minQuantity: 50,
      verified: true,
      lastActive: '2 hours ago',
      contactPreference: 'WhatsApp',
      description: 'We are a leading food processing company looking for quality grains. We offer competitive prices and prompt payments.'
    },
    {
      id: '2',
      name: 'Priya Agarwal',
      company: 'Fresh Export International',
      type: 'Exporter',
      location: 'Mumbai, Maharashtra',
      distance: 65,
      rating: 4.6,
      totalPurchases: '₹2Cr+',
      crops: ['Onion', 'Tomato', 'Potato'],
      priceRange: { min: 3500, max: 4200 },
      paymentTerms: 'Advance 50%',
      minQuantity: 100,
      verified: true,
      lastActive: '1 day ago',
      contactPreference: 'Phone Call',
      description: 'International exporter specializing in fresh vegetables. We maintain cold chain and offer export opportunities.'
    },
    {
      id: '3',
      name: 'Amit Singh',
      company: 'Farmer Producer Organization',
      type: 'Cooperative',
      location: 'Haryana, India',
      distance: 25,
      rating: 4.4,
      totalPurchases: '₹75L+',
      crops: ['Wheat', 'Mustard', 'Barley'],
      priceRange: { min: 2300, max: 2600 },
      paymentTerms: 'Within 15 days',
      minQuantity: 25,
      verified: true,
      lastActive: '3 hours ago',
      contactPreference: 'WhatsApp',
      description: 'FPO representing 500+ farmers. We provide better prices through collective bargaining and direct market access.'
    }
  ];

  const farmerListings: FarmerListing[] = [
    {
      id: '1',
      crop: 'Wheat',
      quantity: 150,
      quality: 'Grade A',
      expectedPrice: 2400,
      harvestDate: '2024-04-15',
      location: 'Village Rampur, Haryana',
      description: 'High-quality wheat, properly stored, ready for immediate delivery',
      status: 'active',
      offers: 3
    },
    {
      id: '2',
      crop: 'Rice',
      quantity: 200,
      quality: 'Premium',
      expectedPrice: 3200,
      harvestDate: '2024-04-20',
      location: 'Village Greenfield, Punjab',
      description: 'Basmati rice, organic certified, excellent aroma and quality',
      status: 'negotiating',
      offers: 5
    }
  ];

  const recentDeals: Deal[] = [
    {
      id: '1',
      buyerName: 'Green Valley Foods',
      crop: 'Wheat',
      quantity: 100,
      agreedPrice: 2450,
      status: 'accepted',
      deliveryDate: '2024-04-18',
      paymentStatus: 'advance_paid'
    },
    {
      id: '2',
      buyerName: 'Fresh Export Intl',
      crop: 'Onion',
      quantity: 50,
      agreedPrice: 4000,
      status: 'completed',
      deliveryDate: '2024-04-10',
      paymentStatus: 'completed'
    }
  ];

  const getBuyerTypeColor = (type: string) => {
    switch (type) {
      case 'Processor': return 'bg-blue-100 text-blue-800';
      case 'Exporter': return 'bg-green-100 text-green-800';
      case 'Retailer': return 'bg-orange-100 text-orange-800';
      case 'Cooperative': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'negotiating': return 'bg-yellow-100 text-yellow-800';
      case 'sold': return 'bg-gray-100 text-gray-800';
      case 'pending': return 'bg-blue-100 text-blue-800';
      case 'accepted': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Buyer Connection</h1>
                  <p className="text-sm text-muted-foreground">Connect directly with verified bulk buyers</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-100 text-green-800">
                <CheckCircle className="w-3 h-3 mr-1" />
                Verified Platform
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">150+</div>
              <div className="text-sm text-muted-foreground">Verified Buyers</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Handshake className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">₹2.5Cr+</div>
              <div className="text-sm text-muted-foreground">Deals Completed</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <TrendingUp className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">15%</div>
              <div className="text-sm text-muted-foreground">Avg Price Premium</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Clock className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">5 Days</div>
              <div className="text-sm text-muted-foreground">Avg Payment Time</div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="buyers">Find Buyers</TabsTrigger>
            <TabsTrigger value="listings">My Listings</TabsTrigger>
            <TabsTrigger value="deals">Recent Deals</TabsTrigger>
            <TabsTrigger value="create">Create Listing</TabsTrigger>
          </TabsList>

          <TabsContent value="buyers" className="space-y-6">
            {/* Search and Filter */}
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Search buyers by name, company, or location..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <select 
                    value={selectedCrop} 
                    onChange={(e) => setSelectedCrop(e.target.value)}
                    className="px-3 py-2 border border-border rounded-lg bg-background"
                  >
                    <option value="all">All Crops</option>
                    <option value="wheat">Wheat</option>
                    <option value="rice">Rice</option>
                    <option value="vegetables">Vegetables</option>
                  </select>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    More Filters
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Buyers List */}
            <div className="space-y-4">
              {buyers.map((buyer) => (
                <Card key={buyer.id} className="border-border/50 bg-card/90 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                          {buyer.name.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-lg font-bold">{buyer.name}</h3>
                            {buyer.verified && (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            )}
                          </div>
                          <p className="text-sm font-medium text-blue-600">{buyer.company}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{buyer.location} ({buyer.distance}km)</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-500" />
                              <span>{buyer.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getBuyerTypeColor(buyer.type)}>
                          {buyer.type}
                        </Badge>
                        <div className="text-sm text-muted-foreground mt-2">
                          Active: {buyer.lastActive}
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-semibold mb-2">Purchase Details</h4>
                        <div className="space-y-1 text-sm">
                          <div>Total Purchases: <span className="font-medium">{buyer.totalPurchases}</span></div>
                          <div>Price Range: <span className="font-medium text-green-600">₹{buyer.priceRange.min}-{buyer.priceRange.max}/qtl</span></div>
                          <div>Min Quantity: <span className="font-medium">{buyer.minQuantity} quintals</span></div>
                          <div>Payment: <span className="font-medium">{buyer.paymentTerms}</span></div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Interested Crops</h4>
                        <div className="flex flex-wrap gap-2">
                          {buyer.crops.map((crop, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {crop}
                            </Badge>
                          ))}
                        </div>
                        <div className="mt-2 text-sm">
                          <span className="font-medium">Prefers:</span> {buyer.contactPreference}
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">{buyer.description}</p>

                    <div className="flex space-x-3">
                      <Button className="flex-1">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Contact Buyer
                      </Button>
                      <Button variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        View Profile
                      </Button>
                      <Button variant="outline">
                        <Package className="w-4 h-4 mr-2" />
                        Send Quotation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="listings" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">My Active Listings</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add New Listing
              </Button>
            </div>

            <div className="space-y-4">
              {farmerListings.map((listing) => (
                <Card key={listing.id} className="border-border/50 bg-card/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold">{listing.crop}</h3>
                        <p className="text-sm text-muted-foreground">{listing.location}</p>
                      </div>
                      <Badge className={getStatusColor(listing.status)}>
                        {listing.status}
                      </Badge>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Quantity</div>
                        <div className="font-semibold">{listing.quantity} quintals</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Quality</div>
                        <div className="font-semibold">{listing.quality}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Expected Price</div>
                        <div className="font-semibold text-green-600">₹{listing.expectedPrice}/qtl</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Harvest Date</div>
                        <div className="font-semibold">{listing.harvestDate}</div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">{listing.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="font-medium">{listing.offers} offers received</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-1" />
                          View Offers
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="deals" className="space-y-6">
            <h2 className="text-xl font-bold">Recent Deals & Negotiations</h2>

            <div className="space-y-4">
              {recentDeals.map((deal) => (
                <Card key={deal.id} className="border-border/50 bg-card/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold">{deal.buyerName}</h3>
                        <p className="text-sm text-muted-foreground">{deal.crop} • {deal.quantity} quintals</p>
                      </div>
                      <Badge className={getStatusColor(deal.status)}>
                        {deal.status}
                      </Badge>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Agreed Price</div>
                        <div className="font-semibold text-green-600">₹{deal.agreedPrice}/qtl</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Total Value</div>
                        <div className="font-semibold">₹{(deal.agreedPrice * deal.quantity).toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Delivery Date</div>
                        <div className="font-semibold">{deal.deliveryDate}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Payment Status</div>
                        <div className="font-semibold">
                          <Badge className={getStatusColor(deal.paymentStatus)}>
                            {deal.paymentStatus.replace('_', ' ')}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        Contact Buyer
                      </Button>
                      <Button size="sm" variant="outline">
                        <FileText className="w-4 h-4 mr-1" />
                        View Contract
                      </Button>
                      <Button size="sm" variant="outline">
                        <Truck className="w-4 h-4 mr-1" />
                        Track Delivery
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="create" className="space-y-6">
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plus className="w-5 h-5 text-green-500" />
                  <span>Create New Crop Listing</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Crop Type</label>
                    <select className="w-full p-2 border border-border rounded-lg bg-background">
                      <option value="">Select crop type</option>
                      <option value="wheat">Wheat</option>
                      <option value="rice">Rice</option>
                      <option value="maize">Maize</option>
                      <option value="onion">Onion</option>
                      <option value="potato">Potato</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Quantity (Quintals)</label>
                    <Input placeholder="Enter quantity available" type="number" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Quality Grade</label>
                    <select className="w-full p-2 border border-border rounded-lg bg-background">
                      <option value="">Select quality</option>
                      <option value="premium">Premium</option>
                      <option value="grade-a">Grade A</option>
                      <option value="grade-b">Grade B</option>
                      <option value="standard">Standard</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Expected Price (₹/quintal)</label>
                    <Input placeholder="Your expected price" type="number" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Harvest/Available Date</label>
                    <Input type="date" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Location</label>
                    <Input placeholder="Village, District, State" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Description</label>
                  <Textarea 
                    placeholder="Describe your crop quality, storage conditions, and any special features..."
                    className="h-24"
                  />
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Pro Tips for Better Listings:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Include high-quality photos of your crop</li>
                    <li>• Mention certifications (organic, etc.)</li>
                    <li>• Be transparent about quality and quantity</li>
                    <li>• Set competitive but fair prices</li>
                  </ul>
                </div>

                <div className="flex space-x-4">
                  <Button className="flex-1">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Listing
                  </Button>
                  <Button variant="outline">
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};