# SendTickStats (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Quote and News Feeds ](imtgatewayapi_send.md "Quote and News Streams")/ SendTickStats | [](imtgatewayapi_send.md "Quote and News Streams") [](imtgatewayapi_sendticks.md "SendTicks") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SendTickStats
Sending statistical information about a financial instrument.
C++
MTAPIRES IMTGatewayAPI::SendTickStats( MTTickStat* stats, // Statistical data array const UINT stats_total // Number of the elements in the array )  
---  
.NET
MTRetCode CIMTGatewayAPI.SendTickStats( MTTickStat[] stats  // Statistical data array )  
---  
.NET
MTRetCode CIMTGatewayAPI.SendTickStat( MTTickStat stats  // A single description of statistical data )  
---  
Parameters
stats
[in] A pointer to the statistical data array described by the [MTTickStat](mttickstat.md "MTTickStat") structure.
stats_total
[in] Number of the elements in the stats array.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
This method sends the filled [MTTickStat](mttickstat.md "MTTickStat") structures array to the trading platform.
In case the Gateway API applications doesn't call any quote sending functions ([IMTGatewayAPI::SendTicksStats](imtgatewayapi_sendtickstats.md "SendTickStats"), [IMTGatewayAPI::SendTicks](imtgatewayapi_sendticks.md "SendTicks"), [IMTGatewayAPI::SendBookDiffs](imtgatewayapi_sendbookdiffs.md "SendBookDiffs") or [IMTGatewayAPI::SendBooks](imtgatewayapi_sendbooks.md "SendBooks")) during 60 seconds, the following message will be printed in the gateway/data feed journal: "quotes stream stopped (no quotes during X sec)". This feature is aimed to help detecting the cause of no quotes problem. The message is printed one time until the flow of quotes is resumed.
The history server calculates some statistics based on tick data. When sending MTTickStat, the following values are ignored:
  * bid_high
  * bid_low
  * ask_high
  * ask_low

The following values are also ignored if the charts for the trading symbol are constructed using Bid prices ([IMTConSymol::CHART_MODE_BID_PRICE](imtconsymbol_enum.htm#enchartmode)):
  * last_high
  * last_low
  * vol_high, vol_high_ext
  * vol_low, vol_low_ext
