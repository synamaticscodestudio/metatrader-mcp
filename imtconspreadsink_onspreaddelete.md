# OnSpreadDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Spreads ](config_spread.md "Spreads") / [ IMTConSpreadSink ](imtconspreadsink.md "IMTConSpreadSink")/ OnSpreadDelete | [](imtconspreadsink_onspreadupdate.md "OnSpreadUpdate") [](imtconspreadsink_onspreadsync.md "OnSpreadSync") |
| --- | --- | --- |
| --- | --- |

IMTConSpreadSink::OnSpreadDelete
A handler of the event of removing a configuration.
C++
virtual void IMTConSpreadSink::OnSpreadDelete( const IMTConSymbol* config // Pointer to the spread object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConSpreadSink.OnSpreadDelete( CIMTConSymbol  config // Spread object )  
---  
Parameters
config
[in] A pointer to the object of the deleted spread configuration.
Note
This method is called by the API to notify that a spread configuration has been deleted.