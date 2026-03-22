# InvestorAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ InvestorAdd | [](imtconfund_accountnext.md "AccountNext") [](imtconfund_investorupdate.md "InvestorUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConFund::InvestorAdd
Add an investor for a fund.
C++
MTAPIRES IMTConFund::InvestorAdd( IMTConFundInvestor* investor // Investor object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.InvestorAdd( CIMTConFundInvestor investor // Investor object )  
---  
Parameters
investor
[in] [IMTConFundInvestor](imtconfundinvestor.md "IMTConFundInvestor") investor object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.