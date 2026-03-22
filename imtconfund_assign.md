# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ Assign | [](imtconfund_release.md "Release") [](imtconfund_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConFund::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConFund::Assign( const IMTConFund* fund // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.Assign( CIMTConFund fund // Source object )  
---  
Parameters
fund
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.