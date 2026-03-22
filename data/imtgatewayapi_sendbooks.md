# SendBooks (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Quote and News Feeds ](imtgatewayapi_send.md "Quote and News Streams")/ SendBooks | [](imtgatewayapi_sendbookdiffs.md "SendBookDiffs") [](imtgatewayapi_sendnews.md "SendNews") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SendBooks
Send the entire state of the Depth of Market.
C++
MTAPIRES IMTGatewayAPI::SendBooks( MTBook* books, // Depth of Market array const UINT books_total // Number of the elements in the array )  
---  
.NET
MTRetCode CIMTGatewayAPI.SendBooks( MTBook[] books // Depth of Market array )  
---  
.NET
MTRetCode CIMTGatewayAPI.SendBooks( MTBook books // Single description of the depth of market )  
---  
Parameters
books
[in] A pointer to the array of the Depth of Market described by the [MTBook](mtbook.md "MTBook/MTBookDiff") structure.
books_total
[in] Number of the elements in the bookdiffs array.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
This method sends the filled [MTBook](mtbook.md "MTBook/MTBookDiff") structures array to the trading platform.
Unlike the [IMTGatewayAPI::SendBookDiffs](imtgatewayapi_sendbookdiffs.md "SendBookDiffs") method, the IMTGatewayAPI::SendBooks method passes the entire state of the depth of market, not only its changes. When sending the depth of market via this method, the changes of the depth of market will be automatically formed in Gateway API and then passed to the internal implementation of the [IMTGatewayAPI::SendBookDiffs](imtgatewayapi_sendbookdiffs.md "SendBookDiffs") method.
To reset the Depth of Market, send an empty MTBook with items_total=0 in the SendBooks method.
For symbols with the depth of market support (changes of the market depth are transmitted for them using the [IMTGatewayAPI::SendBookDiffs](imtgatewayapi_sendbookdiffs.md "SendBookDiffs") and [IMTGatewayAPI::SendBooks](imtgatewayapi_sendbooks.md "SendBooks")) methods), you don't need to transmit the Bid and Ask tick data using the [IMTGatewayAPI::SendTicks](imtgatewayapi_sendticks.md "SendTicks") method. These data is automatically formed by the history server on the basis of best Ask and Bid prices in the depth of market. However, for such symbols, you should send the Last price and Volume in the MTTick structure using the IMTGatewayAPI::SendTicks. These values are used for transmitting the information about deals performed in an external trading system to the MetaTrader 5 platform. Those prices are used for drawing charts. If the Last price is unavailable in the data source, use Bid price values for filling the corresponding field in MTTick.
In case the Gateway API applications doesn't call any quote sending functions ([IMTGatewayAPI::SendTicksStats](imtgatewayapi_sendtickstats.md "SendTickStats"), [IMTGatewayAPI::SendTicks](imtgatewayapi_sendticks.md "SendTicks"), [IMTGatewayAPI::SendBookDiffs](imtgatewayapi_sendbookdiffs.md "SendBookDiffs") or [IMTGatewayAPI::SendBooks](imtgatewayapi_sendbooks.md "SendBooks")) during 60 seconds, the following message will be printed in the gateway/data feed journal: "quotes stream stopped (no quotes during X sec)". This feature is aimed to help detecting the cause of no quotes problem. The message is printed one time until the flow of quotes is resumed.
The depth of the sent order book (Market Depth) must not exceed the depth value specified in symbol settings ([IMTConSymbo::TickBookDepth](imtconsymbol_tickbookdepth.md "TickBookDepth")).
The price accuracy in the order book items must be equal to or be less than the accuracy specified in symbol settings ([IMTConSymbol::Digits](imtconsymbol_digits.md "Digits")). All the symbol prices delivered into the platform are rounded in accordance with the [IMTConSymbol::Digits](imtconsymbol_digits.md "Digits") parameter of the symbol. When broadcasting prices with higher accuracy, different levels can be combined into one rounded level.
All Market Depth items in one direction (buy or sell) must have different prices. If the source data contains several levels with the same price, you should aggregate them into one level with the total volume before sending them to the platform.
The volume of all items of the Market Depth to be sent must be greater than zero ([MTBook::MTBookItem::volume](mtbookitem.md "MTBookItem")).