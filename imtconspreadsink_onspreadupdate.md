# OnSpreadUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Spreads ](config_spread.md "Spreads") / [ IMTConSpreadSink ](imtconspreadsink.md "IMTConSpreadSink")/ OnSpreadUpdate | [](imtconspreadsink_onspreadadd.md "OnSpreadAdd") [](imtconspreadsink_onspreaddelete.md "OnSpreadDelete") |
| --- | --- | --- |
| --- | --- |

IMTConSpreadSink::OnSpreadUpdate
A handler of the event of updating a spread configuration.
C++
virtual void IMTConSpreadSink::OnSpreadUpdate( const IMTConSpread* config // Pointer to the spread object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConSpreadSink.OnSpreadUpdate( CIMTConSpread config // Spread object )  
---  
Parameters
config
[in] A pointer to the updated spread configuration object.
Note
This method is called by API to notify that a spread configuration has been changed.