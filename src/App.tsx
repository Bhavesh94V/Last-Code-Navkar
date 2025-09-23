import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CorporateLaw from "./pages/CorporateLaw";
import GujaratVatAndServiceTax from "./pages/GujaratVatAndServiceTax";
import DirectTaxation from "./pages/DirectTaxation";
import CorporateFinancial from "./pages/CorporateFinancial";
import BPOPage from "./pages/BPO";
import AuditingAssurance from "./pages/AuditingAssurance";
import Advisory from "./pages/Advisory";
import Accounting from "./pages/AccountingServices";
import ClientsSection from "./pages/Clients";
import Articles from "./pages/Articles";
import QueryForm from "./pages/QueryForm";
import CareersPage from "./pages/CareersPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider  client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<ClientsSection />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/query" element={<QueryForm />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/gujarat-vat-service-tax" element={<GujaratVatAndServiceTax />} />
          <Route path="/services/direct-taxation" element={<DirectTaxation />} />
          <Route path="/services/corporate-financial" element={<CorporateFinancial />} />
          <Route path="/services/bpo" element={<BPOPage />} />
          <Route path="/services/corporate-law" element={<CorporateLaw />} />
          <Route path="/services/auditing-assurance" element={<AuditingAssurance />} />
          <Route path="/services/advisory" element={<Advisory />} />
          <Route path="/services/accounting-services" element={<Accounting />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/clients"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl">Clients Page - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/articles"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl">Articles Page - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/knowledge"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl">Knowledge Bank - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/knowledge/:category"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl">Knowledge Category - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/query"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl">Query Page - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/careers"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl">Careers Page - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/admin"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl">Admin Portal - Coming Soon</h1>
              </div>
            }
          />
          <Route
            path="/admin/:page"
            element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl">Admin Page - Coming Soon</h1>
              </div>
            }
          />
          {/* Catch-all 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
