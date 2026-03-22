# Functions (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions")/ Positions | [](imtadminapi_dealperformbatcharray.md "DealPerformBatchArray") [](imtadminapi_positioncreate.md "PositionCreate") |
| --- | --- | --- |
| --- | --- |

Positions
Using the functions, you can request a database of trade positions of the server and create new orders. The following functions are available for this purpose:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [PositionCreate](imtadminapi_positioncreate.md "PositionCreate") | Create an object of a trade position. |
| [PositionCreateArray](imtadminapi_positioncreatearray.md "PositionCreateArray") | Create an object of the array of trade positions. |
| [PositionRequest](imtadminapi_positionrequest.md "PositionRequest") | Request from the server open positions by login. |
| [PositionRequestByGroup](imtadminapi_positionrequestbygroup.md "PositionRequestByGroup") | Request from the server open positions related to a client group. |
| [PositionRequestByGroupSymbol](imtadminapi_positionrequestbygroupsymbol.md "PositionRequestByGroupSymbol") | Request open positions from the server by group and symbol. |
| [PositionRequestByLogins](imtadminapi_positionrequestbylogins.md "PositionRequestByLogins") | Request from the server open positions by the list of logins. |
| [PositionRequestByLoginsSymbol](imtadminapi_positionrequestbyloginsymbol.md "PositionRequestByLoginsSymbol") | Request open positions from the server by list of logins and symbol. |
| [PositionRequestByTickets](imtadminapi_positionrequestbytickets.md "PositionRequestByTickets") | Request from the server open positions by the list of tickets. |
| [PositionUpdate](imtadminapi_positionupdate.md "PositionUpdate") | Update a position. |
| [PositionUpdateBatch](imtadminapi_positionupdatebatch.md "PositionUpdateBatch") | Update positions in a server database in bulk. |
| [PositionUpdateBatchArray](imtadminapi_positionupdatebatcharray.md "PositionUpdateBatchArray") | Update positions in a server database in bulk. |
| [PositionDelete](imtadminapi_positiondelete.md "PositionDelete") | Delete a position. |
| [PositionDeleteByTicket](imtadminapi_positiondeletebyticket.md "PositionDeleteByTicket") | Delete a position by ticket. |
| [PositionDeleteBatch](imtadminapi_positiondeletebatch.md "PositionDeleteBatch") | Delete positions from the server database in bulk. |
| [PositionBackupList](imtadminapi_positionbackuplist.md "PositionBackupList") | Request the dates of backup databases of positions for the specified time range. |
| [PositionBackupRequest](imtadminapi_positionbackuprequest.md "PositionBackupRequest") | Request an array of positions from a backup database. |
| [PositionBackupRestore](imtadminapi_positionbackuprestore.md "PositionBackupRestore") | Restore a position from a backup database. |
| [PositionCheck](imtadminapi_positioncheck.md "PositionCheck") | Check the correctness of a client's positions based on the history of deals. |
| [PositionFix](imtadminapi_positionfix.md "PositionFix") | Correct a client's positions based on the history of his deals. |
| [PositionSplit](imtadminapi_positionsplit.md "PositionSplit") | Split trading positions. |