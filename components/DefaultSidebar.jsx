import { useRouter } from "next/router";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  InboxIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
  CurrencyBangladeshiIcon,
  CurrencyDollarIcon,
  CurrencyEuroIcon,
  CurrencyPoundIcon,
  CurrencyRupeeIcon,
  CurrencyYenIcon,
  CubeTransparentIcon
} from "@heroicons/react/24/solid";

export default function DefaultSidebar({ onItemClick }) {
  return (
    <Card>
      <List>
        <ListItem onClick={() => onItemClick("")}>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Advanced Chart
        </ListItem>

        <ListItem onClick={() => onItemClick("technicalAnalysis")}>
          <ListItemPrefix>
            <CubeTransparentIcon className="h-5 w-5" />
          </ListItemPrefix>
          Technical Analysis
        </ListItem>

        <ListItem onClick={() => onItemClick("marketOverview")}>
          <ListItemPrefix>
            <CurrencyYenIcon className="h-5 w-5" />
          </ListItemPrefix>
          Market Overview
        </ListItem>

        <ListItem onClick={() => onItemClick("marketData")}>
          <ListItemPrefix>
            <CurrencyRupeeIcon className="h-5 w-5" />
          </ListItemPrefix>
          Market Data
        </ListItem>

        <ListItem onClick={() => onItemClick("stockMarket")}>
          <ListItemPrefix>
            <CurrencyPoundIcon className="h-5 w-5" />
          </ListItemPrefix>
          Stock Market
        </ListItem>

        <ListItem onClick={() => onItemClick("economicCalendar")}>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Economic Calendar
        </ListItem>

        <ListItem onClick={() => onItemClick("ticker")}>
          <ListItemPrefix>
            <CurrencyEuroIcon className="h-5 w-5" />
          </ListItemPrefix>
          Ticker
        </ListItem>

        <ListItem onClick={() => onItemClick("tickerTape")}>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Ticker Tape
        </ListItem>

        <ListItem onClick={() => onItemClick("singleTicker")}>
          <ListItemPrefix>
            <CurrencyDollarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Single Ticker
        </ListItem>

        <ListItem onClick={() => onItemClick("miniChart")}>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Mini Chart
        </ListItem>

        <ListItem onClick={() => onItemClick("symbolOverview")}>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Symbol Overview
        </ListItem>

        <ListItem onClick={() => onItemClick("symbolInfo")}>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Symbol Info
        </ListItem>

        <ListItem onClick={() => onItemClick("forexCrossRates")}>
          <ListItemPrefix>
            <CurrencyBangladeshiIcon className="h-5 w-5" />
          </ListItemPrefix>
          Forex CrossRates
        </ListItem>

        <ListItem onClick={() => onItemClick("technicalAnalysis")}>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Technical Analysis
        </ListItem>

        <ListItem onClick={() => onItemClick("forexHeatMap")}>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Forex HeatMap
        </ListItem>
      </List>
    </Card>
  );
}
