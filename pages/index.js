// pages/index.js
import React, { useState } from "react";
import TradingViewChart from "../components/TradingViewChart";
import DefaultSidebar from "../components/DefaultSidebar";
import {
  AdvancedChart,
  TechnicalAnalysis,
  MarketOverview,
  MarketData,
  StockMarket,
  EconomicCalendar,
  Ticker,
  TickerTape,
  SingleTicker,
  MiniChart,
  SymbolOverview,
  SymbolInfo,
  ForexCrossRates,
  ForexHeatMap,
  ScreenerWidgetProps,
  CryptocurrencyMarket,
  FundamentalData,
  CompanyProfile,
  Timeline,
} from "../components/trendingViewComponents";

const HomePage = () => {
  const [selectedComponent, setSelectedComponent] = useState("advancedChart");

  const handleSidebarItemClick = (component) => {
    setSelectedComponent(component);
  };

  let selectedComponentToRender;

  switch(selectedComponent) {

    case 'advancedChart': 
      selectedComponentToRender = <AdvancedChart />;
      break;
    
    case 'technicalAnalysis':
      selectedComponentToRender = <TechnicalAnalysis />;
      break;  
  
    case 'marketOverview':
      selectedComponentToRender = <MarketOverview />;
      break;
  
    case 'marketData':
      selectedComponentToRender = <MarketData />;
      break;
  
    case 'stockMarket':
      selectedComponentToRender = <StockMarket />;
      break;
  
    case 'economicCalendar':
      selectedComponentToRender = <EconomicCalendar />;
      break;
  
    case 'ticker':
      selectedComponentToRender = <Ticker />;
      break;
  
    case 'tickerTape':
      selectedComponentToRender = <TickerTape />;
      break;
  
    case 'singleTicker':
      selectedComponentToRender = <SingleTicker />;
      break;
  
    case 'miniChart':
      selectedComponentToRender = <MiniChart />;
      break;
  
    case 'symbolOverview': 
      selectedComponentToRender = <SymbolOverview />;
      break;
  
    case 'symbolInfo':
      selectedComponentToRender = <SymbolInfo />;
      break;
  
    case 'forexCrossRates':
      selectedComponentToRender = <ForexCrossRates />;
      break;
  
    case 'forexHeatMap':
      selectedComponentToRender = <ForexHeatMap />;
      break;
  
    case 'screenerWidget':
      selectedComponentToRender = <ScreenerWidgetProps />;
      break;
  
    case 'cryptocurrencyMarket':
      selectedComponentToRender = <CryptocurrencyMarket />;
      break;
  
    case 'fundamentalData':
      selectedComponentToRender = <FundamentalData />;
      break;
  
    case 'companyProfile':
      selectedComponentToRender = <CompanyProfile />;
      break;
  
    case 'timeline':
      selectedComponentToRender = <Timeline />;
      break;
  
    default:
      selectedComponentToRender = <AdvancedChart />;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="col-span-1">
        <DefaultSidebar onItemClick={handleSidebarItemClick} />
      </div>

      <div className="col-span-3 p-2">{selectedComponentToRender?selectedComponentToRender:<AdvancedChart/>}</div>
    </div>
  );
};

export default HomePage;
