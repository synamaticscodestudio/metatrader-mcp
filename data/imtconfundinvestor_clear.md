# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFundInvestor ](imtconfundinvestor.md "IMTConFundInvestor")/ Clear | [](imtconfundinvestor_assign.md "Assign") [](imtconfundinvestor_login.md "Login") |
| --- | --- | --- |
| --- | --- |

IMTConFundInvestor::Clear
Clear an object.
C++
MTAPIRES IMTConFundInvestor::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFundInvestor.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method deletes data from all fields ​​and removes all embedded objects.