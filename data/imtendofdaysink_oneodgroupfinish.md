# OnEODGroupFinish (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Interface of End-of-Day Events ](imtendofdaysink.md "Interface of End-of-Day Events")/ OnEODGroupFinish | [](imtendofdaysink_oneodgrouprollovers.md "OnEODGroupRollovers") [](imtendofdaysink_oneodfinish.md "OnEODFinish") |
| --- | --- | --- |
| --- | --- |

IMTEndOfDaySink::OnEODGroupFinish
A handler of the event of completion of operations associated with the end of the trading day for the specified group.
virtual void IMTEndOfDaySink::OnEODGroupFinish( const INT64 datetime, // Time of the event const INT64 prev_datetime, // Time of the previous event const IMTConGroup* group // Group )  
---  
Parameters
datetime
[out] Time of the event in seconds that elapsed since 01.01.1970.
prev_datetime
[out] Time of the previous similar event in seconds that elapsed since 01.01.1970.
group
[out] [The object of the group](imtcongroup.md "IMTConGroup"), with which the event is associated.