# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFundInvestor ](imtconfundinvestor.md "IMTConFundInvestor")/ Assign | [](imtconfundinvestor_release.md "Release") [](imtconfundinvestor_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConFundInvestor::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConFundInvestor::Assign( const IMTConFundInvestor* investor // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFundInvestor.Assign( CIMTConFundInvestor investor // Source object )  
---  
Parameters
investor
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.