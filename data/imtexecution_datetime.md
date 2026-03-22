# Datetime (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ Datetime | [](imtexecution_action.md "Action") [](imtexecution_datetimemsc.md "DatetimeMsc") |
| --- | --- | --- |
| --- | --- |

IMTExecution::Datetime
Get the time of a trade execution occurrence in an external trading system.
C++
INT64 IMTExecution::Datetime() const  
---  
.NET (Gateway/Manager API)
long CIMTExecution.Datetime()  
---  
Return Value
The time of a trade execution occurrence in an external trading system. The date is specified in seconds since January 1, 1970.
IMTExecution::Datetime
Set the time of a trade execution occurrence in an external trading system.
C++
MTAPIRES IMTExecution::Datetime( const INT64 datetime // Trade execution time )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.Datetime( long datetime // Trade execution time )  
---  
Parameters
datetime
[in] The time of a trade execution occurrence in an external trading system. The date is specified in seconds since January 1, 1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method is obsolete. It is recommended to use [IMTExecution::DatetimeMsc](imtexecution_datetimemsc.md "DatetimeMsc").
If the value of this field is specified, the value [IMTExecution::DatetimeMsc](imtexecution_datetimemsc.md "DatetimeMsc") will be filled automatically.
Depending on the trade execution type, the value of this parameter affects different parameters in the trading platform.
| Type of Trade Execution | Action |
| --- | --- |
| --- | --- |
| TE_ORDER_NEW | Setting the time of placement of an order in an external system. The following fields are filled with the IMTExecution::Datetime value: |

  * [IMTOrder::TimeSetup](imtorder_timesetup.md "TimeSetup")
  * [IMTORder::TimeSetupMsc](imtorder_timesetupmsc.md "TimeSetupMsc")

  
TE_ORDER_FILL | Setting the time of filling of an order in an external system as well as setting the time of execution of the corresponding deal. The following fields are filled with the IMTExecution::Datetime value:
  * [IMTOrder::TimeDone](imtorder_timedone.md "TimeDone")
  * [IMTOrder::TimeDoneMsc](imtorder_timedonemsc.md "TimeDoneMsc")
  * IMTDeal::Time
  * IMTDeal::TimeMsc

  
TE_ORDER_MODIFY | Setting a new time of placement of an order. Such algorithm is implemented due to specific procedure of modification of orders in most of the external systems: an order is modified by deleting the old one and creating a new one. The following fields are filled with the IMTExecution::Datetime value:
  * [IMTOrder::TimeSetup](imtorder_timesetup.md "TimeSetup")
  * [IMTORder::TimeSetupMsc](imtorder_timesetupmsc.md "TimeSetupMsc")

  
TE_ORDER_CANCEL | Setting a new time of execution of an order. The following fields are filled with the IMTExecution::Datetime value:
  * [IMTOrder::TimeDone](imtorder_timedone.md "TimeDone")
  * [IMTOrder::TimeDoneMsc](imtorder_timedonemsc.md "TimeDoneMsc")
