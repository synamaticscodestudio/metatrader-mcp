# ActivationFlags (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ ActivationFlags | [](imtposition_activationprice.md "ActivationPrice") [](imtposition_apidataset.md "ApiDataSet") |
| --- | --- | --- |
| --- | --- |

IMTPosition::ActivationFlags
Get position activation flags.
C++
UINT IMTPosition::ActivationFlags() const  
---  
.NET (Gateway/Manager API)
uint CIMTPosition.ActivationFlags()  
---  
Return Value
A value of the [IMTPosition::EnTradeActivationFlags](imtposition_enum.htm#entradeactivationflags) enumeration.
IMTPosition::ActivationPrice
Sets position activation flags.
C++
MTAPIRES IMTPosition::ActivationFlags( const UINT flags // Activation flags )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPosition.ActivationFlags( uint flags // Activation flags )  
---  
Parameters
flags
[in] Position activation flags. The flags are passed using the [IMTPosition::EnTradeActivationFlags](imtposition_enum.htm#entradeactivationflags) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Flags of orders are inherited from the [orders](imtorder_enum.htm#entradeactivationflags), as a result of which the position is created. However, they can be overridden using the [IMTPosition::ActivationFlags](imtposition_activationflags.md "ActivationFlags") method (for example, when synchronizing a position via a gateway to an external trading system).