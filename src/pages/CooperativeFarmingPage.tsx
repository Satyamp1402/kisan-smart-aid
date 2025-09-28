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
  Handshake,
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
  Target,
  Zap,
  FileText,
  Calendar,
  Wheat,
  Tractor,
  Wrench,
  PieChart,
  BarChart3,
  Star,
  UserPlus,
  Group
} from "lucide-react";
import { Link } from "react-router-dom";

interface FarmerGroup {
  id: string;
  name: string;
  type: 'FPO' | 'Cooperative' | 'SHG' | 'Cluster';
  members: number;
  location: string;
  crops: string[];
  landArea: number;
  avgIncome: string;
  successRate: number;
  established: string;
  benefits: string[];
  requirements: string;
  contact: string;
  description: string;
  isJoined: boolean;
}

interface Resource {
  id: string;
  name: string;
  type: 'Equipment' | 'Storage' | 'Transport' | 'Processing';
  owner: string;
  location: string;
  pricePerDay: number;
  availability: 'Available' | 'Booked' | 'Maintenance';
  rating: number;
  description: string;
  features: string[];
}

interface CollectiveDeal {
  id: string;
  crop: string;
  targetQuantity: number;
  currentQuantity: number;
  participants: number;
  priceOffered: number;
  marketPrice: number;
  savings: number;
  deadline: string;
  status: 'open' | 'active' | 'completed';
  organizer: string;
}

