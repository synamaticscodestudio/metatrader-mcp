# IETimeoutDefault (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ IETimeoutDefault | [](imtcongroupsymbol_ietimeout.md "IETimeout") [](imtcongroupsymbol_ieslipprofit.md "IESlipProfit") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::IETimeoutDefault
Get the [default](imtconsymbol_ietimeout.md "IETimeout") maximum allowed difference between the time of arrival of the price, at which the client places an order, and the time of the last price. For a more detailed description, please read the ["Use of Default method"](imtcongroupsymbol.htm#default) section.
C++
UINT IMTConGroupSymbol::IETimeoutDefault() const  
---  
.NET (Gateway/Manager API)
uint CIMTConGroupSymbol.IETimeoutDefault()  
---  
Python (Manager API)
MTConGroupSymbol.IETimeoutDefault  
---