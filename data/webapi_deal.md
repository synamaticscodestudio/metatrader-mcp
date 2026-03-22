# Deals (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading")/ Deals | [](webapi_order_reopen.md "Reopen Order") [](webapi_deal_data_structure.md "Data Structure") |
| --- | --- | --- |
| --- | --- |

Deals
The Web API provides the following requests for receiving information about clients' deals:
| Request | Description |
| --- | --- |
| --- | --- |
| [/api/deal/get](webapi_deal_get.md "Get by Ticket") | Get a deal by a ticket. |
| [/api/deal/get_total](webapi_deal_get_total.md "Get Total") | Get the total number of deals. |
| [/api/deal/get_page](webapi_deal_get_page.md "Get Paged") | Get deals by the login of a client. |
| [/api/deal/get_batch](webapi_deal_get_batch.md "Get Multiple") | Get information about multiple deals by a list of logins, tickets or groups. |
| [/api/deal/update](webapi_deal_update.md "Update") | Change deal on the server. |
| [/api/deal/delete](webapi_deal_delete.md "Delete") | Deletes one or more deals by ticket numbers. |
| [/api/deal/backup/list](webapi_deal_backup_list.md "Get Backups List") | Get deal backup creation dates within the specified time range. |
| [/api/deal/backup/get](webapi_deal_backup_get.md "Get Deals from Backup") | Get information about one or more deals from a specific backup on the server. |
| [/api/deal/backup/restore](webapi_deal_backup_restore.md "Restore from Backup") | Recover a deal from backup. |

The format, in which the data about deals are passed, are described under the [Data Structure](webapi_deal_data_structure.md "Data Structure") section.