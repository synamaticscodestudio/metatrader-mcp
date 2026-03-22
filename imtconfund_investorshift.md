# InvestorShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ InvestorShift | [](imtconfund_investorclear.md "InvestorClear") [](imtconfund_investortotal.md "InvestorTotal") |
| --- | --- | --- |
| --- | --- |

IMTConFund::InvestorShift
Change the position of a fund investor in the list.
C++
MTAPIRES IMTConFund::InvestorShift( const UINT pos, // Investor position const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.InvestorShift( uint pos, // Investor position int  shift // Shift )  
---  
Parameters
pos
[in] Investor position in the list, starting with 0.
shift
[in] The shift of an investor account relative to its current position. A negative value means shift towards the top of the list, a positive value shifts towards the end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.