# OnEOMGroupStart (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Interface of End-of-Day Events ](imtendofdaysink.md "Interface of End-of-Day Events")/ OnEOMGroupStart | [](imtendofdaysink_oneomstart.md "OnEOMStart") [](imtendofdaysink_oneomgroupcommissions.md "OnEOMGroupCommissions") |
| --- | --- | --- |
| --- | --- |

IMTEndOfDaySink::OnEOMGroupStart
A handler of the event of start of operations associated with the end of the trading month for the specified group.
virtual void IMTEndOfDaySink::OnEOMGroupStart( const INT64 datetime, // Time of the event const INT64 prev_datetime, // Time of the previous event const IMTConGroup* group // Group )  
---  
Parameters
datetime
[out] Time of the event in seconds that elapsed since 01.01.1970.
prev_datetime
[out] Time of the previous similar event in seconds that elapsed since 01.01.1970.
group
[out] [The object of the group](imtcongroup.md "IMTConGroup"), with which the event is associated.