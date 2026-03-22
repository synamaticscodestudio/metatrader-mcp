# IETimeout (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ IETimeout | [](imtcongroupsymbol_iecheckmodedefault.md "IECheckModeDefault") [](imtcongroupsymbol_ietimeoutdefault.md "IETimeoutDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::IETimeout
Gets the maximum allowed difference between the time of arrival of the price, at which the client places an order, and the time of the last price.
C++
UINT IMTConGroupSymbol::IETimeout() const  
---  
.NET (Gateway/Manager API)
uint CIMTConGroupSymbol.IETimeout()  
---  
Python (Manager API)
MTConGroupSymbol.IETimeout  
---  
Return Value
The maximum allowed difference between the time of arrival of the price, at which the client places an order, and the time of the last price; after this time interval the client gets a requote.
Note
This method operates with individual symbol settings for groups.
IMTConGroupSymbol::IETimeout
Sets the maximum allowed difference between the time of arrival of the price, at which the client places an order, and the time of the last price.
C++
MTAPIRES IMTConGroupSymbol::IETimeout( const UINT timeout // Time difference )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.IETimeout( uint timeout // Time difference )  
---  
Python (Manager API)
MTConGroupSymbol.IETimeout  
---  
Parameters
timeout
[in] The maximum allowed difference between the time of arrival of the price, at which the client places an order, and the time of the last price; after this time interval the client gets a requote.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method operates with individual symbol settings for groups.