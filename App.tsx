import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageNavigator from "./components/PageNavigator";

// Pages
import HomePage from "./pages/HomePage";
import AboutOverviewPage from "./pages/AboutOverviewPage";
import AboutHistoryPage from "./pages/AboutHistoryPage";
import AboutVisionMissionPage from "./pages/AboutVisionMissionPage";
import AboutOrganizationPage from "./pages/AboutOrganizationPage";
import AboutManagementPage from "./pages/AboutManagementPage";
import AboutSubsidiariesPage from "./pages/AboutSubsidiariesPage";
import AboutWhoWeArePage from "./pages/AboutWhoWeArePage";
import AboutCooperationPage from "./pages/AboutCooperationPage";
import SubsidiariesOverviewPage from "./pages/SubsidiariesOverviewPage";
import SubsidiariesChemicalsPage from "./pages/SubsidiariesChemicalsPage";
import SubsidiariesEnergyPage from "./pages/SubsidiariesEnergyPage";
import SubsidiariesLifestylePage from "./pages/SubsidiariesLifestylePage";
import SubsidiariesSupplyChainPage from "./pages/SubsidiariesSupplyChainPage";
import SubsidiariesTechnologyPage from "./pages/SubsidiariesTechnologyPage";
import NewsMainPage from "./pages/NewsMainPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import CareerMainPage from "./pages/CareerMainPage";
import CareerDetailPage from "./pages/CareerDetailPage";

export type PageType = 
  | "home" 
  | "about-overview"
  | "about-history"
  | "about-vision-mission"
  | "about-organization"
  | "about-management"
  | "about-subsidiaries"
  | "about-who-we-are"
  | "about-cooperation"
  | "subsidiaries-overview"
  | "subsidiaries-chemicals"
  | "subsidiaries-energy"
  | "subsidiaries-lifestyle"
  | "subsidiaries-supply-chain"
  | "subsidiaries-technology"
  | "news-main"
  | "news-detail"
  | "career-main"
  | "career-detail";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />;
      case "about-overview":
        return <AboutOverviewPage onNavigate={setCurrentPage} />;
      case "about-history":
        return <AboutHistoryPage />;
      case "about-vision-mission":
        return <AboutVisionMissionPage />;
      case "about-organization":
        return <AboutOrganizationPage />;
      case "about-management":
        return <AboutManagementPage />;
      case "about-subsidiaries":
        return <AboutSubsidiariesPage />;
      case "about-who-we-are":
        return <AboutWhoWeArePage />;
      case "about-cooperation":
        return <AboutCooperationPage />;
      case "subsidiaries-overview":
        return <SubsidiariesOverviewPage onNavigate={setCurrentPage} />;
      case "subsidiaries-chemicals":
        return <SubsidiariesChemicalsPage onNavigate={setCurrentPage} />;
      case "subsidiaries-energy":
        return <SubsidiariesEnergyPage onNavigate={setCurrentPage} />;
      case "subsidiaries-lifestyle":
        return <SubsidiariesLifestylePage onNavigate={setCurrentPage} />;
      case "subsidiaries-supply-chain":
        return <SubsidiariesSupplyChainPage onNavigate={setCurrentPage} />;
      case "subsidiaries-technology":
        return <SubsidiariesTechnologyPage onNavigate={setCurrentPage} />;
      case "news-main":
        return <NewsMainPage onNavigate={setCurrentPage} />;
      case "news-detail":
        return <NewsDetailPage onNavigate={setCurrentPage} />;
      case "career-main":
        return <CareerMainPage onNavigate={setCurrentPage} />;
      case "career-detail":
        return <CareerDetailPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1e] antialiased">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="overflow-hidden">
        {renderPage()}
      </main>
      <Footer />
      <PageNavigator currentPage={currentPage} onNavigate={setCurrentPage} />
    </div>
  );
}