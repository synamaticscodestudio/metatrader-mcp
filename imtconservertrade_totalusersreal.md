# TotalUsersReal (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerTrade ](imtconservertrade.md "IMTConServerTrade")/ TotalUsersReal | [](imtconservertrade_totalusers.md "TotalUsers") [](imtconservertrade_totaldeals.md "TotalDeals") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade::TotalUsersReal
Get the total number of real [clients](reference_user.md "Users") on the trade server.
C++
UINT IMTConServerTrade::TotalUsersReal() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServerTrade.TotalUsersReal()  
---  
Python (Manager API)
MTConServerTrade.TotalUsersReal  
---  
Return Value
The total number of real clients.
Note
Real clients imply the accounts that are not included in [groups](config_group.md "Groups") manager*, demo*, preliminary* and contest*.