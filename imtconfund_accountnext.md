# AccountNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ AccountNext | [](imtconfund_accounttotal.md "AccountTotal") [](imtconfund_investoradd.md "InvestorAdd") |
| --- | --- | --- |
| --- | --- |

IMTConFund::AccountNext
Get a fund manager by index.
C++
MTAPIRES IMTConFund::AccountNext( const UINT pos, // Symbol position IMTConFundAccount*  account // Manager object ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.AccountNext( uint pos, // Symbol position CIMTConFundAccount account // Manager object )  
---  
Parameters
pos
[in] Manager position in the list, starting at 0.
account
[out] [IMTConFundAccount](imtconfundaccount.md "IMTConFundAccount") manager object. The 'account' object must be pre-created using the [IMTReportAPI::FundAccountCreate](imtreportapi_fundaccountcreate.md "FundAccountCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.