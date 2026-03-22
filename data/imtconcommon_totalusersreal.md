# TotalUsersReal (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConCommon ](imtconcommon.md "IMTConCommon")/ TotalUsersReal | [](imtconcommon_totalusers.md "TotalUsers") [](imtconcommon_totaldeals.md "TotalDeals") |
| --- | --- | --- |
| --- | --- |

IMTConCommon::TotalUsersReal
Get the total number of real[clients](reference_user.md "Users") in the whole trading platform (on all trade server).
C++
UINT IMTConCommon::TotalUsersReal() const  
---  
.NET (Gateway/Manager API)
uint CIMTConCommon.TotalUsersReal()  
---  
Python (Manager API)
MTConCommon.TotalUsersReal  
---  
Return Value
The total number of real clients.
Note
Real clients imply the accounts that are not included in [groups](config_group.md "Groups") manager*, demo*, preliminary* and contest*.