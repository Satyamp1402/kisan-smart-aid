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
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-accent/5 flex">
      {/* Enhanced Sidebar Navigation */}
      <SidebarNavigation selectedLanguage={selectedLanguage} />

      {/* Main Dashboard Content */}
      <Dashboard selectedLanguage={selectedLanguage} />
    </div>
  );
};
