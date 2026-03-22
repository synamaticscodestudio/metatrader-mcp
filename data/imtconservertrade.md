# IMTConServerTrade (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network")/ IMTConServerTrade | [](imtconserver_clusterstateget.md "ClusterStateGet") [](imtconservertrade_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTConServerTrade
The IMTConServerTrade interface contains methods for managing settings that are specific to Trade Servers.
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtconservertrade_release.md "Release") | Delete the current object. |
| [Assign](imtconservertrade_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtconservertrade_clear.md "Clear") | Clear an object. |
| [DemoMode](imtconservertrade_demomode.md "DemoMode") | Gets and sets demo account allocation mode. |
| [DemoPeriod](imtconservertrade_demoperiod.md "DemoPeriod") | Gets and sets demo account validity period. |
| [OvernightMode](imtconservertrade_overnightmode.md "OvernightMode") | Get and set the mode of transition to the next day. |
| [OvernightTime](imtconservertrade_overnighttime.md "OvernightTime") | Get and set the time of transition to the next day. |
| [OvernightTimeLast](imtconservertrade_overnighttimelast.md "OvernightTimeLast") | Get the time of the last transition to the next day. |
| [OvernightTimePrev](imtconservertrade_overnighttimeprev.md "OvernightTimePrev") | Get the time of the last but one transition to the next day. |
| [OvernightDays](imtconservertrade_overnightdays.md "OvernightDays") | Gets and sets the schedule of operations related to the end of the trading day. |
| [OvermonthMode](imtconservertrade_overmonthmode.md "OvermonthMode") | Get and set the mode of transition to the next month. |
| [OvermonthTimeLast](imtconservertrade_overmonthtimelast.md "OvermonthTimeLast") | Get the time of the last transition to the next month. |
| [OvermonthTimePrev](imtconservertrade_overmonthtimeprev.md "OvermonthTimePrev") | Get the time of the last but one transition to the next month. |
| [LoginsRangeAdd](imtconservertrade_loginsrangeadd.md "LoginsRangeAdd") | Add a range of logins. |
| [LoginsRangeUpdate](imtconservertrade_loginsrangeupdate.md "LoginsRangeUpdate") | Update a range of logins. |
| [LoginsRangeDelete](imtconservertrade_loginsrangedelete.md "LoginsRangeDelete") | Delete a range of logins by the index. |
| [LoginsRangeClear](imtconservertrade_loginsrangeclear.md "LoginsRangeClear") | Clear the list of logins. |
| [LoginsRangeShift](imtconservertrade_loginsrangeshift.md "LoginsRangeShift") | Move the list of logins in the list. |
| [LoginsRangeTotal](imtconservertrade_loginsrangetotal.md "LoginsRangeTotal") | Get the number of login ranges of a trade server. |
| [LoginsRangeNext](imtconservertrade_loginsrangenext.md "LoginsRangeNext") | Get a range of logins by the index. |
| [OrdersRangeAdd](imtconservertrade_ordersrangeadd.md "OrdersRangeAdd") | Add a range of orders. |
| [OrdersRangeUpdate](imtconservertrade_ordersrangeupdate.md "OrdersRangeUpdate") | Update a range of orders. |
| [OrdersRangeDelete](imtconservertrade_ordersrangedelete.md "OrdersRangeDelete") | Delete a range of orders by the index. |
| [OrdersRangeClear](imtconservertrade_ordersrangeclear.md "OrdersRangeClear") | Clear the list of orders. |
| [OrdersRangeShift](imtconservertrade_ordersrangeshift.md "OrdersRangeShift") | Move the list of orders in the list. |
| [OrdersRangeTotal](imtconservertrade_ordersrangetotal.md "OrdersRangeTotal") | Get the number of ranges of orders of a trade server. |
| [OrdersRangeNext](imtconservertrade_ordersrangenext.md "OrdersRangeNext") | Gets a range of orders at the specified index. |
| [DealsRangeAdd](imtconservertrade_dealsrangeadd.md "DealsRangeAdd") | Add a range of orders. |
| [DealsRangeUpdate](imtconservertrade_dealsrangeupdate.md "DealsRangeUpdate") | Update a range of orders. |
| [DealsRangeDelete](imtconservertrade_dealsrangedelete.md "DealsRangeDelete") | Delete a range of deals by the index. |
| [DealsRangeClear](imtconservertrade_dealsrangeclear.md "DealsRangeClear") | Clears the range of deals. |
| [DealsRangeShift](imtconservertrade_dealsrangeshift.md "DealsRangeShift") | Move the list of deals in the list. |
| [DealsRangeTotal](imtconservertrade_dealsrangetotal.md "DealsRangeTotal") | Get the number of ranges of deals of a trade server. |
| [DealsRangeNext](imtconservertrade_dealsrangenext.md "DealsRangeNext") | Get a range of deals by the index. |
| [TotalUsers](imtconservertrade_totalusers.md "TotalUsers") | Get the total number of client accounts on the trade server. |
| [TotalUsersReal](imtconservertrade_totalusersreal.md "TotalUsersReal") | Get the total number of real clients on the trade server. |
| [TotalDeals](imtconservertrade_totaldeals.md "TotalDeals") | Get the total number of deals executed on the trade server. |
| [TotalOrders](imtconservertrade_totalorders.md "TotalOrders") | Get the total number of active orders placed on the trade server. |
| [TotalOrdersHistory](imtconservertrade_totalordershistory.md "TotalOrdersHistory") | Get the total number of orders in the history on the trade server. |
| [TotalPositions](imtconservertrade_totalpositions.md "TotalPositions") | Get the total number of positions on the trade server. |

The IMTConServerTrade class contains the following enumerations:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [EnDemoMode](imtconservertrade_enum.htm#endemomode) | Mode of demo account allocation. |
| [EnOvernightMode](imtconservertrade_enum.htm#enovernightmode) | The overnight mode. |
| [EnOvermonthMode](imtconservertrade_enum.htm#enovermonthmode) | The overmonth mode. |
| [EnOvernightDays](imtconservertrade_enum.htm#enovernightdays) | The schedule of operations related to the end of the trading day. |