# MaxCapital (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ MaxCapital | [](imtconfund_enddate.md "EndDate") [](imtconfund_currency.md "Currency") |
| --- | --- | --- |
| --- | --- |

IMTConFund::MaxCapital
Get the maximum allowable investment amount for a fund.
C++
double IMTConFund::MaxCapital() const  
---  
.NET (Gateway/Manager API)
double CIMTConFund.MaxCapital()  
---  
Return Value
The maximum allowable investment amount for a fund.
Note
The currency in which the amount is specified, is determined by the [IMTConFund::Currency](imtconfund_currency.md "Currency") property.
IMTConFund::MaxCapital
Set the maximum allowable investment amount for a fund.
C++
MTAPIRES IMTConFund::MaxCapital( const double max_capital // Investment amount )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFund.MaxCapital( double max_capital // Investment amount )  
---  
Parameters
max_capital
[in] The maximum allowable investment amount for a fund.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The currency in which the amount is specified, is determined by the [IMTConFund::Currency](imtconfund_currency.md "Currency") property.