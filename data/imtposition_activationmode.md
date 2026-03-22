# ActivationMode (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ ActivationMode | [](imtposition_dealer.md "Dealer") [](imtposition_activationtime.md "ActivationTime") |
| --- | --- | --- |
| --- | --- |

IMTPosition::ActivationMode
Get position activation type.
C++
UINT IMTPosition::ActivationMode() const  
---  
.NET (Gateway/Manager API)
uint CIMTPosition.ActivationMode()  
---  
Return Value
A value of the [IMTPosition::EnActivation](imtposition_enum.htm#enactivation) enumeration.
Note
A position can be in one of three states - the Margin Call level reached, the Stop Out level reached, none of the levels reached.
IMTPosition::ActivationMode
Sets position activation type.
C++
MTAPIRES IMTPosition::ActivationMode( const UINT mode // Activation type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPosition.ActivationMode( uint  mode // Activation type )  
---  
Parameters
mode
[in] Position activation type. The type is passed using the [IMTPosition::EnActivation](imtposition_enum.htm#enactivation) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
A position can be in one of three states - the Margin Call level reached, the Stop Out level reached, none of the levels reached.