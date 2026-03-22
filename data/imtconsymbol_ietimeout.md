# IETimeout (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ IETimeout | [](imtconsymbol_iecheckmode.md "IECheckMode") [](imtconsymbol_ieslipprofit.md "IESlipProfit") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::IETimeout
Gets the maximum allowed difference between the time of arrival of the price, at which the client places an order, and the time of the last price.
C++
UINT IMTConSymbol::IETimeout() const  
---  
.NET (Gateway/Manager API)
uint CIMTConSymbol.IETimeout()  
---  
Python (Manager API)
MTConSymbol.IETimeout  
---  
Return Value
The maximum allowed difference between the time of arrival of the price, at which the client places an order, and the time of the last price; after this time interval the client gets a requote.
IMTConSymbol::IETimeout
Sets the maximum allowed difference between the time of arrival of the price, at which the client places an order, and the time of the last price.
C++
MTAPIRES IMTConSymbol::IETimeout( const UINT timeout // Time difference )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.IETimeout( uint  timeout // Time difference )  
---  
Python (Manager API)
MTConSymbol.IETimeout  
---  
Parameters
timeout
[in] The maximum allowed difference between the time of arrival of the price, at which the client places an order, and the time of the last price.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.