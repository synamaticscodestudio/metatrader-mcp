# OnConServerAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerSink ](imtconserversink.md "IMTConServerSink")/ OnConServerAdd | [](imtconserversink.md "IMTConServerSink") [](imtconserversink_onconserverupdate.md "OnConServerUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConServerSink::OnConServerAdd
A handler of the event of adding a new server configuration.
C++
virtual void IMTConServerSink::OnConServerAdd( const IMTConServer* server // Pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConServerSink.OnConServerAdd( CIMTConServer server // Configuration object )  
---  
Parameters
server
[in] A pointer to the object of the added configuration.
Note
This method is called by tServer API to notify that a new server configuration has been added.