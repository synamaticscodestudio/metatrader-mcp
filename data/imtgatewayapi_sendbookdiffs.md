# SendBookDiffs (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Quote and News Feeds ](imtgatewayapi_send.md "Quote and News Streams")/ SendBookDiffs | [](imtgatewayapi_sendticks.md "SendTicks") [](imtgatewayapi_sendbooks.md "SendBooks") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SendBookDiffs
Send the Depth of Market changes.
C++
MTAPIRES IMTGatewayAPI::SendBookDiffs( MTBookDiff*  bookdiffs, // Depth of Market changes array const UINT bookdiffs_total // Number of the elements in the array )  
---  
.NET
MTRetCode CIMTGatewayAPI.SendBookDiffs( MTBook[]  bookdiffs // Depth of Market changes array )  
---  
.NET
MTRetCode CIMTGatewayAPI.SendBookDiff( MTBook  bookdiffs // A single change of the depth of market )  
---  
Parameters
*bookdiffs
[in] A pointer to the array of the Depth of Market changes described by the [MTBookDiff](mtbook.md "MTBook/MTBookDiff") structure.
bookdiffs_total
[in] Number of the elements in the bookdiffs array.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred which corresponds to the response code.
Note
This method sends the filled [MTBookDiff](mtbook.md "MTBook/MTBookDiff") structures array to the trading platform.
Unlike the [IMTGatewayAPI::SendBooks](imtgatewayapi_sendbooks.md "SendBooks") method, in the IMTGatewayAPI::SendBookDiffs method only Depth of Market changes are transferred instead of the whole data layer. Programmer have to define the difference between the current and the previous state of the Depth of Market, appropriately fill MTBookDiff structure and pass it using the SendBookDiffs method.
To reset the Depth of Market state, pass the Market Depth change in the SendBookDiffs method, with one element of the [ItemReset](mtbookitem.htm#enbookitem) type.
For symbols with the depth of market support (changes of the market depth are transmitted for them using the [IMTGatewayAPI::SendBookDiffs](imtgatewayapi_sendbookdiffs.md "SendBookDiffs") and [IMTGatewayAPI::SendBooks](imtgatewayapi_sendbooks.md "SendBooks") methods), you don't need to transmit the Bid and Ask tick data using the [IMTGatewayAPI::SendTicks](imtgatewayapi_sendticks.md "SendTicks") method. These data is automatically formed by the history server on the basis of best Ask and Bid prices in the depth of market. However, for such symbols, you should send the Last price and Volume in the MTTick structure using the IMTGatewayAPI::SendTicks. These values are used for transmitting the information about deals performed in an external trading system to the MetaTrader 5 platform. Those prices are used for drawing charts. If the Last price is unavailable in the data source, use Bid price values for filling the corresponding field in MTTick.
In case the Gateway API applications doesn't call any quote sending functions ([IMTGatewayAPI::SendTicksStats](imtgatewayapi_sendtickstats.md "SendTickStats"), [IMTGatewayAPI::SendTicks](imtgatewayapi_sendticks.md "SendTicks"), [IMTGatewayAPI::SendBookDiffs](imtgatewayapi_sendbookdiffs.md "SendBookDiffs") or [IMTGatewayAPI::SendBooks](imtgatewayapi_sendbooks.md "SendBooks")) during 60 seconds, the following message will be printed in the gateway/data feed journal: "quotes stream stopped (no quotes during X sec)". This feature is aimed to help detecting the cause of no quotes problem. The message is printed one time until the flow of quotes is resumed.
Filling MTBookDiff Structure
Each element of the aggregated depth of market is unique in type and price. The [MTBookDiff](mtbook.md "MTBook/MTBookDiff") structure contains information about volume changes for a given type and price in the form of an array of MTBookItem [MTBookItem](mtbookitem.md "MTBookItem") elements. One MTBookDiff structure contains changes only for one instrument, described in the 'symbol' value of the structure.
Depth of Market change element types are listed below together with the actions of a history server when getting the elements of a specified type for the aggregative Depth of Market generation:
  * ItemReset � a history server will clean up the aggregative Depth of Market by the specified symbol when getting the element with such a type.
  * ItemSell, ItemBuy � a history server will look for the aggregative Depth of Market element by its type and price specified in MTBookItem when getting the [MTBookItem](mtbookitem.md "MTBookItem") structure with such a type. If the element is not found, then a new element (of MTBookItem type and price) is added to the aggregated depth of market. If the element is found in the aggregated depth of market, then element volume changes by the volume value, specified in the MTBookItem structure. In case a zero volume is indicated in the MTBookItem structure, the element found in the aggregative Depth of Market will be deleted.

  * The volume of element change in the aggregated depth of market, described in MTBookItem, can be both positive and negative.
  * The trading platform analyzes the items elements sent in the MTBookDiff structure strictly from the beginning to the end, consequently applying changes to the market depth.

  * All the symbol prices delivered into the platform are rounded in accordance with the [IMTConSymbol::Digits](imtconsymbol_digits.md "Digits") parameter of the symbol. When broadcasting prices with higher accuracy, different levels can be combined into one rounded level. To avoid collisions, set the precision of the symbols in accordance with the precision of transmitted data.

  
---  
Example
Let's analyze an example of how the difference between the Depths of Market at different time points is calculated:
| Time point 1 | Time point 2 | Comparison result | Comment |
| --- | --- | --- | --- |
| --- | --- | --- | --- |
| Type | Price | Size | Type | Price | Size | Type | Price | Size |
| Sell | 1.32464 | 5 | Sell | 1.32464 | 5 | Sell | 1.32463 | -3 | Bid volume with the price 1.32463 decreased by 3 lots. |
| Sell | 1.32463 | 6 | Sell | 1.32463 | 3 | Buy | 1.32461 | 0 | Bid with the price 1.32461 disappeared from the Depth of Market. |
| Buy | 1.32461 | 3 | Buy | 1.32460 | 4 | Buy | 1.32459 | 0 | Bid with the price 1.32459 disappeared from the Depth of Market. |
| Buy | 1.32459 | 1 |  |  |  | Buy | 1.32460 | 4 | Bid with the price 1.32460 and the volume of 4 lots appeared in the Depth of Market. |