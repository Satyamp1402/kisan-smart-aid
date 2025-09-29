import { useState } from "react";
import { SidebarNavigation } from "@/components/SidebarNavigation";
import { Dashboard } from "@/components/Dashboard";

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

interface FarmingDashboardProps {
  selectedLanguage: Language;
}

export const FarmingDashboard = ({ selectedLanguage }: FarmingDashboardProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-accent/5">
      <div className="flex relative">
        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        
        {/* Enhanced Sidebar Navigation */}
        <SidebarNavigation 
          selectedLanguage={selectedLanguage} 
          isMobileOpen={isSidebarOpen}
          onMobileClose={() => setIsSidebarOpen(false)}
        />

        {/* Main Dashboard Content */}
        <div className="flex-1 min-w-0">
          <Dashboard 
            selectedLanguage={selectedLanguage} 
            onMobileMenuToggle={() => setIsSidebarOpen(true)}
          />
        </div>
      </div>
    </div>
  );
};
