# OnConServerUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerSink ](imtconserversink.md "IMTConServerSink")/ OnConServerUpdate | [](imtconserversink_onconserveradd.md "OnConServerAdd") [](imtconserversink_onconserverdelete.md "OnConServerDelete") |
| --- | --- | --- |
| --- | --- |

IMTConServerSink::OnConServerUpdate
A handler of the event of updating a server configuration.
C++
virtual void IMTConServerSink::OnConServerUpdate( const IMTConServer* server // Pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConServerSink.OnConServerUpdate( CIMTConServer server // Configuration object )  
---  
Parameters
server
[in] A pointer to the updated configuration object.
Note
This method is called by the API to notify that a server configuration has been updated.