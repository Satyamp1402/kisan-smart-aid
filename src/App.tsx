import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { PredictionPage } from "./pages/PredictionPage";
import { WeatherPage } from "./pages/WeatherPage";
import { ReportPage } from "./pages/ReportPage";
import { HelpPage } from "./pages/HelpPage";
import { CropHealthPage } from "./pages/CropHealthPage";
import { AssistantPage } from "./pages/AssistantPage";
// AI-Powered Features
import { DiseaseDetectionPage } from "./pages/DiseaseDetectionPage";
import { YieldPredictionPage } from "./pages/YieldPredictionPage";
// All other feature pages
import { 
  MarketplacePage,
  FinancingPage,
  DIYSensorPage, CommunityDataPage,
  FarmingCalendarPage, SatelliteMonitoringPage,
  InsuranceClaimPage, WaterManagementPage
} from "./pages/PlaceholderPages";
import { MandiPredictorPage } from "./pages/MandiPredictorPage";
import { MarketIntelligencePage } from "./pages/MarketIntelligencePage";
import { ProTipsPage } from "./pages/ProTipsPage";
import { VoiceAssistantPage } from "./pages/VoiceAssistantPage";
import { ARScannerPage } from "./pages/ARScannerPage";
import { SmartphoneSensorPage } from "./pages/SmartphoneSensorPage";
import { GovernmentSchemesPage } from "./pages/GovernmentSchemesPage";
import { BuyerConnectionPage } from "./pages/BuyerConnectionPage";
import { CooperativeFarmingPage } from "./pages/CooperativeFarmingPage";
import { PriceIntelligencePage } from "./pages/PriceIntelligencePage";
import { KCCOptimizerPage } from "./pages/KCCOptimizerPage";
import { AICreditScoringPage } from "./pages/AICreditScoringPage";
import { SmartCropInsurancePage } from "./pages/SmartCropInsurancePage";
import { MicroWeatherPage } from "./pages/MicroWeatherPage";
import { ClimateAlertsPage } from "./pages/ClimateAlertsPage";
import { ClimateAdaptationPage } from "./pages/ClimateAdaptationPage";

// Optimization Pages
import { FertilizerOptimizationPage } from "./pages/FertilizerOptimizationPage";
import { PesticideOptimizationPage } from "./pages/PesticideOptimizationPage";
import { IrrigationSchedulerPage } from "./pages/IrrigationSchedulerPage";
import { SuggestionsSchedulesPage } from "./pages/SuggestionsSchedulesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/prediction" element={<PredictionPage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/crop-health" element={<CropHealthPage />} />
          <Route path="/assistant" element={<AssistantPage />} />
          
          {/* AI-Powered Features */}
          <Route path="/disease-detection" element={<DiseaseDetectionPage />} />
          <Route path="/yield-prediction" element={<YieldPredictionPage />} />
          
          {/* Marketplace Features */}
          <Route path="/marketplace" element={<PriceIntelligencePage />} />
          <Route path="/buyer-connection" element={<BuyerConnectionPage />} />
          <Route path="/cooperative-farming" element={<CooperativeFarmingPage />} />
          
          {/* Financial Features */}
          <Route path="/credit-scoring" element={<AICreditScoringPage />} />
          <Route path="/insurance" element={<SmartCropInsurancePage />} />
          <Route path="/financing" element={<FinancingPage />} />
          
          {/* IoT Features */}
          <Route path="/smartphone-sensor" element={<SmartphoneSensorPage />} />
          <Route path="/diy-sensor" element={<DIYSensorPage />} />
          <Route path="/community-data" element={<CommunityDataPage />} />
          
          {/* Climate Features */}
          <Route path="/micro-weather" element={<MicroWeatherPage />} />
          <Route path="/climate-alerts" element={<ClimateAlertsPage />} />
          <Route path="/climate-adaptation" element={<ClimateAdaptationPage />} />
          
          {/* Optimization Features */}
          <Route path="/fertilizer-optimization" element={<FertilizerOptimizationPage />} />
          <Route path="/pesticide-optimization" element={<PesticideOptimizationPage />} />
          <Route path="/irrigation-scheduler" element={<IrrigationSchedulerPage />} />
          <Route path="/suggestions-schedules" element={<SuggestionsSchedulesPage />} />
          
          {/* Advanced Features */}
          <Route path="/voice-assistant" element={<VoiceAssistantPage />} />
          <Route path="/ar-scanner" element={<ARScannerPage />} />
          <Route path="/farming-calendar" element={<FarmingCalendarPage />} />
          <Route path="/satellite-monitoring" element={<SatelliteMonitoringPage />} />
          
          {/* Market Intelligence */}
          <Route path="/mandi-predictor" element={<MarketIntelligencePage />} />
          <Route path="/government-schemes" element={<GovernmentSchemesPage />} />
          <Route path="/kcc-optimizer" element={<KCCOptimizerPage />} />
          <Route path="/insurance-claim" element={<InsuranceClaimPage />} />
          <Route path="/water-management" element={<WaterManagementPage />} />
          
          {/* Educational Content */}
          <Route path="/pro-tips" element={<ProTipsPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
