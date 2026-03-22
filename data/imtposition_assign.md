# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ Assign | [](imtposition_release.md "Release") [](imtposition_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTPosition::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTPosition::Assign( const IMTPosition* position // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPosition.Assign( CIMTPosition position // Source object )  
---  
Parameters
position
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.