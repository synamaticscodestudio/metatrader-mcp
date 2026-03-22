# SendNews (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Quote and News Feeds ](imtgatewayapi_send.md "Quote and News Streams")/ SendNews | [](imtgatewayapi_sendbooks.md "SendBooks") [](imtgatewayapi_sendeconomicevents.md "SendEconomicEvents") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SendNews
Passing the news.
C++
MTAPIRES IMTGatewayAPI::SendNews( MTNews* news, // News array const UINT news_total // Number of the elements in the array )  
---  
.NET
MTRetCode CIMTGatewayAPI.SendNews( MTNews[] news // News array )  
---  
.NET
MTRetCode CIMTGatewayAPI.SendNews( MTNews news // A single description of news )  
---  
Parameters
news
[in] A pointer to the news array described by the [MTNews](mtnews.md "MTNews") structure.
news_total
[in] Number of the elements in the news array.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method sends the filled [MTNews](mtnews.md "MTNews") structures array to the trading platform. After the news are sent, a programmer has to manually free the memory used for the news bodies (*body parameter in the MTNews structure).