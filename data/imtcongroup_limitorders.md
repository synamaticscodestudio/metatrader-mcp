# LimitOrders (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ LimitOrders | [](imtcongroup_limithistory.md "LimitHistory") [](imtcongroup_limitsymbols.md "LimitSymbols") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::LimitOrders
Get the maximum number of orders that can be simultaneously placed by an account from this group.
C++
UINT IMTConGroup::LimitOrders() const  
---  
.NET (Gateway/Manager API)
uint CIMTConGroup.LimitOrders()  
---  
Python (Manager API)
MTConGroup.LimitOrders  
---  
Return Value
The maximum number of orders that can be simultaneously placed. The 0 value means that the number of orders is unlimited.
IMTConGroup::LimitOrders
Set the maximum number of orders that can be simultaneously placed by an account from this group.
C++
MTAPIRES IMTConGroup::LimitOrders( const UINT limit // Limit of orders )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.LimitOrders( ouint limit // Limit of orders )  
---  
Python (Manager API)
MTConGroup.LimitOrders  
---  
Parameters
limit
[in] The maximum number of orders that can be simultaneously placed. The 0 value means that the number of orders is unlimited.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.