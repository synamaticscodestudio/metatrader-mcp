# FundInvestorCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Funds and ETF ](imtreportapi_config_fund.md "Funds and ETF")/ FundInvestorCreate | [](imtreportapi_fundaccountcreate.md "FundAccountCreate") [](imtreportapi_fundtotal.md "FundTotal") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::FundInvestorCreate
Create a fund investor object.
IMTConFundInvestor* IMTReportAPI::FundInvestorCreate()  
---  
Return Value
Returns a pointer to the created object that implements the [IMTConFundInvestor](imtconfundinvestor.md "IMTConFundInvestor") interface. Null is returned in case of failure.
Note
The created object must be destroyed by calling the [IMTConFundInvestor::Release](imtconfundinvestor_release.md "Release") method of this object.