# IESlipLosing (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ IESlipLosing | [](imtconsymbol_ieslipprofit.md "IESlipProfit") [](imtconsymbol_ievolumemax.md "IEVolumeMax") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::IESlipLosing
Get the maximum allowed slippage in the loss direction during instant execution.
C++
UINT IMTConSymbol::IESlipLosing() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.IESlipLosing()  
---  
Python (Manager API)
MTConSymbol.IESlipLosing  
---  
Return Value
The maximum allowed slippage in the direction of a loss for a client during instant execution. If this limit is exceeded, the client is returned a requote.
IMTConSymbol::IESlipLosing
Set the maximum allowed slippage in the loss direction during instant execution.
C++
MTAPIRES IMTConSymbol::IESlipLosing( const UINT slippage // Amount of slippage )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.IESlipLosing( uint slippage // Amount of slippage )  
---  
Python (Manager API)
MTConSymbol.IESlipLosing  
---  
Parameters
slippage
[in] The maximum allowed slippage in the direction of a loss for a client during instant execution. If this limit is exceeded, the client is returned a requote.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.