export const CooperativeFarmingPage = () => {
  const [activeTab, setActiveTab] = useState('groups');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const farmerGroups: FarmerGroup[] = [
    {
      id: '1',
      name: 'Green Valley Farmer Producer Organization',
      type: 'FPO',
      members: 245,
      location: 'Haryana',
      crops: ['Wheat', 'Rice', 'Mustard'],
      landArea: 1200,
      avgIncome: '₹3.2L',
      successRate: 85,
      established: '2019',
      benefits: ['Bulk purchasing', 'Better prices', 'Storage facilities', 'Insurance schemes'],
      requirements: 'Minimum 2 acres, must be in Haryana',
      contact: 'Ramesh Singh - 98765-43210',
      description: 'Leading FPO with excellent track record in collective bargaining and resource sharing.',
      isJoined: false
    },
    {
      id: '2',
      name: 'Progressive Farmers Cooperative',
      type: 'Cooperative',
      members: 180,
      location: 'Punjab',
      crops: ['Rice', 'Wheat', 'Sugarcane'],
      landArea: 950,
      avgIncome: '₹2.8L',
      successRate: 78,
      established: '2020',
      benefits: ['Joint marketing', 'Equipment sharing', 'Technical support', 'Credit facilities'],
      requirements: 'Any farm size, Punjab residents only',
      contact: 'Preet Kaur - 98123-45678',
      description: 'Cooperative focused on modern farming techniques and sustainable practices.',
      isJoined: true
    },
    {
      id: '3',
      name: 'Organic Farming Cluster',
      type: 'Cluster',
      members: 95,
      location: 'Uttar Pradesh',
      crops: ['Organic Wheat', 'Organic Vegetables'],
      landArea: 450,
      avgIncome: '₹4.1L',
      successRate: 92,
      established: '2021',
      benefits: ['Organic certification', 'Premium prices', 'Export opportunities', 'Training programs'],
      requirements: 'Certified organic or willing to convert',
      contact: 'Suresh Kumar - 91234-56789',
      description: 'Specialized cluster for organic farmers with focus on export markets.',
      isJoined: false
    }
  ];

  const sharedResources: Resource[] = [
    {
      id: '1',
      name: 'John Deere 5050D Tractor',
      type: 'Equipment',
      owner: 'Green Valley FPO',
      location: 'Karnal, Haryana',
      pricePerDay: 1800,
      availability: 'Available',
      rating: 4.8,
      description: '50 HP tractor with rotavator and cultivator attachments',
      features: ['Power steering', 'Live PTO', 'Hydraulic lift', 'Fuel efficient']
    },
    {
      id: '2',
      name: 'Cold Storage Facility',
      type: 'Storage',
      owner: 'Progressive Cooperative',
      location: 'Ludhiana, Punjab',
      pricePerDay: 500,
      availability: 'Available',
      rating: 4.6,
      description: '500 MT capacity cold storage for vegetables and fruits',
      features: ['Temperature controlled', 'Humidity control', 'Loading dock', '24/7 monitoring']
    },
    {
      id: '3',
      name: 'Harvester Combine',
      type: 'Equipment',
      owner: 'Organic Cluster',
      location: 'Meerut, UP',
      pricePerDay: 3500,
      availability: 'Booked',
      rating: 4.7,
      description: 'Modern combine harvester for wheat and rice',
      features: ['GPS tracking', 'Yield mapping', 'Grain cleaning', 'Large capacity']
    }
  ];

  const collectiveDeals: CollectiveDeal[] = [
    {
      id: '1',
      crop: 'Wheat',
      targetQuantity: 1000,
      currentQuantity: 750,
      participants: 45,
      priceOffered: 2600,
      marketPrice: 2400,
      savings: 200,
      deadline: '2024-04-30',
      status: 'active',
      organizer: 'Green Valley FPO'
    },
    {
      id: '2',
      crop: 'Rice',
      targetQuantity: 800,
      currentQuantity: 320,
      participants: 28,
      priceOffered: 3400,
      marketPrice: 3200,
      savings: 200,
      deadline: '2024-05-15',
      status: 'open',
      organizer: 'Progressive Cooperative'
    }
  ];

  const getGroupTypeColor = (type: string) => {
    switch (type) {
      case 'FPO': return 'bg-blue-100 text-blue-800';
      case 'Cooperative': return 'bg-green-100 text-green-800';
      case 'SHG': return 'bg-purple-100 text-purple-800';
      case 'Cluster': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case 'Available': return 'bg-green-100 text-green-800';
      case 'Booked': return 'bg-red-100 text-red-800';
      case 'Maintenance': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-blue-100 text-blue-800';
      case 'active': return 'bg-green-100 text-green-800';
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
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Wheat className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Cooperative Farming</h1>
                  <p className="text-sm text-muted-foreground">Join farmer groups for better pricing and resource sharing</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-purple-100 text-purple-800">
                <Group className="w-3 h-3 mr-1" />
                Collective Power
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
              <Group className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Active Groups</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">2,500+</div>
              <div className="text-sm text-muted-foreground">Farmers Connected</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <TrendingUp className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">25%</div>
              <div className="text-sm text-muted-foreground">Avg Income Boost</div>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/90 backdrop-blur-sm text-center">
            <CardContent className="p-6">
              <Handshake className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">₹15Cr+</div>
              <div className="text-sm text-muted-foreground">Collective Savings</div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="groups">Join Groups</TabsTrigger>
            <TabsTrigger value="resources">Share Resources</TabsTrigger>
            <TabsTrigger value="deals">Collective Deals</TabsTrigger>
            <TabsTrigger value="create">Create Group</TabsTrigger>
          </TabsList>

          <TabsContent value="groups" className="space-y-6">
            {/* Search and Filter */}
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="Search groups by name, location, or crops..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <select 
                    value={selectedLocation} 
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="px-3 py-2 border border-border rounded-lg bg-background"
                  >
                    <option value="all">All Locations</option>
                    <option value="haryana">Haryana</option>
                    <option value="punjab">Punjab</option>
                    <option value="up">Uttar Pradesh</option>
                  </select>
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    More Filters
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Groups List */}
            <div className="space-y-4">
              {farmerGroups.map((group) => (
                <Card key={group.id} className={`border-border/50 bg-card/90 backdrop-blur-sm hover:shadow-lg transition-shadow ${group.isJoined ? 'ring-2 ring-green-200' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                          {group.name.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-lg font-bold">{group.name}</h3>
                            {group.isJoined && (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            )}
                          </div>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{group.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{group.members} members</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>Since {group.established}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getGroupTypeColor(group.type)}>
                          {group.type}
                        </Badge>
                        <div className="text-sm text-green-600 font-medium mt-2">
                          {group.successRate}% Success Rate
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-4">
                      <div>
                        <h4 className="font-semibold mb-2">Group Stats</h4>
                        <div className="space-y-1 text-sm">
                          <div>Total Land: <span className="font-medium">{group.landArea} acres</span></div>
                          <div>Avg Income: <span className="font-medium text-green-600">{group.avgIncome}</span></div>
                          <div>Contact: <span className="font-medium">{group.contact}</span></div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Primary Crops</h4>
                        <div className="flex flex-wrap gap-2">
                          {group.crops.map((crop, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {crop}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Benefits</h4>
                        <div className="space-y-1">
                          {group.benefits.slice(0, 3).map((benefit, index) => (
                            <div key={index} className="text-xs flex items-center space-x-1">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">{group.description}</p>
                    
                    <div className="text-xs text-orange-600 bg-orange-50 p-2 rounded mb-4">
                      <strong>Requirements:</strong> {group.requirements}
                    </div>

                    <div className="flex space-x-3">
                      {group.isJoined ? (
                        <>
                          <Button className="flex-1" variant="outline">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Group Chat
                          </Button>
                          <Button variant="outline">
                            <Eye className="w-4 h-4 mr-2" />
                            View Activities
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button className="flex-1">
                            <UserPlus className="w-4 h-4 mr-2" />
                            Request to Join
                          </Button>
                          <Button variant="outline">
                            <Eye className="w-4 h-4 mr-2" />
                            Learn More
                          </Button>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Shared Resources</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                List Your Resource
              </Button>
            </div>

            <div className="space-y-4">
              {sharedResources.map((resource) => (
                <Card key={resource.id} className="border-border/50 bg-card/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                          <Tractor className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">{resource.name}</h3>
                          <p className="text-sm text-muted-foreground">{resource.owner} • {resource.location}</p>
                          <div className="flex items-center space-x-1 mt-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm">{resource.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getAvailabilityColor(resource.availability)}>
                          {resource.availability}
                        </Badge>
                        <div className="text-sm font-bold text-green-600 mt-2">
                          ₹{resource.pricePerDay}/day
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-sm">Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {resource.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Button 
                        className="flex-1" 
                        disabled={resource.availability === 'Booked'}
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        {resource.availability === 'Available' ? 'Book Now' : 'Not Available'}
                      </Button>
                      <Button variant="outline">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Contact Owner
                      </Button>
                      <Button variant="outline">
                        <Eye className="w-4 h-4 mr-2" />
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="deals" className="space-y-6">
            <h2 className="text-xl font-bold">Collective Marketing Deals</h2>

            <div className="space-y-4">
              {collectiveDeals.map((deal) => (
                <Card key={deal.id} className="border-border/50 bg-card/90 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold">{deal.crop} Collective Sale</h3>
                        <p className="text-sm text-muted-foreground">Organized by {deal.organizer}</p>
                      </div>
                      <Badge className={getStatusColor(deal.status)}>
                        {deal.status}
                      </Badge>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Target Quantity</div>
                        <div className="font-semibold">{deal.targetQuantity} quintals</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Current Progress</div>
                        <div className="font-semibold">{deal.currentQuantity} quintals</div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div 
                            className="bg-green-500 h-2 rounded-full" 
                            style={{ width: `${(deal.currentQuantity / deal.targetQuantity) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Price Offered</div>
                        <div className="font-semibold text-green-600">₹{deal.priceOffered}/qtl</div>
                        <div className="text-xs text-green-600">+₹{deal.savings} vs market</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Participants</div>
                        <div className="font-semibold">{deal.participants} farmers</div>
                        <div className="text-xs text-muted-foreground">Deadline: {deal.deadline}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="font-medium">Potential Savings: </span>
                        <span className="text-green-600 font-semibold">
                          ₹{(deal.savings * deal.currentQuantity).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm">
                          <Plus className="w-4 h-4 mr-1" />
                          Join Deal
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-1" />
                          View Details
                        </Button>
                      </div>
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
                  <span>Create Farmer Group</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Group Name</label>
                    <Input placeholder="Enter group name" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Group Type</label>
                    <select className="w-full p-2 border border-border rounded-lg bg-background">
                      <option value="">Select type</option>
                      <option value="fpo">Farmer Producer Organization (FPO)</option>
                      <option value="cooperative">Cooperative Society</option>
                      <option value="shg">Self Help Group (SHG)</option>
                      <option value="cluster">Farming Cluster</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Location</label>
                    <Input placeholder="Village, District, State" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Primary Crops</label>
                    <Input placeholder="e.g., Wheat, Rice, Vegetables" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Expected Members</label>
                    <Input placeholder="Minimum expected members" type="number" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Contact Information</label>
                    <Input placeholder="Your contact number" type="tel" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Group Description</label>
                  <Textarea 
                    placeholder="Describe the group's objectives, benefits, and requirements..."
                    className="h-24"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Membership Requirements</label>
                  <Textarea 
                    placeholder="Specify eligibility criteria, land requirements, location restrictions, etc..."
                    className="h-20"
                  />
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-900 mb-2">Benefits of Creating a Group:</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Access to government schemes and subsidies</li>
                    <li>• Collective bargaining power for better prices</li>
                    <li>• Shared resources and equipment</li>
                    <li>• Technical support and training programs</li>
                    <li>• Risk mitigation through group insurance</li>
                  </ul>
                </div>

                <div className="flex space-x-4">
                  <Button className="flex-1">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Group
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