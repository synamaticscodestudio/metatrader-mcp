# SendEconomicEvents (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Quote and News Feeds ](imtgatewayapi_send.md "Quote and News Streams")/ SendEconomicEvents | [](imtgatewayapi_sendnews.md "SendNews") [](imtgatewayapi_charts.md "History Data") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SendEconomicEvents
Sending economic calendar events.
C++
MTAPIRES IMTGatewayAPI::SendEconomicEvents( MTEconomicEvent*  events, // An array of economic news const UINT events_total // The number of elements in the array )  
---  
.NET
MTRetCode CIMTGatewayAPI.SendEconomicEvents( MTEconomicEvent[] events // An array of economic news )  
---  
.NET
MTRetCode CIMTGatewayAPI.SendEconomicEvent( MTEconomicEvent events // A single description of economic news )  
---  
Parameters
events
[in] A pointer to the array of news of the economic calendar described by the [MTEconomicEvent](mteconomicevent.md "MTEconomicEvent") structure.
events_total
[in] The number of elements in the events array.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method is obsolete. It always returns [MT_RET_OK](retcodes_successful.md "Successful completion") but does not perform any action.
To save resources, it is recommended to perform batch sending of events. If you have several events, it is recommended that you send them calling IMTGatewayAPI::SendEcomonicEvents.
When calling the method, a check is made whether the news already exists. If the entry already exists, it is updated, otherwise a new entry is added. The key fields for comparison in the [MTEconomicEvent](mteconomicevent.md "MTEconomicEvent") structure are:
  * datetime
  * name
  * currency
  * period
