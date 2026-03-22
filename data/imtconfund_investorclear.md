# InvestorClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ InvestorClear | [](imtconfund_investordelete.md "InvestorDelete") [](imtconfund_investorshift.md "InvestorShift") |
| --- | --- | --- |
| --- | --- |

IMTConFund::InvestorClear
Clear the list of fund investors.
C++
MTAPIRES IMTConFund::InvestorClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.InvestorClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method removes all investors from the fund.