import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

// Division Pages
import ThinkTankPage from "./pages/divisions/ThinkTankPage";
import StackPage from "./pages/divisions/StackPage";
import UXCorePage from "./pages/divisions/UXCorePage";
import LaunchpadPage from "./pages/divisions/LaunchpadPage";
import PulsePage from "./pages/divisions/PulsePage";
import GrowthEnginePage from "./pages/divisions/GrowthEnginePage";
import GroundWorksPage from "./pages/divisions/GroundWorksPage";
import MotionHousePage from "./pages/divisions/MotionHousePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Division Routes */}
          <Route path="/divisions/think-tank" element={<ThinkTankPage />} />
          <Route path="/divisions/stack" element={<StackPage />} />
          <Route path="/divisions/ux-core" element={<UXCorePage />} />
          <Route path="/divisions/launchpad" element={<LaunchpadPage />} />
          <Route path="/divisions/pulse" element={<PulsePage />} />
          <Route path="/divisions/growth-engine" element={<GrowthEnginePage />} />
          <Route path="/divisions/groundworks" element={<GroundWorksPage />} />
          <Route path="/divisions/motion-house" element={<MotionHousePage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
