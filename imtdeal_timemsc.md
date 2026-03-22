# TimeMsc (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ TimeMsc | [](imtdeal_time.md "Time") [](imtdeal_symbol.md "Symbol") |
| --- | --- | --- |
| --- | --- |

IMTDeal::TimeMsc
Gets the time of a deal execution in milliseconds.
C++
INT64 IMTDeal::TimeMsc() const  
---  
.NET (Gateway/Manager API)
long CIMTDeal.TimeMsc()  
---  
Python
MTDeal.TimeMsc  
---  
Return Value
The time of a deal execution in milliseconds that have elapsed since January 1, 1970.
IMTDeal::TimeMsc
Sets the time of a deal execution in milliseconds.
C++
MTAPIRES IMTDeal::TimeMsc( const INT64 time // Deal time in milliseconds )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.TimeMsc( long time // Deal time in milliseconds )  
---  
Python
MTDeal.TimeMsc  
---  
Parameters
time
[in] The time of a deal execution in milliseconds that have elapsed since January 1, 1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
If the value of this field is specified, the [IMTDeal::Time](imtdeal_time.md "Time") value will be filled in automatically.