# IESlipProfit (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ IESlipProfit | [](imtcongroupsymbol_ietimeoutdefault.md "IETimeoutDefault") [](imtcongroupsymbol_ieslipprofitdefault.md "IESlipProfitDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::IESlipProfit
Get the maximum allowed slippage in the profitable direction during instant execution.
C++
UINT IMTConGroupSymbol::IESlipProfit() const  
---  
.NET (Gateway/Manager API)
uint CIMTConGroupSymbol.IESlipProfit()  
---  
Python (Manager API)
MTConGroupSymbol.IESlipProfit  
---  
Return Value
The maximum allowed slippage in the direction of profit for a client during instant execution. If this limit is exceeded, the client is returned a requote.
Note
This method operates with individual symbol settings for groups.
IMTConGroupSymbol::IESlipProfit
Set the maximum allowed slippage in the profitable direction during instant execution.
C++
MTAPIRES IMTConGroupSymbol::IESlipProfit( const UINT slippage // Amount of slippage )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.IESlipProfit( uint slippage // Amount of slippage )  
---  
Python (Manager API)
MTConGroupSymbol.IESlipProfit  
---  
Parameters
slippage
[in] The maximum allowed slippage in the direction of profit for a client during instant execution. If this limit is exceeded, the client is returned a requote.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method operates with individual symbol settings for groups.