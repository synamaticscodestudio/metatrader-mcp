# LimitHistory (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ LimitHistory | [](imtcongroup_demoinactivityperiod.md "DemoInactivityPeriod") [](imtcongroup_limitorders.md "LimitOrders") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::LimitHistory
Get the maximum number of days, for which the group can request data on conducted trade operation.
C++
UINT IMTConGroup::LimitHistory() const  
---  
.NET (Gateway/Manager API)
EnHistoryLimit CIMTConGroup.LimitHistory()  
---  
Python (Manager API)
MTConGroup.LimitHistory  
---  
Return Value
A value from [IMTConGroup::EnHistoryLimit](imtcongroup_enum.htm#enhistorylimit).
IMTConGroup::LimitHistory
Set the maximum number of days, for which the group can request data on conducted trade operation.
C++
MTAPIRES IMTConGroup::LimitHistory( const UINT limit // A limit of the trading history )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.LimitHistory( EnHistoryLimit limit // A limit of the trading history )  
---  
Python (Manager API)
MTConGroup.LimitHistory  
---  
Parameters
limit
[in] The [IMTConGroup::EnHistoryLimit](imtcongroup_enum.htm#enhistorylimit) enumeration is used for passing the limit of the trading operations history.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.