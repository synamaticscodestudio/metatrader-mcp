# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFundAccount ](imtconfundaccount.md "IMTConFundAccount")/ Assign | [](imtconfundaccount_release.md "Release") [](imtconfundaccount_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConFundAccount::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConFundAccount::Assign( const IMTConFundAccount* account // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.Assign( CIMTConFundAccount account // Source object )  
---  
Parameters
account
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.