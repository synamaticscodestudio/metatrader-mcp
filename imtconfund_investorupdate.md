# InvestorUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ InvestorUpdate | [](imtconfund_investoradd.md "InvestorAdd") [](imtconfund_investordelete.md "InvestorDelete") |
| --- | --- | --- |
| --- | --- |

IMTConFund::InvestorUpdate
Edit a fund investor.
C++
MTAPIRES IMTConFund::InvestorUpdate( const UINT pos, // Symbol position const IMTConFundInvestor* investor // Investor object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.InvestorUpdate( uint pos, // Symbol position CIMTConFundInvestor investor // Investor object )  
---  
Parameters
pos
[in] Investor position in the list, starting with 0.
news
[in] [IMTConFundInvestor](imtconfundinvestor.md "IMTConFundInvestor") investor object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.