import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { SidebarNavigation } from '@/components/SidebarNavigation';
import { Dashboard } from '@/components/Dashboard';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

interface MainLayoutProps {
  selectedLanguage: Language;
}

export const MainLayout = ({ selectedLanguage }: MainLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // Close sidebar on route change for mobile
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  const isDashboard = location.pathname === '/';

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

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {isDashboard ? (
            <Dashboard 
              selectedLanguage={selectedLanguage} 
              onMobileMenuToggle={() => setIsSidebarOpen(true)}
            />
          ) : (
            <>
              {/* Mobile Menu Button for non-dashboard pages */}
              <div className="lg:hidden bg-card/95 backdrop-blur-sm border-b border-border/30">
                <div className="px-4 py-3">
                  <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
              <Outlet />
            </>
          )}
        </div>
      </div>
    </div>
  );
};