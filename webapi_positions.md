# Positions (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading")/ Positions | [](webapi_deal_backup_restore.md "Restore from Backup") [](webapi_position_data_structure.md "Data Structure") |
| --- | --- | --- |
| --- | --- |

Positions
The Web API provides the following requests for receiving information about clients' positions:
| Request | Description |
| --- | --- |
| --- | --- |
| [/api/position/get](webapi_position_get.md "Get by Symbol") | Get a client's position by the symbol name. |
| [/api/position/get_total](webapi_position_get_total.md "Get Total") | Get the total number of a client's open positions. |
| [/api/position/get_page](webapi_position_get_page.md "Get Paged") | Get positions by the login of a client. |
| [/api/position/get_batch](webapi_position_get_batch.md "Get Multiple") | Get information about multiple positions by a list of logins, tickets or groups. |
| [/api/position/update](webapi_position_update.md "Update") | Change position on the server. |
| [/api/position/delete](webapi_position_delete.md "Delete") | Deletes one or more positions by ticket numbers. |
| [/api/position/backup/list](webapi_position_backup_list.md "Get Backups List") | Get position backup creation dates within the specified time range. |
| [/api/position/backup/get](webapi_position_backup_get.md "Get Positions from Backup") | Get position backup creation dates within the specified time range. |
| [/api/position/backup/restore](webapi_position_backup_restore.md "Restore from Backup") | Recover a position from a backup. |
| [/api/position/check](webapi_position_check.md "Check Positions") | Checks the correctness of an account's positions based on the history of deals. |
| [/api/position/fix](webapi_position_fix.md "Fix Position") | Corrects an account's positions based on the history of deals. |

The format, in which the data about positions are passed, are described in the ["Data Structure"](webapi_position_data_structure.md "Data Structure") section.