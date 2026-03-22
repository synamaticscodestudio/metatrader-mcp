# NewsShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Subscriptions ](config_subscription.md "Subscriptions") / [ IMTConSubscription ](imtconsubscription.md "IMTConSubscription")/ NewsShift | [](imtconsubscription_newsclear.md "NewsClear") [](imtconsubscription_newstotal.md "NewsTotal") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::NewsShift
Shift a news category in the list in subscription settings.
C++
MTAPIRES IMTConSubscription::NewsShift( const UINT pos, // News configuration position const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.NewsShift( uint pos, // News configuration position int  shift // Shift )  
---  
Parameters
pos
[in] Position of a news setting in the list, starting with 0.
shift
[in] News setting shift relative to its current position. A negative value means shift towards the top of the list, a positive value shifts towards the end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred corresponding to the response code.