import { ReactNode, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Brain, Home, MessageCircle, BookOpen, Music, Library, BarChart3, AlertCircle,
  Settings, LogOut, Bell, Search, ChevronRight, Menu, X
} from "lucide-react";

const menuItems = [
  { icon: Home, label: "Home", path: "/dashboard" },
  { icon: MessageCircle, label: "AI Chatbot", path: "/dashboard/chat", badge: "New" },
  { icon: BookOpen, label: "My Journal", path: "/dashboard/journal" },
  { icon: Music, label: "Calm Space", path: "/dashboard/calm" },
  { icon: Library, label: "Resources", path: "/dashboard/resources" },
  { icon: BarChart3, label: "Analytics", path: "/dashboard/analytics" },
  { icon: AlertCircle, label: "SOS Help", path: "/dashboard/sos", destructive: true },
];

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentPage = menuItems.find((m) => location.pathname === m.path)?.label || "Home";

  const SidebarContent = () => (
    <>
      <div className="mb-8 pb-6 border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-3">
          <Brain className="w-8 h-8 text-chart-1" />
          <span className="text-xl font-bold text-sidebar-foreground">MindBridge</span>
        </Link>
      </div>

      <div className="mb-6 p-4 rounded-xl bg-sidebar-accent">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center text-primary-foreground font-semibold">
              JD
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-chart-5 rounded-full border-2 border-sidebar-accent" />
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-sidebar-foreground truncate">John Doe</p>
            <button className="text-xs text-sidebar-accent-foreground hover:underline">View Profile</button>
          </div>
        </div>
      </div>

      <nav className="space-y-1 flex-1">
        {menuItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                active
                  ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium shadow-sm"
                  : item.destructive
                  ? "text-destructive hover:bg-destructive/10"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
              {item.badge && (
                <span className="ml-auto px-2 py-0.5 rounded-full text-xs bg-chart-1 text-primary-foreground font-medium">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-4 border-t border-sidebar-border space-y-1">
        <Link to="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-all">
          <Settings className="w-5 h-5" />
          <span className="text-sm font-medium">Settings</span>
        </Link>
        <button
          onClick={() => navigate("/")}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground/70 hover:text-destructive hover:bg-destructive/10 transition-all"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen flex bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border p-6 z-40 overflow-y-auto">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <aside className="absolute left-0 top-0 h-full w-64 bg-sidebar border-r border-sidebar-border p-6 flex flex-col animate-slide-in-right" style={{ animationDirection: "normal" }}>
            <button onClick={() => setSidebarOpen(false)} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-accent">
              <X className="w-5 h-5" />
            </button>
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 h-[72px] bg-background/95 backdrop-blur-xl border-b border-border flex items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-accent">
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Home className="w-4 h-4" />
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground font-medium">{currentPage}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="w-[18px] h-[18px] text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search..."
                className="w-64 h-10 pl-10 pr-4 rounded-lg border border-border bg-input-background text-sm placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
              />
            </div>

            <button className="relative w-10 h-10 rounded-lg hover:bg-accent flex items-center justify-center">
              <Bell className="w-5 h-5 text-foreground" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-destructive-foreground text-xs font-bold rounded-full flex items-center justify-center">3</span>
            </button>

            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center text-primary-foreground text-sm font-semibold cursor-pointer">
              JD
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
