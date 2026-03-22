# ExpertID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ ExpertID | [](imtorder_volumecurrentext.md "VolumeCurrentExt") [](imtorder_partyid.md "PartyID") |
| --- | --- | --- |
| --- | --- |

IMTOrder::ExpertID
Get the ID of the Expert Advisor that has placed the order.
C++
UINT64 IMTOrder::ExpertID() const  
---  
.NET (Gateway/Manager API)
ulong CIMTOrder.ExpertID()  
---  
Python
MTOrder.ExpertID  
---  
Return Value
The ID of the Expert Advisor that has placed the order. If an order has been placed manually, 0 is returned.
Note
This identifier is set by the Expert Advisor.
IMTOrder::ExpertID
Set the ID of the Expert Advisor that has placed the order.
C++
MTAPIRES IMTOrder::ExpertID( const UINT64 id // Expert Advisor ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.ExpertID( ulong id // Expert Advisor ID )  
---  
Python
MTOrder.ExpertID  
---  
Parameters
id
[in] The ID of the Expert Advisor that has placed the order. The 0 value means that the order was placed manually.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.