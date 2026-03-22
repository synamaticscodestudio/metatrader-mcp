# List of Events (MetaTrader5SDK)

|  | List of Events | [](features.md "Development Features") [](hook_list.md "List of Hooks") |
| --- | --- | --- |
| --- | --- |

List of Events
Server API  
---  
[OnTradeRequestAdd](imttradesink_ontraderequestadd.md "OnTradeRequestAdd") | A handler of the event of adding a checked trade request in the requests queue.  
[OnTradeRequestUpdate](imttradesink_ontraderequestupdate.md "OnTradeRequestUpdate") | A handler of the event of a changed state of a trade request.  
[OnTradeRequestDelete](imttradesink_ontraderequestdelete.md "OnTradeRequestDelete") | A handler of the event of a trade request deletion.  
[OnTradeRequestProcess](imttradesink_ontraderequestprocess.md "OnTradeRequestProcess") | A handler of the event of a successful execution of a trade request.  
[OnTradeRequestProcessCloseBy](imttradesink_ontraderequestprocesscloseby.md "OnTradeRequestProcessCloseBy") | A handler of the event of a successful execution of a Close By trade request.  
[OnTradeRequestRefuse](imttradesink_ontraderequestrefuse.md "OnTradeRequestRefuse") | A handler of the event of refusal to execute a trade request before it is added to the queue.  
[OnTradeExecution](imttradesink_ontradeexecution.md "OnTradeExecution") | A handler of the event of receiving a trade execution from a gateway.  
[OnEODStart](imtendofdaysink_oneodstart.md "OnEODStart") | A handler of the event of start of operations associated with the end of the trading day.  
[OnEODGroupStart](imtendofdaysink_oneodgroupstart.md "OnEODGroupStart") | A handler of the event of start of operations associated with the end of the trading day for the specified group.  
[OnEODGroupCommissions](imtendofdaysink_oneodgroupcommissions.md "OnEODGroupCommissions") | A handler of the event of start of commission charging for the specified group at the end of the trading day.  
[OnEODGroupInterest](imtendofdaysink_oneodgroupinterest.md "OnEODGroupInterest") | A handler of the event of start of annual interest charging for the specified group at the end of the trading day.  
[OnEODGroupStatements](imtendofdaysink_oneodgroupstatements.md "OnEODGroupStatements") | A handler of the event of start of daily report generation for the specified group at the end of the trading day.  
[OnEODGroupRollovers](imtendofdaysink_oneodgrouprollovers.md "OnEODGroupRollovers") | A handler of the event of start of rollover charging for the specified group at the end of the trading day.  
[OnEODGroupFinish](imtendofdaysink_oneodgroupfinish.md "OnEODGroupFinish") | A handler of the event of completion of operations associated with the end of the trading day for the specified group.  
[OnEODFinish](imtendofdaysink_oneodfinish.md "OnEODFinish") | A handler of the event of completion of operations associated with the end of the trading day.  
[OnEOMStart](imtendofdaysink_oneomstart.md "OnEOMStart") | A handler of the event of start of operations associated with the end of the trading month.  
[OnEOMGroupStart](imtendofdaysink_oneomgroupstart.md "OnEOMGroupStart") | A handler of the event of start of operations associated with the end of the trading month for the specified group.  
[OnEOMGroupCommissions](imtendofdaysink_oneomgroupcommissions.md "OnEOMGroupCommissions") | A handler of the event of start of commission charging for the specified group at the end of the trading month.  
[OnEOMGroupInterest](imtendofdaysink_oneomgroupinterest.md "OnEOMGroupInterest") | A handler of the event of start of annual interest charging for the specified group at the end of the trading month.  
[OnEOMGroupStatements](imtendofdaysink_oneomgroupstatements.md "OnEOMGroupStatements") | A handler of the event of start of daily report generation for the specified group at the end of the trading month.  
[OnEOMGroupFinish](imtendofdaysink_oneomgroupfinish.md "OnEOMGroupFinish") | A handler of the event of completion of operations associated with the end of the trading month for the specified group.  
[OnEOMFinish](imtendofdaysink_oneomfinish.md "OnEOMFinish") | A handler of the event of completion of operations associated with the end of the trading month.  
[OnServerLog](imtserversink_onserverlog.md "OnServerLog") | A handler of the event of adding a record to the server journal.  
Manager API  
[OnDealerResult](imtdealersink_ondealerresult.md "OnDealerResult") | Asynchronous answer to a dealer's trade request in the form of the object of confirmation.  
[OnDealerAnswer](imtdealersink_ondealeranswer.md "OnDealerAnswer") | Asynchronous answer to a dealer's trade request in the form of the object of request.  
[OnConnect](imtmanagersink_onconnect.md "OnConnect") | A handler that notifies of establishing/restoring a connection between the manager or administrator terminal and the server.  
[OnDisconnect](imtmanagersink_ondisconnect.md "OnDisconnect") | A handler that notifies of loss of connection between the manager or administrator terminal and the server.  
[OnTradeAccountSet](imtmanagersink_ontradeaccountset.md "OnTradeAccountSet") | This handler receives [IMTManagerAPI::TradeAccountSet](imtmanagerapi_tradeaccountset.md "TradeAccountSet") method execution result, as well as the final status of a client entry (after the passed changes have been applied).  
Gateway API  
[OnServerDisconnect](imtgatewaysink_onserverdisconnect.md "OnServerDisconnect") | A handler of the event of the end of connection to one of the MetaTrader 5 platform components (server).  
[OnGatewayConfig](imtgatewaysink_ongatewayconfig.md "OnGatewayConfig") | A handler of the event of passing a gateway/data feed own configuration from a history server connected to it.  
[OnGatewayStart](imtgatewaysink_ongatewaystart.md "OnGatewayStart") | A handler of the following event: Gateway API is synchronized with the platform and is ready for work.  
[OnGatewayStop](imtgatewaysink_ongatewaystop.md "OnGatewayStop") | OnGatewayStart inverse events hadler. Notifies on the fact that Gateway API is not synchronized with the platform and not ready for work.  
[OnGatewayShutdown](imtgatewaysink_ongatewayshutdown.md "OnGatewayShutdown") | A handler of the event notifying on a trading platform operation end.  
[OnDealerLock](imtgatewaysink_ondealerlock.md "OnDealerLock") | A handler of the event of capturing (blocking) of a successive trade request from a requests queue.  
[OnDealerAnswer](imtgatewaysink_ondealeranswer.md "OnDealerAnswer") | A handler of the event notifying on a request confirmation or execution result.  
[OnGatewayAccountSet](imtgatewaysink_ongatewayaccountset.md "OnGatewayAccountSet") | A handler of the event of requesting information about a client from MetaTrader 5 platform.  
[OnGatewayAccountAnswer](imtgatewaysink_ongatewayaccountanswer.md "OnGatewayAccountAnswer") | A handler of the event of modifying information about a client via [IMTGatewayAPI::GatewayAccountSet](imtgatewayapi_gatewayaccountset.md "GatewayAccountSet") method.  
[OnServerSymbolAdd](imtgatewaysink_onserversymboladd.md "OnServerSymbolAdd") | A handler of the event of symbol adding.  
[OnServerSymbolDelete](imtgatewaysink_onserversymboldelete.md "OnServerSymbolDelete") | A handler of the event of symbol removal.  
Common events of configurations  
[OnCommonUpdate](imtconcommonsink_oncommonupdate.md "OnCommonUpdate") | The handler of the event of common configuration update.  
[OnCommonSync](imtconcommonsink_oncommonsync.md "OnCommonSync") | This method is called by the API to notify that a common configuration has been updated.  
[OnConServerAdd](imtconserversink_onconserveradd.md "OnConServerAdd") | A handler of the event of adding a new server configuration.  
[OnConServerUpdate](imtconserversink_onconserverupdate.md "OnConServerUpdate") | A handler of the event of updating a server configuration.  
[OnConServerDelete](imtconserversink_onconserverdelete.md "OnConServerDelete") | A handler of the event of removing a server configuration.  
[OnConServerSync](imtconserversink_onconserversync.md "OnConServerSync") | A handler of the event of synchronization of a server configuration.  
[OnPluginAdd](imtconpluginsink_onpluginadd.md "OnPluginAdd") | A handler of the event of adding a new plugin configuration.  
[OnPluginUpdate](imtconpluginsink_onpluginupdate.md "OnPluginUpdate") | A handler of the event of updating a plugin configuration.  
[OnPluginDelete](imtconpluginsink_onplugindelete.md "OnPluginDelete") | A handler of the event of removing a plugin configuration.  
[OnPluginSync](imtconpluginsink_onpluginsync.md "OnPluginSync") | A handler of the event of synchronization of plugin configuration.  
[OnFeederAdd](imtconfeedersink_onfeederadd.md "OnFeederAdd") | A handler of the event of adding a new data feed configuration.  
[OnFeederUpdate](imtconfeedersink_onfeederupdate.md "OnFeederUpdate") | A handler of the event of updating a data feed configuration.  
[OnFeederDelete](imtconfeedersink_onfeederdelete.md "OnFeederDelete") | A handler of the event of removing a data feed configuration.  
[OnFeederSync](imtconfeedersink_onfeedersync.md "OnFeederSync") | A handler of the event of synchronization of a data feed configuration.  
[OnTimeUpdate](imtcontimesink_ontimeupdate.md "OnTimeUpdate") | A handler of the event of update of the platform time settings.  
[OnTimeSync](imtcontimesink_ontimesync.md "OnTimeSync") | A handler of the event of synchronization of the platform time settings.  
[OnHolidayAdd](imtconholidaysink_onholidayadd.md "OnHolidayAdd") | A handler of the event of adding a new holiday configuration.  
[OnHolidayUpdate](imtconholidaysink_onholidayupdate.md "OnHolidayUpdate") | A handler of the event of updating a holiday configuration.  
[OnHolidayDelete](imtconholidaysink_onholidaydelete.md "OnHolidayDelete") | A handler of the event of removing a holiday configuration.  
[OnHolidaySync](imtconholidaysink_onholidaysync.md "OnHolidaySync") | A handler of the event of synchronization of holiday configuration.  
[OnFirewallAdd](imtconfirewallsink_onfirewalladd.md "OnFirewallAdd") | A handler of the event of adding a new firewall rule.  
[OnFirewallUpdate](imtconfirewallsink_onfirewallupdate.md "OnFirewallUpdate") | A handler of the event of update of a firewall rule.  
[OnFirewallDelete](imtconfirewallsink_onfirewalldelete.md "OnFirewallDelete") | A handler of the event of deletion of a firewall rule.  
[OnFirewallSync](imtconfirewallsink_onfirewallsync.md "OnFirewallSync") | A handler of the firewall rules synchronization event.  
[OnSymbolAdd](imtconsymbolsink_onsymboladd.md "OnSymbolAdd") | A handler of the event of adding a new symbol.  
[OnSymbolUpdate](imtconsymbolsink_onsymbolupdate.md "OnSymbolUpdate") | A handler of the event of updating symbol settings.  
[OnSymbolDelete](imtconsymbolsink_onsymboldelete.md "OnSymbolDelete") | A handler of the event of symbol removal.  
[OnSymbolSync](imtconsymbolsink_onsymbolsync.md "OnSymbolSync") | A handler of the event of symbols synchronization.  
[OnSpreadAdd](imtconspreadsink_onspreadadd.md "OnSpreadAdd") | A handler of the event of adding a new spread configuration.  
[OnSpreadUpdate](imtconspreadsink_onspreadupdate.md "OnSpreadUpdate") | A handler of the event of updating spread settings.  
[OnSpreadDelete](imtconspreadsink_onspreaddelete.md "OnSpreadDelete") | A handler of the event of removing a spread configuration.  
[OnSpreadSync](imtconspreadsink_onspreadsync.md "OnSpreadSync") | A handler of the event of synchronization of spread configurations.  
[OnGroupAdd](imtcongroupsink_ongroupadd.md "OnGroupAdd") | A handler of the event of adding a new group.  
[OnGroupUpdate](imtcongroupsink_ongroupupdate.md "OnGroupUpdate") | A handler of the event of updating group settings.  
[OnGroupDelete](imtcongroupsink_ongroupdelete.md "OnGroupDelete") | A handler of the event of group removal.  
[OnGroupSync](imtcongroupsink_ongroupsync.md "OnGroupSync") | A handler of the event of groups synchronization.  
[OnManagerAdd](imtconmanagersink_onmanageradd.md "OnManagerAdd") | A handler of the event of adding a new manager configuration.  
[OnManagerUpdate](imtconmanagersink_onmanagerupdate.md "OnManagerUpdate") | A handler of the event of updating manager settings.  
[OnManagerDelete](imtconmanagersink_onmanagerdelete.md "OnManagerDelete") | A handler of the event of removing a manager configuration.  
[OnManagerSync](imtconmanagersink_onmanagersync.md "OnManagerSync") | A handler of the event of synchronization of manager configurations.  
[OnHistorySyncAdd](imtconhistorysyncsink_onhistorysyncadd.md "OnHistorySyncAdd") | A handler of the event of adding a new configuration of history data synchronization.  
[OnHistorySyncUpdate](imtconhistorysyncsink_onhistorysyncupdate.md "OnHistorySyncUpdate") | A handler of the event of update of a configuration of history data synchronization.  
[OnHistorySyncDelete](imtconhistorysyncsink_onhistorysyncdelete.md "OnHistorySyncDelete") | A handler of the event of deletion of a configuration of history data synchronization.  
[OnHistorySyncSync](imtconhistorysyncsink_onhistorysyncsync.md "OnHistorySyncSync") | A handler of the event of synchronization of configurations of history data synchronization.  
[OnGatewayAdd](imtcongatewaysink_ongatewayadd.md "OnGatewayAdd") | A handler of the event of adding a new gateway configuration.  
[OnGatewayUpdate](imtcongatewaysink_ongatewayupdate.md "OnGatewayUpdate") | A handler of the event of updating a gateway configuration.  
[OnGatewayDelete](imtcongatewaysink_ongatewaydelete.md "OnGatewayDelete") | A handler of the event of removing a gateway configuration.  
[OnGatewaySync](imtcongatewaysink_ongatewaysync.md "OnGatewaySync") | A handler of the event of synchronization of gateway configuration.  
[OnRouteAdd](imtconroutesink_onrouteadd.md "OnRouteAdd") | A handler of the event of adding a new routing rule.  
[OnRouteUpdate](imtconroutesink_onrouteupdate.md "OnRouteUpdate") | A handler of the event of updating a routing rule.  
[OnRouteDelete](imtconroutesink_onroutedelete.md "OnRouteDelete") | A handler of the event of deletion of a routing rule.  
[OnRouteSync](imtconroutesink_onroutesync.md "OnRouteSync") | A handler of the event of synchronization of routing rules.  
[OnReportAdd](imtconreportsink_onreportadd.md "OnReportAdd") | A handler of the event of adding a new report configuration.  
[OnReportUpdate](imtconreportsink_onreportupdate.md "OnReportUpdate") | A handler of the event of updating a report configuration.  
[OnReportDelete](imtconreportsink_onreportdelete.md "OnReportDelete") | A handler of the event of removing a report configuration.  
[OnReportSync](imtconreportsink_onreportsync.md "OnReportSync") | A handler of the event of synchronization of report configurations.  
Common events of databases  
[OnOrderAdd](imtordersink_onorderadd.md "OnOrderAdd") | A handler of the event of adding an open order.  
[OnOrderUpdate](imtordersink_onorderupdate.md "OnOrderUpdate") | A handler of the event of modifying an open order.  
[OnOrderDelete](imtordersink_onorderdelete.md "OnOrderDelete") | A handler of the event of deleting an open order.  
[OnOrderClean](imtordersink_onorderclean.md "OnOrderClean") | A handler of the event of clearing open orders of a client.  
[OnOrderSync](imtordersink_onordersync.md "OnOrderSync") | A handler of the event of synchronization of a database of open orders.  
[OnHistoryAdd](imthistorysink_onhistoryadd.md "OnHistoryAdd") | A handler of the event of adding a closed order.  
[OnHisotryUpdate](imthistorysink_onhistoryupdate.md "OnHistoryUpdate") | A handler of the event of modifying a closed order.  
[OnHistoryDelete](imthistorysink_onhistorydelete.md "OnHistoryDelete") | A handler of the event of deleting a closed order.  
[OnHistoryClean](imthistorysink_onhistoryclean.md "OnHistoryClean") | A handler of the event of clearing closed orders of a client.  
[OnHistorySync](imthistorysink_onhistorysync.md "OnHistorySync") | A handler of the event of synchronization of a database of closed orders.  
[OnDealAdd](imtdealsink_ondealadd.md "OnDealAdd") | A handler of the event of adding a deal.  
[OnDealUpdate](imtdealsink_ondealupdate.md "OnDealUpdate") | A handler of the event of updating a deal.  
[OnDealDelete](imtdealsink_ondealdelete.md "OnDealDelete") | A handler of the event of deal removal.  
[OnDealClean](imtdealsink_ondealclean.md "OnDealClean") | A handler of the event of clearing of a client's deals.  
[OnDealSync](imtdealsink_ondealsync.md "OnDealSync") | A handler of the event of a deal database synchronization.  
[OnDealPerform](imtdealsink_ondealperform.md "OnDealPerform") | A handler of the event of deal execution (only in MetaTrader 5 Server API).  
[OnPositionAdd](imtpositionsink_onpositionadd.md "OnPositionAdd") | A handler of the event of adding a position.  
[OnPositionUpdate](imtpositionsink_onpositionupdate.md "OnPositionUpdate") | A handler of an event of trade position modification.  
[OnPositionDelete](imtpositionsink_onpositiondelete.md "OnPositionDelete") | A handler of an event of trade position deletion.  
[OnPositionClean](imtpositionsink_onpositionclean.md "OnPositionClean") | A handler of the event of clearing trade positions of a client.  
[OnPositionSync](imtpositionsink_onpositionsync.md "OnPositionSync") | A handler of the event of synchronization of a database of trade positions.  
[OnRequestAdd](imtrequestsink_onrequestadd.md "OnRequestAdd") | A handler of the event of adding a trade request.  
[OnRequestUpdate](imtrequestsink_onrequestupdate.md "OnRequestUpdate") | A handler of the event of trade request change.  
[OnRequestDelete](imtrequestsink_onrequestdelete.md "OnRequestDelete") | A handler of the event of a trade request deletion.  
[OnRequestSync](imtrequestsink_onrequestsync.md "OnRequestSync") | A handler of the event of synchronization of a queue of trade requests.  
[OnSummaryUpdate](imtsummarysink_onsummaryupdate.md "OnSummaryUpdate") | A handler of an event of update of summary positions.  
[OnExposureUpdate](imtexposuresink_onexposureupdate.md "OnExposureUpdate") | A handler of the exposure modification event.  
[OnDailyAdd](imtdailysink_ondailyadd.md "OnDailyAdd") | A handler of the event of adding a new daily report.  
[OnDailyUpdate](imtdailysink_ondailyupdate.md "OnDailyUpdate") | A handler of the event of updating a daily report.  
[OnDailyDelete](imtdailysink_ondailydelete.md "OnDailyDelete") | A handler of the event of removing a daily report.  
[OnDailyClear](imtdailysink_ondailyclean.md "OnDailyClear") | A handler of the event of clearing of a client's daily reports.  
[OnDailySync](imtdailysink_ondailysync.md "OnDailySync") | A handler of the event of synchronization of a database of daily reports.  
[OnUserAdd](imtusersink_onuseradd.md "OnUserAdd") | A handler of the event of adding a new client record.  
[OnUserUpdate](imtusersink_onuserupdate.md "OnUserUpdate") | A handler of an event of client record update.  
[OnUserDelete](imtusersink_onuserdelete.md "OnUserDelete") | A handler of an event of client record deletion.  
[OnUserClean](imtusersink_onuserclean.md "OnUserClean") | A handler of the event of deletion of obsolete demo account on a trade server.  
[OnUserLogin](imtusersink_onuserlogin.md "OnUserLogin") | A pointer of a client's connection to the server.  
[OnUserLogout](imtusersink_onuserlogout.md "OnUserLogout") | A handler of the event of a client's disconnection from the server.  
[OnUserSync](imtusersink_onusersync.md "OnUserSync") | A handler of the event of a client base synchronization.  
[OnTick](imtticksink_ontick.md "OnTick") | A handler of the event of new quote arrival.  
[OnTickStat](imtticksink_ontickstat.md "OnTickStat") | A handler of the event of update of the statistical information about a price.  
[OnBook](imtbooksink_onbook.md "OnBook") | A handler of the event of the received update of the Depth of Market.  
[OnMail](imtmailsink_onmail.md "OnMail") | A handler of the event of email receiving.  
[OnNews](imtnewssink_onnews.md "OnNews") | A handler of the event of news receiving.