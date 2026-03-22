# LimitSymbols (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ LimitSymbols | [](imtcongroup_limitorders.md "LimitOrders") [](imtcongroup_limitpositions.md "LimitPositions") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::LimitSymbols
Get the maximum number of symbols, for which an account can simultaneously receive quotes.
C++
UINT IMTConGroup::LimitSymbols() const  
---  
.NET (Gateway/Manager API)
uint CIMTConGroup.LimitSymbols()  
---  
Python (Manager API)
MTConGroup.LimitSymbols  
---  
Return Value
The maximum number of symbols, for which an account can simultaneously receive quotes.
IMTConGroup::LimitSymbols
Set the maximum number of symbols, for which an account can simultaneously receive quotes.
C++
MTAPIRES IMTConGroup::LimitSymbols( const UINT limit // Limit of symbols )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.LimitSymbols( uint limit // Limit of symbols )  
---  
Python (Manager API)
MTConGroup.LimitSymbols  
---  
Parameters
limit
[in] The maximum number of symbols, for which an account can simultaneously receive quotes.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.