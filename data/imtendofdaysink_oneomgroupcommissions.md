# OnEOMGroupCommissions (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Interface of End-of-Day Events ](imtendofdaysink.md "Interface of End-of-Day Events")/ OnEOMGroupCommissions | [](imtendofdaysink_oneomgroupstart.md "OnEOMGroupStart") [](imtendofdaysink_oneomgroupinterest.md "OnEOMGroupInterest") |
| --- | --- | --- |
| --- | --- |

IMTEndOfDaySink::OnEOMGroupCommissions
A handler of the event of start of commission charging for the specified group at the end of the trading month.
virtual void IMTEndOfDaySink::OnEOMGroupCommissions( const INT64 datetime, // Time of the event const INT64 prev_datetime, // Time of the previous event const IMTConGroup* group // Group )  
---  
Parameters
datetime
[out] Time of the event in seconds that elapsed since 01.01.1970.
prev_datetime
[out] Time of the previous similar event in seconds that elapsed since 01.01.1970.
group
[out] [The object of the group](imtcongroup.md "IMTConGroup"), with which the event is associated.