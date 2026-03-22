# LimitAccounts (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConCommon ](imtconcommon.md "IMTConCommon")/ LimitAccounts | [](imtconcommon_limitwebservers.md "LimitWebServers") [](imtconcommon_limitdeals.md "LimitDeals") |
| --- | --- | --- |
| --- | --- |

IMTConCommon::LimitAccounts
Get the maximum number of [accounts](reference_user.md "Users") that can be opened in the trading platform.
C++
UINT IMTConCommon::LimitAccounts() const  
---  
.NET (Gateway/Manager API)
uint CIMTConCommon.LimitAccounts()  
---  
Python (Manager API)
MTConCommon.LimitAccounts  
---  
Return Value
The maximum number of accounts.
Note
The maximum number of accounts is specified in the license.