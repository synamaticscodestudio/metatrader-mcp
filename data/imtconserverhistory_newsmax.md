# NewsMax (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerHistory ](imtconserverhistory.md "IMTConServerHistory")/ NewsMax | [](imtconserverhistory_datafeedstimeout.md "DatafeedsTimeout") [](imtconserverbackup.md "IMTConServerBackup") |
| --- | --- | --- |
| --- | --- |

IMTConServerHistory::NewsMax
Gets the maximum number of news that can be stored on the history server.
C++
UINT IMTConServerHistory::NewsMax() const  
---  
.NET (Gateway/Manager API)
uint CIMTConServerHistory.NewsMax()  
---  
Python (Manager API)
MTConServerHistory.NewsMax  
---  
Return Value
The maximum number of news that can be stored on the history server.
IMTConServerHistory::NewsMax
Sets the maximum number of news that can be stored on the history server.
C++
MTAPIRES IMTConServerHistory::NewsMax( const UINT news_max // Maximum number of news )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerHistory.NewsMax( uint news_max // Maximum number of news )  
---  
Python (Manager API)
MTConServerHistory.NewsMax  
---  
Parameters
news_max
[in] The maximum number of news.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.