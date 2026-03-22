# OnSpreadAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Spreads ](config_spread.md "Spreads") / [ IMTConSpreadSink ](imtconspreadsink.md "IMTConSpreadSink")/ OnSpreadAdd | [](imtconspreadsink.md "IMTConSpreadSink") [](imtconspreadsink_onspreadupdate.md "OnSpreadUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConSpreadSink::OnSpreadAdd
A handler of the event of adding a new spread configuration.
C++
virtual void IMTConSpreadSink::OnSpreadAdd( const IMTConSpread* config // Pointer to the spread object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConSpreadSink.OnSpreadAdd( CIMTConSpread config // Spread object )  
---  
Parameters
config
[in] A pointer to the object of the added spread configuration.
Note
This method is called by the API to notify of adding of a new spread configuration.