# Time (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ Time | [](imtdeal_contractsize.md "ContractSize") [](imtdeal_timemsc.md "TimeMsc") |
| --- | --- | --- |
| --- | --- |

IMTDeal::Time
Get the time of a deal.
C++
INT64 IMTDeal::Time() const  
---  
.NET (Gateway/Manager API)
long CIMTDeal.Time()  
---  
Python
MTDeal.Time  
---  
Return Value
The time of a deal execution in seconds that have elapsed since 01.01.1970.
IMTDeal::Time
Set the time of a deal.
C++
MTAPIRES IMTDeal::Time( const INT64 time // Deal time )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.Time( long time // Deal time )  
---  
Python
MTDeal.Time  
---  
Parameters
time
[in] The time of a deal execution in seconds that have elapsed since 01.01.1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
If the value of this field is specified, the [IMTDeal::TimeMsc](imtdeal_timemsc.md "TimeMsc") value will be filled in automatically.