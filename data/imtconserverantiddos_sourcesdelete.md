# SourcesDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerAntiDDoS ](imtconserverantiddos.md "IMTConServerAntiDDoS")/ SourcesDelete | [](imtconserverantiddos_sourcesupdate.md "SourcesUpdate") [](imtconserverantiddos_sourcesshift.md "SourcesShift") |
| --- | --- | --- |
| --- | --- |

IMTConServerAntiDDoS::SourcesDelete
Delete the range of IP addresses of Anti DDoS provider's proxy servers.
C++
MTAPIRES IMTConServerAntiDDoS::SourcesDelete( const UINT pos // The position of the range )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerAntiDDoS.SourcesDelete( uint pos // The position of the range )  
---  
Python (Manager API)
MTConServerAntiDDoS.SourcesDelete( pos # The position of the range )  
---  
Parameters
pos
[in] Position of the range, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
The ranges of IP addresses of proxy servers should be provide by your Anti DDoS protection service provider. The ranges are used as an additional protection measure: connections forwarded by the Anti-DDoS provider will only be accepted from these addresses.