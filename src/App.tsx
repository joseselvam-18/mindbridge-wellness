import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import DashboardHome from "./pages/DashboardHome";
import ChatPage from "./pages/ChatPage";
import JournalPage from "./pages/JournalPage";
import CalmSpace from "./pages/CalmSpace";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => (
  <DashboardLayout>{children}</DashboardLayout>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<DashboardWrapper><DashboardHome /></DashboardWrapper>} />
          <Route path="/dashboard/chat" element={<DashboardWrapper><ChatPage /></DashboardWrapper>} />
          <Route path="/dashboard/journal" element={<DashboardWrapper><JournalPage /></DashboardWrapper>} />
          <Route path="/dashboard/calm" element={<DashboardWrapper><CalmSpace /></DashboardWrapper>} />
          <Route path="/dashboard/resources" element={<DashboardWrapper><div className="text-center py-20"><h1 className="text-3xl font-bold">Resources</h1><p className="text-muted-foreground mt-2">Coming soon</p></div></DashboardWrapper>} />
          <Route path="/dashboard/analytics" element={<DashboardWrapper><div className="text-center py-20"><h1 className="text-3xl font-bold">Analytics</h1><p className="text-muted-foreground mt-2">Coming soon</p></div></DashboardWrapper>} />
          <Route path="/dashboard/sos" element={<DashboardWrapper><div className="text-center py-20"><h1 className="text-3xl font-bold text-destructive">SOS Help</h1><p className="text-muted-foreground mt-2">If you're in crisis, call 988 or your local emergency number</p></div></DashboardWrapper>} />
          <Route path="/dashboard/settings" element={<DashboardWrapper><div className="text-center py-20"><h1 className="text-3xl font-bold">Settings</h1><p className="text-muted-foreground mt-2">Coming soon</p></div></DashboardWrapper>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
