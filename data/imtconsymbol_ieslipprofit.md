# IESlipProfit (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ IESlipProfit | [](imtconsymbol_ietimeout.md "IETimeout") [](imtconsymbol_iesliplosing.md "IESlipLosing") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::IESlipProfit
Get the maximum allowed slippage in the profitable direction during instant execution.
C++
UINT IMTConSymbol::IESlipProfit() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.IESlipProfit()  
---  
Python (Manager API)
MTConSymbol.IESlipProfit  
---  
Return Value
The maximum allowed slippage in the direction of profit for a client during instant execution. If this limit is exceeded, the client is returned a requote.
IMTConSymbol::IESlipProfit
Set the maximum allowed slippage in the profitable direction during instant execution.
C++
MTAPIRES IMTConSymbol::IESlipProfit( const UINT slippage // Amount of slippage )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.IESlipProfit( uint slippage // Amount of slippage )  
---  
Python (Manager API)
MTConSymbol.IESlipProfit  
---  
Parameters
slippage
[in] The maximum allowed slippage in the direction of profit for a client during instant execution. If this limit is exceeded, the client is returned a requote.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.