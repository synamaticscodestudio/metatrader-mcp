# Positions (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade")/ Positions | [](imtserverapi_dealperformbatcharray.md "DealPerformBatchArray") [](imtserverapi_positioncreate.md "PositionCreate") |
| --- | --- | --- |
| --- | --- |

Positions
The MetaTrader 5 Server API allows managing a database of positions on a trade server. Using the server API, you can modify and delete positions, as well as handle events of changes in the database of deals.
An important feature of working with positions is that they are bound to a certain trade server. Accordingly, the plugin can manage only those positions that belong to the server where it is running.
MetaTrader 5 Server API does not provide features for creating positions. Creating new positions can lead to irreversible damage of the position database of a server.  
---  
Functions described in this section allow to manage the database of positions, as well subscribe and unsubscribe from events associated with changes in the database of positions.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [PositionCreate](imtserverapi_positioncreate.md "PositionCreate") | Create an object of a trade position. |
| [PositionCreateArray](imtserverapi_positioncreatearray.md "PositionCreateArray") | Create an object of the array of trade positions. |
| [PositionSubscribe](imtserverapi_positionsubscribe.md "PositionSubscribe") | Subscribe to events and hooks associated with changes in the database of positions. |
| [PositionUnsubscribe](positionunsubscribe.md "PositionUnsubscribe") | Unsubscribe from the events and hooks associated with changes in the database of positions. |
| [PositionDelete](imtserverapi_positiondelete.md "PositionDelete") | Delete a trade position. |
| [PositionDeleteByTicket](imtserverapi_positiondeletebyticket.md "PositionDeleteByTicket") | Delete a trade position by ticket. |
| [PositionUpdate](imtserverapi_positionupdate.md "PositionUpdate") | Update a trade position. |
| [PositionGet](imtserverapi_positionget.md "PositionGet") | Get a trade position or an array of positions. |
| [PositionGetByTicket](imtserverapi_positiongetbyticket.md "PositionGetByTicket") | Get a trade position by the ticket. |
| [PositionGetByGroup](imtserverapi_positiongetbygroup.md "PositionGetByGroup") | Get trading positions for a client group. |
| [PositionGetByGroupSymbol](imtserverapi_positiongetbygroupsymbol.md "PositionGetByGroupSymbol") | Get open positions from the server by group and symbol. |
| [PositionGetByLogins](imtserverapi_positiongetbylogins.md "PositionGetByLogins") | Get trading positions by the list of logins. |
| [PositionGetByLoginsSymbol](imtserverapi_positiongetbyloginsymbol.md "PositionGetByLoginsSymbol") | Get open positions from the server by list of logins and symbol. |
| [PositionGetByTickets](imtserverapi_positiongetbytickets.md "PositionGetByTickets") | Get trading positions by the list of tickets. |
| [PositionSelectByGroup](imtserverapi_positionselectbygroup.md "PositionSelectByGroup") | Request trading positions from a database for a group of accounts using additional criteria. |
| [PositionSelectByLogins](imtserverapi_positionselectbylogins.md "PositionSelectByLogins") | Request trading positions from a database for a list of logins using additional criteria. |
| [PositionCheck](imtserverapi_positioncheck.md "PositionCheck") | Check the correctness of a client's positions based on the history of deals. |
| [PositionFix](imtserverapi_positionfix.md "PositionFix") | Correct a client's positions based on the history of his deals. |
| [PositionSplit](imtserverapi_positionsplit.md "PositionSplit") | Split trading positions. |