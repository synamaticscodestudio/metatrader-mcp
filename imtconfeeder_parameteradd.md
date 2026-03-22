# ParameterAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ ParameterAdd | [](imtconfeeder_timeoutattempts.md "TimeoutAttempts") [](imtconfeeder_parameterupdate.md "ParameterUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::ParameterAdd
Add a parameter of a data feed.
C++
MTAPIRES IMTConFeeder::ParameterAdd( IMTConParam* param // An object of a data feed parameter )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.ParameterAdd( CIMTConParam param // An object of a data feed parameter )  
---  
Python (Manager API)
MTConFeeder.ParameterAdd( param # An object of a data feed parameter )  
---  
Parameters
param
[in] An object of a data feed parameter.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.