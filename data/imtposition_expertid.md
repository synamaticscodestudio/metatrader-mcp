# ExpertID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ ExpertID | [](imtposition_ratemargin.md "RateMargin") [](imtposition_expertpositionid.md "ExpertPositionID") |
| --- | --- | --- |
| --- | --- |

IMTPosition::ExpertID
Get the ID of the Expert Advisor that has opened the position.
C++
UINT64 IMTPosition::ExpertID() const  
---  
.NET (Gateway/Manager API)
ulong CIMTPosition.ExpertID()  
---  
Return Value
The ID of the Expert Advisor that has opened the position. If a position has been opened manually, 0 is returned.
Note
This identifier is set by the Expert Advisor.
IMTPosition::ExpertID
Set the ID of the Expert Advisor that has opened the position.
C++
MTAPIRES IMTPosition::ExpertID( const UINT64 id // Expert Advisor ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPosition.ExpertID( ulong id // Expert Advisor ID )  
---  
Parameters
id
[in] The ID of the Expert Advisor that has opened the position. The 0 value means that the deal was executed manually.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.