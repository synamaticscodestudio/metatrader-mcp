# DatafeedsTimeout (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerHistory ](imtconserverhistory.md "IMTConServerHistory")/ DatafeedsTimeout | [](imtconserverhistory_clear.md "Clear") [](imtconserverhistory_newsmax.md "NewsMax") |
| --- | --- | --- |
| --- | --- |

IMTConServerHistory::DatafeedsTimeout
Get a timeout of [data feeds](config_datafeeds.md "Data Feeds") before switching to other feed.
C++
UINT IMTConServerHistory::DatafeedsTimeout() const  
---  
.NET (Gateway/Manager API)
uint IMTConServerHistory::DatafeedsTimeout()  
---  
Python (Manager API)
MTConServerHistory.DatafeedsTimeout  
---  
Return Value
Timeout if data feed.
IMTConServerHistory::DatafeedsTimeout
Set a timeout of [data feeds](config_datafeeds.md "Data Feeds") before switching to other feed.
C++
MTAPIRES IMTConServerHistory::DatafeedsTimeout( const UINT timeout // Timeout )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerHistory.DatafeedsTimeout( uint timeout // Timeout )  
---  
Python (Manager API)
MTConServerHistory.DatafeedsTimeout  
---  
Parameters
timeout
[in] Data feed timeout in seconds.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.