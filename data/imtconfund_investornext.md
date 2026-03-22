# InvestorNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ InvestorNext | [](imtconfund_investortotal.md "InvestorTotal") [](imtconfundaccount.md "IMTConFundAccount") |
| --- | --- | --- |
| --- | --- |

IMTConFund::InvestorNext
Get a fund investor by index.
C++
MTAPIRES IMTConFund::InvestorNext( const UINT pos, // Investor position IMTConFundInvestor* investor // Investor object ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.InvestorNext( uint pos, // Investor position CIMTConFundInvestor investor // Investor object )  
---  
Parameters
pos
[in] Investor position in the list, starting with 0.
investor
[out] Investor object [IMTConFundInvestor](imtconfundinvestor.md "IMTConFundInvestor"). The investor object must be previously created using the [IMTReportAPI::FundInvestorCreate](imtreportapi_fundinvestorcreate.md "FundInvestorCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.