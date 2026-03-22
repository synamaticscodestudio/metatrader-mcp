# Action (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ Action | [](imtposition_symbol.md "Symbol") [](imtposition_digits.md "Digits") |
| --- | --- | --- |
| --- | --- |

IMTPosition::Action
Get the position type.
C++
UINT IMTPosition::Action() const  
---  
.NET (Gateway/Manager API)
uint CIMTPosition.Action()  
---  
Return Value
A value of the [IMTPosition::EnPositionAction](imtposition_enum.htm#enpositionaction) enumeration.
IMTPosition::Action
Set the position type.
C++
MTAPIRES IMTPosition::Action( const UINT action // Position type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPosition.Action( uint action // Position type )  
---  
Parameters
action
[in] Position type. The [IMTPosition::EnPositionAction](imtposition_enum.htm#enpositionaction) enumeration is used to set the type..
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.