# Quote and News Streams (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface")/ Quote and News Feeds | [](imtgatewayapi_clientallowip.md "ClientAllowIP") [](imtgatewayapi_sendtickstats.md "SendTickStats") |
| --- | --- | --- |
| --- | --- |

Quote and News Streams
The functions described in this section allow sending quiting data and news to the platform. The following functions are provided:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [SendTickStats](imtgatewayapi_sendtickstats.md "SendTickStats") | Sending statistical information about a financial instrument. |
| [SendTicks](imtgatewayapi_sendticks.md "SendTicks") | Sending current prices. |
| [SendBookDiffs](imtgatewayapi_sendbookdiffs.md "SendBookDiffs") | Sending the Depth of Market changes. |
| [SendBooks](imtgatewayapi_sendbooks.md "SendBooks") | Sending the entire state of the Depth of Market. |
| [SendNews](imtgatewayapi_sendnews.md "SendNews") | Sending news. |
| [SendEconomicEvents](imtgatewayapi_sendeconomicevents.md "SendEconomicEvents") | Sending economic calendar events. The method is obsolete and is not supported. |

Chart Construction
The trading platform (the history server) builds bars using ticks received from datafeeds and gateways. Depending on the [IMTConSymbol::ChartMode](imtconsymbol_chartmode.md "ChartMode") parameter, financial symbol bars are based on Bid or Last prices (the price of the last executed trade). As a rule, charts of exchange instruments with the enabled Market Depth feature are based on the Last price.
For the symbols, the charts of which are based on Bid prices, the history server does no accept Last prices and volumes from gateways and datafeeds. Such ticks are not saved and are not provided to other components of the platform. Therefore, when sending quotes using the [IMTGatewayAPI::SendTicks](imtgatewayapi_sendticks.md "SendTicks") method, you should not fill the [MTTick::last](mttick.md "MTTick") and [MTTick::volume](mttick.md "MTTick") fields.
If a data feed or gateway sends symbol Market Depth changes to a platform ([IMTGatewayAPI::SendBookDiffs](imtgatewayapi_sendbookdiffs.md "SendBookDiffs"), [IMTGatewayAPI::SendBooks](imtgatewayapi_sendbooks.md "SendBooks")), the history server automatically monitors changes of the best Bid and Ask price in it. If the best Bid or Ask price has changed, the history server generates a tick with the values ​​of the best Bid and Ask prices. In this tick, the value of the last trade price and the volume will be zero. The gateway/datafeed must only send ticks with the filled Last price and volume value. The network traffic is saved, because Bid and Ask prices are not sent.
For operations with the symbol's price history, use methods [IMTGatewayAPI::Chart*](imtgatewayapi_charts.md "History Data") and [IMTGatewayAPI::TickHistory*](imtgatewayapi_ticks.md "Tick Data").  
---