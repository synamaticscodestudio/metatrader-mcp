# NewsMax (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAccess ](imtconserveraccess.md "IMTConServerAccess")/ NewsMax | [](imtconserveraccess_accessmask.md "AccessMask") [](imtconserveraccess_antifloodenabled.md "AntifloodEnabled") |
| --- | --- | --- |
| --- | --- |

IMTConServerAccess::NewsMax
Get the maximum number of news that can be stored (cached) on the Access Server.
C++
UINT IMTConServerAccess::NewsMax() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServerAccess.NewsMax()  
---  
Python (Manager API)
MTConServerAccess.NewsMax  
---  
Return Value
The maximum number of news that can be stored on the Access Server.
IMTConServerAccess::NewsMax
Set the maximum number of news that can be stored (cached) on the Access Server.
C++
MTAPIRES IMTConServerAccess::NewsMax( const UINT news_max // Maximum number of news. )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAccess.NewsMax( uint  news_max // Maximum number of news. )  
---  
Python (Manager API)
MTConServerAccess.NewsMax  
---  
Parameters
news_max
[in] The maximum number of news.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.