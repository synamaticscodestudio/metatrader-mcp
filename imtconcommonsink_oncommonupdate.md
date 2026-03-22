# OnCommonUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConCommonSink ](imtconcommonsink.md "IMTConCommonSink")/ OnCommonUpdate | [](imtconcommonsink.md "IMTConCommonSink") [](imtconcommonsink_oncommonsync.md "OnCommonSync") |
| --- | --- | --- |
| --- | --- |

IMTConCommonSink::OnCommonUpdate
The handler of the event of common configuration update.
C++
virtual void IMTConCommonSink::OnCommonUpdate( const IMTConCommon* config // Pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConCommonSink.OnCommonUpdate( CIMTConCommon config // Configuration object )  
---  
Parameters
config
[in] A pointer to the updated configuration object.
Note
This method is called by the API to notify that a common configuration has been updated.