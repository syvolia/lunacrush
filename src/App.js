import "./App.css";
import Card from "@material-ui/core/Card";
import { useEffect, useState } from "react";
import CardContent from "@material-ui/core/CardContent";
import InfoBox from "./Components/Infobox/InfoBox";
import Header from "./Components/Header/Header";
import Graph from "./Components/Graph/Graph";
import Table from "./Components/Table/Table";
import Keymetrics from "./Components/KeyMetrics/keymetrics";
import Trading from "./Components/Trading/Trading";
import Loader from "./Components/Loder.jsx";

function App() {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const apiUrl = `https://api.lunarcrush.com/v2?data=assets&key=${process.env.REACT_APP_API_KEY}&symbol=DOGE&data_points=365&interval=day`;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        const { data } = await response.json();
        setApiData(data);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [apiUrl]);
  const percent_change_30d = apiData[0]?.percent_change_30d;
  return isLoading ? (
    <Loader />
  ) : (
    <div className="app">
      <div className="app_left">
        <div className="app_header">
          <Header
            dollarPrice={apiData[0]?.price}
            btcPrice={apiData[0]?.price_btc}
          />
        </div>

        <div className="app_stats">
          <InfoBox
            className="infoBox__24h"
            title="Percetage change In Price 24hours"
            percentage={apiData[0]?.percent_change_24h}
          />
          <InfoBox
            className="infoBox__7days"
            title="Percetage change In Price 7Days"
            percentage={apiData[0]?.percent_change_7d}
          />
          <InfoBox
            className="infoBox__30days"
            title="Percetage change In Price 30Days"
            percentage={percent_change_30d}
          />
        </div>
        <Graph
          open={apiData[0]?.open}
          high={apiData[0]?.high}
          low={apiData[0]?.low}
        />
      </div>
      <Card className="app_right">
        <CardContent>
          <h3>Social Metrics</h3>
          <Table
            socialVol={apiData[0]?.social_volume}
            socialEng={percent_change_30d}
            socialContributors={apiData[0]?.social_contributors}
            socialDominance={apiData[0]?.social_dominance}
            averageSentiment={apiData[0]?.average_sentiment}
            redditComments={apiData[0]?.reddit_comments}
            redditCommentsScore={apiData[0]?.reddit_comments_score}
            redditPosts={apiData[0]?.reddit_posts}
            redditPostsScore={apiData[0]?.reddit_posts_score}
            sentimentAbsolute={apiData[0]?.sentiment_absolute}
            sentimentRelative={apiData[0]?.sentiment_relative}
            socialImpactScore={apiData[0]?.social_impact_score}
            socialScore={apiData[0]?.social_score}
            socialScore24={apiData[0]?.social_score_24h_rank}
          />
          <h3 className="app__keymetricsTitle">Key Metrics</h3>
          <Keymetrics
            className="app__keymetrics"
            galaxyScore={apiData[0]?.galaxy_score}
            altRank={apiData[0]?.alt_rank}
            correlationRank={apiData[0]?.correlation_rank}
          />
          <h3 className="app__keymetricsTitle">Trading Metrics</h3>
          <Trading
            className="app__keymetrics"
            marketCap={apiData[0]?.market_cap}
            marketDominance={apiData[0]?.market_dominance}
            volatility={apiData[0]?.volatility}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
