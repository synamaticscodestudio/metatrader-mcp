# SendTicks (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Quote and News Feeds ](imtgatewayapi_send.md "Quote and News Streams")/ SendTicks | [](imtgatewayapi_sendtickstats.md "SendTickStats") [](imtgatewayapi_sendbookdiffs.md "SendBookDiffs") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SendTicks
Sending current prices.
C++
MTAPIRES IMTGatewayAPI::SendTicks( MTTick* ticks, // Prices array const UINT ticks_total // Number of the elements in the array )  
---  
.NET
MTRetCode CIMTGatewayAPI.SendTicks( MTTick[] ticks // Prices array )  
---  
.NET
MTRetCode CIMTGatewayAPI.SendTick( MTTick ticks // A single description of prices )  
---  
Parameters
*ticks
[in] A pointer to the array of prices described by the [MTTick](mttick.md "MTTick") structure.
ticks_total
[in] Number of the elements in the ticks array.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
This method sends the filled [MTTick](mttick.md "MTTick") structures array to the trading platform.
For symbols with the depth of market support (changes of the market depth are transmitted for them using the [IMTGatewayAPI::SendBookDiffs](imtgatewayapi_sendbookdiffs.md "SendBookDiffs") method), you don't need to transmit the Bid and Ask tick data using the [IMTGatewayAPI::SendTicks](imtgatewayapi_sendticks.md "SendTicks") method. These data is automatically formed by the history server on the basis of best Ask and Bid prices in the depth of market. However, for such symbols, you should send the Last price and Volume in the MTTick structure using the IMTGatewayAPI::SendTicks. These values are used for transmitting the information about deals performed in an external trading system to the MetaTrader 5 platform. Those prices are used for drawing charts. If the Last price is unavailable in the data source, use Bid price values for filling the corresponding field in MTTick.
Please make sure not to pass both Last/Volume and Bid/Ask information on one tick. The latter data in this case will be ignored by the server. If for some reason you need to pass all prices, call SendTicks separately for Last/Volume and for Bid/Ask.
In case the Gateway API applications doesn't call any quote sending functions ([IMTGatewayAPI::SendTicksStats](imtgatewayapi_sendtickstats.md "SendTickStats"), [IMTGatewayAPI::SendTicks](imtgatewayapi_sendticks.md "SendTicks"), [IMTGatewayAPI::SendBookDiffs](imtgatewayapi_sendbookdiffs.md "SendBookDiffs") or [IMTGatewayAPI::SendBooks](imtgatewayapi_sendbooks.md "SendBooks")) during 60 seconds, the following message will be printed in the gateway/data feed journal: "quotes stream stopped (no quotes during X sec)". This feature is aimed to help detecting the cause of no quotes problem. The message is printed one time until the flow of quotes is resumed.
If the tick size is specified for a symbol ([IMTConSymbol::TickSize](imtconsymbol_ticksize.md "TickSize")), all passed quotes for that symbol will be normalized to this value, when received by the history server.